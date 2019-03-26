import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'

class SplitPanes extends React.Component {
    render() {
        return (
            <div>
                <SplitPane split="vertical" minSize="10%" defaultSize="10%">
                    <div>
                        <h3>First vertical pane</h3>
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
                                        <h3>First horizontal pane</h3>
                                    </div>
                                    
                                </SplitPane>
                            </div>
                            <div>
                                <h3>Third vertical pane</h3>
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