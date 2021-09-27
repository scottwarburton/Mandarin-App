import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"


function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  /*
  const [greetings, setGreetings] = useState(GREETINGS);
  const [activities, setActivities] = useState(ACTIVITIES);
  const [transport, setTransport] = useState(TRANSPORT);
  const [locations, setLocations] = useState(LOCATIONS);
  */
  return (
    <div id="app">
      <h1>Learning Mandarin</h1>

      {topic === "" && lesson === "" && <h3>Welcome to Learning Mandarin by Scott</h3>} 

      { topic === "" &&
        <div className="selectionForm">
          <h3>Topics:</h3>
          <button className="selection" name="topics" onClick={() => setTopic("Everyday")}>Everyday</button>
          <button className="selection" name="topics" onClick={() => setTopic("Travel")}>Travel</button>
        </div>
      }
      { topic === "Everyday" && lesson === "" &&
        <div className="selectionForm">
          <h3>Lessons:</h3>
          <button className="selection" name="lessons" onClick={() => setLesson("Greetings")}>Greetings</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Activities")}>Activities</button>
        </div>
      }
      { topic === "Travel" && lesson === "" &&
        <form className="selectionForm">
          <button className="selection" name="lessons" onClick={() => setLesson("Transport")}>Transport</button>
          <button className="selection" name="lessons" onClick={() => setLesson("Locations")}>Locations</button>
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
        {lesson === "Transport" ? <Lesson lesson={lesson} flashcards={TRANSPORT} sentences={TRANSPORT_SENTENCES} /> : null}
        {lesson === "Locations" ? <Lesson lesson={lesson} flashcards={LOCATIONS} sentences={LOCATIONS_SENTENCES} /> : null}
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
  "你好，最近怎么样"
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
  "我喜欢去电影院",
  "你好，最近怎么样"
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
  "你好，最近怎么样"
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
  "我来自澳洲。现在我住在墨尔本，但是我想住在上海",
  "你好，最近怎么样"
]