import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"


function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [greetings, setGreetings] = useState(GREETINGS);
  const [introduction, setIntroduction] = useState(INTRODUCTION);
  const [transport, setTransport] = useState(TRANSPORT);
  const [locations, setLocations] = useState(LOCATIONS);

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
          <button className="selection" name="lessons" onClick={() => setLesson("Introduction")}>Introduction</button>
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
        {lesson === "Greetings" ? <Lesson topic="Greetings" flashcards={greetings} /> : null}
        {lesson === "Introduction" ? <Lesson topic="Introduction" flashcards={introduction} /> : null}
        {lesson === "Transport" ? <Lesson topic="Transport" flashcards={transport} /> : null}
        {lesson === "Locations" ? <Lesson topic="Locations" flashcards={locations} /> : null}
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
const INTRODUCTION = [
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
    english: "state/province",
    mandarin: "州",
    pinyin: "zhōu"
  }
]