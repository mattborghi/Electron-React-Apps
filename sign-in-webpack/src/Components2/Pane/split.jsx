import React from 'react'
import Split from 'react-split'
import  NestedList from '../NestedList/nested-list'
import CustomizedExpansionPanel from '../Accordion/accordion'
import TextFields from '../Form/select-range'
import './style.css'


class SplitPane extends React.Component {

    render(){
        return(
            <Split 
                direction="horizontal"
                sizes={[75,25]}
            >
                <NestedList />
                {/* <TextFields /> */}
                <CustomizedExpansionPanel />
            </Split>
        )
    }

}

export default SplitPane