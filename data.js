// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [
  { word: "analysis", blankword: "Analysis", meaning: "名分析", sentenceJa: "分析によって、その物質は50パーセントが炭素であることが分かった。", sentenceEn: "Analysis showed that the material was 50 percent carbon." },

  { word: "analyze", blankword: "analyzes", meaning: "他分析する", sentenceJa: "この装置は宇宙からの信号を分析する。", sentenceEn: "This device analyzes signals from space." },

  { word: "infect", blankword: "infects", meaning: "他感染させる｜自感染する", sentenceJa: "インフルエンザは空気を通して人に感染する。", sentenceEn: "Influenza infects people through the air." },

  { word: "ensure", blankword: "ensure", meaning: "他保証する｜確実にする", sentenceJa: "この薬はあなたがぐっすり眠れることを保証します。", sentenceEn: "The medicine will ensure that you have a good sleep." },

  { word: "stress", blankword: "stressed", meaning: "他強調する｜名圧力・緊張", sentenceJa: "その医師は運動の必要性を強調した。", sentenceEn: "The doctor stressed the need for exercise." },

  { word: "combine", blankword: "combine", meaning: "自結合する｜他組み合わせる・結合させる", sentenceJa: "ナトリウムと塩素が結合して塩になる。", sentenceEn: "Sodium and chlorine combine to form salt." },

  { word: "avoid", blankword: "avoid", meaning: "他避ける｜回避する", sentenceJa: "ほとんどのドライバーは事故を避けるために急ブレーキを踏む。", sentenceEn: "Most drivers hit the brakes hard to avoid an accident." },

  { word: "escape", blankword: "escape", meaning: "自脱出する｜逃げる", sentenceJa: "そのパイロットは飛行機が海に墜落する前にどうにか脱出した。", sentenceEn: "The pilot managed to escape from the airplane before it crashed into the sea." },

  { word: "succeed", blankword: "succeed", meaning: "自成功する｜継承する", sentenceJa: "成功するかどうかは君の努力しだいだ。", sentenceEn: "Whether you will succeed or not depends on your effort." },

  { word: "reflect", blankword: "reflects", meaning: "他反射する｜映す", sentenceJa: "鏡は光を反射する。", sentenceEn: "A mirror reflects light." },

  { word: "retire", blankword: "retired", meaning: "自退職する｜引退する", sentenceJa: "彼は60歳で会社を退職した。", sentenceEn: "He retired from the company at the age of 60." },

  { word: "maintain", blankword: "maintain", meaning: "他維持する｜整備する", sentenceJa: "高速道路で一定のスピードを維持するのはそんなに簡単ではない。", sentenceEn: "It is not so easy to maintain a constant speed on the expressway." },

  { word: "transport", blankword: "transported", meaning: "他輸送する｜名輸送", sentenceJa: "完成した商品はトラックで輸送される。", sentenceEn: "The finished goods are transported by truck." },

  { word: "transfer", blankword: "transfers", meaning: "他伝える｜移す｜名移転・転送", sentenceJa: "このシャフトが動力を車輪に伝える。", sentenceEn: "This shaft transfers the power to the wheels." },

  { word: "emit", blankword: "emits", meaning: "他発する｜放出する", sentenceJa: "物が燃えると、それはたいてい光と熱を発する。", sentenceEn: "When a thing burns, it usually emits light and heat." },

  { word: "surround", blankword: "surround", meaning: "他取り囲む", sentenceJa: "日本を囲んでいる海の名前を言いなさい。", sentenceEn: "Name the seas which surround Japan." },

  { word: "doubt", blankword: "doubted", meaning: "他疑う｜疑問に思う｜名疑惑・疑念", sentenceJa: "彼が言ったことを疑う者はいなかった。", sentenceEn: "Nobody doubted what he said." },

  { word: "announce", blankword: "announced", meaning: "他発表する｜知らせる", sentenceJa: "社長は会社のマーケティング計画を発表した。", sentenceEn: "The president announced his company's marketing plan." },

  { word: "expose", blankword: "exposed", meaning: "他さらす｜露出する", sentenceJa: "その事故で作業員たちは放射線にさらされた。", sentenceEn: "The accident exposed the workers to radiation." },

  { word: "admit", blankword: "admitted", meaning: "他認める｜入れる", sentenceJa: "彼は自分の間違いを認めた。", sentenceEn: "He admitted his mistake." },

  { word: "attend", blankword: "attend", meaning: "他出席する｜世話をする", sentenceJa: "今日は3つの会議に出なくてはならない。", sentenceEn: "I have to attend three meetings today." },

  { word: "realize", blankword: "realized", meaning: "他気付く｜認識する｜実現する", sentenceJa: "彼は丸一日眠っていたことに気付いた。", sentenceEn: "He realized that he had been sleeping for a whole day." },

  { word: "enable", blankword: "enabled", meaning: "他可能にする", sentenceJa: "インターネットのおかげで私たちは自宅で買い物ができるようになった。", sentenceEn: "The Internet has enabled us to shop at home." },

  { word: "alter", blankword: "altered", meaning: "他変更する", sentenceJa: "この計画はもはや変更不可能だ。", sentenceEn: "This plan can no longer be altered." },

  { word: "alternative", blankword: "alternative", meaning: "形代替の｜名代替物", sentenceJa: "家庭用燃料電池は代替エネルギー技術の一つである。", sentenceEn: "A home fuel cell is an alternative energy technology." },

  { word: "exact", blankword: "exact", meaning: "形正確な", sentenceJa: "実験では正確な量の薬品を使わなければならない。", sentenceEn: "You must use the exact amount of chemicals in the experiment." },

  { word: "ultimate", blankword: "ultimate", meaning: "形最終的な｜究極の｜名極限", sentenceJa: "このプロジェクトの最終的な目標は何ですか。", sentenceEn: "What is the ultimate goal of this project?" },

  { word: "inverse", blankword: "inverse", meaning: "形逆の｜反比例の｜名逆・逆数", sentenceJa: "逆行列の逆は元の行列に等しい。", sentenceEn: "The inverse of an inverse matrix is equal to the original matrix." },

  { word: "military", blankword: "military", meaning: "形軍の｜名軍隊・軍人", sentenceJa: "その軍事作戦は早朝に実行された。", sentenceEn: "The military operations were carried out in the early morning." },

  { word: "specific", blankword: "specific", meaning: "形明確な｜特定の", sentenceJa: "上司はいつも私たちに明確な指示を出してくれる。", sentenceEn: "Our boss always gives us specific instructions." },

  { word: "final", blankword: "final", meaning: "形最終の｜最後の｜名決勝", sentenceJa: "この反応の最終生成物は塩です。", sentenceEn: "The final product of this reaction is salt." },

  { word: "useless", blankword: "useless", meaning: "形役に立たない｜無用の", sentenceJa: "兄は役に立たないものを集めるのが好きだ。", sentenceEn: "My brother likes to collect useless items." },

  { word: "relative", blankword: "relative", meaning: "形相対的な｜関係のある｜名親類", sentenceJa: "地球の直径を1メートルとすると、月の相対的な大きさは約27センチメートルになる。", sentenceEn: "If the diameter of the earth were 1 meter, the relative size of the moon would be about 27 centimeters." },

  { word: "absolute", blankword: "absolute", meaning: "形絶対的な｜絶対の", sentenceJa: "その国では軍の指導者が絶対的権力を握っている。", sentenceEn: "The military leader has absolute power in that country." },

  { word: "significant", blankword: "significant", meaning: "形重要な｜意義深い", sentenceJa: "絶対零度は科学において重要な意味を持つ温度だ。", sentenceEn: "Absolute zero is a significant temperature in science." },

  { word: "dynamic", blankword: "dynamic", meaning: "形動的な", sentenceJa: "この制御プログラムによって、動的な省エネ機能が可能になった。", sentenceEn: "A dynamic energy-saving function has been enabled with this control program." },

  { word: "static", blankword: "static", meaning: "形静的な", sentenceJa: "このプログラムは静的なデータしか扱えません。", sentenceEn: "This program can handle only static data." },

  { word: "timid", blankword: "timid", meaning: "形臆病な", sentenceJa: "臆病な動物は大きな目や耳を持つ傾向がある。", sentenceEn: "Timid animals tend to have large eyes or ears." },

  { word: "medium", blankword: "medium", meaning: "名媒体｜手段｜形中程度の", sentenceJa: "音は空気を媒体として伝わる。", sentenceEn: "Sounds travel through the medium of air." },

  { word: "treaty", blankword: "treaty", meaning: "名条約｜協定", sentenceJa: "その二国間で平和条約が締結された。", sentenceEn: "The peace treaty was signed between the two countries." },

  { word: "convention", blankword: "convention", meaning: "名会議｜大会", sentenceJa: "これは私が国際会議に出席する初めての機会です。", sentenceEn: "This is the first chance for me to attend an international convention." },

  { word: "conclusion", blankword: "conclusions", meaning: "名結論｜結末", sentenceJa: "これらの実験から得られる主な結論は2つある。", sentenceEn: "There are two main conclusions from these experiments." },

  { word: "influence", blankword: "influence", meaning: "名影響｜他影響を与える", sentenceJa: "その映画の影響で、今年は多くの人が日本にやって来た。", sentenceEn: "Due to the influence of that movie, many people came to Japan this year." },

  { word: "principle", blankword: "principle", meaning: "名原理｜原則", sentenceJa: "作用反作用の原理はニュートンの第三法則で説明される。", sentenceEn: "The principle of action and reaction is explained by Newton's third law." },

  { word: "advantage", blankword: "advantages", meaning: "名長所｜有利な点", sentenceJa: "公共交通機関の長所と短所は何ですか。", sentenceEn: "What are the advantages and disadvantages of public transportation?" },

  { word: "reality", blankword: "reality", meaning: "名現実｜事実", sentenceJa: "現実から逃避しようとしてはいけない。", sentenceEn: "You should not try to escape from reality." },

  { word: "marriage", blankword: "marriage", meaning: "名結婚｜結婚生活", sentenceJa: "私の両親の結婚生活は生涯続いた。", sentenceEn: "My parents' marriage lasted for their whole lives." },

  { word: "infant", blankword: "infant", meaning: "名乳児｜幼児", sentenceJa: "この国の乳幼児死亡率はかなり高い。", sentenceEn: "The infant death rate is quite high in this country." },

  { word: "incline", blankword: "inclined", meaning: "自傾く｜他傾ける", sentenceJa: "その飛行機は地面に対して約45度に傾いた。", sentenceEn: "The plane inclined about 45 degrees to the ground." },

  { word: "decline", blankword: "declined", meaning: "自減少する｜下降する｜他断る", sentenceJa: "この市の人口は近年減少してきた。", sentenceEn: "The population of this city has declined in recent years." }
];

console.log("data loaded", quizDataRaw);