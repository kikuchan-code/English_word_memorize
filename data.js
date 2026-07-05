// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [
  {
    word: "broad",
    blankword: "broad",
    meaning: "（幅が）広い",
    sentenceJa: "この川は河口がとても広い。",
    sentenceEn: "This river is very broad at its mouth."
  },
  {
    word: "narrow",
    blankword: "narrow",
    meaning: "狭い",
    sentenceJa: "その道路は狭かったので私の車は通れなかった。",
    sentenceEn: "The road was too narrow for my car to pass."
  },
  {
    word: "radioactive",
    blankword: "radioactive",
    meaning: "放射性の",
    sentenceJa: "原子力発電所は放射性物質を貯蔵している。",
    sentenceEn: "Nuclear power stations store radioactive substances."
  },
  {
    word: "uranium",
    blankword: "Uranium",
    meaning: "ウラン",
    sentenceJa: "ウランは最もよく知られた放射性元素の一つです。",
    sentenceEn: "Uranium is one of the most common radioactive elements."
  },
  {
    word: "plutonium",
    blankword: "Plutonium",
    meaning: "プルトニウム",
    sentenceJa: "プルトニウムは原子炉の中で副産物として生成される。",
    sentenceEn: "Plutonium is created in the nuclear reactor as a by-product."
  },
  {
    word: "neutron",
    blankword: "neutron",
    meaning: "中性子",
    sentenceJa: "中性子の電荷はゼロである。",
    sentenceEn: "A neutron has no electrical charge."
  },
  {
    word: "proton",
    blankword: "proton",
    meaning: "陽子",
    sentenceJa: "水素原子は1個の陽子を持つ。",
    sentenceEn: "A hydrogen atom has one proton."
  },
  {
    word: "nucleus",
    blankword: "nucleus",
    meaning: "核",
    sentenceJa: "原子核は中性子と陽子からなる。",
    sentenceEn: "An atomic nucleus consists of neutrons and protons."
  },
  {
    word: "broadcast",
    blankword: "broadcast",
    meaning: "放送する",
    sentenceJa: "オリンピックは衛星によって世界中に放送される。",
    sentenceEn: "The Olympics are broadcast by satellites all over the world."
  },
  {
    word: "obtain",
    blankword: "obtain",
    meaning: "手に入れる、獲得する",
    sentenceJa: "新聞と放送は情報を手に入れるための伝統的な手段である。",
    sentenceEn: "Newspapers and broadcasting are traditional ways to obtain information."
  },
  {
    word: "wonder",
    blankword: "wondered",
    meaning: "不思議に思う、～かなと思う",
    sentenceJa: "彼らはなぜ雷が落ちるのかが不思議だった。",
    sentenceEn: "They wondered why lightning strikes."
  },
  {
    word: "scream",
    blankword: "screaming",
    meaning: "叫ぶ",
    sentenceJa: "女性が助けを求めて叫んでいた。",
    sentenceEn: "A lady was screaming for help."
  },
  {
    word: "regard",
    blankword: "regarded",
    meaning: "みなす",
    sentenceJa: "彼は次の大統領候補の筆頭とみなされている。",
    sentenceEn: "He is regarded as the best candidate for the next president."
  },
  {
    word: "adopt",
    blankword: "adopt",
    meaning: "採用する、養子にする",
    sentenceJa: "私たちはその橋の建設に新工法を採用することに決めた。",
    sentenceEn: "We decided to adopt a new method for building the bridge."
  },
  {
    word: "preserve",
    blankword: "preserve",
    meaning: "保護する、保存する",
    sentenceJa: "その放送局は自然保護のキャンペーンを開始した。",
    sentenceEn: "The broadcast station launched a campaign to preserve nature."
  },
  {
    word: "extract",
    blankword: "extracted",
    meaning: "抽出する、抜粋する",
    sentenceJa: "ほとんどの種類の植物油は木の実や種から抽出される。",
    sentenceEn: "Most kinds of vegetable oil are extracted from nuts or seeds."
  },
  {
    word: "substitute",
    blankword: "substitute",
    meaning: "代用する、置き換える",
    sentenceJa: "パンを焼くのに、小麦粉を米粉で代用することもできます。",
    sentenceEn: "You can substitute rice powder for flour to bake bread."
  },
  {
    word: "transform",
    blankword: "transformed",
    meaning: "変換する、変形させる",
    sentenceJa: "運動エネルギーは熱エネルギーに変換される。",
    sentenceEn: "Kinetic energy is transformed into heat energy."
  },
  {
    word: "smash",
    blankword: "smashed",
    meaning: "粉々にする（なる）",
    sentenceJa: "少年はハンマーでガラス瓶を砕いて粉々にした。",
    sentenceEn: "The boy smashed a glass bottle into pieces with a hammer."
  },
  {
    word: "positive",
    blankword: "positive",
    meaning: "正の、肯定的な",
    sentenceJa: "正の電荷を持つイオンは陽イオンと呼ばれる。",
    sentenceEn: "Ions that have positive charges are called positive ions."
  },
  {
    word: "efficient",
    blankword: "efficient",
    meaning: "効率がよい、効果的な",
    sentenceJa: "この新しい機械は以前の機械より2倍効率がよい。",
    sentenceEn: "This new machine is twice as efficient as the old one."
  },
  {
    word: "vital",
    blankword: "vital",
    meaning: "生命の、極めて重要な",
    sentenceJa: "生命現象の研究は生物学のひとつの分野だ。",
    sentenceEn: "Studying vital phenomena is a field of biology."
  },
  {
    word: "outer",
    blankword: "outer",
    meaning: "外側の、外の",
    sentenceJa: "彼の皮膚の外側の層が放射線によって傷ついた。",
    sentenceEn: "The outer layer of his skin was damaged by the radioactive rays."
  },
  {
    word: "integer",
    blankword: "integer",
    meaning: "整数",
    sentenceJa: "3でも4でも割り切れる最小の整数は12です。",
    sentenceEn: "The smallest integer that can be divided by both 3 and 4 is 12."
  },
  {
    word: "fraction",
    blankword: "fraction",
    meaning: "一部分、断片、分数",
    sentenceJa: "地球は太陽エネルギーのほんの一部分しか受けていない。",
    sentenceEn: "The earth receives only a fraction of the sun's energy."
  },
  {
    word: "denominator",
    blankword: "denominator",
    meaning: "分母",
    sentenceJa: "分数の下段の数字が分母である。",
    sentenceEn: "The bottom number of a fraction is the denominator."
  },
  {
    word: "numerator",
    blankword: "numerator",
    meaning: "分子",
    sentenceJa: "分子と分母に同じ数を掛けなさい。",
    sentenceEn: "Multiply the numerator and denominator by the same number."
  },
  {
    word: "polygon",
    blankword: "polygon",
    meaning: "多角形",
    sentenceJa: "正多角形のすべての辺と角は等しい。",
    sentenceEn: "All the sides and angles of a regular polygon are equal."
  },
  {
    word: "formula",
    blankword: "formula",
    meaning: "公式、一定の決まり",
    sentenceJa: "この方程式を解くには単純に公式を適用すればよい。",
    sentenceEn: "You can simply apply the formula to solve this equation."
  },
  {
    word: "sphere",
    blankword: "sphere",
    meaning: "球、天体",
    sentenceJa: "球の表面積は4πr²という公式から求められる。",
    sentenceEn: "The surface area of a sphere is calculated from the formula 4πr²."
  },
  {
    word: "sum",
    blankword: "sum",
    meaning: "総和、合計",
    sentenceJa: "多角形の外角の和は常に360度である。",
    sentenceEn: "The sum of the outer angles of a polygon is always 360 degrees."
  },
  {
    word: "numerical",
    blankword: "numerical",
    meaning: "数の、数に関する",
    sentenceJa: "その公式に数値を代入しなさい。",
    sentenceEn: "Substitute numerical values into the formula."
  },
  {
    word: "numerous",
    blankword: "numerous",
    meaning: "数多くの",
    sentenceJa: "海には数多くの種類の魚がいる。",
    sentenceEn: "There are numerous kinds of fish in the ocean."
  },
  {
    word: "consecutive",
    blankword: "consecutive",
    meaning: "連続した",
    sentenceJa: "その積が156になる連続した2つの数を求めよ。",
    sentenceEn: "Find two consecutive numbers with a product of 156."
  },
  {
    word: "decimal",
    blankword: "decimal",
    meaning: "10進法の、小数の",
    sentenceJa: "コンピューターの中では10進数は2進数に変換される。",
    sentenceEn: "In computers, decimal numbers are transformed into binary numbers."
  },
  {
    word: "fundamental",
    blankword: "fundamental",
    meaning: "基本的な、根本的な",
    sentenceJa: "まず最初にいくつかの基本的な質問に答えてください。",
    sentenceEn: "First of all, you have to answer some fundamental questions."
  },
  {
    word: "ordinary",
    blankword: "ordinary",
    meaning: "ありふれた、普通の、通常の",
    sentenceJa: "ナットとボルトはありふれた機械部品だ。",
    sentenceEn: "Nuts and bolts are ordinary parts of machines."
  },
  {
    word: "annual",
    blankword: "annual",
    meaning: "年1回の、1年の",
    sentenceJa: "その年1回の会議は今年は3月に開かれる。",
    sentenceEn: "The annual conference will be held in March this year."
  },
  {
    word: "salary",
    blankword: "salary",
    meaning: "給料、月給",
    sentenceJa: "私の給料は毎月1回銀行振り込みで支払われます。",
    sentenceEn: "My salary is paid once a month through a bank transfer."
  },
  {
    word: "pioneer",
    blankword: "pioneers",
    meaning: "先駆者",
    sentenceJa: "彼は光ファイバーを開発した先駆者の一人です。",
    sentenceEn: "He is one of the pioneers who developed optical fiber."
  },
  {
    word: "spectrum",
    blankword: "spectrum",
    meaning: "スペクトル",
    sentenceJa: "虹は太陽光のスペクトルとみなすことができる。",
    sentenceEn: "A rainbow can be regarded as a spectrum of sunlight."
  },
  {
    word: "aspect",
    blankword: "aspects",
    meaning: "（物事の）側面、外観",
    sentenceJa: "この問題の別の側面を見てみましょう。",
    sentenceEn: "Let's have a look at other aspects of this matter."
  },
  {
    word: "chapter",
    blankword: "chapters",
    meaning: "章",
    sentenceJa: "この本の中の3つの章は私が書きました。",
    sentenceEn: "I wrote three chapters of this book."
  },
  {
    word: "concept",
    blankword: "concept",
    meaning: "概念、考え、構想",
    sentenceJa: "コンピューター技術者は2進法の概念を理解していなければならない。",
    sentenceEn: "Computer engineers must understand the concept of the binary system."
  },
  {
    word: "career",
    blankword: "career",
    meaning: "職業、経歴",
    sentenceJa: "この学校の学生の多くは技術系の職業を選びます。",
    sentenceEn: "Many students in this school choose a career in engineering."
  },
  {
    word: "content",
    blankword: "content",
    meaning: "内容",
    sentenceJa: "この章の内容は分数の計算のしかたについてです。",
    sentenceEn: "The content of this chapter is about how to calculate fractions."
  },
  {
    word: "responsibility",
    blankword: "responsibility",
    meaning: "責任",
    sentenceJa: "自分のウェブサイトの内容については自分が全責任を負わなければならない。",
    sentenceEn: "You must take full responsibility for the contents of your web site."
  },
  {
    word: "opportunity",
    blankword: "opportunity",
    meaning: "機会",
    sentenceJa: "今日はあなたとお話しする機会を持ててとてもうれしいです。",
    sentenceEn: "I'm very happy to have an opportunity to talk with you today."
  },
  {
    word: "fluid",
    blankword: "fluid",
    meaning: "流体",
    sentenceJa: "液体だけでなく気体も流体とみなされる。",
    sentenceEn: "Not only liquid but also gas is considered as fluid."
  },
  {
    word: "stream",
    blankword: "stream",
    meaning: "流れ、小川",
    sentenceJa: "この飛行機は気流に逆らって飛んでいます。",
    sentenceEn: "This airplane is flying against the stream of air."
  }
];

console.log("data loaded", quizDataRaw);