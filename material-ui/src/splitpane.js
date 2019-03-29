import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';

class SplitPanes extends React.Component {
    render() {
        return (
            <div>
                {/* Check this values with merging-react app */}
                <SplitPane split="vertical" minSize="15%" defaultSize="15%">
                    <div>
                        <NestedList />
                    </div>
                    <div>
                        <SplitPane split="vertical" minSize="30%" defaultSize="80%">
                            <div>
                                <SplitPane split="horizontal" defaultSize="80%">
                                    <div>
                                        <SplitPane split="vertical" defaultSize="50%">
                                            <div>
                                                <h3>Second horizontal pane</h3>
                                            </div>
                                            <div>
                                                <h3>Third horizontal pane</h3>
                                            </div>    
                                        </SplitPane>
                                    </div>
                                    <div>
                                        <FullWidthTabs />
                                    </div>
                                    
                                </SplitPane>
                            </div>
                            <div>
                                <ExpansionPanel />
                            </div>
                        </SplitPane>
                    </div>
                </SplitPane>
            </div>
        );
    }
}

const content = document.getElementById('pane');
ReactDOM.render(<SplitPanes/>, content);