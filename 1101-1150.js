// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [
  {
    "word": "fluent",
    "blankword": null,
    "meaning": "流ちょうな",
    "sentenceJa": "あの外国人教授は流ちょうな日本語を話す。",
    "sentenceEn": "That foreign professor speaks fluent Japanese."
  },
  {
    "word": "immense",
    "blankword": null,
    "meaning": "広大な、巨大な",
    "sentenceJa": "広大な宇宙では、地球は一片のちりのようなものだ。",
    "sentenceEn": "The earth is like a piece of dust in the immense universe."
  },
  {
    "word": "tremendous",
    "blankword": null,
    "meaning": "途方もない、すさまじい",
    "sentenceJa": "遺伝子工学は人類に恩恵をもたらす途方もない可能性を秘めている。",
    "sentenceEn": "Genetic engineering has tremendous potential to provide benefits for human beings."
  },
  {
    "word": "due",
    "blankword": null,
    "meaning": "～することになっている",
    "sentenceJa": "彼はこの週末にヨーロッパから帰って来ることになっている。",
    "sentenceEn": "He is due to return from Europe this weekend."
  },
  {
    "word": "lick",
    "blankword": "licked",
    "meaning": "舐める",
    "sentenceJa": "彼は切手を舐めて封筒に貼った。",
    "sentenceEn": "He licked the stamp to stick it on the envelope."
  },
  {
    "word": "cough",
    "blankword": "coughing",
    "meaning": "咳をする、咳",
    "sentenceJa": "咳を止めたいときはこの薬を飲みなさい。",
    "sentenceEn": "Take this medicine when you want to stop coughing."
  },
  {
    "word": "sneeze",
    "blankword": null,
    "meaning": "くしゃみをする、くしゃみ",
    "sentenceJa": "くしゃみをする時は口を覆いなさい。",
    "sentenceEn": "Cover your mouth when you sneeze."
  },
  {
    "word": "yawn",
    "blankword": null,
    "meaning": "あくびする、あくび",
    "sentenceJa": "私は授業中にあくびをしないよう一生懸命こらえた。",
    "sentenceEn": "I tried hard not to yawn during the class."
  },
  {
    "word": "tend",
    "blankword": null,
    "meaning": "～する傾向がある、～しがちである",
    "sentenceJa": "日本人は長時間働く傾向がある。",
    "sentenceEn": "Japanese people tend to work long hours."
  },
  {
    "word": "promise",
    "blankword": "promised",
    "meaning": "約束する、約束",
    "sentenceJa": "彼らは電力料金の値下げを約束した。",
    "sentenceEn": "They promised to reduce the electric rate."
  },
  {
    "word": "establish",
    "blankword": "established",
    "meaning": "設立する、確立する",
    "sentenceJa": "この大学は100年前に設立されました。",
    "sentenceEn": "This college was established a hundred years ago."
  },
  {
    "word": "slash",
    "blankword": null,
    "meaning": "切る、切り詰め、切り傷",
    "sentenceJa": "学長は研究予算を切り詰めることを決めた。",
    "sentenceEn": "The president decided to slash the research budget."
  },
  {
    "word": "peel",
    "blankword": "peeling",
    "meaning": "はがれる、(皮を)むく、皮",
    "sentenceJa": "その車は塗装が一部はがれている。",
    "sentenceEn": "The paint of the car is partly peeling."
  },
  {
    "word": "fry",
    "blankword": null,
    "meaning": "揚げる、炒める",
    "sentenceJa": "私たちはポテトを揚げるのに植物油を使っています。",
    "sentenceEn": "We use vegetable oil to fry potatoes."
  },
  {
    "word": "achieve",
    "blankword": "achieved",
    "meaning": "達成する",
    "sentenceJa": "わが社は一年に100万台の車を販売するという目標を達成した。",
    "sentenceEn": "Our company achieved its goal of selling one million cars a year."
  },
  {
    "word": "replace",
    "blankword": "replaced",
    "meaning": "取り替える、取って代わる",
    "sentenceJa": "その工場はすべての照明をLED電球と取り替えた。",
    "sentenceEn": "The factory replaced all its lights with LED lamps."
  },
  {
    "word": "emerge",
    "blankword": "emerged",
    "meaning": "現れる",
    "sentenceJa": "私たちは地球上にどうやって生命が現れたかを研究している。",
    "sentenceEn": "We study how life emerged on the earth."
  },
  {
    "word": "scare",
    "blankword": null,
    "meaning": "おびえさせる、恐怖",
    "sentenceJa": "白衣を着た医者はそれだけで小さい子供をおびえさせることがある。",
    "sentenceEn": "A doctor in a white coat alone can scare small children."
  },
  {
    "word": "communicate",
    "blankword": null,
    "meaning": "伝える、通信する",
    "sentenceJa": "個人的な感情を外国語で伝えるのは難しい。",
    "sentenceEn": "It is difficult to communicate personal feelings in a foreign language."
  },
  {
    "word": "interview",
    "blankword": "interview",
    "meaning": "面接、会見、面接する",
    "sentenceJa": "筆記試験の後に面接が予定されている。",
    "sentenceEn": "The interview is due after the written test."
  },
  {
    "word": "bit",
    "blankword": null,
    "meaning": "少量、小片",
    "sentenceJa": "この薬品はほんの少量で何百人もの人を殺せる。",
    "sentenceEn": "Just a tiny bit of this chemical can kill hundreds of people."
  },
  {
    "word": "ability",
    "blankword": null,
    "meaning": "能力",
    "sentenceJa": "私は英語をすらすらと話せる能力がほしい。",
    "sentenceEn": "I want to have the ability to speak English fluently."
  },
  {
    "word": "fame",
    "blankword": null,
    "meaning": "名声、評判",
    "sentenceJa": "その数学者は20代の時に自らの名声を確立した。",
    "sentenceEn": "The mathematician established his fame in his twenties."
  },
  {
    "word": "feedback",
    "blankword": null,
    "meaning": "意見、反応、フィードバック",
    "sentenceJa": "私たちは皆様からのご意見をいつでも歓迎します。",
    "sentenceEn": "We welcome your feedback at any time."
  },
  {
    "word": "culture",
    "blankword": null,
    "meaning": "文化、教養",
    "sentenceJa": "テクノロジーと文化は密接に関係している。",
    "sentenceEn": "Technology and culture are closely related."
  },
  {
    "word": "comment",
    "blankword": "comments",
    "meaning": "論評、コメント、コメントする",
    "sentenceJa": "教授は私たちの研究に対してたくさんのコメントをくれた。",
    "sentenceEn": "The professor gave us a lot of comments on our research."
  },
  {
    "word": "birth",
    "blankword": null,
    "meaning": "誕生、出生",
    "sentenceJa": "ここがその有名な政治家の誕生の地です。",
    "sentenceEn": "This is the place of the famous politician's birth."
  },
  {
    "word": "revolution",
    "blankword": null,
    "meaning": "革命、回転",
    "sentenceJa": "携帯電話は情報通信産業に革命を起こした。",
    "sentenceEn": "Cell phones caused a revolution in the information and communication industry."
  },
  {
    "word": "generation",
    "blankword": "generations",
    "meaning": "世代、発生",
    "sentenceJa": "私たちは文化を次の世代に伝えていかなければいけない。",
    "sentenceEn": "We have to pass on our culture to the next generations."
  },
  {
    "word": "staff",
    "blankword": null,
    "meaning": "職員、スタッフ",
    "sentenceJa": "その博物館には子供たちに科学を教える職員がいない。",
    "sentenceEn": "The museum has no staff to teach science to children."
  },
  {
    "word": "spot",
    "blankword": "spots",
    "meaning": "点、地点、しみ、弱点",
    "sentenceJa": "彼の新しい理論はまだいくつかの弱点がある。",
    "sentenceEn": "His new theory still has some weak spots."
  },
  {
    "word": "slope",
    "blankword": null,
    "meaning": "傾斜、坂、勾配",
    "sentenceJa": "その板は10度の傾斜で取り付けられている。",
    "sentenceEn": "The board is placed at a slope of 10 degrees."
  },
  {
    "word": "friction",
    "blankword": "Friction",
    "meaning": "摩擦",
    "sentenceJa": "油を差すことで摩擦は減らせます。",
    "sentenceEn": "Friction can be decreased by greasing."
  },
  {
    "word": "instrument",
    "blankword": null,
    "meaning": "計器、道具、器具、楽器",
    "sentenceJa": "その物体の速さを測定するにはこの計器を使いなさい。",
    "sentenceEn": "Use this instrument to measure the speed of the object."
  },
  {
    "word": "magnitude",
    "blankword": null,
    "meaning": "大きさ、マグニチュード、規模",
    "sentenceJa": "速さと距離は、大きさだけで方向を持たない量である。",
    "sentenceEn": "Speed and distance are quantities which have only magnitude but no direction."
  },
  {
    "word": "task",
    "blankword": null,
    "meaning": "仕事、作業、課題",
    "sentenceJa": "彼らはその仕事を終えてから家へ帰った。",
    "sentenceEn": "They went home after they had finished the task."
  },
  {
    "word": "instruction",
    "blankword": "instructions",
    "meaning": "指示、指導、取扱説明書",
    "sentenceJa": "教師は学生に明確な指示を与えるようにすべきです。",
    "sentenceEn": "Teachers should try to give their students clear instructions."
  },
  {
    "word": "mathematics",
    "blankword": null,
    "meaning": "数学",
    "sentenceJa": "工学を学ぶ前に数学を知らなくてはならない。",
    "sentenceEn": "You must know mathematics before you study engineering."
  },
  {
    "word": "function",
    "blankword": null,
    "meaning": "機能、関数、機能を果たす",
    "sentenceJa": "この計器の機能は光の強さを測定することです。",
    "sentenceEn": "The function of this instrument is to measure the magnitude of the light."
  },
  {
    "word": "relation",
    "blankword": "The relation",
    "meaning": "関係、関連",
    "sentenceJa": "その2つの尺度の関係は次の通りである。",
    "sentenceEn": "The relation between the two scales is as follows."
  },
  {
    "word": "variable",
    "blankword": "variables",
    "meaning": "変数、変化しやすい",
    "sentenceJa": "このグラフは2つの変数の関係を示している。",
    "sentenceEn": "This graph shows the relationship between the two variables."
  },
  {
    "word": "remainder",
    "blankword": "The remainder",
    "meaning": "余り、残り",
    "sentenceJa": "10割る3の余りは1です。",
    "sentenceEn": "The remainder of 10 divided by 3 is 1."
  },
  {
    "word": "vector",
    "blankword": "A vector",
    "meaning": "ベクトル",
    "sentenceJa": "ベクトルは向きと大きさの両方を持つ量である。",
    "sentenceEn": "A vector is a quantity that has both direction and magnitude."
  },
  {
    "word": "diameter",
    "blankword": null,
    "meaning": "直径",
    "sentenceJa": "その穴は直径1m、深さ2mです。",
    "sentenceEn": "The hole is one meter in diameter and two meters in depth."
  },
  {
    "word": "radius",
    "blankword": null,
    "meaning": "半径",
    "sentenceJa": "半径12メートルの円の面積はいくらですか。",
    "sentenceEn": "What is the area of a circle with a radius of 12 meters?"
  },
  {
    "word": "circumference",
    "blankword": "The circumference",
    "meaning": "円周",
    "sentenceJa": "円周はその直径にπを掛けることで計算される。",
    "sentenceEn": "The circumference is calculated by multiplying the diameter by π."
  },
  {
    "word": "arc",
    "blankword": null,
    "meaning": "弧、アーク",
    "sentenceJa": "このコンパスで弧を描きなさい。",
    "sentenceEn": "Draw an arc with this compass."
  },
  {
    "word": "arrow",
    "blankword": null,
    "meaning": "矢印、矢",
    "sentenceJa": "この矢印の長さがベクトルの大きさを表しています。",
    "sentenceEn": "The length of this arrow represents the magnitude of the vector."
  },
  {
    "word": "statistics",
    "blankword": "Statistics",
    "meaning": "統計(学)",
    "sentenceJa": "統計から、子供の数が減少してきていることがわかる。",
    "sentenceEn": "Statistics show that the number of children has been decreasing."
  },
  {
    "word": "matrix",
    "blankword": null,
    "meaning": "行列(マトリックス)",
    "sentenceJa": "この行列の要素をすべて言いなさい。",
    "sentenceEn": "Name all the elements of this matrix."
  }
];

console.log("data loaded", quizDataRaw);