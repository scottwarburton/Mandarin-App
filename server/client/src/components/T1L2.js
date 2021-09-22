import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const T1L2 = () => {
    return (
        <div>
            <Tabs>
                <div className="tabContent">
                    <TabPanel>
                        <h3>Welcome to Topic 1 Lesson 2</h3>
                    </TabPanel>
                    <TabPanel>
                        <h2>Word list</h2>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
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
                
                <TabList>
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

export default T1L2
