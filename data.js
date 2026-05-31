// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const vocabulary = [
  {
    word: "rely",
    blankword: "rely",
    meaning: "頼る",
    sentenceJa: "科学技術に頼りすぎてはいけない",
    sentenceEn: "You should not rely on science and technology too much."
  },
  {
    word: "seek",
    blankword: "seeking",
    meaning: "さがす",
    sentenceJa: "多くの科学者がこの問題の解法を探している",
    sentenceEn: "Many scientists are seeking a solution to this problem."
  },
  {
    word: "miss",
    blankword: "missed",
    meaning: "外す、逃す",
    sentenceJa: "彼は銃を発射したが、それは標的を1インチ外した",
    sentenceEn: "He fired the gun, but it missed the target by an inch."
  },
  {
    word: "convert",
    blankword: "converts",
    meaning: "変換する、転換する",
    sentenceJa: "太陽光発電システムは太陽の光を電気に変換する",
    sentenceEn: "A solar energy system converts sunlight into electricity."
  },
  {
    word: "rub",
    blankword: "Rubbing",
    meaning: "こする",
    sentenceJa: "絹とガラスをこすり合わせると静電気が起こる",
    sentenceEn: "Rubbing silk against glass will make static electricity."
  },
  {
    word: "bore",
    blankword: "bore",
    meaning: "（ドリルで）穴をあける、退屈させる",
    sentenceJa: "この機械は同時に2個の穴をあけることができる",
    sentenceEn: "This machine can bore two holes at once."
  },
  {
    word: "join",
    blankword: "join",
    meaning: "つなぐ、加わる",
    sentenceJa: "2枚の板をつなぐため、それぞれに穴を開けなさい",
    sentenceEn: "Bore a hole in each board to join them together."
  },
  {
    word: "conduct",
    blankword: "conducts",
    meaning: "伝導する、指揮する",
    sentenceJa: "熱や電気を伝える物質を伝導体という",
    sentenceEn: "A material which conducts heat or electricity is called a conductor."
  },
  {
    word: "insulate",
    blankword: "insulate",
    meaning: "絶縁する",
    sentenceJa: "ゴムは電気を絶縁するのに良い材料である",
    sentenceEn: "Rubber is a good material to insulate electricity."
  },
  {
    word: "semiconductor",
    blankword: "semiconductor",
    meaning: "半導体",
    sentenceJa: "半導体デバイスにはシリコンが広く使われている",
    sentenceEn: "Silicon is widely used in semiconductor devices."
  },
  {
    word: "diode",
    blankword: "diode",
    meaning: "ダイオード",
    sentenceJa: "ダイオードの一般的な機能の一つは、交流を直流に変えることである",
    sentenceEn: "One of the common functions of a diode is to convert alternating current to direct current."
  },
  {
    word: "grant",
    blankword: "grant",
    meaning: "助成金、聞き入れる",
    sentenceJa: "その教授は研究を続けるための助成金を100万円もらった",
    sentenceEn: "The professor was given a grant of one million yen to continue his research."
  },
  {
    word: "trigger",
    blankword: "trigger",
    meaning: "引き金、きっかけ",
    sentenceJa: "運動不足は病気の引き金にもなる",
    sentenceEn: "Lack of exercise can be a trigger of diseases."
  },
  {
    word: "bullet",
    blankword: "bullet",
    meaning: "弾丸",
    sentenceJa: "その弾丸は彼の銃から発射されたということがわかった",
    sentenceEn: "It was found that the bullet had been fired from his gun."
  },
  {
    word: "screw",
    blankword: "screw",
    meaning: "ネジ、ネジで留める、ねじる",
    sentenceJa: "この木製のネジは小さな子供のおもちゃ用に作られています",
    sentenceEn: "This wooden screw is designed for little children's toys."
  },
  {
    word: "blade",
    blankword: "blade",
    meaning: "刃物、刃",
    sentenceJa: "その刃物は鋭いので注意してください",
    sentenceEn: "The blade is so sharp that you should watch out."
  },
  {
    word: "edge",
    blankword: "edge",
    meaning: "端、刃先",
    sentenceJa: "紙の端で皮膚を切ることもある",
    sentenceEn: "The edge of paper can cut your skin."
  },
  {
    word: "rod",
    blankword: "rods",
    meaning: "棒、さお",
    sentenceJa: "2本の棒の端をボルトでつなぎなさい",
    sentenceEn: "Join the two rods with a bolt at each end."
  },
  {
    word: "jack",
    blankword: "jack",
    meaning: "ジャッキ、ジャック",
    sentenceJa: "このジャッキは600kgまでの荷を持ち上げることができる",
    sentenceEn: "This jack can lift loads of up to 600 kilograms."
  },
  {
    word: "contract",
    blankword: "contract",
    meaning: "契約（書）、契約する、収縮する",
    sentenceJa: "その2社は契約に合意した",
    sentenceEn: "The two companies agreed on the contract."
  },
  {
    word: "component",
    blankword: "components",
    meaning: "部品、構成要素",
    sentenceJa: "コンピュータの中には情報を処理するための電子部品がある",
    sentenceEn: "A computer has some electronic components to process information."
  },
  {
    word: "vehicle",
    blankword: "vehicles",
    meaning: "車両、乗り物",
    sentenceJa: "その事故では7台の車両が衝突した",
    sentenceEn: "Seven vehicles crashed in that accident."
  },
  {
    word: "fare",
    blankword: "fare",
    meaning: "運賃",
    sentenceJa: "京都までの往復運賃はいくらですか",
    sentenceEn: "How much is the round-trip fare to Kyoto?"
  },
  {
    word: "strain",
    blankword: "strain",
    meaning: "負担、緊張、重圧",
    sentenceJa: "その重いカバンが彼の肩に負担をかけている",
    sentenceEn: "That heavy bag is putting a strain on his shoulder."
  },
  {
    word: "ambulance",
    blankword: "ambulance",
    meaning: "救急車",
    sentenceJa: "彼は救急車で病院に運ばれた",
    sentenceEn: "He was taken to the hospital by ambulance."
  },
  {
    word: "emergency",
    blankword: "emergencies",
    meaning: "非常（緊急）事態",
    sentenceJa: "この実験室には非常時のために発電機が備えられている",
    sentenceEn: "This laboratory is equipped with a generator for emergencies."
  },
  {
    word: "craft",
    blankword: "craft",
    meaning: "技能、工芸、船舶",
    sentenceJa: "彼女は木工の技能を身に付けた",
    sentenceEn: "She has mastered the craft of woodworking."
  },
  {
    word: "aircraft",
    blankword: "aircraft",
    meaning: "航空機",
    sentenceJa: "航空機の中には音速より速く飛べるものもある",
    sentenceEn: "Some aircraft can travel faster than the speed of sound."
  },
  {
    word: "landing",
    blankword: "landing",
    meaning: "着陸",
    sentenceJa: "エンジントラブルのため、パイロットは緊急着陸を試みた",
    sentenceEn: "The pilot tried an emergency landing because of engine trouble."
  },
  {
    word: "passenger",
    blankword: "passengers",
    meaning: "乗客",
    sentenceJa: "かれらは500人以上の乗客を運ぶ新しい飛行機を開発中だ",
    sentenceEn: "They are developing a new aircraft which carries more than 500 passengers."
  },
  {
    word: "aisle",
    blankword: "aisle",
    meaning: "通路",
    sentenceJa: "私は飛行機の通路側の席がいいです",
    sentenceEn: "I would like an aisle seat on the airplane."
  },
  {
    word: "coast",
    blankword: "coast",
    meaning: "海岸、沿岸",
    sentenceJa: "ハリケーンが東海岸に接近中だ",
    sentenceEn: "The hurricane is approaching the east coast."
  },
  {
    word: "bay",
    blankword: "bay",
    meaning: "湾、入り江",
    sentenceJa: "その湾岸地域は30年前に開発された",
    sentenceEn: "The bay area was developed 30 years ago."
  },
  {
    word: "tide",
    blankword: "tide",
    meaning: "潮（の干満）",
    sentenceJa: "この湾では潮位は10メートル下がる",
    sentenceEn: "The tide falls by 10 meters in this bay."
  },
  {
    word: "fasten",
    blankword: "fasten",
    meaning: "締める、留める",
    sentenceJa: "車を運転するときはシートベルトを締めるのを忘れないように",
    sentenceEn: "Don't forget to fasten your seatbelt when you drive a car."
  },
  {
    word: "manufacture",
    blankword: "manufactured",
    meaning: "製造する、製造業",
    sentenceJa: "日本で製造された建設機械はさまざまな国で売られている",
    sentenceEn: "Construction equipment manufactured in Japan is sold in various countries."
  },
  {
    word: "hunt",
    blankword: "hunted",
    meaning: "狩猟する、狩り",
    sentenceJa: "以前は多くの国でクジラが狩られていた",
    sentenceEn: "Whales were hunted in many countries before."
  },
  {
    word: "demonstrate",
    blankword: "demonstrated",
    meaning: "実演する、明らかにする",
    sentenceJa: "インストラクターがその新しいパソコンの使い方を実演した",
    sentenceEn: "The instructor demonstrated how to use the new PC."
  },
  {
    word: "investigate",
    blankword: "investigating",
    meaning: "調査する",
    sentenceJa: "警察はその火事の原因を調査している",
    sentenceEn: "The police are investigating the cause of the fire."
  },
  {
    word: "bear",
    blankword: "bear",
    meaning: "耐える、（子を）産む",
    sentenceJa: "私はもうその騒音には耐えられない",
    sentenceEn: "I can no longer bear the noise."
  },
  {
    word: "imagine",
    blankword: "imagine",
    meaning: "想像する",
    sentenceJa: "未来の世界を想像できますか",
    sentenceEn: "Can you imagine the world of the future?"
  },
  {
    word: "convince",
    blankword: "convince",
    meaning: "（人を）納得させる、確信させる",
    sentenceJa: "かれらは原発の必要性を住民に納得させようとしている",
    sentenceEn: "They are trying to convince people of the need for a nuclear power plant."
  },
    {
    word: "suspect",
    blankword: "suspected",
    meaning: "疑う、容疑者",
    sentenceJa: "その技術者は電圧降下の原因が回路基板にあるのではないかと疑った",
    sentenceEn: "The engineer suspected the circuit board as the cause of the voltage drop."
  },
  {
    word: "arrest",
    blankword: "arrested",
    meaning: "逮捕する、逮捕",
    sentenceJa: "その男は会社の金を盗んだ疑いで逮捕された",
    sentenceEn: "The man was arrested on suspicion of stealing the company's money."
  },
  {
    word: "gain",
    blankword: "gain",
    meaning: "得る、利得",
    sentenceJa: "植物は太陽からエネルギーを得ている",
    sentenceEn: "Plants gain energy from the sun."
  },
  {
    word: "indicate",
    blankword: "indicates",
    meaning: "示す、表示する",
    sentenceJa: "このグラフは地球の温度の急速な変化を示している",
    sentenceEn: "This graph indicates a rapid change in the earth's temperature."
  },
  {
    word: "associate",
    blankword: "associates",
    meaning: "関連づける、関係する",
    sentenceJa: "このプログラムはファイルの名前と形式を自動的に関連づける",
    sentenceEn: "This program automatically associates the name and type of the files."
  },
  {
    word: "prepare",
    blankword: "are preparing",
    meaning: "準備する、用意する",
    sentenceJa: "学生たちは実験室で化学実験の準備をしている",
    sentenceEn: "Students are preparing for a chemical experiment in the laboratory."
  },
  {
    word: "utilize",
    blankword: "utilize",
    meaning: "利用する",
    sentenceJa: "私たちはできるだけ太陽エネルギーを利用するべきだ",
    sentenceEn: "We should utilize solar energy as much as possible."
  },
  {
    word: "extend",
    blankword: "Extend",
    meaning: "伸ばす、広げる、広がる",
    sentenceJa: "右腕を伸ばして壁に触れなさい",
    sentenceEn: "Extend your right arm and touch the wall."
  }
];

console.log("data loaded", quizDataRaw);