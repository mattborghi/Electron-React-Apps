import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import "react-tabs/style/react-tabs.css";

const Tabular = () => (
  <Tabs forceRenderTabPanel defaultIndex={0}>
    <TabList>
      <Tab>ToDo</Tab>
      <Tab>Terminal</Tab>
      <Tab>Python Shell</Tab>
      <Tab>Error Console</Tab>
    </TabList>
    <TabPanel>
      <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
    </TabPanel>
    <TabPanel>
      <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
    </TabPanel>
    <TabPanel>
      <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
      <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
    </TabPanel>
    <TabPanel>
      <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
    </TabPanel>
  </Tabs>
);

ReactDOM.render(<Tabular/>, document.getElementById('tabs'))