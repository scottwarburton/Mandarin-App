import './App.css';
import React, { useState } from "react"
import Lesson from "./components/Lesson"


function App() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [flashcards, setFlashcards] = useState(FLASHCARDS);

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
        {lesson === "Greetings" ? <Lesson topic="Greetings" flashcards={flashcards} /> : null}
        {lesson === "Introduction" ? <Lesson topic="Introduction" flashcards={flashcards} /> : null}
        {lesson === "Transport" ? <Lesson topic="Transport" flashcards={flashcards} /> : null}
        {lesson === "Locations" ? <Lesson topic="Locations" flashcards={flashcards} /> : null}
      </div>
    </div>
  );

}

export default App;


const FLASHCARDS = [
  {
      id: 1,
      english: "hello",
      mandarin: "你好",
      pinyin: "nǐ hǎo",
      sentence: "sentence1"
  },
  {
      id: 2,
      english: "goodbye",
      mandarin: "再见",
      pinyin: "zàijiàn",
      sentence: "sentence2"
  },
  {
      id: 3,
      english: "he/her",
      mandarin: "他/她",
      pinyin: "tā",
      sentence: "sentence3"
  },
  {
      id: 4,
      english: "we",
      mandarin: "我们",
      pinyin: "wǒmen",
      sentence: ""
  },
  {
      id: 5,
      english: "thank you",
      mandarin: "谢谢",
      pinyin: "xièxiè",
      sentence: ""
  },
  {
      id: 6,
      english: "name",
      mandarin: "名字",
      pinyin: "míngzì",
      sentence: ""
  },
  {
      id: 7,
      english: "yes",
      mandarin: "是的",
      pinyin: "shì de",
      sentence: ""
  },
  {
      id: 8,
      english: "no",
      mandarin: "不是",
      pinyin: "bùshì",
      sentence: ""
  },
  {
      id: 9,
      english: "excuse me",
      mandarin: "不好意思",
      pinyin: "bù hǎoyìsi",
      sentence: ""
  },
  {
      id: 10,
      english: "you're welcome",
      mandarin: "不客气",
      pinyin: "bù kèqì",
      sentence: ""
  },
  {
      id: 11,
      english: "no problem",
      mandarin: "没关系",
      pinyin: "méiguānxì",
      sentence: ""
  },
  {
      id: 12,
      english: "recently",
      mandarin: "最近",
      pinyin: "zuìjìn",
      sentence: ""
  },
  {
      id: 13,
      english: "good",
      mandarin: "好",
      pinyin: "hǎo",
      sentence: ""
  },
  {
      id: 14,
      english: "not good",
      mandarin: "不好",
      pinyin: "bù hǎo",
      sentence: ""
  },
  {
      id: 15,
      english: "very",
      mandarin: "很",
      pinyin: "hěn",
      sentence: ""
  },
  {
      id: 16,
      english: "and you?",
      mandarin: "你呢",
      pinyin: "nǐ ne",
      sentence: ""
  },
  {
      id: 17,
      english: "called",
      mandarin: "叫",
      pinyin: "jiào",
      sentence: ""
  },
  {
      id: 18,
      english: "how is",
      mandarin: "怎么样",
      pinyin: "zěnme yàng",
      sentence: ""
  }
]