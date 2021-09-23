import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const wordList = [
    ["hello", "你好", ""],
    ["goodbye", "再见", ""],
    ["me", "我", ""],
    ["you", "你", ""],
    ["him/her", "他/她", ""],
    ["plural", "们", ""],
    ["thank you", "谢谢", ""],
    ["name", "名字", ""],
    ["yes", "是的", ""],
    ["no", "不是", ""],
    ["excuse me", "不好意思", ""],
    ["you're welcome", "不客气", ""],
    ["no problem", "没关系", ""],
    ["recently", "最近", ""],
    ["good", "好", ""],
    ["not good", "不好", ""],
    ["very", "很", ""],
    ["and you?", "你呢", ""],
    ["question character", "吗", ""],
    ["how is", "怎么样", ""]
]
const T1L1 = () => { 

    return (
        <div id="LessonOne">
            <Tabs>
                <div className="tabContent">
                    <TabPanel>
                        <h3>Welcome to Topic 1 Lesson 1</h3>
                    </TabPanel>
                    <TabPanel>
                        <h2>Word list</h2>
                        <div className="wordListBox">
                            <div className="wordList">{wordList.map(item => (
                                <div>{item[0]}</div>
                                ))}
                            </div>
                            <div className="wordList">{wordList.map(item => (
                                <div>{item[1]}</div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Flash cards</h2>
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

export default T1L1
