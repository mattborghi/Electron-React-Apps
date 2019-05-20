import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
// import CircularIntegration from './compile-file';
// import PDFFile from './pdf-file';
// import test from './test.pdf';
// import spdf from "simple-react-pdf";
// import './pdf-file.css'
import ChipSelector from './chip-selector.jsx'
import OneDimension from '../Plots/oneDimension.jsx'
import Contourplot from '../Plots/contourPlot.jsx'
import DiffPlot from '../Plots/diffPlot.jsx'
import Icon from '@mdi/react'
import { 
  mdiFile,
  mdiFilePlus, 
  mdiFilePdf,
} from '@mdi/js'

class NewTable extends Component {

    constructor(props) {
        super(props);   
    }

  render() {

    return (
      <div style={{ maxWidth: '100%', width: '100%' }}>
        <MaterialTable
        columns={[
           
            {title: 'Section#', render: rowData => rowData.status, searchable: true, sorting: true, },
            
            // {title: 'Test Name', render: rowData => this.props.rowState,},
            
            {title: 'Section Name', render: rowData => rowData.testName, searchable: true, sorting: true,  },
            {title: 'File', render: rowData => rowData.file, searchable: true, sorting: true,  },
            {title: 'Edit TeX', render: rowData => rowData.plotType, searchable: true, sorting: true,  },
            {title: 'Remove Section', render: rowData => rowData.contract, searchable: true, sorting: true,  },
            
            // {title: 'Test Name', render: rowData => rowData.testName, searchable: true, sorting: true,  },
            // {title: 'Product', render: rowData => rowData.product, searchable: true, sorting: true,  },
            // {title: 'Plot Type', render: rowData => rowData.plotType, searchable: true, sorting: true,  },
            // {title: 'Contract', render: rowData => rowData.contract, searchable: true, sorting: true,  },

        ]}
        data={[
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: <Button> 
                    <Icon path={mdiFile}
                    size={1}
                    color="white"
                    /></Button>,
            successScore: 50,
            plot: <DiffPlot />,
            file: <ChipSelector/>,
            },
            {
            testName: 'Limiting Case',
            product: 'Basket Asian Option',
            plotType: 'Features plot',
            contract: 'Contract A',
            status: 'Error',
            successScore: 20,
            plot: <OneDimension /> ,
            },
            {
            testName: 'Limiting Case',
            product: 'Basket Asian Option',
            plotType: 'Features plot',
            contract: 'Contract B',
            status: 'Stopped',
            successScore: 10,
            plot: <OneDimension /> ,
            },
            {
            testName: 'Convergence',
            product: 'Basket Asian Option',
            plotType: 'Contour plot',
            contract: 'Contract C',
            status: 'Finished',
            successScore: 100,
            plot: <Contourplot /> ,
            },            
        ]}
        
        title="Custom Render Example"

        // detailPanel={[
        //     {
        //         icon: 'poll-box',
        //         tooltip: 'Show Preview',
        //         render: rowData => {
        //         return (
        //             <div>                                       
        //                 {rowData.plot}                  
        //             </div>
        //         )
        //         },
        //     },
        // ]}    

        options = {{
            toolbar: true, // where the search and title are
            showTitle: false,
            paginationType: 'stepped', // normal or stepped
            pageSize: 13,
            paging: false,
            selection: false,
            searchFieldAlignment: 'left',
            search: false,

        }}

        // editable={{

        // onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 1000)}),

        // onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 1000)}),
        // }}
          
        // onRowClick={(event, rowData, togglePanel) => togglePanel(1)}
        />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('react-table'));
export default NewTable;
  
