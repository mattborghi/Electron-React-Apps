import React from 'react';
import ReactDOM from 'react-dom';

// import SplitPane from 'react-split-pane';
import SplitterLayout from 'react-splitter-layout';
import './splitter-layout.css';
import './index.css';
// import './splitpane.css';
import NestedList from './Components/NestedList/nested-list';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
import MonacoEditor from './App.js';

class SplitPanes extends React.Component {
  //    constructor(props){
  //        super(props);
  //        this.state = {

  //        }
  //    }

  render() {
    return (
      <div>
        {/* <SplitPane
          split="vertical"
          minSize={200}
          maxSize={300}
          defaultSize="15%"
        > */}
        <SplitterLayout
          primaryIndex={0}
          primaryMinSize={10}
          secondaryMinSize={80}
          percentage
          customClassName="custom-scrollbar"
        >
          <div>
            <NestedList />
          </div>
          <div>
            {/* <SplitPane
              split="vertical"
              defaultSize="20%"
              primary="second"
              allowResize={false}
            > */}
            <SplitterLayout
              primaryIndex={0}
              primaryMinSize={80}
              secondaryMinSize={20}
              percentage
              secondaryInitialSize={20}
              customClassName="custom-scrollbar"
            >
              <div>
                {/* <SplitPane
                  split="horizontal"
                  defaultSize="20%"
                  primary="second"
                  minSize={150}
                  maxSize={300}
                > */}
                <SplitterLayout
                  vertical
                  percentage
                  primaryIndex={0}
                  secondaryInitialSize={20}
                  primaryMinSize={60}
                  secondaryMinSize={10}
                  customClassName="custom-scrollbar"
                >
                  <div>
                    <SplitterLayout 
                        percentage
                        primaryIndex={0}
                        secondaryInitialSize={50}
                        // primaryMinSize={60}
                        // secondaryMinSize={10}
                        customClassName="custom-scrollbar"
                    >
                      <div>
                        <h3>Second horizontal pane</h3>
                      </div>
                      <div>
                        <MonacoEditor />
                      </div>
                    </SplitterLayout>
                  </div>
                  <div>
                    <FullWidthTabs />
                  </div>
                </SplitterLayout>
              </div>
              <div>
                <ExpansionPanel />
              </div>
            </SplitterLayout>
          </div>
        </SplitterLayout>
      </div>
    );
  }
}

const content = document.getElementById('pane');
ReactDOM.render(<SplitPanes />, content);
