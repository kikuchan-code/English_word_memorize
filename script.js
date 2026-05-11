/// ==== json読込み ====
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => console.log("SW registered"))
        .catch(err => console.log("SW error", err));
}

// ===== 設定 =====
let mode = "jpToEn"; // jpToEn: 英語入力 / enToJp: 和訳選択
const userSpecifiedAttempts = 3;
const showAnswer = true;
const saveIncorrect = true;

// ===== 状態管理 =====
let quizData = [];
let quizList = [];
let currentIndex = 0;
let reviewTotal = 0;
let incorrectWords = [];
let isReviewMode = false;

// ===== JSファイル読み込み =====
function loadQuizData() {
    const savedQuiz = JSON.parse(localStorage.getItem("quizData") || "null");
    const savedIncorrect = JSON.parse(localStorage.getItem("progress") || "[]");
    const savedIndex = localStorage.getItem("currentIndex");
    const savedMode = localStorage.getItem("isReviewMode");

    // ===== quizData復元 =====
    if (savedQuiz && savedQuiz.length > 0) {
        quizData = savedQuiz;
    } else {
        quizData = quizDataRaw.map(row => ({
            word: row.word,
            blankword: row.blankword ?? row.word, // ★ここで統一
            meaning: row.meaning,
            sentenceEn: row.sentenceEn,
            sentenceJa: row.sentenceJa,
            correctCount: { jpToEn: 0, enToJp: 0 }
        }));
    }

    // ★correctCount補正（保険）
    quizData.forEach(q => {
        if (!q.correctCount || typeof q.correctCount !== "object") {
            q.correctCount = { jpToEn: 0, enToJp: 0 };
        } else {
            q.correctCount.jpToEn ??= 0;
            q.correctCount.enToJp ??= 0;
        }
    });

    // ===== incorrectWords復元 =====
    incorrectWords = savedIncorrect
        .map(savedQ => quizData.find(q => q.word === savedQ.word))
        .filter(Boolean);

    // ===== reviewTotal再計算（重要）=====
    reviewTotal = incorrectWords.length * userSpecifiedAttempts;

    // ===== 状態復元 =====
    currentIndex = savedIndex !== null ? Number(savedIndex) : 0;
    isReviewMode = savedMode === "true";

    // ===== 問題リスト =====
    quizList = shuffleArray([...quizData]);

    // ★indexが範囲外対策
    if (isReviewMode) {
        if (incorrectWords.length === 0) {
            isReviewMode = false;
            currentIndex = 0;
        } else {
            currentIndex = currentIndex % incorrectWords.length;
        }
    } else {
        currentIndex = currentIndex % quizList.length;
    }

    displayQuestion();
}

console.log(quizData);

// ===== リセット =====

function resetProgress() {
    openModal(
        "本当に進捗状況をリセットしますか？",
        () => {
            localStorage.clear(); // ←全部消す（確実）

            quizData = [];
            quizList = [];
            incorrectWords = [];
            currentIndex = 0;
            reviewTotal = 0;
            isReviewMode = false;

            document.getElementById("quiz-progress").value = 0;

            loadQuizData();
        },
        "リセット",
        null,
        "キャンセル"
    );
}

// ===== シャッフル =====
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// ===== データ保存 =====
function saveAll() {
    localStorage.setItem("quizData", JSON.stringify(quizData));
    localStorage.setItem("progress", JSON.stringify(incorrectWords));
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("isReviewMode", isReviewMode);
}

// ===== モード切替 =====
function switchMode(n) {
    mode = n;
    currentIndex = 0;
    isReviewMode = false;
    quizList = shuffleArray([...quizData]);
    displayQuestion();
}

// ===== モーダル =====
let isModalOpen = false;
let modalQueue = [];

function openModal(msg, onOk = null, okText = "OK", onCancel = null, cancelText = null) {
    modalQueue.push({ msg, onOk, okText, onCancel, cancelText });
    processModalQueue();
}

function processModalQueue() {
    if (isModalOpen || modalQueue.length === 0) return;

    const { msg, onOk, okText, onCancel, cancelText } = modalQueue.shift();
    const modal = document.getElementById("modal");

    document.getElementById("modal-message").innerHTML = msg;

    const content = modal.querySelector(".modal-content");

    // ボタンエリア作り直す
    content.querySelectorAll("button").forEach(b => b.remove());

    // OKボタン
    const okBtn = document.createElement("button");
    okBtn.textContent = okText;
    okBtn.onclick = () => {
        closeModal();
        if (onOk) onOk();
    };
    content.appendChild(okBtn);

    // キャンセルボタン（あれば）
    if (cancelText) {
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = cancelText;
        cancelBtn.style.marginLeft = "10px";

        cancelBtn.onclick = () => {
            closeModal();
            if (onCancel) onCancel();
        };

        content.appendChild(cancelBtn);
    }

    modal.style.display = "flex";
    isModalOpen = true;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    isModalOpen = false;
    setTimeout(processModalQueue, 200);
}

// ==== 設定用モーダル ====

function openSettingsModal() {
    document.getElementById("settings-modal").style.display = "flex";
}

function closeSettingsModal() {
    document.getElementById("settings-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("settings-modal").addEventListener("click", (e) => {
        if (e.target.id === "settings-modal") {
            closeSettingsModal();
        }
    });
});

// ===== 空欄生成（複数対応）=====
function createSentenceBlank(sentenceEn, word) {
    if (!sentenceEn || !word) return "データエラー";

    const words = word.split(" ");
    let result = sentenceEn;

    words.forEach((w, i) => {
        const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, "i");

        result = result.replace(regex, `
            <input type="text" class="input-box multi-answer" data-index="${i}" autocomplete="off" spellcheck="false">
        `);
    });

    return result;
}

// ===== 文字整形 =====
function normalizeAnswer(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")       // 空白統一
        .replace(/-/g, " ")         // ハイフン→空白
        .replace(/^(a|an|the)\s+/, ""); // 冠詞削除
}

// ===== 単語変化許容 =====
function isWordMatch(input, answer) {
    input = normalizeAnswer(input);
    answer = normalizeAnswer(answer);

    if (input === answer) return true;

    // 複数形
    if (input === answer + "s") return true;
    if (input === answer + "es") return true;

    // 動詞変化
    if (input === answer + "ed") return true;
    if (input === answer + "ing") return true;

    return false;
}

// ===== 複数正解対応 =====
function isCorrectAnswer(input, correctWord) {

    // / 区切りで複数正解にする
    const answers = correctWord.split("/").map(a => a.trim());

    return answers.some(ans => isWordMatch(input, ans));
}

// ===== 問題表示 =====
function displayQuestion() {
    const q = isReviewMode ? incorrectWords[currentIndex] : quizList[currentIndex];
    const container = document.getElementById("quiz-container");

    if (mode === "jpToEn") {
        // 英語入力（穴埋め）
        container.innerHTML = `
  <div class="question">
    <p>${q.sentenceJa}</p>
    <p>${createSentenceBlank(q.sentenceEn, q.blankword ?? q.word)}</p>
  </div>
  <button class="next-button" onclick="nextQuestion()">次へ</button>
  <button class="skip-button" onclick="skipQuestion()">スキップ</button>
`;

        setTimeout(() => {
            document.getElementById("answer")?.focus();
        }, 100);

    } else {
        // 和訳選択
        const choices = shuffleArray([
            q.meaning,
            ...shuffleArray(
                quizData.filter(x => x.meaning !== q.meaning)
            ).slice(0, 3).map(x => x.meaning)
        ]);

        container.innerHTML = `
  <div class="question">
    <p>${q.word}</p>
    <div class="choices">
      ${choices.map(c => `
        <label class="choice-item">
          <input type="radio" name="choice" value="${c}">
          <span>${c}</span>
        </label>
      `).join("")}
    </div>
  </div>

  <button class="next-button" onclick="nextQuestion()">次へ</button>
  <button class="skip-button" onclick="skipQuestion()">スキップ</button>
`;
    }

    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== 判定 =====
function nextQuestion() {
    if (isModalOpen) return;

    const q = isReviewMode ? incorrectWords[currentIndex] : quizList[currentIndex];

    if (mode === "jpToEn") {
        const inputs = document.querySelectorAll(".multi-answer");
        if (inputs.length === 0) return openModal("入力欄が見つかりません");

        // 1. まず空欄がないかチェック（色をつける前に行う）
        let hasEmpty = false;
        inputs.forEach(input => {
            if (!input.value.trim()) hasEmpty = true;
        });

        if (hasEmpty) {
            return openModal("入力してください"); // 空欄があればここで中断（色はつかない）
        }

        // 2. すべて入力されている場合のみ、正誤判定と色の付与を行う
        const correctWords = (q.blankword ?? q.word)
            .toLowerCase()
            .trim()
            .split(/\s+/);

        let correct = true;
        inputs.forEach((input, i) => {
            const val = input.value.trim().toLowerCase();

            if (val === correctWords[i]) {
                input.classList.add("correct");
                input.classList.remove("incorrect");
            } else {
                input.classList.add("incorrect");
                input.classList.remove("correct");
                correct = false;
            }
        });

        // 3. 不正解データの保存
        if (!correct && saveIncorrect && !incorrectWords.some(x => x.word === q.word) && !isReviewMode) {
            incorrectWords.push(q);
            updateIncorrectList();
            saveAll();
        }

        // 4. 結果表示（OKを押した後に次へ行く）
        openModal(
            correct ? "正解！" : `不正解！正解: ${q.blankword ?? q.word}`,
            () => {
                proceedToNextQuestion(correct);
                displayQuestion(); // 前の回答でアドバイスした通り、ここで次を表示
            }
        );

    } else {
        // ===== 日本語選択モード（以前の回答通りに修正） =====
        const selected = document.querySelector('input[name="choice"]:checked');
        if (!selected) return openModal("選択してください");

        const correct = selected.value === q.meaning;

        if (!correct && saveIncorrect && !incorrectWords.some(x => x.word === q.word) && !isReviewMode) {
            incorrectWords.push(q);
            updateIncorrectList();
            saveAll();
        }

        openModal(
            correct ? "正解！" : `不正解！正解: ${q.meaning}`,
            () => {
                proceedToNextQuestion(correct);
                displayQuestion(); 
            }
        );
    }
}

// ===== スキップ =====
function skipQuestion() {
    const q = isReviewMode ? incorrectWords[currentIndex] : quizList[currentIndex];

    if (saveIncorrect && !incorrectWords.some(x => x.word === q.word) && !isReviewMode) {
        incorrectWords.push(q);
        updateIncorrectList();
        saveAll();
    }

    openModal(
        `スキップしました。正解: ${mode === "jpToEn" ? q.blankword ?? q.word : q.meaning}`,
        () => {
            proceedToNextQuestion(false)
            displayQuestion(); // ★ここで次の問題を表示
        }

    );
    saveAll();

}

// ===== 次へ =====
function proceedToNextQuestion(correct) {
    const q = isReviewMode ? incorrectWords[currentIndex] : quizList[currentIndex];
    const original = quizData.find(x => x.word === q.word);

    // ===== 正解処理 =====
    if (correct && original) {
        original.correctCount[mode]++;
    }

    // ===== 復習モード =====
    if (isReviewMode) {

        // ★単語クリア判定
        if (original.correctCount[mode] >= userSpecifiedAttempts) {
            incorrectWords = incorrectWords.filter(x => x.word !== original.word);
        }

        // ★進捗更新（ここ重要：削除後にやる）
        updateProgress();
        updateIncorrectList();

        // ★終了判定
        if (incorrectWords.length === 0) {
            saveAll();

            // ★確実に100%にする
            const bar = document.getElementById("quiz-progress");
            bar.value = 100;

            openModal("復習終了！", () => {
                isReviewMode = false;
                quizList = shuffleArray([...quizData]);
                currentIndex = 0;
                displayQuestion();
            });
            return;
        }

        // ★次の問題（ランダム）
        currentIndex = Math.floor(Math.random() * incorrectWords.length);
    }

    // ===== 通常モード =====
    else {
        currentIndex++;

        if (currentIndex >= quizList.length) {
            saveAll();

            const bar = document.getElementById("quiz-progress");
            bar.value = 100;

            if (incorrectWords.length === 0) {
                openModal("全問正解！", () => {
                    currentIndex = 0;
                    quizList = shuffleArray([...quizData]);
                    displayQuestion();
                });
            } else {
                openModal("復習モード開始", startReviewMode, "開始");
            }
            return;
        }

        updateProgress();
    }

    saveAll();
}

// ===== 進捗 =====
function updateProgress() {
    const bar = document.getElementById("quiz-progress");

    if (isReviewMode) {
        const remaining = incorrectWords.reduce(
            (sum, q) => sum + (userSpecifiedAttempts - q.correctCount[mode]),
            0
        );

        bar.value = reviewTotal
            ? ((reviewTotal - remaining) / reviewTotal) * 100
            : 0;
    } else {
        bar.value = (currentIndex / quizList.length) * 100;
    }
}

// ===== 復習モード =====
function startReviewMode() {
    isReviewMode = true;
    currentIndex = 0;

    // ★そのモードだけリセット
    incorrectWords.forEach(q => {
        q.correctCount[mode] = 0;
    });

    reviewTotal = incorrectWords.length * userSpecifiedAttempts;

    shuffleArray(incorrectWords);
    updateProgress();
    displayQuestion();
}

// ===== 不正解リスト =====
function updateIncorrectList() {
    const tbody = document.querySelector("#incorrect-words-table tbody");

    if (tbody) {
        tbody.innerHTML = "";

        incorrectWords.forEach(q => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${q.word}</td>
        <td>${q.correctCount[mode]}</td>
        <td>${userSpecifiedAttempts}</td>
      `;
            tbody.appendChild(tr);
        });
    }
}

// ===== 初期化 =====
document.addEventListener("DOMContentLoaded", () => {
    loadQuizData();
});

window.addEventListener("beforeunload", saveAll);

console.log(localStorage.getItem("progress"));
