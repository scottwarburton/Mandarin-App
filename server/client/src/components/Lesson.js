import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlashCardList from "./FlashCardList";
import Sentences from './Sentences';
import WordList from "./WordList";

function Lesson(props) { 
    return (
        <div id="LessonOne">
            <Tabs>
                <div className="tabContent">
                    <TabPanel>
                        <div id="lessonHeading">
                            <h3>Welcome to {props.lesson}</h3>
                        </div>
                        <div id="lessonPicDiv">
                            <img id="lessonPic" src={props.picture}/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <WordList flashcards={props.flashcards} />
                    </TabPanel>
                    <TabPanel>
                        <FlashCardList flashcards={props.flashcards} />
                    </TabPanel>
                    <TabPanel>
                        <Sentences sentences={props.sentences} />
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


export default Lesson