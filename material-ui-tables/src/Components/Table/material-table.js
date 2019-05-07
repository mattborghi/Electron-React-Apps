import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import CircularIntegration from './compile-file';
// import PDFFile from './pdf-file';
// import test from './test.pdf';
// import spdf from "simple-react-pdf";
// import './pdf-file.css'
import OneDimension from '../Plots/oneDimension';
import Contourplot from '../Plots/contourPlot';
import DiffPlot from '../Plots/diffPlot';

class NewTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        columns={[
            {title: 'Test Name', render: rowData => rowData.name + ' ' + rowData.surname,},
            // {title: 'Birth Year',  field: 'birthYear', type: 'numeric' },
            {title: 'Contract', field: 'contract', lookup: { 1: 'Contract A', 2: 'Contract B', 3: 'Contract C'},},
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
            },
        ]}
        data={[
            {
            name: 'One Dimension',
            surname: 'Plot',
            // birthYear: 1987,
            contract: 1,
            successScore: 20,
            plot: <OneDimension /> ,
            },
            {
            name: 'Contour',
            surname: 'Plot',
            // birthYear: 2017,
            contract: 2,
            successScore: 90,
            plot: <Contourplot /> ,
            },
            {
            name: 'Comparison',
            surname: 'Plot',
            // birthYear: 1986,
            contract: 3,
            successScore: 70,
            plot: <DiffPlot /> ,
            },
        ]}
        
        title="Custom Render Example"

        detailPanel={[
            {
                icon: 'favorite_border',
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
  
