import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
// import CircularIntegration from './compile-file';
// import PDFFile from './pdf-file';
// import test from './test.pdf';
// import spdf from "simple-react-pdf";
// import './pdf-file.css'
import OneDimension from '../Plots/oneDimension.jsx';
import Contourplot from '../Plots/contourPlot.jsx';
import DiffPlot from '../Plots/diffPlot.jsx';

class NewTable extends Component {

    constructor(props) {
        super(props);   
    }

    // render() {
    //     let {productsList} =  this.props.rowState;
    //     return (
    //       <table>
    //         <tbody>
    //           { productsList.map((product, i) =>{
    //             return(
    //               <tr key={i+1}>
    //                 <td>{i+1}</td>
    //                 <td>{product.name}</td>
    //                 <td>
    //                     <div class="checkbox checkbox-circle checkbox-color-scheme">
    //                         <label class="checkbox-checked">
    //                             <input type="checkbox" value={product.name} checked={product.isChecked} onChange={this.onAddingItem(i)}/> <span class="label-text">Add ?</span>
    //                         </label>
    //                     </div>
    //                 </td>
    //             </tr>
    //             )
    //           })}
              
    //         </tbody>
    //       </table>
    //     )
    //   }

  render() {
    // let {productsList} =  this.props.rowState;
    // console.log (this.props.rowState)
    // console.log (this.props.data)
    return (
      <div style={{ width: '150%' }}>
        <MaterialTable
        columns={[
           
            {title: 'Status', render: rowData => rowData.status, searchable: true, sorting: true, },
            
            // {title: 'Test Name', render: rowData => this.props.rowState,},
            {
            title: 'Progress',
            field: 'successScore',
            render: rowData => {
                const score = rowData.successScore + '%'
                const color = rowData.successScore > 25 ? '#4CAF50' : '#f44336'
                return (
                <div style={{ width: '100%', backgroundColor: '#ddd', height: 20 }}>
                    <div
                    style={{
                        textAlign: 'left',
                        padding: 0,
                        color: 'white',
                        width: score,
                        backgroundColor: color,
                        height: 20,
                    }}
                    >
                    {score}
                    </div>
                </div>
                )
            },
            searchable: true
            },
            {title: 'Test Name', render: rowData => rowData.testName, searchable: true, sorting: true,  },
            {title: 'Product', render: rowData => rowData.product, searchable: true, sorting: true,  },
            {title: 'Plot Type', render: rowData => rowData.plotType, searchable: true, sorting: true,  },
            {title: 'Contract', render: rowData => rowData.contract, searchable: true, sorting: true,  },
            
            // {title: 'Test Name', render: rowData => { if (this.props.rowState) {rowData.name} }},
            // {title: 'Birth Year',  field: 'birthYear', type: 'numeric' },
        ]}
        data={[
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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
            {
            testName: 'Benchmarking',
            product: 'Basket Asian Option',
            plotType: 'Comparison plot',
            contract: 'Contract C',
            status: 'Running',
            successScore: 50,
            plot: <DiffPlot />,
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

        detailPanel={[
            {
                icon: 'poll-box',
                tooltip: 'Show Preview',
                render: rowData => {
                return (
                    <div>                                       
                        {rowData.plot}                  
                    </div>
                )
                },
            },
        ]}    

        options = {{
            toolbar: true, // where the search and title are
            showTitle: false,
            paginationType: 'stepped', // normal or stepped
            pageSize: 13,
            paging: false,
            selection: true,
            searchFieldAlignment: 'left'

        }}

        // editable={{

        // onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 1000)}),

        // onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 1000)}),
        // }}
          
        onRowClick={(event, rowData, togglePanel) => togglePanel(1)}
        />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('react-table'));
export default NewTable;
  
