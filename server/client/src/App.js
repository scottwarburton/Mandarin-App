import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"
import Saved from "./components/Saved"

import { IoEarth, IoWalletSharp, IoPartlySunnyOutline, IoSchoolSharp } from "react-icons/io5";
import { MdEmojiPeople, MdOutlineWork } from "react-icons/md";
import { GiLaptop, GiCargoCrane, GiTalk } from "react-icons/gi";
import { GrTrain, GrMapLocation } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { FaExchangeAlt, FaShoppingCart, FaUserTie } from "react-icons/fa";
import { BiRun } from "react-icons/bi";
import { BsSpellcheck } from "react-icons/bs";
import { ImOffice } from "react-icons/im";


import everyday from "./components/everyday.jpg"
import study from "./components/study.jpg"
import shanghai from "./components/shanghai.jpg"
import industries from "./components/industries.jpg"


function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <div id="app">
      <div id="header">
        <h1>Learning Mandarin</h1>

        <form>
          { ( topic !== "" || saved === true ) &&
              <button className="navBar" onClick={() => {
                setTopic("");
                setLesson("");
                setSaved(false);
              }}>Home <AiFillHome/></button>
          }
          { topic !== "" && lesson !== "" &&
              <button className="navBar" onClick={() => {
                setLesson("");
                setSaved(false);
              }}>Change Lesson <FaExchangeAlt/></button>
          }
          { !saved && 
            <button className="navBar" name="saved" onClick={() => {
              setTopic("");
              setLesson("");
              setSaved(true);
              }}>Saved Words <IoIosSave/>
            </button>
          }
        </form>
      </div>
      <div id="body">

        {topic === "" && lesson === "" && !saved && <h3>Welcome to Learning Mandarin by Scott</h3>} 

        { saved && 
          <div>
            <Saved />
          </div>
        }

        { topic === "" && !saved &&
          <div>
            <div  className="topicSelection">
              <div id="topicBoxEveryday" className="topicBoxes">
                <img id="everyday" className="topicImg" src={everyday} alt="everyday" width="250px"></img>
                <br/>
                <button className="selection topicEveryday" id="topicEveryday" onClick={() => setTopic("Everyday")}>Everyday <IoPartlySunnyOutline/></button>
              </div>
              <div id="topicBoxStudy" className="topicBoxes">
                <img id="study" className="topicImg" src={study} alt="study" width="250px"></img>
                <br/>
                <button className="selection topicStudy" id="topicStudy" onClick={() => setTopic("Study")}>Work & Study <ImOffice/></button>
              </div>
              <div id="topicBoxTravel" className="topicBoxes">
                <img id="shanghai" className="topicImg" src={shanghai} alt="shanghai" width="250px"></img>
                <br/>
                <button className="selection topicTravel" id="topicTravel" onClick={() => setTopic("Travel")}>Travel <IoEarth/></button>
              </div>
              <div id="topicBoxIndustries" className="topicBoxes">
                <img id="industries" className="topicImg" src={industries} alt="industries" width="250px"></img>
                <br/>
                <button className="selection topicIndustries" id="topicIndustries" onClick={() => setTopic("Industries")}>Industries <GiCargoCrane/></button>
              </div>
            </div>
          </div>
        }
        
        { topic === "Everyday" && lesson === "" && !saved &&
          <div className="selectionForm">
            <h3>{topic} Lessons:</h3>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Greetings")}>Greetings <MdEmojiPeople/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Activities")}>Activities <BiRun/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Shopping")}>Shopping <FaShoppingCart/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Casual Talk")}>Casual talk <GiTalk/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Grammar")}>Grammar <BsSpellcheck/></button>
          </div>
        }
        { topic === "Study" && lesson === "" && !saved &&
          <form className="selectionForm">
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Study")}>Study <IoSchoolSharp/></button>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Work")}>Work <MdOutlineWork/></button>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Interview")}>Interview <FaUserTie/></button>
          </form>
        }
        { topic === "Travel" && lesson === "" && !saved &&
          <form className="selectionForm">
            <button className="selection topicTravel" name="lessons" onClick={() => setLesson("Transport")}>Transport <GrTrain/></button>
            <button className="selection topicTravel" name="lessons" onClick={() => setLesson("Locations")}>Locations <GrMapLocation/></button>
          </form>
        }
        { topic === "Industries" && lesson === "" && !saved &&
          <form className="selectionForm">
            <button className="selection topicIndustries" name="lessons" onClick={() => setLesson("Economics")}>Economics <IoWalletSharp/></button>
            <button className="selection topicIndustries" name="lessons" onClick={() => setLesson("Technology")}>Technology <GiLaptop/></button>
          </form>
        }

        <div id="lessonBox">
          {lesson === "Greetings" ? <Lesson lesson={lesson} flashcards={GREETINGS} sentences={GREETINGS_SENTENCES} picture={everyday}/> : null}
          {lesson === "Activities" ? <Lesson lesson={lesson} flashcards={ACTIVITIES} sentences={ACTIVITIES_SENTENCES} picture={everyday} /> : null}
          {lesson === "Shopping" ? <Lesson lesson={lesson} flashcards={SHOPPING} sentences={SHOPPING_SENTENCES} picture={everyday} /> : null}
          {lesson === "Casual Talk" ? <Lesson lesson={lesson} flashcards={CASUALTALK} sentences={CASUALTALK_SENTENCES} picture={everyday} /> : null}
          {lesson === "Grammar" ? <Lesson lesson={lesson} flashcards={GRAMMAR} sentences={GRAMMAR_SENTENCES} picture={everyday} /> : null}
          
          {lesson === "Study" ? <Lesson lesson={lesson} flashcards={STUDY} sentences={STUDY_SENTENCES} picture={everyday} /> : null}
          {lesson === "Work" ? <Lesson lesson={lesson} flashcards={WORK} sentences={WORK_SENTENCES} picture={everyday} /> : null}
          {lesson === "Interview" ? <Lesson lesson={lesson} flashcards={INTERVIEW} sentences={INTERVIEW_SENTENCES} picture={everyday} /> : null}
          
          {lesson === "Transport" ? <Lesson lesson={lesson} flashcards={TRANSPORT} sentences={TRANSPORT_SENTENCES} picture={shanghai} /> : null}
          {lesson === "Locations" ? <Lesson lesson={lesson} flashcards={LOCATIONS} sentences={LOCATIONS_SENTENCES} picture={shanghai} /> : null}
          
          {lesson === "Economics" ? <Lesson lesson={lesson} flashcards={ECONOMICS} sentences={ECONOMICS_SENTENCES} picture={industries} /> : null}
          {lesson === "Technology" ? <Lesson lesson={lesson} flashcards={TECHNOLOGY} sentences={TECHNOLOGY_SENTENCES} picture={industries} /> : null}
        </div>
      </div>
    </div>
  );

}

export default App;

const GREETINGS_SENTENCES = [
  "你好，最近怎么样",
  "很好谢谢，你呢",
  "不好意思，你叫什么名字"
]
const ACTIVITIES_SENTENCES = [
  "我喜欢去电影院，你想去吗",
  "我不明白你，请再说一遍",
  "听起来挺好的"
]
const SHOPPING_SENTENCES = [
  "你们还想别的吗",
  "我可以支付吗",
  "这些多少钱"
]
const CASUALTALK_SENTENCES = [
  "不管你喜不喜欢..",
  "",
  ""
]
const GRAMMAR_SENTENCES = [
  "A",
  "B",
  "C"
]
const STUDY_SENTENCES = [
  "A",
  "别浪费时间",
  "我代表学校，向同学们表示祝贺"
]
const WORK_SENTENCES = [
  "举办会议",
  "B",
  "C"
]
const INTERVIEW_SENTENCES = [
  "最大的挑战",
  "其中我最喜欢的是",
  "首先，其次，再次，最后",
  "最大的优点是。。，最大的缺点是。。"
]
const TRANSPORT_SENTENCES = [
  "我迟到了因为公车太慢了",
  "为什么你乘坐公车",
  "因为火车票太贵了，并且火车站太远"
]
const LOCATIONS_SENTENCES = [
  "我来自澳洲",
  "现在我住在墨尔本，但是我想住在上海",
  "你来自哪个城市"
]
const ECONOMICS_SENTENCES = [
  "A",
  "B",
  "C"
]
const TECHNOLOGY_SENTENCES = [
  "A",
  "B",
  "C"
]

/*
Phrases
甚至连x也y  even though x also y
可以说 can say
其实 actually
确实 really
老实说 honestly
热真的 seriously
反正 anyway
而且 and
另外 in addition
然而 however
虽然 although
并且 and
因此 therefore
只要a就b as long as
限制 limit
请整理你的行李 organise luggage
随便看看 just looking
没想到 didn't believe
适合 suit
在我看来 in my opinion
实际上 actually
走向 leading to
任何 any
过程 process
支持 support
由于 due to x, ..
除了。。还 apart from
超过 exceed
政治的中心 political center
生产 produce
总之 in summary
有空的时候 free time
既然， 就 since
改变主意的 change mind
至少。。at least
看法 opinion
办法 method
变化 change


*/

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

const CASUALTALK = [
  {
      id: 1,
      english: "chat",
      mandarin: "聊天",
      pinyin: "liáotiān"
  },
  {
    id: 2,
    english: "have you eaten?",
    mandarin: "吃了吗",
    pinyin: "chīle ma"
  },
  {
    id: 3,
    english: "never mind",
    mandarin: "算了吧",
    pinyin: "suànle ba"
  },
  {
    id: 4,
    english: "I don't care",
    mandarin: "我不管",
    pinyin: "wǒ bùguǎn"
  },
  {
    id: 5,
    english: "really?",
    mandarin: "真的假的",
    pinyin: "zhēn de jiǎ de"
  },
  {
    id: 6,
    english: "what a pain",
    mandarin: "麻烦",
    pinyin: "máfan"
  },
  {
    id: 7,
    english: "you wish",
    mandarin: "想的美",
    pinyin: "xiǎng dì měi"
  },
  {
    id: 8,
    english: "I hope so",
    mandarin: "但愿吧",
    pinyin: "dàn yuàn ba"
  },
  {
    id: 9,
    english: "So it's like that",
    mandarin: "原来如此",
    pinyin: "yuánlái rúcǐ"
  },
  {
    id: 10,
    english: "that's true",
    mandarin: "那倒是",
    pinyin: "nà dǎoshì"
  },
  {
    id: 11,
    english: "I'm kidding",
    mandarin: "我开玩笑的",
    pinyin: "wǒ kāiwánxiào de"
  },
  {
    id: 12,
    english: "who said that?",
    mandarin: "谁说的",
    pinyin: "shéi shuō de"
  },
  {
    id: 13,
    english: "how is that okay?",
    mandarin: "那怎么行啊",
    pinyin: "nà zěnme xíng a"
  },
  {
    id: 14,
    english: "what a tragedy",
    mandarin: "真是个悲剧",
    pinyin: "zhēnshi gè bēijù"
  },
  {
    id: 15,
    english: "not funny",
    mandarin: "不好笑",
    pinyin: "bù hǎoxiào"
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

const GRAMMAR = [
  {
      id: 1,
      english: "character",
      mandarin: "汉子",
      pinyin: "hànzi"
  },
  {
    id: 2,
    english: "word",
    mandarin: "单词 / 词语",
    pinyin: "dāncí / cíyǔ"
  },
  {
    id: 3,
    english: "letter",
    mandarin: "子母",
    pinyin: "zǐ mǔ"
  },
  {
    id: 4,
    english: "spelling",
    mandarin: "拼写",
    pinyin: "pīnxiě"
  },
  {
    id: 5,
    english: "sentence",
    mandarin: "句子",
    pinyin: "jùzi"
  },
  {
    id: 6,
    english: "language",
    mandarin: "语言",
    pinyin: "yǔyán"
  },
  {
    id: 7,
    english: "pronun- ciation",
    mandarin: "发音 / 读音",
    pinyin: "fāyīn / 读音"
  },
  {
    id: 8,
    english: "tone",
    mandarin: "声调",
    pinyin: "shēngdiào"
  },
  {
    id: 9,
    english: "fluent",
    mandarin: "流利",
    pinyin: "liúlì"
  },
  {
    id: 10,
    english: "pinyin",
    mandarin: "拼音",
    pinyin: "pīnyīn"
  },
  {
    id: 11,
    english: "simplified Chinese",
    mandarin: "简体中文",
    pinyin: "jiǎntǐ zhōngwén"
  },
  {
    id: 12,
    english: "traditional Chinese",
    mandarin: "繁体中文",
    pinyin: "fántǐ zhōngwén"
  },
  {
    id: 13,
    english: "understand",
    mandarin: "明白 / 懂 / 了解",
    pinyin: "míngbái / dǒng / liǎojiě"
  },
  {
    id: 14,
    english: "paragraph",
    mandarin: "段落",
    pinyin: "duànluò"
  },
  {
    id: 15,
    english: "dialogue",
    mandarin: "对话",
    pinyin: "duìhuà"
  },
  {
    id: 16,
    english: "article",
    mandarin: "文章",
    pinyin: "wénzhāng"
  },
  {
    id: 17,
    english: "reading (n)",
    mandarin: "阅读",
    pinyin: "yuèdú"
  },
  {
    id: 18,
    english: "short passage",
    mandarin: "短话",
    pinyin: "duǎnhuà"
  }
]

const STUDY = [
  {
      id: 1,
      english: "study",
      mandarin: "学习",
      pinyin: ""
  },
  {
    id: 2,
    english: "exam",
    mandarin: "考试",
    pinyin: ""
  },
  {
    id: 3,
    english: "test",
    mandarin: "测试",
    pinyin: ""
  },
  {
    id: 4,
    english: "graduate (v)",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 5,
    english: "graduate (n)",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 6,
    english: "bachelors",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 7,
    english: "masters",
    mandarin: "硕士",
    pinyin: ""
  },
  {
    id: 8,
    english: "PhD",
    mandarin: "博士",
    pinyin: ""
  },
  {
    id: 9,
    english: "assignment",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 10,
    english: "project",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 11,
    english: "professor",
    mandarin: "教授",
    pinyin: ""
  },
  {
    id: 12,
    english: "teacher",
    mandarin: "老师",
    pinyin: ""
  },
  {
    id: 13,
    english: "lesson",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 14,
    english: "classroom",
    mandarin: "课堂",
    pinyin: ""
  },
  {
    id: 15,
    english: "lecture",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 16,
    english: "major",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 17,
    english: "habit",
    mandarin: "习惯",
    pinyin: ""
  },
  {
    id: 18,
    english: "",
    mandarin: "",
    pinyin: ""
  }
]
const WORK = [
  {
      id: 1,
      english: "to work",
      mandarin: "工作",
      pinyin: ""
  },
  {
    id: 2,
    english: "go to work",
    mandarin: "上班",
    pinyin: ""
  },
  {
    id: 3,
    english: "leave work",
    mandarin: "下班",
    pinyin: ""
  },
  {
    id: 4,
    english: "work trip",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 5,
    english: "suit",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 6,
    english: "overtime",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 7,
    english: "manager",
    mandarin: "老板 / 经理",
    pinyin: ""
  },
  {
    id: 8,
    english: "colleague",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 9,
    english: "director",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 10,
    english: "career",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 11,
    english: "specialisation",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 12,
    english: "meeting",
    mandarin: "会议",
    pinyin: ""
  },
  {
    id: 13,
    english: "promotion",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 14,
    english: "support",
    mandarin: "支持",
    pinyin: ""
  },
  {
    id: 15,
    english: "company",
    mandarin: "公司",
    pinyin: ""
  },
  {
    id: 16,
    english: "office",
    mandarin: "办公室",
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
const INTERVIEW = [
  {
      id: 1,
      english: "interview",
      mandarin: "面试",
      pinyin: ""
  },
  {
    id: 2,
    english: "to apply",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 3,
    english: "to accept",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 4,
    english: "position",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 5,
    english: "to sign up",
    mandarin: "",
    pinyin: ""
  },
  {
    id: 6,
    english: "challenge",
    mandarin: "挑战",
    pinyin: ""
  },
  {
    id: 7,
    english: "advantage",
    mandarin: "有点",
    pinyin: ""
  },
  {
    id: 8,
    english: "disadvantage",
    mandarin: "缺点",
    pinyin: ""
  },
  {
    id: 9,
    english: "benefits",
    mandarin: "好处",
    pinyin: ""
  },
  {
    id: 10,
    english: "improve",
    mandarin: "提高",
    pinyin: ""
  },
  {
    id: 11,
    english: "",
    mandarin: "变化",
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
    english: "state/ province",
    mandarin: "州",
    pinyin: "zhōu"
  }
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
    english: "monitor/ screen",
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



*/