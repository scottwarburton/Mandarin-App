import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const T2L1 = () => {
    return (
        <div>
            <Tabs>
                <div className="tabContent">
                    <TabPanel>
                        <h3>Welcome to Topic 2 Lesson 1</h3>
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

export default T2L1
