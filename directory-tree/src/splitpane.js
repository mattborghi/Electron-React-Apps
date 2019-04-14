import React from 'react';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
// import TreeView from './Components/Directory/treeview';
import Dropzone from './Components/Directory/dropzone';
// import dirTree from 'directory-tree';

// let root = "./";
// const tree = dirTree(root);
// console.log(tree);
// import { getStructure } from 'json-dir-tree-react';
// var basepath = './';
// var fs = require('fs'); // you can select any filesystem as long as it implements the same functions that native fs uses.
 
// getStructure(fs, basepath, function (err, structure, total) {
//     if (err) console.log(err);
 
//     console.log('there are a total of: ', total.folders, ' folders and ', total.files, ' files');
//     console.log('the structure looks like: ', JSON.stringify(structure, null, 4));
// });

// Maybe check something like this: https://jaketrent.com/post/select-directory-in-electron/ ?

// const path = require('path')
// var currentDir = path.dirname('./')
// console.log(currentDir)

// const fs = require('fs');
// fs.readdir('.', function (err, files) {
//  if (err)
//     throw err;
//  for (var index in files) {
//     console.log(files[index]);
//  }
//  });


class SplitPanes extends React.Component {
    render() {
        return (
            <div>
                <SplitPane split="vertical" minSize={200} maxSize={300} defaultSize="15%">
                    <div>
                        <NestedList />
                    </div>
                    <div>
                        <SplitPane split="vertical" defaultSize="20%" primary="second" allowResize={false}>
                            <div>
                                <SplitPane split="horizontal" defaultSize="20%" primary="second" minSize={150} maxSize={300}>
                                    <div>
                                        <SplitPane split="vertical" defaultSize="50%">
                                            <div>
                                                {/* <TreeView root='./' /> */}
                                                <Dropzone />
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