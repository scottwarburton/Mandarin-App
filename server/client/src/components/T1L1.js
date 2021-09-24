import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlashCardList from "./FlashCardList";

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
                        <h2>Word List</h2>
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
        mandarin: "你好"
    },
    {
        id: 2,
        english: "goodbye",
        mandarin: "再见"
    },
    {
        id: 3,
        english: "he/her",
        mandarin: "他/她"
    },
    {
        id: 4,
        english: "plural",
        mandarin: "们"
    },
    {
        id: 5,
        english: "thank you",
        mandarin: "谢谢"
    },
    {
        id: 6,
        english: "name",
        mandarin: "名字"
    },
    {
        id: 7,
        english: "yes",
        mandarin: "是的"
    },
    {
        id: 8,
        english: "no",
        mandarin: "不是"
    },
    {
        id: 9,
        english: "excuse me",
        mandarin: "不好意思"
    },
    {
        id: 10,
        english: "you're welcome",
        mandarin: "不客气"
    },
    {
        id: 11,
        english: "no problem",
        mandarin: "没关系"
    },
    {
        id: 12,
        english: "recently",
        mandarin: "最近"
    },
    {
        id: 13,
        english: "good",
        mandarin: "好"
    },
    {
        id: 14,
        english: "not good",
        mandarin: "不好"
    },
    {
        id: 15,
        english: "very",
        mandarin: "很"
    },
    {
        id: 16,
        english: "and you?",
        mandarin: "你呢"
    },
    {
        id: 17,
        english: "question particle",
        mandarin: "吗"
    },
    {
        id: 18,
        english: "how is",
        mandarin: "怎么样"
    }
]

export default T1L1