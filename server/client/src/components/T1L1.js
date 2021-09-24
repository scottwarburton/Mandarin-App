import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlashCardList from "./FlashCardList";
import WordList from "./WordList";

function T1L1() { 
    const [flashcards, setFlashcards] = useState(FLASHCARDS);
    return (
        <div id="LessonOne">
            <Tabs>
                <div className="tabContent">
                    <TabPanel>
                        <h3>Welcome to Topic 1 Lesson 1</h3>
                    </TabPanel>
                    <TabPanel>
                        <WordList flashcards={flashcards} />
                    </TabPanel>
                    <TabPanel>
                        <FlashCardList flashcards={flashcards} />
                    </TabPanel>
                    <TabPanel>
                        <h2>Practise sentence here</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Quiz time</h2>
                    </TabPanel>
                </div>
                
                <TabList className="tablist">
                    <Tab>Intro</Tab>
                    <Tab>Word list</Tab>
                    <Tab>Flash cards</Tab>
                    <Tab>Sentences</Tab>
                    <Tab>Quiz</Tab>
                </TabList>
            </Tabs>
        </div>
    )
}

const FLASHCARDS = [
    {
        id: 1,
        english: "hello",
        mandarin: "你好",
        pinyin: "Nǐ hǎo"
    },
    {
        id: 2,
        english: "goodbye",
        mandarin: "再见",
        pinyin: "Zàijiàn"
    },
    {
        id: 3,
        english: "he/her",
        mandarin: "他/她",
        pinyin: "Tā"
    },
    {
        id: 4,
        english: "plural",
        mandarin: "们",
        pinyin: "Men"
    },
    {
        id: 5,
        english: "thank you",
        mandarin: "谢谢",
        pinyin: "Xièxiè"
    },
    {
        id: 6,
        english: "name",
        mandarin: "名字",
        pinyin: "Míngzì"
    },
    {
        id: 7,
        english: "yes",
        mandarin: "是的",
        pinyin: "Shì de"
    },
    {
        id: 8,
        english: "no",
        mandarin: "不是",
        pinyin: "Bùshì"
    },
    {
        id: 9,
        english: "excuse me",
        mandarin: "不好意思",
        pinyin: "Bù hǎoyìsi"
    },
    {
        id: 10,
        english: "you're welcome",
        mandarin: "不客气",
        pinyin: "Bù kèqì"
    },
    {
        id: 11,
        english: "no problem",
        mandarin: "没关系",
        pinyin: "Méiguānxì"
    },
    {
        id: 12,
        english: "recently",
        mandarin: "最近",
        pinyin: "Zuìjìn"
    },
    {
        id: 13,
        english: "good",
        mandarin: "好",
        pinyin: "Hǎo"
    },
    {
        id: 14,
        english: "not good",
        mandarin: "不好",
        pinyin: "Bù hǎo"
    },
    {
        id: 15,
        english: "very",
        mandarin: "很",
        pinyin: "Hěn"
    },
    {
        id: 16,
        english: "and you?",
        mandarin: "你呢",
        pinyin: "Nǐ ne"
    },
    {
        id: 17,
        english: "question particle",
        mandarin: "吗",
        pinyin: "Ma"
    },
    {
        id: 18,
        english: "how is",
        mandarin: "怎么样",
        pinyin: "Zěnme yàng"
    }
]

export default T1L1