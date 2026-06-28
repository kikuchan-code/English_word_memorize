// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [
  {
    word: "assume",
    blankword: "Assuming",
    meaning: "仮定する、想定する",
    sentenceJa: "xがゼロだと仮定すると、yはいくつになりますか。",
    sentenceEn: "Assuming that x is zero, what will y be?"
  },
  {
    word: "intend",
    blankword: "intended",
    meaning: "意図する",
    sentenceJa: "それは私たちが意図していたものではない。",
    sentenceEn: "That is not what we intended."
  },
  {
    word: "confirm",
    blankword: "Confirm",
    meaning: "確認する",
    sentenceJa: "あなたのID番号を確認してください。",
    sentenceEn: "Please confirm your ID number."
  },
  {
    word: "define",
    blankword: "define",
    meaning: "定義する",
    sentenceJa: "議論の前に用語を定義しなければいけません。",
    sentenceEn: "You must define the terms before discussion."
  },
  {
    word: "transmit",
    blankword: "is transmitted",
    meaning: "送信する、伝導する",
    sentenceJa: "情報は直接コンピューターに送信される。",
    sentenceEn: "The information is transmitted directly to the computers."
  },
  {
    word: "attach",
    blankword: "Attach",
    meaning: "付ける、添付する",
    sentenceJa: "応募書類には最近撮った写真を貼り付けてください。",
    sentenceEn: "Attach a recent photograph to your application form."
  },
  {
    word: "attract",
    blankword: "attract",
    meaning: "引きつける",
    sentenceJa: "異なる電荷を持つ2つの物体は互いに引きつけ合う。",
    sentenceEn: "Objects with different electrical charges attract each other."
  },
  {
    word: "repel",
    blankword: "repel",
    meaning: "反発する",
    sentenceJa: "磁石の同極は反発し合う。",
    sentenceEn: "The same poles of magnets repel each other."
  },
  {
    word: "scope",
    blankword: "scope",
    meaning: "範囲、視野",
    sentenceJa: "それは私たちの想定の範囲を超えている。",
    sentenceEn: "It is beyond the scope of our assumptions."
  },
  {
    word: "illusion",
    blankword: "illusion",
    meaning: "錯覚、幻想",
    sentenceJa: "その線が曲がって見えるのは錯覚です。",
    sentenceEn: "It is an optical illusion that the line looks curved."
  },
  {
    word: "wavelength",
    blankword: "wavelength",
    meaning: "波長",
    sentenceJa: "波長は周波数に反比例する。",
    sentenceEn: "The wavelength is inversely proportional to the frequency."
  },
  {
    word: "amplitude",
    blankword: "amplitude",
    meaning: "振幅",
    sentenceJa: "音波の振幅が大きいほど、その音量は大きくなる。",
    sentenceEn: "The bigger the amplitude of a sound wave is, the louder its volume becomes."
  },
  {
    word: "infrared",
    blankword: "infrared",
    meaning: "赤外線（の）",
    sentenceJa: "赤外線が当たった物質は熱くなる。",
    sentenceEn: "Substances which receive infrared rays become hot."
  },
  {
    word: "ultraviolet",
    blankword: "ultraviolet",
    meaning: "紫外線（の）",
    sentenceJa: "紫外線の波長は可視光線の波長よりも短い。",
    sentenceEn: "The wavelength of ultraviolet rays is shorter than that of visible light."
  },
  {
    word: "ultrasound",
    blankword: "Ultrasound",
    meaning: "超音波",
    sentenceJa: "超音波はしばしば身体検査に利用される。",
    sentenceEn: "Ultrasound is often utilized for physical examinations."
  },
  {
    word: "ripple",
    blankword: "ripple",
    meaning: "さざ波",
    sentenceJa: "スピーカーからの大きな音で水面にさざ波が立った。",
    sentenceEn: "The loud sound from the speaker caused a ripple on the water surface."
  },
  {
    word: "attention",
    blankword: "attention",
    meaning: "注意、注目",
    sentenceJa: "実験中は常にその装置に注意を払っていなければいけません。",
    sentenceEn: "You must always pay attention to the device during the experiment."
  },
  {
    word: "statement",
    blankword: "statement",
    meaning: "声明（書）、陳述",
    sentenceJa: "総理大臣が新聞に声明を出した。",
    sentenceEn: "The Prime Minister made a statement to the newspapers."
  },
  {
    word: "gravity",
    blankword: "gravity",
    meaning: "重力、引力、重大さ",
    sentenceJa: "月の重力は地球上の約6分の1だ。",
    sentenceEn: "The gravity on the moon is about one sixth of that on the earth."
  },
  {
    word: "velocity",
    blankword: "velocity",
    meaning: "速度",
    sentenceJa: "その列車の平均速度は時速約80キロです。",
    sentenceEn: "The mean velocity of the train is about 80 kilometers per hour."
  },
  {
    word: "phenomenon",
    blankword: "phenomenon",
    meaning: "現象",
    sentenceJa: "錯覚とは、目に見える像が実際の像と異なる現象です。",
    sentenceEn: "Illusion is a phenomenon where the visual image is different from the actual image."
  },
  {
    word: "glue",
    blankword: "glue",
    meaning: "接着剤、のり；（のりで）つける",
    sentenceJa: "それぞれの部品に接着剤を塗り、それらを貼り合わせなさい。",
    sentenceEn: "Apply glue to each part and attach them together."
  },
  {
    word: "carbohydrate",
    blankword: "carbohydrates",
    meaning: "炭水化物",
    sentenceJa: "彼女はパンやイモなどの炭水化物を食べないようにしている。",
    sentenceEn: "She avoids eating carbohydrates such as bread and potatoes."
  },
  {
    word: "glucose",
    blankword: "Glucose",
    meaning: "ブドウ糖",
    sentenceJa: "ブドウ糖と酸素は筋肉が働くのに必要である。",
    sentenceEn: "Glucose and oxygen are necessary for muscles to move."
  },
  {
    word: "starch",
    blankword: "Starch",
    meaning: "でんぷん",
    sentenceJa: "でんぷんは多数のグルコース単位からなる炭水化物である。",
    sentenceEn: "Starch is a carbohydrate consisting of a large number of glucose units."
  },
  {
    word: "chlorophyll",
    blankword: "Chlorophyll",
    meaning: "葉緑素",
    sentenceJa: "葉緑素は植物が二酸化炭素を酸素に変えるのを助ける。",
    sentenceEn: "Chlorophyll helps plants turn carbon dioxide into oxygen."
  },
  {
    word: "photosynthesis",
    blankword: "photosynthesis",
    meaning: "光合成",
    sentenceJa: "植物は光合成のために二酸化炭素を必要とする。",
    sentenceEn: "Green plants need carbon dioxide for photosynthesis."
  },
  {
    word: "pigment",
    blankword: "pigment",
    meaning: "色素、絵の具",
    sentenceJa: "葉緑素は光合成において重要な緑色の色素である。",
    sentenceEn: "Chlorophyll is a green pigment which is very important in photosynthesis."
  },
  {
    word: "mission",
    blankword: "mission",
    meaning: "計画、任務",
    sentenceJa: "アポロ11号計画の目的は人間を月面に降り立たせることだった。",
    sentenceEn: "The purpose of the Apollo 11 mission was to land men on the lunar surface."
  },
  {
    word: "soldier",
    blankword: "soldiers",
    meaning: "兵士",
    sentenceJa: "その兵士たちはテロリストに殺害された。",
    sentenceEn: "The soldiers have been killed by the terrorists."
  },
  {
    word: "sword",
    blankword: "sword",
    meaning: "刀、剣",
    sentenceJa: "日本刀は鋼から作られる。",
    sentenceEn: "The Japanese sword is made out of steel."
  },
  {
    word: "armor",
    blankword: "armor",
    meaning: "よろい",
    sentenceJa: "日本のよろいは金属や木や革で作られていた。",
    sentenceEn: "Japanese armor was made of metal, wood or leather."
  },
  {
    word: "passion",
    blankword: "passion",
    meaning: "情熱、激情",
    sentenceJa: "彼女の宇宙科学に対する情熱が彼女の宇宙での任務遂行につながった。",
    sentenceEn: "Her passion for space science led her to the space mission."
  },
  {
    word: "candidate",
    blankword: "candidate",
    meaning: "候補（者）",
    sentenceJa: "これは次世代PCシステムの候補である。",
    sentenceEn: "This is a candidate for a next-generation PC system."
  },
  {
    word: "phase",
    blankword: "phase",
    meaning: "段階、位相",
    sentenceJa: "宇宙飛行の最も重要な段階は打ち上げから軌道に乗るまでである。",
    sentenceEn: "The most essential phase of a space mission is from lift-off to orbit."
  },
  {
    word: "situation",
    blankword: "situation",
    meaning: "状況、立場",
    sentenceJa: "その地域の状況は1年前よりも良くなった。",
    sentenceEn: "The situation of that area has gotten better than it was a year ago."
  },
  {
    word: "fragment",
    blankword: "fragments",
    meaning: "かけら、破片",
    sentenceJa: "その壁は岩のかけらでできている。",
    sentenceEn: "The wall is made of fragments of rock."
  },
  {
    word: "fault",
    blankword: "fault",
    meaning: "過失、欠点",
    sentenceJa: "その事故は列車運転士の過失によるものだった。",
    sentenceEn: "The accident was due to the train driver's fault."
  },
  {
    word: "danger",
    blankword: "danger",
    meaning: "危険",
    sentenceJa: "化学の実験には火災の危険がある。",
    sentenceEn: "There is a danger of fire in some chemical experiments."
  },
  {
    word: "toxin",
    blankword: "toxin",
    meaning: "毒素",
    sentenceJa: "これらのバクテリアは強力な毒素を出す。",
    sentenceEn: "These bacteria produce a strong toxin."
  },
  {
    word: "favor",
    blankword: "favor",
    meaning: "好意、引き立て",
    sentenceJa: "その町の住民は好意を持って私たちを迎え入れてくれた。",
    sentenceEn: "The people in the town welcomed us with favor."
  },
  {
    word: "summit",
    blankword: "summit",
    meaning: "頂上、頂点",
    sentenceJa: "もうすぐ山頂に着きます。",
    sentenceEn: "We will reach the summit of the mountain soon."
  },
  {
    word: "difficulty",
    blankword: "difficulty",
    meaning: "困難、難しさ",
    sentenceJa: "私は数学の宿題で困難を感じたことはありません。",
    sentenceEn: "I have never found difficulty in my math homework."
  },
  {
    word: "yield",
    blankword: "yield",
    meaning: "収穫（高）、産出（量）；産出する",
    sentenceJa: "新種の米で収穫高がこれまでよりも上がった。",
    sentenceEn: "The new rice seeds produced a higher yield."
  },
  {
    word: "regulation",
    blankword: "regulations",
    meaning: "規定、調整",
    sentenceJa: "コンテストの規定は遵守しなければならない。",
    sentenceEn: "You must follow the regulations of the contest."
  },
  {
    word: "tradition",
    blankword: "tradition",
    meaning: "伝統",
    sentenceJa: "漢方医学には長い歴史と伝統がある。",
    sentenceEn: "Chinese medicine has a long history and tradition."
  },
  {
    word: "obvious",
    blankword: "obvious",
    meaning: "明らかな",
    sentenceJa: "その実験が失敗だったのは明らかだ。",
    sentenceEn: "It is obvious that the experiment failed."
  },
  {
    word: "pale",
    blankword: "pale",
    meaning: "青白い、（色が）薄い",
    sentenceJa: "紫外線をかけるとその物質は青白い光を発した。",
    sentenceEn: "The material emitted pale light under ultraviolet rays."
  },
  {
    word: "severe",
    blankword: "severe",
    meaning: "激しい、厳しい",
    sentenceJa: "この病気は背中に激しい痛みを生じさせる。",
    sentenceEn: "This disease causes a severe pain in your back."
  }
];

console.log("data loaded", quizDataRaw);