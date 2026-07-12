// wordと違う形（活用・過去形など）の場合は、blankwordで空欄にする箇所を指定する
// 複数語対応

const quizDataRaw = [
  {
    word: "flood",
    blankword: "flood",
    meaning: "洪水",
    sentenceJa: "その町は洪水で破壊された。",
    sentenceEn: "The town was destroyed by the flood."
  },
  {
    word: "drought",
    blankword: "drought",
    meaning: "干ばつ、日照り",
    sentenceJa: "その干ばつで多くの牛や他の家畜が死んだ。",
    sentenceEn: "The drought killed many cows and other farm animals."
  },
  {
    word: "customer",
    blankword: "customers",
    meaning: "顧客、取引先",
    sentenceJa: "営業担当者にとって最も大切なことは、顧客を大事にすることである。",
    sentenceEn: "The most important thing for salespeople is to take good care of their customers."
  },
  {
    word: "whisper",
    blankword: "whispered",
    meaning: "ささやく",
    sentenceJa: "彼女は私に何かささやいたが、私にはその言葉が聞き取れなかった。",
    sentenceEn: "She whispered something to me, but I couldn't catch the words."
  },
  {
    word: "stimulate",
    blankword: "stimulates",
    meaning: "刺激する",
    sentenceJa: "光は植物の成長を刺激する。",
    sentenceEn: "Light stimulates plant growth."
  },
  {
    word: "assign",
    blankword: "assign",
    meaning: "割り当てる",
    sentenceJa: "これらのコンピューターそれぞれに固有の名前を割り当てる必要がある。",
    sentenceEn: "We have to assign unique names to each of these computers."
  },
  {
    word: "promote",
    blankword: "promoted",
    meaning: "促進する、昇進させる",
    sentenceJa: "かれらの責任ある顧客サービスがわが社の製品の売り上げを促進した。",
    sentenceEn: "Their responsible customer service promoted sales of our products."
  },
  {
    word: "resign",
    blankword: "resigned",
    meaning: "辞任する、辞職する",
    sentenceJa: "その監督はチームの成績不振の責任を取って辞任した。",
    sentenceEn: "The manager resigned to take responsibility for the team's poor performance."
  },
  {
    word: "bind",
    blankword: "Bind",
    meaning: "縛る、結びつける",
    sentenceJa: "この針金でそれらの棒を一緒に縛ってください。",
    sentenceEn: "Bind those poles together with this wire."
  },
  {
    word: "mention",
    blankword: "mentioned",
    meaning: "～について言う、言及する",
    sentenceJa: "この問題については前に言ってあります。",
    sentenceEn: "I have mentioned this problem before."
  },
  {
    word: "delay",
    blankword: "delayed",
    meaning: "遅らせる、遅れ",
    sentenceJa: "列車が悪天候のために1時間遅れている。",
    sentenceEn: "The train is delayed for an hour because of bad weather."
  },
  {
    word: "ignore",
    blankword: "ignore",
    meaning: "無視する",
    sentenceJa: "機械の警告表示を無視してはならない。",
    sentenceEn: "You must not ignore the warning signs on the machine."
  },
  {
    word: "recommend",
    blankword: "recommend",
    meaning: "薦める、推薦する",
    sentenceJa: "自分が人に薦めたものについては責任を持たなければいけません。",
    sentenceEn: "You must take responsibility for what you recommend to someone."
  },
  {
    word: "deliver",
    blankword: "delivered",
    meaning: "配達する、（考えを）述べる",
    sentenceJa: "今日の朝刊はまだ配達されていないようです。",
    sentenceEn: "Today's morning paper doesn't seem to have been delivered yet."
  },
  {
    word: "arise",
    blankword: "arises",
    meaning: "起こる、発生する",
    sentenceJa: "問題が起きたらできるだけ早く知らせてください。",
    sentenceEn: "If a problem arises, please let me know as soon as possible."
  },
  {
    word: "contribute",
    blankword: "contributed",
    meaning: "貢献する、寄付する",
    sentenceJa: "新しい配信システムは、メッセージ配信の遅れを減らすことに貢献した。",
    sentenceEn: "The new delivery system contributed to reducing the delay in message delivery."
  },
  {
    word: "respect",
    blankword: "respects",
    meaning: "尊敬する、大切にする",
    sentenceJa: "自分を大切にしないと、他人からも尊敬されませんよ。",
    sentenceEn: "Nobody respects you unless you respect yourself."
  },
  {
    word: "insult",
    blankword: "insult",
    meaning: "侮辱する",
    sentenceJa: "人前で話すときは人を侮辱しないように気をつけなさい。",
    sentenceEn: "Be careful not to insult other people when you speak in public."
  },
  {
    word: "violate",
    blankword: "violate",
    meaning: "（規則などを）破る、違反する",
    sentenceJa: "法律に違反すると免許を取り消されることがあります。",
    sentenceEn: "If you violate the law, you might lose your license."
  },
  {
    word: "puzzle",
    blankword: "puzzled",
    meaning: "困惑させる",
    sentenceJa: "彼が突然私を無視したので私は困惑した。",
    sentenceEn: "I was puzzled because he suddenly ignored me."
  },
  {
    word: "log",
    blankword: "log",
    meaning: "丸太、記録する",
    sentenceJa: "丸太の直径が梁に十分かどうか確認しなさい。",
    sentenceEn: "Make sure the diameter of the log is large enough for the beam."
  },
  {
    word: "vessel",
    blankword: "vessel",
    meaning: "管、船",
    sentenceJa: "医師は血流を止めるためにその血管を縛った。",
    sentenceEn: "The doctor bound the blood vessel to stop the blood stream."
  },
  {
    word: "bowl",
    blankword: "bowl",
    meaning: "鉢（ボウル）",
    sentenceJa: "そのボウルの容積は500ccです。",
    sentenceEn: "The capacity of that bowl is 500cc."
  },
  {
    word: "deck",
    blankword: "deck",
    meaning: "甲板（デッキ）",
    sentenceJa: "そのコンテナ船は甲板上にクレーンを備えている。",
    sentenceEn: "The container vessel has a crane on its deck."
  },
  {
    word: "cabin",
    blankword: "cabin",
    meaning: "小屋、（船・飛行機の）客室、船室",
    sentenceJa: "かれらは森に小さな丸太小屋を作った。",
    sentenceEn: "They built a small log cabin in the forest."
  },
  {
    word: "anchor",
    blankword: "anchor",
    meaning: "いかり、固定する",
    sentenceJa: "船が動いているときには絶対に錨を下ろしてはいけない。",
    sentenceEn: "Never drop the anchor while the ship is in motion."
  },
  {
    word: "stock",
    blankword: "stocks",
    meaning: "株式、在庫",
    sentenceJa: "祖父はよく多額の金を株式に投資していたものだ。",
    sentenceEn: "My grandfather used to put a lot of money into stocks."
  },
  {
    word: "collapse",
    blankword: "collapse",
    meaning: "崩壊、崩壊する",
    sentenceJa: "彼の素早い行動によって建物の崩壊をまぬがれた。",
    sentenceEn: "His quick action saved the building from collapse."
  },
  {
    word: "thread",
    blankword: "threads",
    meaning: "糸、糸を通す",
    sentenceJa: "その機械は綿を紡いで糸にします。",
    sentenceEn: "The machine spins cotton into threads."
  },
  {
    word: "needle",
    blankword: "needle",
    meaning: "針",
    sentenceJa: "針の穴に糸を通してくれますか。",
    sentenceEn: "Will you pass the thread through the eye of the needle?"
  },
  {
    word: "impression",
    blankword: "Impressions",
    meaning: "印象",
    sentenceJa: "第一印象は心に残りやすい。",
    sentenceEn: "First Impressions tend to stick in our minds."
  },
  {
    word: "path",
    blankword: "path",
    meaning: "通り道、小道",
    sentenceJa: "金属線は電気の通り道になる。",
    sentenceEn: "A metal wire becomes a path for electricity."
  },
  {
    word: "branch",
    blankword: "branch",
    meaning: "支店、枝",
    sentenceJa: "彼は支店の主任に昇進した。",
    sentenceEn: "He has been promoted to the chief of the branch."
  },
  {
    word: "altogether",
    blankword: "altogether",
    meaning: "全体で、総計で",
    sentenceJa: "わが社のすべての支店を閉鎖するには全体で100万ドルのコストがかかる。",
    sentenceEn: "It will cost us one million dollars altogether to close all our branches."
  },
  {
    word: "clockwise",
    blankword: "clockwise",
    meaning: "時計回りに、右回りに",
    sentenceJa: "ハンドルを時計回りに回せばドアが開きます。",
    sentenceEn: "If you turn the handle clockwise, the door will open."
  },
  {
    word: "upright",
    blankword: "upright",
    meaning: "垂直に、直立した",
    sentenceJa: "ひまわりは垂直に成長する背の高い植物だ。",
    sentenceEn: "Sunflowers are tall plants which grow upright."
  },
  {
    word: "respectively",
    blankword: "respectively",
    meaning: "それぞれ",
    sentenceJa: "表1と2はそれぞれ1番目と2番目の実験結果を示している。",
    sentenceEn: "Charts 1 and 2 respectively show the results of the first and second experiments."
  },
  {
    word: "regardless",
    blankword: "regardless",
    meaning: "（～に）かかわらず",
    sentenceJa: "その国では年齢にかかわらずお酒を飲むことはできません。",
    sentenceEn: "In that country, you can't drink alcohol regardless of age."
  },
  {
    word: "gentle",
    blankword: "gentle",
    meaning: "優しい、穏やかな",
    sentenceJa: "水の流れの優しい音を眠りに誘った。",
    sentenceEn: "The gentle sound of the running stream put me to sleep."
  },
  {
    word: "legal",
    blankword: "legal",
    meaning: "合法的な、法律の",
    sentenceJa: "合法か違法かにかかわらず、決してタバコは吸うべきでない。",
    sentenceEn: "You should never smoke regardless of whether it's legal or illegal."
  },
  {
    word: "vast",
    blankword: "vast",
    meaning: "莫大な、広大な",
    sentenceJa: "核反応は莫大なエネルギーを発する。",
    sentenceEn: "A nuclear reaction releases vast amounts of energy."
  },
  {
    word: "thermal",
    blankword: "thermal",
    meaning: "熱の、温度の",
    sentenceJa: "最もよく知られている熱エネルギー源は太陽です。",
    sentenceEn: "The best known source of thermal energy is the sun."
  },
  {
    word: "overall",
    blankword: "overall",
    meaning: "全体的な",
    sentenceJa: "新しい管理システムは全体的な生産コストの削減に貢献した。",
    sentenceEn: "The new management system contributed to reducing overall cost of production."
  },
  {
    word: "sexual",
    blankword: "sexual",
    meaning: "性の、性的な",
    sentenceJa: "その研究では子供の体力に性差があることがわかった。",
    sentenceEn: "The research showed a sexual difference in children's physical performance."
  },
  {
    word: "critical",
    blankword: "critical",
    meaning: "危機的な、決定的な、批判的な",
    sentenceJa: "テロ攻撃のあとその国は危機的状況になっている。",
    sentenceEn: "The country is in a critical situation after the terrorist attack."
  },
  {
    word: "nearby",
    blankword: "nearby",
    meaning: "近くの、近くで",
    sentenceJa: "その患者は近くの病院に運ばれた。",
    sentenceEn: "The patient was taken to the nearby hospital."
  },
  {
    word: "crucial",
    blankword: "crucial",
    meaning: "決定的な、重大な",
    sentenceJa: "その製品の販売ではデザインが決定的な要因だった。",
    sentenceEn: "Design was the crucial element in the sales of the product."
  },
  {
    word: "prior",
    blankword: "prior",
    meaning: "前の、先の",
    sentenceJa: "道具を使う前には点検を忘れないこと。",
    sentenceEn: "Never forget to check tools prior to using them."
  },
  {
    word: "senior",
    blankword: "senior",
    meaning: "上級の、年長の",
    sentenceJa: "彼は退職後この会社の上級顧問になった。",
    sentenceEn: "He became a senior advisor of this company after retirement."
  }
];

console.log("data loaded", quizDataRaw);