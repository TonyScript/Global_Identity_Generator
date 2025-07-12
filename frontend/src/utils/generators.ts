// 国家/地区数据
export const COUNTRIES = {
  zh: {
    CN: "中国",
    US: "美国",
    JP: "日本",
    KR: "韩国",
    GB: "英国",
    DE: "德国",
    FR: "法国",
    CA: "加拿大",
    AU: "澳大利亚",
    SG: "新加坡"
  },
  en: {
    US: "United States",
    CN: "China",
    JP: "Japan",
    KR: "South Korea",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    CA: "Canada",
    AU: "Australia",
    SG: "Singapore"
  }
};

// 随机街道名数据
const STREET_NAMES = {
  CN: {
    zh: [
      "建国路", "复兴路", "和平路", "解放路", "人民路", "中山路", "长安街", "王府井大街",
      "南京路", "淮海路", "外滩", "陆家嘴", "珠江路", "天河路", "深南大道", "科技路",
      "文三路", "西湖大道", "延安路", "体育场路", "武林路", "湖滨路", "南山路", "北山路"
    ],
    en: [
      "Jianguo Road", "Fuxing Road", "Heping Road", "Jiefang Road", "Renmin Road", "Zhongshan Road",
      "Chang'an Avenue", "Wangfujing Street", "Nanjing Road", "Huaihai Road", "The Bund", "Lujiazui",
      "Zhujiang Road", "Tianhe Road", "Shennan Avenue", "Keji Road", "Wensan Road", "Xihu Avenue",
      "Yan'an Road", "Tiyuchang Road", "Wulin Road", "Hubin Road", "Nanshan Road", "Beishan Road"
    ]
  },
  US: {
    zh: [
      "第五大道", "百老汇", "华尔街", "时代广场", "中央公园", "麦迪逊大道", "公园大道", "列克星敦大道",
      "好莱坞大道", "日落大道", "圣莫尼卡大道", "威尼斯海滩", "比佛利山", "圣费尔南多谷", "帕萨迪纳",
      "密歇根大道", "州街", "克拉克街", "迪尔伯恩街", "拉萨尔街", "瓦克大道", "湖滨大道"
    ],
    en: [
      "Fifth Avenue", "Broadway", "Wall Street", "Times Square", "Central Park", "Madison Avenue",
      "Park Avenue", "Lexington Avenue", "Hollywood Boulevard", "Sunset Boulevard", "Santa Monica Boulevard",
      "Venice Beach", "Beverly Hills", "San Fernando Valley", "Pasadena", "Michigan Avenue", "State Street",
      "Clark Street", "Dearborn Street", "LaSalle Street", "Wacker Drive", "Lake Shore Drive"
    ]
  },
  JP: {
    zh: [
      "银座", "新宿", "涩谷", "原宿", "表参道", "六本木", "青山", "代官山", "惠比寿", "目黑",
      "池袋", "秋叶原", "浅草", "上野", "台场", "汐留", "品川", "大井", "蒲田", "羽田",
      "梅田", "难波", "心斋桥", "道顿堀", "天王寺", "阿倍野", "本町", "西梅田", "东梅田"
    ],
    en: [
      "Ginza", "Shinjuku", "Shibuya", "Harajuku", "Omotesando", "Roppongi", "Aoyama", "Daikanyama",
      "Ebisu", "Meguro", "Ikebukuro", "Akihabara", "Asakusa", "Ueno", "Odaiba", "Shiodome", "Shinagawa",
      "Oi", "Kamata", "Haneda", "Umeda", "Namba", "Shinsaibashi", "Dotonbori", "Tennoji", "Abeno",
      "Honmachi", "Nishi-Umeda", "Higashi-Umeda"
    ]
  },
  KR: {
    zh: [
      "明洞", "弘大", "江南", "狎鸥亭", "清潭洞", "三成洞", "蚕室", "汝矣岛", "钟路", "东大门",
      "南大门", "西大门", "北大门", "仁寺洞", "三清洞", "北村", "南山", "汉江", "汉南洞", "梨泰院",
      "新村", "延世大学", "梨花女子大学", "建国大学", "庆熙大学", "成均馆大学", "首尔大学"
    ],
    en: [
      "Myeongdong", "Hongdae", "Gangnam", "Apgujeong", "Cheongdam", "Samseong", "Jamsil", "Yeouido",
      "Jongno", "Dongdaemun", "Namdaemun", "Seodaemun", "Bukdaemun", "Insadong", "Samcheong", "Bukchon",
      "Namsan", "Hangang", "Hannam", "Itaewon", "Sinchon", "Yonsei University", "Ewha Womans University",
      "Konkuk University", "Kyung Hee University", "Sungkyunkwan University", "Seoul National University"
    ]
  },
  GB: {
    zh: [
      "牛津街", "摄政街", "邦德街", "皮卡迪利大街", "特拉法加广场", "莱斯特广场", "考文特花园", "苏荷区",
      "卡纳比街", "波特兰街", "贝克街", "唐宁街", "舰队街", "斯特兰德", "白厅", "威斯敏斯特",
      "肯辛顿", "切尔西", "诺丁山", "卡姆登", "伊斯灵顿", "哈克尼", "格林威治", "金丝雀码头"
    ],
    en: [
      "Oxford Street", "Regent Street", "Bond Street", "Piccadilly", "Trafalgar Square", "Leicester Square",
      "Covent Garden", "Soho", "Carnaby Street", "Portland Street", "Baker Street", "Downing Street",
      "Fleet Street", "Strand", "Whitehall", "Westminster", "Kensington", "Chelsea", "Notting Hill",
      "Camden", "Islington", "Hackney", "Greenwich", "Canary Wharf"
    ]
  },
  DE: {
    zh: [
      "库达姆大街", "选帝侯大街", "菩提树下大街", "弗里德里希大街", "亚历山大广场", "波茨坦广场", "勃兰登堡门",
      "夏洛滕堡", "克罗伊茨贝格", "弗里德里希斯海因", "普伦茨劳尔贝格", "米特", "蒂尔加滕", "舍嫩贝格",
      "施泰格利茨", "策伦多夫", "施潘道", "赖尼肯多夫", "马灿", "利希滕贝格", "特雷普托", "科佩尼克"
    ],
    en: [
      "Kurfürstendamm", "Unter den Linden", "Friedrichstraße", "Alexanderplatz", "Potsdamer Platz",
      "Brandenburg Gate", "Charlottenburg", "Kreuzberg", "Friedrichshain", "Prenzlauer Berg", "Mitte",
      "Tiergarten", "Schöneberg", "Steglitz", "Zehlendorf", "Spandau", "Reinickendorf", "Marzahn",
      "Lichtenberg", "Treptow", "Köpenick"
    ]
  },
  FR: {
    zh: [
      "香榭丽舍大街", "蒙田大街", "圣日耳曼大街", "里沃利街", "旺多姆广场", "协和广场", "巴士底广场",
      "玛莱区", "蒙马特", "拉丁区", "圣米歇尔", "卢森堡", "荣军院", "埃菲尔铁塔", "凯旋门",
      "卢浮宫", "奥赛博物馆", "蓬皮杜中心", "凡尔赛宫", "枫丹白露", "圣心大教堂", "巴黎圣母院"
    ],
    en: [
      "Champs-Élysées", "Avenue Montaigne", "Boulevard Saint-Germain", "Rue de Rivoli", "Place Vendôme",
      "Place de la Concorde", "Place de la Bastille", "Le Marais", "Montmartre", "Quartier Latin",
      "Saint-Michel", "Luxembourg", "Les Invalides", "Tour Eiffel", "Arc de Triomphe", "Louvre",
      "Musée d'Orsay", "Centre Pompidou", "Palace of Versailles", "Fontainebleau", "Sacré-Cœur", "Notre-Dame"
    ]
  },
  CA: {
    zh: [
      "央街", "皇后西街", "国王西街", "布卢尔街", "丹佛斯街", "圣克莱尔", "埃格林顿", "劳伦斯",
      "威尔逊", "谢泼德", "芬奇", "斯蒂尔斯", "北约克", "斯卡伯勒", "埃托比科克", "密西沙加",
      "布兰普顿", "万锦", "列治文山", "奥克维尔", "伯灵顿", "汉密尔顿", "滑铁卢", "基奇纳"
    ],
    en: [
      "Yonge Street", "Queen Street West", "King Street West", "Bloor Street", "Danforth Avenue",
      "St. Clair", "Eglinton", "Lawrence", "Wilson", "Sheppard", "Finch", "Steeles", "North York",
      "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Richmond Hill", "Oakville",
      "Burlington", "Hamilton", "Waterloo", "Kitchener"
    ]
  },
  AU: {
    zh: [
      "乔治街", "皮特街", "马丁广场", "环形码头", "达令港", "邦迪海滩", "曼利海滩", "库吉海滩",
      "帕丁顿", "萨里山", "新镇", "格利伯", "巴尔曼", "罗泽尔", "达令赫斯特", "波茨角",
      "双湾", "沃克吕兹", "邦迪", "库吉", "克罗纳拉", "马鲁布拉", "布赖顿", "圣基尔达"
    ],
    en: [
      "George Street", "Pitt Street", "Martin Place", "Circular Quay", "Darling Harbour", "Bondi Beach",
      "Manly Beach", "Coogee Beach", "Paddington", "Surry Hills", "Newtown", "Glebe", "Balmain",
      "Rozelle", "Darlinghurst", "Potts Point", "Double Bay", "Vaucluse", "Bondi", "Coogee",
      "Cronulla", "Maroubra", "Brighton", "St Kilda"
    ]
  },
  SG: {
    zh: [
      "乌节路", "滨海湾", "牛车水", "小印度", "甘榜格南", "武吉士", "芽笼", "加东", "东海岸",
      "西海岸", "裕廊", "义顺", "宏茂桥", "大巴窑", "碧山", "淡滨尼", "勿洛", "樟宜",
      "圣淘沙", "乌敏岛", "德光岛", "实里达", "榜鹅", "盛港", "后港", "兀兰", "三巴旺"
    ],
    en: [
      "Orchard Road", "Marina Bay", "Chinatown", "Little India", "Kampong Glam", "Bugis", "Geylang",
      "Katong", "East Coast", "West Coast", "Jurong", "Yishun", "Ang Mo Kio", "Toa Payoh", "Bishan",
      "Tampines", "Bedok", "Changi", "Sentosa", "Pulau Ubin", "Pulau Tekong", "Seletar", "Punggol",
      "Sengkang", "Hougang", "Woodlands", "Sembawang"
    ]
  }
};

// 随机城市和地区数据
const CITIES = {
  CN: {
    zh: [
      { city: "北京市", districts: ["朝阳区", "海淀区", "西城区", "东城区", "丰台区", "石景山区", "通州区", "昌平区"] },
      { city: "上海市", districts: ["浦东新区", "黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区"] },
      { city: "广州市", districts: ["天河区", "越秀区", "荔湾区", "海珠区", "白云区", "黄埔区", "番禺区", "花都区"] },
      { city: "深圳市", districts: ["南山区", "福田区", "罗湖区", "宝安区", "龙岗区", "盐田区", "龙华区", "坪山区"] },
      { city: "杭州市", districts: ["西湖区", "上城区", "下城区", "江干区", "拱墅区", "滨江区", "萧山区", "余杭区"] }
    ],
    en: [
      { city: "Beijing", districts: ["Chaoyang District", "Haidian District", "Xicheng District", "Dongcheng District", "Fengtai District", "Shijingshan District", "Tongzhou District", "Changping District"] },
      { city: "Shanghai", districts: ["Pudong New Area", "Huangpu District", "Xuhui District", "Changning District", "Jing'an District", "Putuo District", "Hongkou District", "Yangpu District"] },
      { city: "Guangzhou", districts: ["Tianhe District", "Yuexiu District", "Liwan District", "Haizhu District", "Baiyun District", "Huangpu District", "Panyu District", "Huadu District"] },
      { city: "Shenzhen", districts: ["Nanshan District", "Futian District", "Luohu District", "Bao'an District", "Longgang District", "Yantian District", "Longhua District", "Pingshan District"] },
      { city: "Hangzhou", districts: ["Xihu District", "Shangcheng District", "Xiacheng District", "Jianggan District", "Gongshu District", "Binjiang District", "Xiaoshan District", "Yuhang District"] }
    ]
  },
  US: {
    zh: [
      { city: "纽约市", districts: ["曼哈顿", "布鲁克林", "皇后区", "布朗克斯", "史坦顿岛"] },
      { city: "洛杉矶市", districts: ["好莱坞", "比佛利山", "圣莫尼卡", "威尼斯", "帕萨迪纳", "长滩", "格伦代尔"] },
      { city: "芝加哥市", districts: ["市中心", "林肯公园", "湖景", "柳条公园", "巴克敦", "安德森维尔"] },
      { city: "休斯顿市", districts: ["市中心", "河橡", "高地", "博物馆区", "医疗中心", "西大学"] },
      { city: "凤凰城市", districts: ["市中心", "斯科茨代尔", "坦佩", "梅萨", "钱德勒", "吉尔伯特"] }
    ],
    en: [
      { city: "New York", districts: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"] },
      { city: "Los Angeles", districts: ["Hollywood", "Beverly Hills", "Santa Monica", "Venice", "Pasadena", "Long Beach", "Glendale"] },
      { city: "Chicago", districts: ["Downtown", "Lincoln Park", "Lakeview", "Wicker Park", "Bucktown", "Andersonville"] },
      { city: "Houston", districts: ["Downtown", "River Oaks", "Heights", "Museum District", "Medical Center", "West University"] },
      { city: "Phoenix", districts: ["Downtown", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert"] }
    ]
  },
  JP: {
    zh: [
      { city: "东京都", districts: ["新宿区", "涩谷区", "港区", "中央区", "千代田区", "品川区", "目黑区", "世田谷区"] },
      { city: "大阪市", districts: ["北区", "中央区", "西区", "东区", "天王寺区", "阿倍野区", "浪速区", "西淀川区"] },
      { city: "名古屋市", districts: ["中区", "东区", "西区", "南区", "北区", "守山区", "绿区", "天白区"] },
      { city: "横滨市", districts: ["西区", "中区", "南区", "保土谷区", "矶子区", "金泽区", "港北区", "都筑区"] },
      { city: "神户市", districts: ["中央区", "东滩区", "滩区", "兵库区", "北区", "长田区", "须磨区", "垂水区"] }
    ],
    en: [
      { city: "Tokyo", districts: ["Shinjuku-ku", "Shibuya-ku", "Minato-ku", "Chuo-ku", "Chiyoda-ku", "Shinagawa-ku", "Meguro-ku", "Setagaya-ku"] },
      { city: "Osaka", districts: ["Kita-ku", "Chuo-ku", "Nishi-ku", "Higashi-ku", "Tennoji-ku", "Abeno-ku", "Naniwa-ku", "Nishiyodogawa-ku"] },
      { city: "Nagoya", districts: ["Naka-ku", "Higashi-ku", "Nishi-ku", "Minami-ku", "Kita-ku", "Moriyama-ku", "Midori-ku", "Tenpaku-ku"] },
      { city: "Yokohama", districts: ["Nishi-ku", "Naka-ku", "Minami-ku", "Hodogaya-ku", "Isogo-ku", "Kanazawa-ku", "Kohoku-ku", "Tsuzuki-ku"] },
      { city: "Kobe", districts: ["Chuo-ku", "Higashinada-ku", "Nada-ku", "Hyogo-ku", "Kita-ku", "Nagata-ku", "Suma-ku", "Tarumi-ku"] }
    ]
  },
  KR: {
    zh: [
      { city: "首尔市", districts: ["江南区", "江北区", "江东区", "江西区", "中区", "钟路区", "龙山区", "麻浦区"] },
      { city: "釜山市", districts: ["中区", "西区", "东区", "南区", "北区", "海云台区", "金井区", "沙下区"] },
      { city: "大邱市", districts: ["中区", "东区", "西区", "南区", "北区", "寿城区", "达西区", "达城郡"] },
      { city: "仁川市", districts: ["中区", "东区", "南区", "延寿区", "南洞区", "富平区", "桂阳区", "西区"] },
      { city: "光州市", districts: ["东区", "西区", "南区", "北区", "光山区", "全南区", "全北区", "务安郡"] }
    ],
    en: [
      { city: "Seoul", districts: ["Gangnam-gu", "Gangbuk-gu", "Gangdong-gu", "Gangseo-gu", "Jung-gu", "Jongno-gu", "Yongsan-gu", "Mapo-gu"] },
      { city: "Busan", districts: ["Jung-gu", "Seo-gu", "Dong-gu", "Nam-gu", "Buk-gu", "Haeundae-gu", "Geumjeong-gu", "Saha-gu"] },
      { city: "Daegu", districts: ["Jung-gu", "Dong-gu", "Seo-gu", "Nam-gu", "Buk-gu", "Suseong-gu", "Dalseo-gu", "Dalseong-gun"] },
      { city: "Incheon", districts: ["Jung-gu", "Dong-gu", "Nam-gu", "Yeonsu-gu", "Namdong-gu", "Bupyeong-gu", "Gyeyang-gu", "Seo-gu"] },
      { city: "Gwangju", districts: ["Dong-gu", "Seo-gu", "Nam-gu", "Buk-gu", "Gwangju-gu", "Jeonnam-gu", "Jeonbuk-gu", "Muan-gun"] }
    ]
  },
  GB: {
    zh: [
      { city: "伦敦市", districts: ["威斯敏斯特", "卡姆登", "伊斯灵顿", "哈克尼", "格林威治", "南华克", "兰贝斯", "旺兹沃思"] },
      { city: "曼彻斯特市", districts: ["市中心", "索尔福德", "特拉福德", "斯托克波特", "奥尔德姆", "罗奇代尔", "伯里", "博尔顿"] },
      { city: "伯明翰市", districts: ["市中心", "埃德巴斯顿", "索利赫尔", "沃尔索尔", "桑德韦尔", "达德利", "伍尔弗汉普顿", "考文垂"] },
      { city: "利物浦市", districts: ["市中心", "诺斯利", "塞夫顿", "圣海伦斯", "威勒尔", "诺斯利", "利物浦", "默西塞德"] },
      { city: "利兹市", districts: ["市中心", "布拉德福德", "韦克菲尔德", "卡尔德代尔", "柯克利斯", "北约克郡", "西约克郡", "南约克郡"] }
    ],
    en: [
      { city: "London", districts: ["Westminster", "Camden", "Islington", "Hackney", "Greenwich", "Southwark", "Lambeth", "Wandsworth"] },
      { city: "Manchester", districts: ["City Centre", "Salford", "Trafford", "Stockport", "Oldham", "Rochdale", "Bury", "Bolton"] },
      { city: "Birmingham", districts: ["City Centre", "Edgbaston", "Solihull", "Walsall", "Sandwell", "Dudley", "Wolverhampton", "Coventry"] },
      { city: "Liverpool", districts: ["City Centre", "Knowsley", "Sefton", "St Helens", "Wirral", "Knowsley", "Liverpool", "Merseyside"] },
      { city: "Leeds", districts: ["City Centre", "Bradford", "Wakefield", "Calderdale", "Kirklees", "North Yorkshire", "West Yorkshire", "South Yorkshire"] }
    ]
  },
  DE: {
    zh: [
      { city: "柏林市", districts: ["米特", "弗里德里希斯海因", "普伦茨劳尔贝格", "克罗伊茨贝格", "舍嫩贝格", "施泰格利茨", "策伦多夫", "施潘道"] },
      { city: "慕尼黑市", districts: ["阿尔特施塔特", "马克西米利安施塔特", "路德维希斯福施塔特", "伊萨尔福施塔特", "奥伯格森", "翁特伯格森", "施瓦宾格", "海德豪森"] },
      { city: "汉堡市", districts: ["阿尔托纳", "贝尔格多夫", "埃姆斯比特尔", "哈堡", "米特", "新施塔特", "北区", "万茨贝克"] },
      { city: "科隆市", districts: ["因纳施塔特", "林登塔尔", "埃伦费尔德", "尼普斯", "波尔茨", "卡尔克", "穆尔海姆", "布赫海姆"] },
      { city: "法兰克福市", districts: ["因纳施塔特", "博恩海姆", "博肯海姆", "埃施博恩", "巴特洪堡", "奥芬巴赫", "哈瑙", "达姆施塔特"] }
    ],
    en: [
      { city: "Berlin", districts: ["Mitte", "Friedrichshain", "Prenzlauer Berg", "Kreuzberg", "Schöneberg", "Steglitz", "Zehlendorf", "Spandau"] },
      { city: "Munich", districts: ["Altstadt", "Maximilianstadt", "Ludwigsvorstadt", "Isarvorstadt", "Obergiesing", "Untergiesing", "Schwabing", "Haidhausen"] },
      { city: "Hamburg", districts: ["Altona", "Bergedorf", "Eimsbüttel", "Harburg", "Mitte", "Neustadt", "Nord", "Wandsbek"] },
      { city: "Cologne", districts: ["Innenstadt", "Lindenthal", "Ehrenfeld", "Nippes", "Porz", "Kalk", "Mülheim", "Buchheim"] },
      { city: "Frankfurt", districts: ["Innenstadt", "Bornheim", "Bockenheim", "Eschborn", "Bad Homburg", "Offenbach", "Hanau", "Darmstadt"] }
    ]
  },
  FR: {
    zh: [
      { city: "巴黎市", districts: ["第一区", "第二区", "第三区", "第四区", "第五区", "第六区", "第七区", "第八区"] },
      { city: "里昂市", districts: ["第一区", "第二区", "第三区", "第四区", "第五区", "第六区", "第七区", "第八区"] },
      { city: "马赛市", districts: ["第一区", "第二区", "第三区", "第四区", "第五区", "第六区", "第七区", "第八区"] },
      { city: "图卢兹市", districts: ["第一区", "第二区", "第三区", "第四区", "第五区", "第六区", "第七区", "第八区"] },
      { city: "尼斯市", districts: ["第一区", "第二区", "第三区", "第四区", "第五区", "第六区", "第七区", "第八区"] }
    ],
    en: [
      { city: "Paris", districts: ["1st Arrondissement", "2nd Arrondissement", "3rd Arrondissement", "4th Arrondissement", "5th Arrondissement", "6th Arrondissement", "7th Arrondissement", "8th Arrondissement"] },
      { city: "Lyon", districts: ["1st Arrondissement", "2nd Arrondissement", "3rd Arrondissement", "4th Arrondissement", "5th Arrondissement", "6th Arrondissement", "7th Arrondissement", "8th Arrondissement"] },
      { city: "Marseille", districts: ["1st Arrondissement", "2nd Arrondissement", "3rd Arrondissement", "4th Arrondissement", "5th Arrondissement", "6th Arrondissement", "7th Arrondissement", "8th Arrondissement"] },
      { city: "Toulouse", districts: ["1st Arrondissement", "2nd Arrondissement", "3rd Arrondissement", "4th Arrondissement", "5th Arrondissement", "6th Arrondissement", "7th Arrondissement", "8th Arrondissement"] },
      { city: "Nice", districts: ["1st Arrondissement", "2nd Arrondissement", "3rd Arrondissement", "4th Arrondissement", "5th Arrondissement", "6th Arrondissement", "7th Arrondissement", "8th Arrondissement"] }
    ]
  },
  CA: {
    zh: [
      { city: "多伦多市", districts: ["市中心", "北约克", "斯卡伯勒", "埃托比科克", "东约克", "约克", "老多伦多", "东多伦多"] },
      { city: "温哥华市", districts: ["市中心", "西区", "基茨兰诺", "东区", "南区", "北区", "西区", "东区"] },
      { city: "蒙特利尔市", districts: ["老蒙特利尔", "市中心", "高原", "小意大利", "唐人街", "西岛", "拉瓦尔", "南岸"] },
      { city: "卡尔加里市", districts: ["市中心", "西北区", "东北区", "西南区", "东南区", "西区", "东区", "北区"] },
      { city: "渥太华市", districts: ["市中心", "西区", "东区", "南区", "北区", "卡纳塔", "奥尔良", "巴里黑文"] }
    ],
    en: [
      { city: "Toronto", districts: ["Downtown", "North York", "Scarborough", "Etobicoke", "East York", "York", "Old Toronto", "East Toronto"] },
      { city: "Vancouver", districts: ["Downtown", "West End", "Kitsilano", "East Side", "South Side", "North Side", "West Side", "East Side"] },
      { city: "Montreal", districts: ["Old Montreal", "Downtown", "Plateau", "Little Italy", "Chinatown", "West Island", "Laval", "South Shore"] },
      { city: "Calgary", districts: ["Downtown", "Northwest", "Northeast", "Southwest", "Southeast", "West", "East", "North"] },
      { city: "Ottawa", districts: ["Downtown", "West End", "East End", "South End", "North End", "Kanata", "Orleans", "Barrhaven"] }
    ]
  },
  AU: {
    zh: [
      { city: "悉尼市", districts: ["市中心", "东区", "西区", "北区", "南区", "内西区", "外西区", "北岸"] },
      { city: "墨尔本市", districts: ["市中心", "东区", "西区", "北区", "南区", "内东区", "外东区", "东南区"] },
      { city: "布里斯班市", districts: ["市中心", "北区", "南区", "东区", "西区", "内西区", "外西区", "西北区"] },
      { city: "珀斯市", districts: ["市中心", "北区", "南区", "东区", "西区", "内西区", "外西区", "东北区"] },
      { city: "阿德莱德市", districts: ["市中心", "北区", "南区", "东区", "西区", "内西区", "外西区", "东北区"] }
    ],
    en: [
      { city: "Sydney", districts: ["City Centre", "Eastern Suburbs", "Western Suburbs", "Northern Suburbs", "Southern Suburbs", "Inner West", "Outer West", "North Shore"] },
      { city: "Melbourne", districts: ["City Centre", "Eastern Suburbs", "Western Suburbs", "Northern Suburbs", "Southern Suburbs", "Inner East", "Outer East", "Southeast"] },
      { city: "Brisbane", districts: ["City Centre", "Northern Suburbs", "Southern Suburbs", "Eastern Suburbs", "Western Suburbs", "Inner West", "Outer West", "Northwest"] },
      { city: "Perth", districts: ["City Centre", "Northern Suburbs", "Southern Suburbs", "Eastern Suburbs", "Western Suburbs", "Inner West", "Outer West", "Northeast"] },
      { city: "Adelaide", districts: ["City Centre", "Northern Suburbs", "Southern Suburbs", "Eastern Suburbs", "Western Suburbs", "Inner West", "Outer West", "Northeast"] }
    ]
  },
  SG: {
    zh: [
      { city: "新加坡市", districts: ["中央区", "东区", "西区", "北区", "南区", "东北区", "西北区", "东南区"] },
      { city: "新加坡市", districts: ["中央区", "东区", "西区", "北区", "南区", "东北区", "西北区", "东南区"] },
      { city: "新加坡市", districts: ["中央区", "东区", "西区", "北区", "南区", "东北区", "西北区", "东南区"] },
      { city: "新加坡市", districts: ["中央区", "东区", "西区", "北区", "南区", "东北区", "西北区", "东南区"] },
      { city: "新加坡市", districts: ["中央区", "东区", "西区", "北区", "南区", "东北区", "西北区", "东南区"] }
    ],
    en: [
      { city: "Singapore", districts: ["Central Region", "East Region", "West Region", "North Region", "South Region", "Northeast Region", "Northwest Region", "Southeast Region"] },
      { city: "Singapore", districts: ["Central Region", "East Region", "West Region", "North Region", "South Region", "Northeast Region", "Northwest Region", "Southeast Region"] },
      { city: "Singapore", districts: ["Central Region", "East Region", "West Region", "North Region", "South Region", "Northeast Region", "Northwest Region", "Southeast Region"] },
      { city: "Singapore", districts: ["Central Region", "East Region", "West Region", "North Region", "South Region", "Northeast Region", "Northwest Region", "Southeast Region"] },
      { city: "Singapore", districts: ["Central Region", "East Region", "West Region", "North Region", "South Region", "Northeast Region", "Northwest Region", "Southeast Region"] }
    ]
  }
};

// 手机号格式
export const PHONE_FORMATS = {
  CN: { prefix: "+86", length: 11, format: "1XXXXXXXXXX" },
  US: { prefix: "+1", length: 10, format: "XXX-XXX-XXXX" },
  JP: { prefix: "+81", length: 10, format: "XX-XXXX-XXXX" },
  KR: { prefix: "+82", length: 10, format: "XX-XXXX-XXXX" },
  GB: { prefix: "+44", length: 10, format: "XXXX XXXXXX" },
  DE: { prefix: "+49", length: 10, format: "XXX XXXXXXX" },
  FR: { prefix: "+33", length: 9, format: "X XX XX XX XX" },
  CA: { prefix: "+1", length: 10, format: "XXX-XXX-XXXX" },
  AU: { prefix: "+61", length: 9, format: "X XXXX XXXX" },
  SG: { prefix: "+65", length: 8, format: "XXXX XXXX" }
};

// 信用卡数据
export const CREDIT_CARD_DATA = {
  CN: {
    zh: { name: "中国银联", en: "UnionPay" },
    prefixes: ["62", "60"],
    length: 16
  },
  US: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  JP: {
    zh: { name: "JCB", en: "JCB" },
    prefixes: ["35"],
    length: 16
  },
  KR: {
    zh: { name: "BC卡", en: "BC Card" },
    prefixes: ["62"],
    length: 16
  },
  GB: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  DE: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  FR: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  CA: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  AU: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  },
  SG: {
    zh: { name: "Visa", en: "Visa" },
    prefixes: ["4"],
    length: 16
  }
};

// 随机数生成工具
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Luhn算法校验
function luhnChecksum(cardNumber: string): number {
  const digits = cardNumber.split('').map(Number);
  const oddDigits = digits.filter((_, i) => i % 2 === 0);
  const evenDigits = digits.filter((_, i) => i % 2 === 1);
  let checksum = oddDigits.reduce((sum, digit) => sum + digit, 0);
  for (const digit of evenDigits) {
    checksum += Math.floor(digit * 2 / 10) + (digit * 2 % 10);
  }
  return checksum % 10;
}

// 生成Luhn校验的信用卡号
function generateLuhnCardNumber(prefix: string, length: number): string {
  const remainingLength = length - prefix.length - 1;
  const randomPart = Array.from({ length: remainingLength }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  const cardWithoutChecksum = prefix + randomPart + '0';
  
  const checksum = luhnChecksum(cardWithoutChecksum);
  const finalChecksum = checksum === 0 ? 0 : 10 - checksum;
  
  return prefix + randomPart + finalChecksum;
}

// 生成随机地址
export function generateAddress(country: string, language: 'zh' | 'en'): string {
  if (!CITIES[country as keyof typeof CITIES]) {
    throw new Error(`不支持的国家: ${country}`);
  }
  
  const cities = CITIES[country as keyof typeof CITIES][language];
  const cityData = getRandomElement(cities);
  const district = getRandomElement(cityData.districts);
  
  // 生成随机门牌号
  const buildingNumber = getRandomNumber(1, 999);
  const floorNumber = getRandomNumber(1, 50);
  const roomNumber = getRandomNumber(101, 999);
  
  // 生成随机街道名
  const streetNames = STREET_NAMES[country as keyof typeof STREET_NAMES]?.[language] || [];
  const streetName = streetNames.length > 0 ? getRandomElement(streetNames) : "Main Street";
  
  if (language === 'zh') {
    // 中文格式
    if (country === 'CN') {
      return `${cityData.city}${district}${streetName}${buildingNumber}号${floorNumber}层${roomNumber}室`;
    } else if (country === 'US') {
      return `${buildingNumber} ${streetName}, ${district}, ${cityData.city}`;
    } else if (country === 'JP') {
      return `${cityData.city}${district}${streetName}${buildingNumber}-${floorNumber}-${roomNumber}`;
    }
  } else {
    // 英文格式
    if (country === 'CN') {
      return `${buildingNumber} ${streetName}, ${district}, ${cityData.city}`;
    } else if (country === 'US') {
      return `${buildingNumber} ${streetName}, ${district}, ${cityData.city}`;
    } else if (country === 'JP') {
      return `${buildingNumber}-${floorNumber}-${roomNumber} ${streetName}, ${district}, ${cityData.city}`;
    }
  }
  
  // 默认格式
  return `${buildingNumber} ${streetName}, ${district}, ${cityData.city}`;
}

// 生成随机手机号
export function generatePhoneNumber(country: string, language: 'zh' | 'en'): string {
  if (!PHONE_FORMATS[country as keyof typeof PHONE_FORMATS]) {
    throw new Error(`不支持的国家: ${country}`);
  }
  
  const format = PHONE_FORMATS[country as keyof typeof PHONE_FORMATS];
  
  // 生成随机数字
  const digits = Array.from({ length: format.length }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  
  switch (country) {
    case 'CN':
      return `${format.prefix} ${digits}`;
    case 'US':
    case 'CA':
      return `${format.prefix} ${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    case 'JP':
    case 'KR':
      return `${format.prefix} ${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
    case 'GB':
      return `${format.prefix} ${digits.slice(0, 4)} ${digits.slice(4)}`;
    case 'DE':
      return `${format.prefix} ${digits.slice(0, 3)} ${digits.slice(3)}`;
    case 'FR':
      return `${format.prefix} ${digits[0]} ${digits.slice(1, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7)}`;
    case 'AU':
      return `${format.prefix} ${digits[0]} ${digits.slice(1, 5)} ${digits.slice(5)}`;
    case 'SG':
      return `${format.prefix} ${digits.slice(0, 4)} ${digits.slice(4)}`;
    default:
      return `${format.prefix} ${digits}`;
  }
}

// 生成随机信用卡信息
export function generateCreditCard(country: string, language: 'zh' | 'en'): {
  card_number: string;
  expiry_month: string;
  expiry_year: string;
  cvv: string;
  card_type: string;
} {
  if (!CREDIT_CARD_DATA[country as keyof typeof CREDIT_CARD_DATA]) {
    throw new Error(`不支持的国家: ${country}`);
  }
  
  const cardData = CREDIT_CARD_DATA[country as keyof typeof CREDIT_CARD_DATA];
  const prefix = getRandomElement(cardData.prefixes);
  const cardNumber = generateLuhnCardNumber(prefix, cardData.length);
  
  // 生成随机有效期（未来1-10年）
  const currentYear = new Date().getFullYear();
  const expYear = currentYear + getRandomNumber(1, 10);
  const expMonth = getRandomNumber(1, 12);
  
  // 生成随机CVV
  const cvv = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
  
  return {
    card_number: cardNumber,
    expiry_month: expMonth.toString().padStart(2, '0'),
    expiry_year: expYear.toString(),
    cvv,
    card_type: language === 'zh' ? cardData.zh.name : cardData.zh.en
  };
} 