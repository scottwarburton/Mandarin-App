import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"


function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");

  return (
    <div id="app">
      <h1>Learning Mandarin</h1>

      {topic === "" && lesson === "" && <h3>Welcome to Learning Mandarin by Scott</h3>} 

      { topic === "" &&
        <div className="selectionForm">
          <h3>Topics:</h3>
          <button className="selection" name="topics" onClick={() => setTopic("Everyday")}>Everyday</button>
          <button className="selection" name="topics" onClick={() => setTopic("Travel")}>Travel</button>
          <button className="selection" name="topics" onClick={() => setTopic("Industries")}>Industries</button>
        </div>
      }
      { topic === "Everyday" && lesson === "" &&
        <div className="selectionForm">
          <h3>Lessons:</h3>
          <button className="selection" name="lessons" onClick={() => setLesson("Greetings")}>Greetings</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Activities")}>Activities</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Shopping")}>Shopping</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Casual Talk")}>Casual talk</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Grammar")}>Grammar</button>
        </div>
      }
      { topic === "Travel" && lesson === "" &&
        <form className="selectionForm">
          <button className="selection" name="lessons" onClick={() => setLesson("Transport")}>Transport</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Locations")}>Locations</button>
        </form>
      }
      { topic === "Industries" && lesson === "" &&
        <form className="selectionForm">
          <button className="selection" name="lessons" onClick={() => setLesson("Economics")}>Economics</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Technology")}>Technology</button>
        </form>
      }

      { topic !== "" && lesson !== "" &&
        <form>
          <button className="selection" name="change" onClick={() => {
            setTopic("");
            setLesson("");
          }}>Change Topic</button>
          <button className="selection" name="change" onClick={() => setLesson("")}>Change Lesson</button>
        </form>
      }

      <div id="box">
        {lesson === "Greetings" ? <Lesson lesson={lesson} flashcards={GREETINGS} sentences={GREETINGS_SENTENCES} /> : null}
        {lesson === "Activities" ? <Lesson lesson={lesson} flashcards={ACTIVITIES} sentences={ACTIVITIES_SENTENCES} /> : null}
        {lesson === "Shopping" ? <Lesson lesson={lesson} flashcards={SHOPPING} sentences={SHOPPING_SENTENCES} /> : null}
        {lesson === "Casual Talk" ? <Lesson lesson={lesson} flashcards={CASUALTALK} sentences={CASUALTALK_SENTENCES} /> : null}
        {lesson === "Grammar" ? <Lesson lesson={lesson} flashcards={GRAMMAR} sentences={GRAMMAR_SENTENCES} /> : null}
        {lesson === "Transport" ? <Lesson lesson={lesson} flashcards={TRANSPORT} sentences={TRANSPORT_SENTENCES} /> : null}
        {lesson === "Locations" ? <Lesson lesson={lesson} flashcards={LOCATIONS} sentences={LOCATIONS_SENTENCES} /> : null}
        {lesson === "Economics" ? <Lesson lesson={lesson} flashcards={ECONOMICS} sentences={ECONOMICS_SENTENCES} /> : null}
        {lesson === "Technology" ? <Lesson lesson={lesson} flashcards={TECHNOLOGY} sentences={TECHNOLOGY_SENTENCES} /> : null}
      </div>
    </div>
  );

}

export default App;


const GREETINGS = [
  {
      id: 1,
      english: "hello",
      mandarin: "你好",
      pinyin: "nǐ hǎo"
  },
  {
      id: 2,
      english: "goodbye",
      mandarin: "再见",
      pinyin: "zàijiàn"
  },
  {
      id: 3,
      english: "he/her",
      mandarin: "他/她",
      pinyin: "tā"
  },
  {
      id: 4,
      english: "we",
      mandarin: "我们",
      pinyin: "wǒmen"
  },
  {
      id: 5,
      english: "thank you",
      mandarin: "谢谢",
      pinyin: "xièxiè"
  },
  {
      id: 6,
      english: "name",
      mandarin: "名字",
      pinyin: "míngzì"
  },
  {
      id: 7,
      english: "yes",
      mandarin: "是的",
      pinyin: "shì de"
  },
  {
      id: 8,
      english: "no",
      mandarin: "不是",
      pinyin: "bùshì"
  },
  {
      id: 9,
      english: "excuse me",
      mandarin: "不好意思",
      pinyin: "bù hǎoyìsi"
  },
  {
      id: 10,
      english: "you're welcome",
      mandarin: "不客气",
      pinyin: "bù kèqì"
  },
  {
      id: 11,
      english: "no problem",
      mandarin: "没关系",
      pinyin: "méiguānxì"
  },
  {
      id: 12,
      english: "recently",
      mandarin: "最近",
      pinyin: "zuìjìn"
  },
  {
      id: 13,
      english: "good",
      mandarin: "好",
      pinyin: "hǎo"
  },
  {
      id: 14,
      english: "not good",
      mandarin: "不好",
      pinyin: "bù hǎo"
  },
  {
      id: 15,
      english: "very",
      mandarin: "很",
      pinyin: "hěn"
  },
  {
      id: 16,
      english: "and you?",
      mandarin: "你呢",
      pinyin: "nǐ ne"
  },
  {
      id: 17,
      english: "called",
      mandarin: "叫",
      pinyin: "jiào"
  },
  {
      id: 18,
      english: "how is",
      mandarin: "怎么样",
      pinyin: "zěnme yàng"
  }
]
const GREETINGS_SENTENCES = [
  "你好，最近怎么样",
  "很好谢谢，你呢",
  "不好意思，你叫什么名字"
]

const ACTIVITIES = [
  {
      id: 1,
      english: "eat",
      mandarin: "吃",
      pinyin: "chī"
  },
  {
    id: 2,
    english: "drink",
    mandarin: "喝",
    pinyin: "hē"
  },
  {
    id: 3,
    english: "read",
    mandarin: "读",
    pinyin: "dú"
  },
  {
    id: 4,
    english: "write",
    mandarin: "写",
    pinyin: "xiě"
  },
  {
    id: 5,
    english: "walk",
    mandarin: "走",
    pinyin: "zǒu"
  },
  {
    id: 6,
    english: "watch",
    mandarin: "看",
    pinyin: "kàn"
  },
  {
    id: 7,
    english: "like",
    mandarin: "喜欢",
    pinyin: "xǐhuān"
  },
  {
    id: 8,
    english: "want",
    mandarin: "要",
    pinyin: "yào"
  },
  {
    id: 9,
    english: "love",
    mandarin: "爱",
    pinyin: "ai"
  },
  {
    id: 10,
    english: "think",
    mandarin: "觉得",
    pinyin: "juédé"
  },
  {
    id: 11,
    english: "would like",
    mandarin: "想",
    pinyin: "xiǎng"
  },
  {
    id: 12,
    english: "say",
    mandarin: "说",
    pinyin: "shuō"
  },
  {
    id: 13,
    english: "hear",
    mandarin: "听",
    pinyin: "tīng"
  },
  {
    id: 14,
    english: "understand",
    mandarin: "明白",
    pinyin: "míngbái"
  },
  {
    id: 15,
    english: "go",
    mandarin: "去",
    pinyin: "qù"
  },
  {
    id: 16,
    english: "come",
    mandarin: "来",
    pinyin: "lái"
  },
  {
    id: 17,
    english: "swim",
    mandarin: "游泳",
    pinyin: "yóuyǒng"
  },
  {
    id: 18,
    english: "run",
    mandarin: "跑步",
    pinyin: "pǎobù"
  }
]
const ACTIVITIES_SENTENCES = [
  "我喜欢去电影院，你想去吗",
  "我不明白你，请再说一遍",
  "听起来挺好的"
]
const SHOPPING = [
  {
      id: 1,
      english: "buy",
      mandarin: "买",
      pinyin: "mǎi"
  },
  {
    id: 2,
    english: "sell",
    mandarin: "卖",
    pinyin: "mài"
  },
  {
    id: 3,
    english: "receipt",
    mandarin: "支票 / 收据",
    pinyin: "zhīpiào / shōujù"
  },
  {
    id: 4,
    english: "change (money)",
    mandarin: "领钱",
    pinyin: "lǐng qián"
  },
  {
    id: 5,
    english: "to pay",
    mandarin: "支付",
    pinyin: "zhīfù"
  },
  {
    id: 6,
    english: "payment",
    mandarin: "付款",
    pinyin: "fùkuǎn"
  },
  {
    id: 7,
    english: "WePay",
    mandarin: "微信",
    pinyin: "Wēixìn"
  },
  {
    id: 8,
    english: "AliPay",
    mandarin: "支付宝",
    pinyin: "Zhīfùbǎo"
  },
  {
    id: 9,
    english: "cheap",
    mandarin: "便宜",
    pinyin: "piányí"
  },
  {
    id: 10,
    english: "expensive",
    mandarin: "贵",
    pinyin: "guì"
  },
  {
    id: 11,
    english: "bag",
    mandarin: "包 / 袋子",
    pinyin: "bāo / dàizi"
  },
  {
    id: 12,
    english: "need anything else",
    mandarin: "还有别的吗",
    pinyin: "hái yǒu bié de ma"
  },
  {
    id: 13,
    english: "welcome",
    mandarin: "欢迎光临",
    pinyin: "huānyíng guānglín"
  },
  {
    id: 14,
    english: "take care",
    mandarin: "请慢走",
    pinyin: "qǐng màn zǒu"
  },
  {
    id: 15,
    english: "pay the bill",
    mandarin: "买单",
    pinyin: "mǎidān"
  },
  {
    id: 16,
    english: "menu",
    mandarin: "菜单",
    pinyin: "càidān"
  },
  {
    id: 17,
    english: "shopping",
    mandarin: "购物",
    pinyin: "gòuwù"
  },
  {
    id: 18,
    english: "how much",
    mandarin: "多少钱",
    pinyin: "duōshǎo qián"
  }
]
const SHOPPING_SENTENCES = [
  "你们还想别的吗",
  "我可以支付吗",
  "这些多少钱"
]
const CASUALTALK = [
  {
      id: 1,
      english: "聊天",
      mandarin: "",
      pinyin: ""
  },
  {
    id: 2,
    english: "吃了吗",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 3,
    english: "算了吧",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 4,
    english: "我不管",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 5,
    english: "真的假的",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 6,
    english: "麻烦",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 7,
    english: "想的美",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 8,
    english: "但愿吧",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 9,
    english: "原来如此",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 10,
    english: "那倒是",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 11,
    english: "开玩笑的",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 12,
    english: "谁说的",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 13,
    english: "那怎么行啊",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 14,
    english: "真是个悲剧",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 15,
    english: "不好笑",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 16,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 17,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 18,
    english: "",
    mandarin: "",
    pinyin: ""
  }
]
const CASUALTALK_SENTENCES = [
  "不管你喜不喜欢..",
  "",
  ""
]
const GRAMMAR = [
  {
      id: 1,
      english: "",
      mandarin: "汉子",
      pinyin: ""
  },
  {
    id: 2,
    english: "",
    mandarin: "单词 / 词语",
    pinyin: ""
  },
  {
    id: 3,
    english: "",
    mandarin: "子母",
    pinyin: ""
  },
  {
    id: 4,
    english: "",
    mandarin: "拼写",
    pinyin: ""
  },
  {
    id: 5,
    english: "",
    mandarin: "句子",
    pinyin: ""
  },
  {
    id: 6,
    english: "",
    mandarin: "语言",
    pinyin: ""
  },
  {
    id: 7,
    english: "",
    mandarin: "发音 / 读音",
    pinyin: ""
  },
  {
    id: 8,
    english: "",
    mandarin: "声调",
    pinyin: ""
  },
  {
    id: 9,
    english: "",
    mandarin: "流利",
    pinyin: ""
  },
  {
    id: 10,
    english: "",
    mandarin: "拼音",
    pinyin: ""
  },
  {
    id: 11,
    english: "",
    mandarin: "简体中文",
    pinyin: ""
  },
  {
    id: 12,
    english: "",
    mandarin: "繁体中文",
    pinyin: ""
  },
  {
    id: 13,
    english: "",
    mandarin: "明白 / 懂 / 了解",
    pinyin: ""
  },
  {
    id: 14,
    english: "paragraph",
    mandarin: "段落",
    pinyin: ""
  },
  {
    id: 15,
    english: "dialogue",
    mandarin: "对话",
    pinyin: ""
  },
  {
    id: 16,
    english: "article",
    mandarin: "文章",
    pinyin: ""
  },
  {
    id: 17,
    english: "reading (n)",
    mandarin: "阅读",
    pinyin: ""
  },
  {
    id: 18,
    english: "short passage",
    mandarin: "短话",
    pinyin: ""
  }
]
const GRAMMAR_SENTENCES = [
  "",
  "",
  ""
]

const TRANSPORT = [
  {
    id: 1,
    english: "car",
    mandarin: "车",
    pinyin: "chē"
  },
  {
    id: 2,
    english: "train",
    mandarin: "火车",
    pinyin: "huǒchē"
  },
  {
    id: 3,
    english: "plane",
    mandarin: "飞机",
    pinyin: "fēijī"
  },
  {
    id: 4,
    english: "motorcycle",
    mandarin: "摩托车",
    pinyin: "mótuō chē"
  },
  {
    id: 5,
    english: "scooter",
    mandarin: "电动车",
    pinyin: "diàndòng chē"
  },
  {
    id: 6,
    english: "bicycle",
    mandarin: "自行车",
    pinyin: "zìxíngchē"
  },
  {
    id: 7,
    english: "bus",
    mandarin: "公车",
    pinyin: "gōngchē"
  },
  {
    id: 8,
    english: "train station",
    mandarin: "火车站",
    pinyin: "zhàn"
  },
  {
    id: 9,
    english: "airport",
    mandarin: "飞机场",
    pinyin: "fēijī chǎng"
  },
  {
    id: 10,
    english: "ticket",
    mandarin: "票",
    pinyin: "piào"
  },
  {
    id: 11,
    english: "subway",
    mandarin: "地铁",
    pinyin: "dìtiě"
  },
  {
    id: 12,
    english: "taxi",
    mandarin: "出租车",
    pinyin: "chūzū chē"
  },
  {
    id: 13,
    english: "to take",
    mandarin: "乘坐",
    pinyin: "chéngzuò"
  },
  {
    id: 14,
    english: "map",
    mandarin: "地图",
    pinyin: "dìtú"
  },
  {
    id: 15,
    english: "passport",
    mandarin: "护照",
    pinyin: "hùzhào"
  },
  {
    id: 16,
    english: "luggage",
    mandarin: "行李",
    pinyin: "xínglǐ"
  },
  {
    id: 17,
    english: "early",
    mandarin: "早了",
    pinyin: "zǎole"
  },
  {
    id: 18,
    english: "late",
    mandarin: "迟到了",
    pinyin: "chídàole"
  }
]
const TRANSPORT_SENTENCES = [
  "我迟到了因为公车太慢了",
  "为什么你乘坐公车",
  "因为火车票太贵了，并且火车站太远"
]

const LOCATIONS = [
  {
      id: 1,
      english: "Australia",
      mandarin: "澳洲",
      pinyin: "Àodàlìyǎ"
  },
  {
    id: 2,
    english: "China",
    mandarin: "中国",
    pinyin: "Zhōngguó"
  },
  {
    id: 3,
    english: "US",
    mandarin: "美国",
    pinyin: "Měiguó"
  },
  {
    id: 4,
    english: "UK",
    mandarin: "英国",
    pinyin: "Yīngguó"
  },
  {
    id: 5,
    english: "Melbourne",
    mandarin: "墨尔本",
    pinyin: "Mò'ěrběn"
  },
  {
    id: 6,
    english: "Shanghai",
    mandarin: "上海",
    pinyin: "Shànghǎi"
  },
  {
    id: 7,
    english: "Beijing",
    mandarin: "北京",
    pinyin: "Běijīng"
  },
  {
    id: 8,
    english: "Hong Kong",
    mandarin: "香港",
    pinyin: "Xiānggǎng"
  },
  {
    id: 9,
    english: "London",
    mandarin: "伦敦",
    pinyin: "Lúndūn"
  },
  {
    id: 10,
    english: "Paris",
    mandarin: "巴黎",
    pinyin: "Bālí"
  },
  {
    id: 11,
    english: "New York",
    mandarin: "纽约",
    pinyin: "Niǔyuē"
  },
  {
    id: 12,
    english: "English",
    mandarin: "英文",
    pinyin: "Yīngguó"
  },
  {
    id: 13,
    english: "Chinese",
    mandarin: "中文",
    pinyin: "Zhōngguó"
  },
  {
    id: 14,
    english: "French",
    mandarin: "法文",
    pinyin: "Fǎwén"
  },
  {
    id: 15,
    english: "nationality",
    mandarin: "国籍",
    pinyin: "guójí"
  },
  {
    id: 16,
    english: "country",
    mandarin: "国家",
    pinyin: "guójiā"
  },
  {
    id: 17,
    english: "city",
    mandarin: "城市",
    pinyin: "chéngshì"
  },
  {
    id: 18,
    english: "state/province",
    mandarin: "州",
    pinyin: "zhōu"
  }
]
const LOCATIONS_SENTENCES = [
  "我来自澳洲",
  "现在我住在墨尔本，但是我想住在上海",
  "你来自哪个城市"
]

const ECONOMICS = [
  {
      id: 1,
      english: "economy",
      mandarin: "经济",
      pinyin: "jīngjì"
  },
  {
    id: 2,
    english: "growth",
    mandarin: "发展",
    pinyin: "fāzhǎn"
  },
  {
    id: 3,
    english: "salary",
    mandarin: "工资",
    pinyin: "gōngzī"
  },
  {
    id: 4,
    english: "money",
    mandarin: "钱",
    pinyin: "qián"
  },
  {
    id: 5,
    english: "market",
    mandarin: "市场",
    pinyin: "shìchǎng"
  },
  {
    id: 6,
    english: "bank",
    mandarin: "银行",
    pinyin: "yínháng"
  },
  {
    id: 7,
    english: "save",
    mandarin: "保存",
    pinyin: "bǎocún"
  },
  {
    id: 8,
    english: "debt",
    mandarin: "债务",
    pinyin: "zhàiwù"
  },
  {
    id: 9,
    english: "company",
    mandarin: "公司",
    pinyin: "gōngsī"
  },
  {
    id: 10,
    english: "investment",
    mandarin: "投资",
    pinyin: "tóuzī"
  },
  {
    id: 11,
    english: "attract (investment)",
    mandarin: "吸引",
    pinyin: "xīyǐn"
  },
  {
    id: 12,
    english: "shareholder",
    mandarin: "股东",
    pinyin: "Gǔdōng"
  },
  {
    id: 13,
    english: "revenue",
    mandarin: "收入",
    pinyin: "shōurù"
  },
  {
    id: 14,
    english: "profit",
    mandarin: "利润",
    pinyin: "lìrùn"
  },
  {
    id: 15,
    english: "assets",
    mandarin: "资产",
    pinyin: "zīchǎn"
  },
  {
    id: 16,
    english: "credit card",
    mandarin: "信用卡",
    pinyin: "xìnyòngkǎ"
  },
  {
    id: 17,
    english: "cash",
    mandarin: "现金",
    pinyin: "xiànjīn"
  },
  {
    id: 18,
    english: "wallet",
    mandarin: "钱包",
    pinyin: "qiánbāo"
  }
]
const ECONOMICS_SENTENCES = [
  "A",
  "B",
  "C"
]

const TECHNOLOGY = [
  {
      id: 1,
      english: "technology",
      mandarin: "技术",
      pinyin: "jìshù"
  },
  {
    id: 2,
    english: "computer",
    mandarin: "电脑",
    pinyin: "diànnǎo"
  },
  {
    id: 3,
    english: "laptop",
    mandarin: "手提电脑",
    pinyin: "shǒutí diànnǎo"
  },
  {
    id: 4,
    english: "mobile",
    mandarin: "手机",
    pinyin: "shǒujī"
  },
  {
    id: 5,
    english: "internet",
    mandarin: "互联网",
    pinyin: "hùliánwǎng"
  },
  {
    id: 6,
    english: "program",
    mandarin: "程序",
    pinyin: "chéngxù"
  },
  {
    id: 7,
    english: "app",
    mandarin: "应用",
    pinyin: "yìngyòng"
  },
  {
    id: 8,
    english: "programming",
    mandarin: "编程",
    pinyin: "biānchéng"
  },
  {
    id: 9,
    english: "wireless",
    mandarin: "无线",
    pinyin: "wúxiàn"
  },
  {
    id: 10,
    english: "website",
    mandarin: "网站",
    pinyin: "wǎngzhàn"
  },
  {
    id: 11,
    english: "electricity",
    mandarin: "电",
    pinyin: "diàn"
  },
  {
    id: 12,
    english: "charger",
    mandarin: "充电器",
    pinyin: "chōngdiàn qì"
  },
  {
    id: 13,
    english: "email",
    mandarin: "电子邮件",
    pinyin: "diànzǐ yóujiàn"
  },
  {
    id: 14,
    english: "TV",
    mandarin: "电视",
    pinyin: "diànshì"
  },
  {
    id: 15,
    english: "monitor/screen",
    mandarin: "显示器",
    pinyin: "xiǎnshìqì"
  },
  {
    id: 16,
    english: "bluetooth",
    mandarin: "蓝牙",
    pinyin: "lányá"
  },
  {
    id: 17,
    english: "keyboard",
    mandarin: "键盘",
    pinyin: "jiànpán"
  },
  {
    id: 18,
    english: "mouse",
    mandarin: "鼠标",
    pinyin: "shǔbiāo"
  }
]
const TECHNOLOGY_SENTENCES = [
  "A",
  "B",
  "C"
]

/*
const ECONOMICS = [
  {
      id: 1,
      english: "",
      mandarin: "",
      pinyin: ""
  },
  {
    id: 2,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 3,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 4,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 5,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 6,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 7,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 8,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 9,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 10,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 11,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 12,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 13,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 14,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 15,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 16,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 17,
    english: "",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 18,
    english: "",
    mandarin: "",
    pinyin: ""
  }
]
const ECONOMICS_SENTENCES = [
  "",
  "",
  ""
]

Phrases
甚至连x也y  even though x also y
还可以说
举办会议
最大的挑战

Conjunctions
其实
确实
老实说
热真的
反正
而且
另外
然而
虽然
并且


*/