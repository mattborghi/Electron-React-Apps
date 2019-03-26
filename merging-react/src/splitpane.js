import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import { DemoTree } from './Components/Tree/treebeard-icons';
import { AccordionClass } from './Components/Accordion/accordion';

class SplitPanes extends React.Component {
    render() {
        return (
            <div>
                <SplitPane split="vertical" minSize={200} maxSize={300} defaultSize="15%">
                    <div><DemoTree/></div>
                    <div>
                        <SplitPane split="vertical" defaultSize="20%" primary="second" allowResize={false}>
                            <div>
                                <SplitPane split="horizontal" defaultSize="20%" primary="second" minSize={150} maxSize={300}>
                                    <div>
                                        <SplitPane split="vertical" defaultSize="50%">
                                            <div>
                                                <h3>Second horizontal pane</h3>
                                            </div>
                                            <div>
                                                <h3>Third vertical pane</h3>
                                            </div>    
                                        </SplitPane>
                                    </div>
                                    <div>
                                        <h3>First horizontal pane</h3>
                                    </div>
                                    
                                </SplitPane>
                            </div>
                            <div>
                                <AccordionClass/>
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