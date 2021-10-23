import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"
import Saved from "./components/Saved"

import { IoEarth, IoWalletSharp, IoPartlySunnyOutline, IoSchoolSharp } from "react-icons/io5";
import { MdEmojiPeople, MdOutlineWork, MdCardTravel } from "react-icons/md";
import { GiLaptop, GiCargoCrane, GiTalk, GiThreeFriends, GiBowlOfRice, GiClothes } from "react-icons/gi";
import { GrTrain, GrMapLocation } from "react-icons/gr";
import { AiFillHome, AiOutlineApple } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { FaExchangeAlt, FaShoppingCart, FaUserTie, FaShower } from "react-icons/fa";
import { BiRun, BiHappyAlt } from "react-icons/bi";
import { BsSpellcheck } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { TiWeatherPartlySunny } from "react-icons/ti";

import everyday from "./components/everyday.jpg"
import study from "./components/study.jpg"
import shanghai from "./components/shanghai.jpg"
import industries from "./components/industries.jpg"
import flag from "./components/flag.png"
import shopping from "./components/shopping.jpg"

function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <div id="app">
      <div id="header">
        <div className="headingBoxes">
          <div className="headingBox">
            <img id="flag" src={flag} alt="flag" width="100px"></img>
          </div>
          <div className="headings headingBox">
            <h1 className="headingEnglish">Mandarin Life</h1>
            <h2 className="headingMandarin">普通话生活</h2>
          </div>
          <div className="headingBox">
            <img id="flag" src={flag} alt="flag" width="100px"></img>
          </div>
        </div>
        

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

        {topic === "" && lesson === "" && !saved && 
          <div className="welcomeHeading">
            <h3>Welcome to Mandarin Life by Scott</h3>
            <h3 className="welcomeMandarin">欢迎来到普通话生活</h3>
          </div>
        } 

        { saved && 
          <div>
            <Saved />
          </div>
        }

        { topic === "" && !saved &&
          <div>
            <div  className="topicSelection">
              <div id="topicBoxEveryday" className="topicBoxes">
                <img id="everyday" className="topicImg" src={everyday} alt="everyday" width="250px" height="150px"></img>
                <br/>
                <button className="selection topicEveryday" id="topicEveryday" onClick={() => setTopic("Everyday")}>Everyday <IoPartlySunnyOutline/></button>
              </div>
              <div id="topicBoxStudy" className="topicBoxes">
                <img id="study" className="topicImg" src={study} alt="study" width="250px" height="150px"></img>
                <br/>
                <button className="selection topicStudy" id="topicStudy" onClick={() => setTopic("Study")}>Work & Study <ImOffice/></button>
              </div>
              <div id="topicBoxShopping" className="topicBoxes">
                <img id="shopping" className="topicImg" src={shopping} alt="shopping" width="250px" height="150px"></img>
                <br/>
                <button className="selection topicShopping" id="topicShopping" onClick={() => setTopic("Shopping")}>Shopping <FaShoppingCart/></button>
              </div>
              <div id="topicBoxTravel" className="topicBoxes">
                <img id="shanghai" className="topicImg" src={shanghai} alt="shanghai" width="250px" height="150px"></img>
                <br/>
                <button className="selection topicTravel" id="topicTravel" onClick={() => setTopic("Travel")}>Travel <IoEarth/></button>
              </div>
              <div id="topicBoxIndustries" className="topicBoxes">
                <img id="industries" className="topicImg" src={industries} alt="industries" width="250px" height="150px"></img>
                <br/>
                <button className="selection topicIndustries" id="topicIndustries" onClick={() => setTopic("Industries")}>Industries <GiCargoCrane/></button>
              </div>
            </div>
          </div>
        }
        
        { topic === "Everyday" && lesson === "" && !saved &&
          <div className="selectionForm">
            <br/><br/><br/>
            <h3>{topic} Lessons:</h3>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Greetings")}>Greetings <MdEmojiPeople/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Activities")}>Activities <BiRun/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Household")}>Household <FaShower/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Casual Talk")}>Casual talk <GiTalk/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Hobbies")}>Hobbies <GiThreeFriends/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Feelings")}>Feelings <BiHappyAlt/></button>
            <button className="selection topicEveryday" name="lessons" onClick={() => setLesson("Weather")}>Weather <TiWeatherPartlySunny/></button>
          </div>
        }
        { topic === "Study" && lesson === "" && !saved &&
          <form className="selectionForm">
            <h3>{topic} Lessons:</h3>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Study")}>Study <IoSchoolSharp/></button>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Work")}>Work <MdOutlineWork/></button>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Interview")}>Interview <FaUserTie/></button>
            <button className="selection topicStudy" name="lessons" onClick={() => setLesson("Grammar")}>Grammar <BsSpellcheck/></button>
          </form>
        }
        { topic === "Shopping" && lesson === "" && !saved &&
          <div className="selectionForm">
            <h3>{topic} Lessons:</h3>
            <button className="selection topicShopping" name="lessons" onClick={() => setLesson("Shopping")}>Shopping <FaShoppingCart/></button>
            <button className="selection topicShopping" name="lessons" onClick={() => setLesson("Clothes")}>Clothes <GiClothes/></button>
            <button className="selection topicShopping" name="lessons" onClick={() => setLesson("Food")}>Food <GiBowlOfRice/></button>
          </div>
        }
        { topic === "Travel" && lesson === "" && !saved &&
          <form className="selectionForm">
            <h3>{topic} Lessons:</h3>
            <button className="selection topicTravel" name="lessons" onClick={() => setLesson("Transport")}>Transport <GrTrain className="travelLogo"/></button>
            <button className="selection topicTravel" name="lessons" onClick={() => setLesson("Locations")}>Locations <GrMapLocation className="travelLogo"/></button>
            <button className="selection topicTravel" name="lessons" onClick={() => setLesson("Tour")}>Tour <MdCardTravel/></button>
          </form>
        }
        { topic === "Industries" && lesson === "" && !saved &&
          <form className="selectionForm">
            <h3>{topic} Lessons:</h3>
            <button className="selection topicIndustries" name="lessons" onClick={() => setLesson("Economics")}>Economics <IoWalletSharp/></button>
            <button className="selection topicIndustries" name="lessons" onClick={() => setLesson("Technology")}>Technology <GiLaptop/></button>
            <button className="selection topicIndustries" name="lessons" onClick={() => setLesson("Companies")}>Companies <AiOutlineApple/></button>
          </form>
        }

        <div id="lessonBox">
          {lesson === "Greetings" ? <Lesson lesson={lesson} flashcards={GREETINGS} sentences={GREETINGS_SENTENCES} picture={everyday} questions={GREETINGS_QUESTIONS}/> : null}
          {lesson === "Activities" ? <Lesson lesson={lesson} flashcards={ACTIVITIES} sentences={ACTIVITIES_SENTENCES} picture={everyday} questions={ACTIVITIES_QUESTIONS} /> : null}
          {lesson === "Household" ? <Lesson lesson={lesson} flashcards={HOUSEHOLD} sentences={HOUSEHOLD_SENTENCES} picture={everyday} questions={HOUSEHOLD_QUESTIONS} /> : null}
          {lesson === "Casual Talk" ? <Lesson lesson={lesson} flashcards={CASUALTALK} sentences={CASUALTALK_SENTENCES} picture={everyday} questions={CASUALTALK_QUESTIONS} /> : null}
          {lesson === "Hobbies" ? <Lesson lesson={lesson} flashcards={HOBBIES} sentences={HOBBIES_SENTENCES} picture={everyday} questions={HOBBIES_QUESTIONS} /> : null}
          {lesson === "Feelings" ? <Lesson lesson={lesson} flashcards={FEELINGS} sentences={FEELINGS_SENTENCES} picture={everyday} questions={FEELINGS_QUESTIONS} /> : null}
          {lesson === "Weather" ? <Lesson lesson={lesson} flashcards={WEATHER} sentences={WEATHER_SENTENCES} picture={everyday} questions={WEATHER_QUESTIONS} /> : null}
          
          {lesson === "Study" ? <Lesson lesson={lesson} flashcards={STUDY} sentences={STUDY_SENTENCES} picture={study} questions={STUDY_QUESTIONS} /> : null}
          {lesson === "Work" ? <Lesson lesson={lesson} flashcards={WORK} sentences={WORK_SENTENCES} picture={study} questions={WORK_QUESTIONS} /> : null}
          {lesson === "Interview" ? <Lesson lesson={lesson} flashcards={INTERVIEW} sentences={INTERVIEW_SENTENCES} picture={study} questions={INTERVIEW_QUESTIONS} /> : null}
          {lesson === "Grammar" ? <Lesson lesson={lesson} flashcards={GRAMMAR} sentences={GRAMMAR_SENTENCES} picture={study} questions={GRAMMAR_QUESTIONS} /> : null}

          {lesson === "Shopping" ? <Lesson lesson={lesson} flashcards={SHOPPING} sentences={SHOPPING_SENTENCES} picture={shopping} questions={SHOPPING_QUESTIONS} /> : null}
          {lesson === "Clothes" ? <Lesson lesson={lesson} flashcards={CLOTHES} sentences={CLOTHES_SENTENCES} picture={shopping} questions={CLOTHES_QUESTIONS} /> : null}
          {lesson === "Food" ? <Lesson lesson={lesson} flashcards={FOOD} sentences={FOOD_SENTENCES} picture={shopping} questions={FOOD_QUESTIONS} /> : null}


          {lesson === "Transport" ? <Lesson lesson={lesson} flashcards={TRANSPORT} sentences={TRANSPORT_SENTENCES} picture={shanghai} questions={TRANSPORT_QUESTIONS} /> : null}
          {lesson === "Locations" ? <Lesson lesson={lesson} flashcards={LOCATIONS} sentences={LOCATIONS_SENTENCES} picture={shanghai} questions={LOCATIONS_QUESTIONS} /> : null}
          {lesson === "Tour" ? <Lesson lesson={lesson} flashcards={TOUR} sentences={TOUR_SENTENCES} picture={shanghai} questions={TOUR_QUESTIONS} /> : null}
          
          {lesson === "Economics" ? <Lesson lesson={lesson} flashcards={ECONOMICS} sentences={ECONOMICS_SENTENCES} picture={industries} questions={ECONOMICS_QUESTIONS} /> : null}
          {lesson === "Technology" ? <Lesson lesson={lesson} flashcards={TECHNOLOGY} sentences={TECHNOLOGY_SENTENCES} picture={industries} questions={TECHNOLOGY_QUESTIONS} /> : null}
          {lesson === "Companies" ? <Lesson lesson={lesson} flashcards={COMPANIES} sentences={COMPANIES_SENTENCES} picture={industries} questions={COMPANIES_QUESTIONS} /> : null}
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
  "听起来挺好的",
]
const SHOPPING_SENTENCES = [
  "你们还想别的吗",
  "我可以支付吗",
  "这些多少钱",
  "随便看看",
  "两张票，谢谢",
  "服务员：几位？",
  "请再检查一遍",
  "无论饿了还是渴了，都不舒服",
  "这是今年最流行的"
]
const CASUALTALK_SENTENCES = [
  "不管你喜不喜欢..",
  "但愿吧",
  "我赶时间",
  "有空的时候",
  "可以说慢一点吗",
  "我到底应该做什么",
  "你来得正好"
]
const GRAMMAR_SENTENCES = [
  "还可以说",
  "我们应该一起说",
  "你的声音很不错",
  "鱼被猫吃了",
  "我为你做了蛋糕",
  "我对你有感觉"
]
const STUDY_SENTENCES = [
  "准备好了吗",
  "别浪费时间",
  "我代表学校，向同学们表示祝贺",
  "复习一下",
  "这个问题判断对错",
  "抓关键信息",
  "请读三遍"
]
const WORK_SENTENCES = [
  "举办会议",
  "有事可以找我",
  "请问一下",
  "还有问题",
  "这个公司生产什么",
  "我工作在这个大楼里",
  "如果有变化，请提前告诉我",
  "按照经历的要求做",
  "必须快点",
  "真的很值得考虑"
]
const INTERVIEW_SENTENCES = [
  "最大的挑战",
  "其中我最喜欢的是",
  "首先，其次，再次，最后, 总之",
  "最大的优点是。。，最大的缺点是。。",
  "祝你好运, 加油",
  "我忘记了原来的问题",
  "直接交流"
]
const TRANSPORT_SENTENCES = [
  "我迟到了因为公车太慢了",
  "为什么你乘坐公车",
  "因为火车票太贵了，并且火车站太远",
  "火车站怎么走",
  "任何消息",
  "你怎么还没到",
  "然后哪个方向"
]
const LOCATIONS_SENTENCES = [
  "我来自澳洲",
  "现在我住在墨尔本，但是我想住在上海",
  "你来自哪个城市",
  "请整理你的行李",
  "北京是中国的政治的中心",
  "一路平安",
  "世界上，各国是不同，和各位是不同",
  "天气方面，总是感觉很热"
]
const ECONOMICS_SENTENCES = [
  "筹划阶段，然后建筑阶段",
  "科学技术发展很快",
  "我们的公司需要吸引更多投资",
  "随着经济发展，这个公司越来越大",
  "年底和月底很忙"
]
const TECHNOLOGY_SENTENCES = [
  "我喜欢学习编程",
  "我的桌子上在一个电脑，显示器，键盘，和鼠标",
  "我的手机没有电了，需要一个充电器"
]
const TOUR_SENTENCES = [
  "",
  "",
  ""
]
const HOUSEHOLD_SENTENCES = [
  "",
  "",
  ""
]
const HOBBIES_SENTENCES = [
  "",
  "",
  ""
]
const FOOD_SENTENCES = [
  "",
  "",
  ""
]
const FEELINGS_SENTENCES = [
  "",
  "",
  ""
]
const CLOTHES_SENTENCES = [
  "",
  "",
  ""
]
const WEATHER_SENTENCES = [
  "",
  "",
  ""
]
const COMPANIES_SENTENCES = [
  "",
  "",
  ""
]


/*
Phrases

其实 actually
实际上 actually
确实 really
老实说 honestly
热真的 seriously
反正 anyway
而且 and
并且 and
另外 in addition
然而 however
虽然 although
因此 therefore
顺便问一下 by the way
经过 through ..
顺便
放心

甚至连x也y  even though x also y
可以说 can say
只要a就b as long as
限制 limit
没想到 didn't believe
适合 suit
在我看来 in my opinion
走向 leading to
任何 any
过程 process
支持 support
由于 due to x, ..
除了。。还 apart from
超过 exceed
既然， 就 since
改变主意的 change mind
至少。。at least
看法 opinion
办法 method
变化 change
为x担心/高兴/骄傲

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
    mandarin: "真麻烦",
    pinyin: "zhēn máfan"
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
    english: "what do you mean?",
    mandarin: "你的意思是什么",
    pinyin: "nǐ de yìsi shì shénme"
  },
  {
    id: 17,
    english: "long time no see",
    mandarin: "好久不见",
    pinyin: "hǎojiǔ bùjiàn"
  },
  {
    id: 18,
    english: "talk later",
    mandarin: "改天再说吧",
    pinyin: "gǎitiān zàishuō ba"
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
    english: "pronunciation",
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
      pinyin: "xuéxí"
  },
  {
    id: 2,
    english: "exam",
    mandarin: "考试",
    pinyin: "kǎoshì"
  },
  {
    id: 3,
    english: "test",
    mandarin: "测试",
    pinyin: "cèshì"
  },
  {
    id: 4,
    english: "graduate (v)",
    mandarin: "毕业",
    pinyin: "bìyè"
  },
  {
    id: 5,
    english: "to research",
    mandarin: "研究",
    pinyin: "yánjiū"
  },
  {
    id: 6,
    english: "bachelor's",
    mandarin: "学士",
    pinyin: "xuéshì"
  },
  {
    id: 7,
    english: "master's",
    mandarin: "硕士",
    pinyin: "shuòshì"
  },
  {
    id: 8,
    english: "PhD",
    mandarin: "博士",
    pinyin: "bóshì"
  },
  {
    id: 9,
    english: "assignment",
    mandarin: "任务",
    pinyin: "rènwù"
  },
  {
    id: 10,
    english: "project",
    mandarin: "项目",
    pinyin: "xiàngmù"
  },
  {
    id: 11,
    english: "professor",
    mandarin: "教授",
    pinyin: "jiàoshòu"
  },
  {
    id: 12,
    english: "teacher",
    mandarin: "老师",
    pinyin: "lǎoshī"
  },
  {
    id: 13,
    english: "lesson",
    mandarin: "课",
    pinyin: "kè"
  },
  {
    id: 14,
    english: "classroom",
    mandarin: "课堂",
    pinyin: "kètáng"
  },
  {
    id: 15,
    english: "lecture",
    mandarin: "讲座",
    pinyin: "jiǎngzuò"
  },
  {
    id: 16,
    english: "major",
    mandarin: "专业",
    pinyin: "zhuānyè"
  },
  {
    id: 17,
    english: "habit",
    mandarin: "习惯",
    pinyin: "xíguàn"
  },
  {
    id: 18,
    english: "motivated",
    mandarin: "有动力",
    pinyin: "dònglì"
  }
]
const WORK = [
  {
      id: 1,
      english: "to work",
      mandarin: "工作",
      pinyin: "gōngzuò"
  },
  {
    id: 2,
    english: "go to work",
    mandarin: "上班",
    pinyin: "shàngbān"
  },
  {
    id: 3,
    english: "leave work",
    mandarin: "下班",
    pinyin: "xiàbān"
  },
  {
    id: 4,
    english: "work trip",
    mandarin: "出差",
    pinyin: "chūchāi"
  },
  {
    id: 5,
    english: "suit",
    mandarin: "西装",
    pinyin: "xīzhuāng"
  },
  {
    id: 6,
    english: "overtime",
    mandarin: "加时",
    pinyin: "jiā shí"
  },
  {
    id: 7,
    english: "manager",
    mandarin: "老板 / 经理",
    pinyin: "lǎobǎn / jīnglǐ"
  },
  {
    id: 8,
    english: "colleague",
    mandarin: "同事",
    pinyin: "tóngshì"
  },
  {
    id: 9,
    english: "director",
    mandarin: "董事",
    pinyin: "dǒngshì"
  },
  {
    id: 10,
    english: "career",
    mandarin: "职业",
    pinyin: "zhíyè"
  },
  {
    id: 11,
    english: "specialisation",
    mandarin: "专业化",
    pinyin: "zhuānyè huà"
  },
  {
    id: 12,
    english: "meeting",
    mandarin: "会议",
    pinyin: "huìyì"
  },
  {
    id: 13,
    english: "promotion",
    mandarin: "促销",
    pinyin: "cùxiāo"
  },
  {
    id: 14,
    english: "support",
    mandarin: "支持",
    pinyin: "zhīchí"
  },
  {
    id: 15,
    english: "company",
    mandarin: "公司",
    pinyin: "gōngsī"
  },
  {
    id: 16,
    english: "office",
    mandarin: "办公室",
    pinyin: "bàngōngshì"
  },
  {
    id: 17,
    english: "client/customer",
    mandarin: "客户/客人",
    pinyin: "kèhù / kèrén"
  },
  {
    id: 18,
    english: "to cooperate",
    mandarin: "合作",
    pinyin: "hézuò"
  }
]
const INTERVIEW = [
  {
      id: 1,
      english: "interview",
      mandarin: "面试",
      pinyin: "miànshì"
  },
  {
    id: 2,
    english: "to apply",
    mandarin: "申请",
    pinyin: "shēnqǐng"
  },
  {
    id: 3,
    english: "to accept",
    mandarin: "接受",
    pinyin: "jiēshòu"
  },
  {
    id: 4,
    english: "position",
    mandarin: "职位",
    pinyin: "zhíwèi"
  },
  {
    id: 5,
    english: "to sign up",
    mandarin: "报名",
    pinyin: "bàomíng"
  },
  {
    id: 6,
    english: "challenge",
    mandarin: "挑战",
    pinyin: "tiǎozhàn"
  },
  {
    id: 7,
    english: "advantage",
    mandarin: "优点",
    pinyin: "yōudiǎn"
  },
  {
    id: 8,
    english: "disadvantage",
    mandarin: "缺点",
    pinyin: "quēdiǎn"
  },
  {
    id: 9,
    english: "benefits",
    mandarin: "好处",
    pinyin: "hǎochù"
  },
  {
    id: 10,
    english: "improve",
    mandarin: "提高",
    pinyin: "tígāo"
  },
  {
    id: 11,
    english: "variety",
    mandarin: "变化",
    pinyin: "biànhuà"
  },
  {
    id: 12,
    english: "resume",
    mandarin: "简历",
    pinyin: "jiǎnlì"
  },
  {
    id: 13,
    english: "strengths",
    mandarin: "优势",
    pinyin: "yōushì"
  },
  {
    id: 14,
    english: "weaknesses",
    mandarin: "弱势",
    pinyin: "ruòshì"
  },
  {
    id: 15,
    english: "visa",
    mandarin: "签证",
    pinyin: "qiānzhèng"
  },
  {
    id: 16,
    english: "qualifications",
    mandarin: "资格",
    pinyin: "zīgé"
  },
  {
    id: 17,
    english: "description",
    mandarin: "描述",
    pinyin: "miáoshù"
  },
  {
    id: 18,
    english: "ideal",
    mandarin: "理想",
    pinyin: "lǐxiǎng"
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
    pinyin: "Mòěrběn"
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
const TOUR = [
  {
      id: 1,
      english: "travel",
      mandarin: "旅行",
      pinyin: "lǚxíng"
  },
  {
    id: 2,
    english: "suitcase",
    mandarin: "手提箱",
    pinyin: "shǒutí xiāng"
  },
  {
    id: 3,
    english: "to catch a flight",
    mandarin: "赶飞机",
    pinyin: "gǎn fēijī"
  },
  {
    id: 4,
    english: "boarding",
    mandarin: "板机",
    pinyin: "bǎn jī"
  },
  {
    id: 5,
    english: "tickets",
    mandarin: "票",
    pinyin: "piào"
  },
  {
    id: 6,
    english: "camera",
    mandarin: "相机",
    pinyin: "xiàngjī"
  },
  {
    id: 7,
    english: "sunglasses",
    mandarin: "太阳镜",
    pinyin: "tàiyángjìng"
  },
  {
    id: 8,
    english: "sunscreen",
    mandarin: "防晒霜",
    pinyin: "fángshài shuāng"
  },
  {
    id: 9,
    english: "map",
    mandarin: "地图",
    pinyin: "dìtú"
  },
  {
    id: 10,
    english: "passport",
    mandarin: "护照",
    pinyin: "hùzhào"
  },
  {
    id: 11,
    english: "directions",
    mandarin: "方向",
    pinyin: "fāngxiàng"
  },
  {
    id: 12,
    english: "to be lost",
    mandarin: "迷路了",
    pinyin: "mílùle"
  },
  {
    id: 13,
    english: "to translate",
    mandarin: "翻译",
    pinyin: "fānyì"
  },
  {
    id: 14,
    english: "international",
    mandarin: "国际",
    pinyin: "guójì"
  },
  {
    id: 15,
    english: "visa",
    mandarin: "签证",
    pinyin: "qiānzhèng"
  },
  {
    id: 16,
    english: "foreigner",
    mandarin: "外国人",
    pinyin: "wàiguó rén"
  },
  {
    id: 17,
    english: "adventure",
    mandarin: "冒险",
    pinyin: "màoxiǎn"
  },
  {
    id: 18,
    english: "tour guide",
    mandarin: "导游",
    pinyin: "dǎoyóu"
  }
]
const HOUSEHOLD = [
  {
      id: 1,
      english: "kitchen",
      mandarin: "厨房",
      pinyin: "chúfáng"
  },
  {
    id: 2,
    english: "to cook",
    mandarin: "做饭",
    pinyin: "zuò fàn"
  },
  {
    id: 3,
    english: "to clean",
    mandarin: "清洗",
    pinyin: "qīngxǐ"
  },
  {
    id: 4,
    english: "bathroom",
    mandarin: "浴室",
    pinyin: "Yùshì"
  },
  {
    id: 5,
    english: "to shower",
    mandarin: "洗澡",
    pinyin: "xǐzǎo"
  },
  {
    id: 6,
    english: "brushing teeth",
    mandarin: "刷牙",
    pinyin: "shuāyá"
  },
  {
    id: 7,
    english: "toothpaste",
    mandarin: "牙膏",
    pinyin: "yágāo"
  },
  {
    id: 8,
    english: "soap",
    mandarin: "肥皂",
    pinyin: "féizào"
  },
  {
    id: 9,
    english: "wash hands",
    mandarin: "洗手",
    pinyin: "xǐ shǒu"
  },
  {
    id: 10,
    english: "wash hair",
    mandarin: "洗头",
    pinyin: "xǐ tóu"
  },
  {
    id: 11,
    english: "wash clothes",
    mandarin: "洗衣服",
    pinyin: "xǐ yīfú"
  },
  {
    id: 12,
    english: "shampoo",
    mandarin: "洗发水",
    pinyin: "xǐ fǎ shuǐ"
  },
  {
    id: 13,
    english: "balcony",
    mandarin: "阳台",
    pinyin: "yángtái"
  },
  {
    id: 14,
    english: "bedroom",
    mandarin: "卧室",
    pinyin: "wòshì"
  },
  {
    id: 15,
    english: "room",
    mandarin: "房间",
    pinyin: "fángjiān"
  },
  {
    id: 16,
    english: "house",
    mandarin: "房子",
    pinyin: "fángzi"
  },
  {
    id: 17,
    english: "living room",
    mandarin: "客厅",
    pinyin: "kètīng"
  },
  {
    id: 18,
    english: "open the door",
    mandarin: "开门",
    pinyin: "kāimén"
  }
]
const HOBBIES = [
  {
      id: 1,
      english: "TV",
      mandarin: "电视",
      pinyin: "diànshì"
  },
  {
    id: 2,
    english: "movie",
    mandarin: "电影",
    pinyin: "diànyǐng"
  },
  {
    id: 3,
    english: "Netflix",
    mandarin: "网飞",
    pinyin: "wǎng fēi"
  },
  {
    id: 4,
    english: "seeing friends",
    mandarin: "见朋友",
    pinyin: "jiàn péngyǒu"
  },
  {
    id: 5,
    english: "playing soccer",
    mandarin: "踢足球",
    pinyin: "tī zúqiú"
  },
  {
    id: 6,
    english: "playing basketball",
    mandarin: "打篮球",
    pinyin: "dǎ lánqiú"
  },
  {
    id: 7,
    english: "to work out",
    mandarin: "锻炼",
    pinyin: "duànliàn"
  },
  {
    id: 8,
    english: "play computer games",
    mandarin: "玩电脑游戏",
    pinyin: "wán diànnǎo yóuxì"
  },
  {
    id: 9,
    english: "to go out",
    mandarin: "出去",
    pinyin: "chūqù"
  },
  {
    id: 10,
    english: "to relax",
    mandarin: "放松",
    pinyin: "fàngsōng"
  },
  {
    id: 11,
    english: "listen to music",
    mandarin: "听音乐",
    pinyin: "tīng yīnyuè"
  },
  {
    id: 12,
    english: "hiking",
    mandarin: "远足",
    pinyin: "yuǎnzú"
  },
  {
    id: 13,
    english: "board games",
    mandarin: "棋盘游戏",
    pinyin: "qípán yóuxì"
  },
  {
    id: 14,
    english: "meditation",
    mandarin: "冥想",
    pinyin: "míngxiǎng"
  },
  {
    id: 15,
    english: "karaoke",
    mandarin: "卡拉OK",
    pinyin: "kǎlā OK"
  },
  {
    id: 16,
    english: "to go on social media",
    mandarin: "去社交媒体",
    pinyin: "qù shèjiāo méitǐ"
  },
  {
    id: 17,
    english: "go for a walk",
    mandarin: "出去走走",
    pinyin: "chūqù zǒu zǒu"
  },
  {
    id: 18,
    english: "to go shopping",
    mandarin: "去购物",
    pinyin: "qù gòuwù"
  }
]
const FOOD = [
  {
      id: 1,
      english: "rice",
      mandarin: "白饭",
      pinyin: "báifàn"
  },
  {
    id: 2,
    english: "pasta",
    mandarin: "面食",
    pinyin: "miànshí"
  },
  {
    id: 3,
    english: "vegetables",
    mandarin: "蔬菜",
    pinyin: "shūcài"
  },
  {
    id: 4,
    english: "fruit",
    mandarin: "水果",
    pinyin: "shuǐguǒ"
  },
  {
    id: 5,
    english: "dumplings",
    mandarin: "饺子",
    pinyin: "jiǎozi"
  },
  {
    id: 6,
    english: "pork bun",
    mandarin: "猪肉包子",
    pinyin: "zhūròu bāozi"
  },
  {
    id: 7,
    english: "Shanghai dumplings",
    mandarin: "小笼包",
    pinyin: "xiǎo lóng bāo"
  },
  {
    id: 8,
    english: "noodles",
    mandarin: "面条",
    pinyin: "miàntiáo"
  },
  {
    id: 9,
    english: "hot pot",
    mandarin: "火锅",
    pinyin: "huǒguō"
  },
  {
    id: 10,
    english: "BBQ",
    mandarin: "烧烤",
    pinyin: "shāokǎo"
  },
  {
    id: 11,
    english: "sushi",
    mandarin: "寿司",
    pinyin: "shòusī"
  },
  {
    id: 12,
    english: "meat",
    mandarin: "肉",
    pinyin: "ròu"
  },
  {
    id: 13,
    english: "chicken",
    mandarin: "鸡",
    pinyin: "jī"
  },
  {
    id: 14,
    english: "beef",
    mandarin: "牛肉",
    pinyin: "niúròu"
  },
  {
    id: 15,
    english: "lamb",
    mandarin: "羊肉",
    pinyin: "yángròu"
  },
  {
    id: 16,
    english: "pork",
    mandarin: "猪肉",
    pinyin: "zhūròu"
  },
  {
    id: 17,
    english: "seafood",
    mandarin: "海鲜",
    pinyin: "hǎixiān"
  },
  {
    id: 18,
    english: "food",
    mandarin: "食物",
    pinyin: "shíwù"
  }
]
const FEELINGS = [
  {
      id: 1,
      english: "happy",
      mandarin: "快乐",
      pinyin: "kuàilè"
  },
  {
    id: 2,
    english: "excited",
    mandarin: "兴奋",
    pinyin: "xīngfèn"
  },
  {
    id: 3,
    english: "surprised",
    mandarin: "惊讶",
    pinyin: "jīngyà"
  },
  {
    id: 4,
    english: "confident",
    mandarin: "自信",
    pinyin: "zìxìn"
  },
  {
    id: 5,
    english: "calm",
    mandarin: "冷静",
    pinyin: "lěngjìng"
  },
  {
    id: 6,
    english: "tired",
    mandarin: "累",
    pinyin: "lèi"
  },
  {
    id: 7,
    english: "sick",
    mandarin: "生病",
    pinyin: "shēngbìng"
  },
  {
    id: 8,
    english: "hurt",
    mandarin: "痛",
    pinyin: "tòng"
  },
  {
    id: 9,
    english: "scared",
    mandarin: "害怕",
    pinyin: "hàipà"
  },
  {
    id: 10,
    english: "annoyed",
    mandarin: "烦恼",
    pinyin: "fánnǎo"
  },
  {
    id: 11,
    english: "lonely",
    mandarin: "孤独",
    pinyin: "gūdú"
  },
  {
    id: 12,
    english: "stress",
    mandarin: "压力",
    pinyin: "yālì"
  },
  {
    id: 13,
    english: "confused",
    mandarin: "困惑",
    pinyin: "kùnhuò"
  },
  {
    id: 14,
    english: "embarassed",
    mandarin: "尴尬",
    pinyin: "gāngà"
  },
  {
    id: 15,
    english: "angry",
    mandarin: "生气",
    pinyin: "shēngqì"
  },
  {
    id: 16,
    english: "unhappy",
    mandarin: "不开心",
    pinyin: "bù kāixīn"
  },
  {
    id: 17,
    english: "sad",
    mandarin: "伤心",
    pinyin: "shāngxīn"
  },
  {
    id: 18,
    english: "envious",
    mandarin: "羡慕",
    pinyin: "xiànmù"
  }
]
const CLOTHES = [
  {
      id: 1,
      english: "T-shirt",
      mandarin: "T恤衫",
      pinyin: "T xùshān"
  },
  {
    id: 2,
    english: "pants",
    mandarin: "裤子",
    pinyin: "kùzi"
  },
  {
    id: 3,
    english: "skirt",
    mandarin: "裙子",
    pinyin: "qúnzi"
  },
  {
    id: 4,
    english: "hat",
    mandarin: "帽子",
    pinyin: "màozi"
  },
  {
    id: 5,
    english: "gloves",
    mandarin: "手套",
    pinyin: "shǒutào"
  },
  {
    id: 6,
    english: "jacket",
    mandarin: "夹克",
    pinyin: "jiákè"
  },
  {
    id: 7,
    english: "suit",
    mandarin: "西装",
    pinyin: "xīzhuāng"
  },
  {
    id: 8,
    english: "tie",
    mandarin: "领带",
    pinyin: "lǐngdài"
  },
  {
    id: 9,
    english: "dress",
    mandarin: "连衣裙",
    pinyin: "liányīqún"
  },
  {
    id: 10,
    english: "shoes",
    mandarin: "鞋",
    pinyin: "xié"
  },
  {
    id: 11,
    english: "boots",
    mandarin: "靴子",
    pinyin: "xuēzi"
  },
  {
    id: 12,
    english: "belt",
    mandarin: "腰带",
    pinyin: "yāodài"
  },
  {
    id: 13,
    english: "socks",
    mandarin: "袜子",
    pinyin: "wàzi"
  },
  {
    id: 14,
    english: "underwear",
    mandarin: "内衣",
    pinyin: "nèiyī"
  },
  {
    id: 15,
    english: "jeans",
    mandarin: "牛仔裤",
    pinyin: "niúzǎikù"
  },
  {
    id: 16,
    english: "thongs",
    mandarin: "人字拖",
    pinyin: "rén zì tuō"
  },
  {
    id: 17,
    english: "bathers",
    mandarin: "泳装",
    pinyin: "yǒngzhuāng"
  },
  {
    id: 18,
    english: "bikini",
    mandarin: "比基尼",
    pinyin: "bǐjīní"
  }
]
const WEATHER = [
  {
      id: 1,
      english: "summer",
      mandarin: "夏天",
      pinyin: "xiàtiān"
  },
  {
    id: 2,
    english: "autumn",
    mandarin: "秋天",
    pinyin: "qiūtiān"
  },
  {
    id: 3,
    english: "winter",
    mandarin: "冬天",
    pinyin: "dōngtiān"
  },
  {
    id: 4,
    english: "spring",
    mandarin: "春天",
    pinyin: "chūntiān"
  },
  {
    id: 5,
    english: "season",
    mandarin: "季节",
    pinyin: "jìjié"
  },
  {
    id: 6,
    english: "hot",
    mandarin: "热",
    pinyin: "rè"
  },
  {
    id: 7,
    english: "warm",
    mandarin: "温暖",
    pinyin: "wēnnuǎn"
  },
  {
    id: 8,
    english: "cold",
    mandarin: "寒冷",
    pinyin: "hánlěng"
  },
  {
    id: 9,
    english: "rain",
    mandarin: "雨",
    pinyin: "xià Yǔ"
  },
  {
    id: 10,
    english: "snow",
    mandarin: "下雪",
    pinyin: "xià xuě"
  },
  {
    id: 11,
    english: "sunny",
    mandarin: "阳光",
    pinyin: "yángguāng"
  },
  {
    id: 12,
    english: "windy",
    mandarin: "有风",
    pinyin: "yǒu fēng"
  },
  {
    id: 13,
    english: "cloudy",
    mandarin: "多云的",
    pinyin: "duōyún"
  },
  {
    id: 14,
    english: "humid",
    mandarin: "湿",
    pinyin: "shī"
  },
  {
    id: 15,
    english: "weather",
    mandarin: "天气",
    pinyin: "tiānqì"
  },
  {
    id: 16,
    english: "temperature",
    mandarin: "温度",
    pinyin: "wēndù"
  },
  {
    id: 17,
    english: "climate",
    mandarin: "气候",
    pinyin: "qìhòu"
  },
  {
    id: 18,
    english: "storm",
    mandarin: "风暴",
    pinyin: "fēngbào"
  }
]
const COMPANIES = [
  {
      id: 1,
      english: "Google",
      mandarin: "谷歌",
      pinyin: "Gǔgē"
  },
  {
    id: 2,
    english: "Apple",
    mandarin: "苹果",
    pinyin: "Píngguǒ"
  },
  {
    id: 3,
    english: "Amazon",
    mandarin: "亚马逊",
    pinyin: "Yàmǎxùn"
  },
  {
    id: 4,
    english: "Facebook",
    mandarin: "脸书",
    pinyin: "Liǎn shū"
  },
  {
    id: 5,
    english: "Microsoft",
    mandarin: "微软",
    pinyin: "Wēiruǎn"
  },
  {
    id: 6,
    english: "Coca Cola",
    mandarin: "可口可乐",
    pinyin: "Kěkǒukělè"
  },
  {
    id: 7,
    english: "Alibaba",
    mandarin: "阿里巴巴",
    pinyin: "Ālǐ bābā"
  },
  {
    id: 8,
    english: "Baidu",
    mandarin: "百度",
    pinyin: "Bǎidù"
  },
  {
    id: 9,
    english: "Tencent",
    mandarin: "腾讯",
    pinyin: "Téngxùn"
  },
  {
    id: 10,
    english: "Uber",
    mandarin: "优步",
    pinyin: "Yōubù"
  },
  {
    id: 11,
    english: "Didi Chuxing",
    mandarin: "滴滴出行",
    pinyin: "Dīdī chūxíng"
  },
  {
    id: 12,
    english: "Meituan Dianping",
    mandarin: "美团点评",
    pinyin: "Měituán diǎnpíng"
  },
  {
    id: 13,
    english: "Toutiao",
    mandarin: "头条",
    pinyin: "Tóutiáo"
  },
  {
    id: 14,
    english: "Tesla",
    mandarin: "特斯拉",
    pinyin: "Tèsīlā"
  },
  {
    id: 15,
    english: "Samsung",
    mandarin: "三星",
    pinyin: "Sānxīng"
  },
  {
    id: 16,
    english: "Huawei",
    mandarin: "Huáwèi",
    pinyin: "Huáwèi"
  },
  {
    id: 17,
    english: "McDonald's",
    mandarin: "麦当劳",
    pinyin: "Màidāngláo"
  },
  {
    id: 18,
    english: "Starbucks",
    mandarin: "星巴克",
    pinyin: "Xīngbākè"
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

const GREETINGS_QUESTIONS = [
  {
    id: 1,
    paragraph: "大家好，我叫李老师。很高兴认识你们。最近我很好，但是今天我有点忙， 所以我不能留。下次课见，再见",
    question: "她的名字是什么",
    answers: [
      "小雨",
      "王经理",
      "李老师",
      "吴太太",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "她最近怎么样",
    answers: [
      "太好了",
      "不好",
      "很好",
      "马马虎虎",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "为什么她需要去",
    answers: [
      "她接到电话",
      "她很累",
      "她太饿了，想吃午餐",
      "她有点忙",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "她什么时候会再见到他们",
    answers: [
      "下次课",
      "下次星期",
      "在周五",
      "明天",
    ],
    correct: 0
  },
]
const ACTIVITIES_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const SHOPPING_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const CASUALTALK_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const GRAMMAR_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const STUDY_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const WORK_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const TRANSPORT_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const LOCATIONS_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const ECONOMICS_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const TECHNOLOGY_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const TOUR_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const HOUSEHOLD_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const HOBBIES_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const FOOD_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const FEELINGS_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const CLOTHES_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const WEATHER_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]
const COMPANIES_QUESTIONS = [
  {
    id: 1,
    paragraph: "blah blah blah",
    question: "question1",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "question2",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "question3",
    answers: [
      "answer1",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct: 3
  },
]