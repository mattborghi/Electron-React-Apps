import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
import TextFields from './Components/Form/select-range';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';


class SplitPanes extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = {
            sidebarVisible: true
        };
    }

    toggleSidebar() {
        this.setState(state => ({ sidebarVisible: !state.sidebarVisible }));
    }

    render() {
        return (
            <div>
                <SplitterLayout primaryIndex={0} primaryMinSize={10} secondaryMinSize={80} percentage>
                    {/* Hiding sidebar */}
                    {this.state.sidebarVisible &&
                    (
                        <div>
                            <NestedList />
                        </div>
                    )}
                    <div>
                        <SplitterLayout primaryIndex={0} primaryMinSize={80} secondaryMinSize={20} percentage secondaryInitialSize={20}>
                            <div>
                                <SplitterLayout vertical percentage primaryIndex={0} secondaryInitialSize={20} primaryMinSize={60} secondaryMinSize={10}>
                                    <div>
                                        <TextFields />
                                    </div>
                                    <div>
                                        <FullWidthTabs />
                                    </div>
                                    
                                </SplitterLayout>
                            </div>
                            <div>
                                <button type="button" onClick={this.toggleSidebar}>
                                    {this.state.sidebarVisible && 'Hide Sidebar'}
                                    {!this.state.sidebarVisible && 'Show Sidebar'}
                                </button>
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
ReactDOM.render(<SplitPanes/>, content);