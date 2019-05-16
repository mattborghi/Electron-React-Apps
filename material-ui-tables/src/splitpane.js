import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list';
import  NestedList2 from './Components/NestedList/nested-list2';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
// import EnhancedTable from './Components/Table/table';
// import ReactVirtualizedTable from './Components/Table/virtual-table';
import NewTable from './Components/Table/material-table';

class SplitPanes extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           checkboxState: false,
        //    new Map(),
        };
    }

    onTest = (recieveChecks) => {this.setState(state => ({checkboxState: recieveChecks}))}
    Onchecked = (recieveChecks) => {this.setState(state => ({checkboxState: recieveChecks}))}

    render() {
        // console.log (this.state.checkboxState)
        const checkboxes = [
            {
              name: 'One_Dimension',
              feature: 'checkBox1',
              label: 'Check Box 1',
            },
            {
              name: 'Contour',
              feature: 'checkBox2',
              label: 'Check Box 2',
            },
            {
              name: 'Comparison',
              feature: 'checkBox3',
              label: 'Check Box 3',
            },
            // {
            //   name: 'check-box-4',
            //   feature: 'checkBox4',
            //   label: 'Check Box 4',
            // },
        ];
        return (
            <div>
                <SplitPane split="vertical" minSize={200} maxSize={300} defaultSize="15%">
                    <div>
                        <NestedList test={this.onTest}/>
                        {/* <NestedList2 checked={this.Onchecked} data={checkboxes} /> */}
                    </div>
                    <div>
                        <SplitPane split="vertical" defaultSize="20%" primary="second" allowResize={false}>
                            <div>
                                <SplitPane split="horizontal" defaultSize="20%" primary="second" minSize={150} maxSize={300}>
                                    <div>                                 
                                            <NewTable rowState={this.state.checkboxState} data={checkboxes}/>                                                
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