// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [

{
  word: "enlarge",
  blankword: "enlarge",
  meaning: "拡大する",
  sentenceJa: "このグラフィックイメージを拡大して印刷してください。",
  sentenceEn: "Please enlarge this graphical image and print it out."
},

{
  word: "import",
  blankword: "imports",
  meaning: "輸入する、輸入",
  sentenceJa: "アメリカは日本から車を輸入する。",
  sentenceEn: "The United States imports cars from Japan."
},

{
  word: "export",
  blankword: "exporting",
  meaning: "輸出する、輸出",
  sentenceJa: "港に入っているあれらの船はすべて自動車を輸出するための船です。",
  sentenceEn: "These ships in the port are all for exporting cars."
},

{
  word: "revive",
  blankword: "revived",
  meaning: "生き返らせる、生き返る",
  sentenceJa: "増加する自動車輸出が日本経済を生き返らせた。",
  sentenceEn: "Increasing exports of cars revived the Japanese economy."
},

{
  word: "domestic",
  blankword: "domestic",
  meaning: "国内の、家庭の",
  sentenceJa: "この空港は国内線専用です。",
  sentenceEn: "This airport is only for domestic airlines."
},

{
  word: "tight",
  blankword: "tight",
  meaning: "きつい、しっかりした",
  sentenceJa: "その結び目はきつすぎて誰もほどくことができなかった。",
  sentenceEn: "The knot was so tight that no one could untie it."
},

{
  word: "loose",
  blankword: "loose",
  meaning: "ゆるんだ、だらしない",
  sentenceJa: "ゆるんだネジを見つけて締め直しなさい。",
  sentenceEn: "Find the loose screws and tighten them again."
},

{
  word: "steep",
  blankword: "steep",
  meaning: "急な、険しい",
  sentenceJa: "その坂は急すぎて、この古い車では上れない。",
  sentenceEn: "The slope is too steep for this old car to go up."
},

{
  word: "cruel",
  blankword: "cruel",
  meaning: "残酷な、悲惨な",
  sentenceJa: "その実験は動物にとって残酷なので禁止された。",
  sentenceEn: "The experiment was banned because it was cruel to animals."
},

{
  word: "ugly",
  blankword: "ugly",
  meaning: "醜い、不快な",
  sentenceJa: "その怪物の醜い顔は子供たちを怖がらせた。",
  sentenceEn: "The ugly face of the monster scared the children."
},

{
  word: "firm",
  blankword: "firm",
  meaning: "固い、断固とした、会社",
  sentenceJa: "私たちは固い地盤の上に家を建てるべきです。",
  sentenceEn: "We should build our houses on firm ground."
},

{
  word: "rare",
  blankword: "rare",
  meaning: "珍しい、希少な",
  sentenceJa: "その島では珍しい植物が見られます。",
  sentenceEn: "We can see many rare plants on the island."
},

{
  word: "ancient",
  blankword: "ancient",
  meaning: "古代の、昔の",
  sentenceJa: "古代生物の代表的な例はアンモナイトです。",
  sentenceEn: "A major example of an ancient animal is ammonite."
},

{
  word: "grave",
  blankword: "graves",
  meaning: "墓、重大な、深刻な",
  sentenceJa: "ピラミッドは古代の王の墓だと考えられている。",
  sentenceEn: "Pyramids are thought to be graves of ancient kings."
},

{
  word: "section",
  blankword: "sections",
  meaning: "区画、切断面",
  sentenceJa: "この建物には立ち入り禁止の区画がいくつかある。",
  sentenceEn: "There are sections in this building that you are not allowed to enter."
},

{
  word: "dose",
  blankword: "dose",
  meaning: "（薬の）一服、服用量",
  sentenceJa: "毎食後その薬を1服飲みなさい。",
  sentenceEn: "Take one dose of the medicine after every meal."
},

{
  word: "shot",
  blankword: "shot",
  meaning: "発射、注射",
  sentenceJa: "彼は熊に向けて散弾銃を発射した。",
  sentenceEn: "He shot at the bear with a shotgun."
},

{
  word: "progress",
  blankword: "progress",
  meaning: "進行、進歩",
  sentenceJa: "その化学反応の進行を注意深く観察しなさい。",
  sentenceEn: "Watch the progress of the chemical reaction carefully."
},

{
  word: "court",
  blankword: "court",
  meaning: "法廷、コート",
  sentenceJa: "この法廷は家庭問題を扱うところです。",
  sentenceEn: "This court is for family cases."
},

{
  word: "campaign",
  blankword: "campaign",
  meaning: "広報活動、キャンペーン",
  sentenceJa: "多くの学生が核兵器反対キャンペーンに参加した。",
  sentenceEn: "Many students took part in the campaign against nuclear weapons."
},

{
  word: "document",
  blankword: "documents",
  meaning: "文書、記録、記録する",
  sentenceJa: "公文書の多くはインターネットで読むことができます。",
  sentenceEn: "Official documents can be read on the Internet."
},

{
  word: "signature",
  blankword: "signature",
  meaning: "署名",
  sentenceJa: "契約を完了させるためにあなたの署名が必要です。",
  sentenceEn: "We need your signature to complete the contract."
},

{
  word: "margin",
  blankword: "margin",
  meaning: "余白、余裕",
  sentenceJa: "その書類の余白にコメントを書いてください。",
  sentenceEn: "Write your comments in the margin of the document."
},

{
  word: "script",
  blankword: "script",
  meaning: "台本",
  sentenceJa: "この記録映画には台本はない。",
  sentenceEn: "There is no script for this documentary film."
},

{
  word: "client",
  blankword: "client",
  meaning: "依頼人、クライアント",
  sentenceJa: "弁護士は依頼人に契約書へ署名するように言った。",
  sentenceEn: "The lawyer told his client to add a signature to the contract."
},

{
  word: "photograph",
  blankword: "photographs",
  meaning: "写真、撮影する",
  sentenceJa: "法廷で写真を撮ってはいけません。",
  sentenceEn: "You must not take photographs in the court."
},

{
  word: "portrait",
  blankword: "portrait",
  meaning: "肖像、肖像画",
  sentenceJa: "この肖像は写真ではなく絵です。",
  sentenceEn: "This portrait is not a photograph but a drawing."
},

{
  word: "landscape",
  blankword: "landscape",
  meaning: "景色、風景",
  sentenceJa: "地震以来、この辺りの景色はかなり変わってしまった。",
  sentenceEn: "The landscape of this area has changed a lot since the earthquake."
},

{
  word: "certificate",
  blankword: "certificate",
  meaning: "証明書、免許状",
  sentenceJa: "その学校に出願するには、英語の技能を証明する証明書が必要です。",
  sentenceEn: "To apply to the school, you need a certificate proving your English skills."
},

{
  word: "bulb",
  blankword: "bulb",
  meaning: "電球、球根",
  sentenceJa: "電球は1879年にトーマス・エジソンによって発明された。",
  sentenceEn: "The light bulb was invented by Thomas Edison in 1879."
},

{
  word: "filament",
  blankword: "filament",
  meaning: "フィラメント",
  sentenceJa: "エジソンは最初の電球のフィラメントを作るために色々な材料を試した。",
  sentenceEn: "Edison tested many materials for the filament in the first light bulb."
},

{
  word: "strategy",
  blankword: "strategy",
  meaning: "方略、戦略",
  sentenceJa: "この方程式を解くためのあなたの方略を説明してください。",
  sentenceEn: "Please explain your strategy for solving this equation."
},

{
  word: "cluster",
  blankword: "cluster",
  meaning: "集合体、クラスター",
  sentenceJa: "そのプールには核燃料棒の集合体が保管されている。",
  sentenceEn: "A cluster of nuclear fuel rods are stored in that pool."
},

{
  word: "crowd",
  blankword: "crowd",
  meaning: "群衆、群がる",
  sentenceJa: "空港では大勢の人がその有名俳優の到着を待っていた。",
  sentenceEn: "A big crowd was waiting for the famous actor's arrival at the airport."
},

{
  word: "therapy",
  blankword: "therapy",
  meaning: "治療、治療法",
  sentenceJa: "その医師は患者グループに対して新しい治療法を試した。",
  sentenceEn: "The doctor tried a new therapy on a group of his patients."
},

{
  word: "forum",
  blankword: "forum",
  meaning: "公開討論会、フォーラム",
  sentenceJa: "インターネット上で生中継の公開討論会が開かれた。",
  sentenceEn: "A live forum was held on the Internet."
},

{
  word: "audience",
  blankword: "audience",
  meaning: "聴衆、観衆",
  sentenceJa: "そのフォーラムの聴衆が多すぎて、ホールに入れない人がいた。",
  sentenceEn: "The audience of the forum was so large that some of them couldn't enter the hall."
},

{
  word: "secret",
  blankword: "secret",
  meaning: "秘密、秘密の、秘訣",
  sentenceJa: "彼は自分の発明を長いあいだ秘密にしていた。",
  sentenceEn: "He kept his invention secret for a long time."
},

{
  word: "slave",
  blankword: "slaves",
  meaning: "奴隷、子機",
  sentenceJa: "リンカーンは国内のすべての奴隷を解放するよう命じた。",
  sentenceEn: "Lincoln ordered all the slaves in the country to be set free."
},

{
  word: "equivalent",
  blankword: "equivalent",
  meaning: "等価の、同等の、同等物",
  sentenceJa: "相対性理論によれば、質量とエネルギーは等価である。",
  sentenceEn: "According to the theory of relativity, mass and energy are equivalent."
},

{
  word: "visible",
  blankword: "visible",
  meaning: "目に見える",
  sentenceJa: "空が暗くなると星が見えるようになる。",
  sentenceEn: "The stars become visible when the sky gets dark."
},

{
  word: "bright",
  blankword: "bright",
  meaning: "明るい",
  sentenceJa: "照明が十分明るかったので、すべてのものが見えた。",
  sentenceEn: "The light was bright enough to make everything visible."
},

{
  word: "dim",
  blankword: "dim",
  meaning: "薄暗い、ぼんやりした、暗くする",
  sentenceJa: "このカメラは感度が高いので、薄暗い明かりの中でも使えます。",
  sentenceEn: "This camera is sensitive enough to be used in dim light."
},

{
  word: "slender",
  blankword: "slender",
  meaning: "細長い、わずかな",
  sentenceJa: "ほとんどのヘビは細長い体を持ち、足がない。",
  sentenceEn: "Most snakes have a long slender body with no legs."
},

{
  word: "optical",
  blankword: "optical",
  meaning: "光学の、目の、視覚の",
  sentenceJa: "これは世界最大の光学望遠鏡だ。",
  sentenceEn: "This is the largest optical telescope in the world."
},

{
  word: "entire",
  blankword: "entire",
  meaning: "全体の、すべての",
  sentenceJa: "このワイヤーが橋全体の重量を支えています。",
  sentenceEn: "This wire holds the entire weight of the bridge."
},

{
  word: "worth",
  blankword: "worth",
  meaning: "～の価値がある、価値",
  sentenceJa: "この材料はたった1グラムで数万円もの価値がある。",
  sentenceEn: "Only a gram of this material is worth tens of thousands of yen."
},

{
  word: "essential",
  blankword: "essential",
  meaning: "不可欠の、本質的な",
  sentenceJa: "携帯電話は今、必要不可欠なコミュニケーションの道具だと考えられている。",
  sentenceEn: "The cell phone is now considered an essential communication tool."
},

{
  word: "perform",
  blankword: "performed",
  meaning: "行う、上演する、動作する",
  sentenceJa: "そのコンピュータープログラムは完璧に動作した。",
  sentenceEn: "The computer program performed perfectly."
},

{
  word: "concentrate",
  blankword: "concentrating",
  meaning: "集中する、集中させる、濃縮する",
  sentenceJa: "人口が都市部に急速に集中してきている。",
  sentenceEn: "The population is rapidly concentrating in cities."
},
];

console.log("data loaded", quizDataRaw);