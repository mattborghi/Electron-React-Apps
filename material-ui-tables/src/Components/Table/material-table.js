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
            {
            title: 'Name',
            render: rowData => rowData.name + ' ' + rowData.surname,
            },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 10: 'San Martin City'},
            },
            {
            title: 'Progress',
            field: 'successScore',
            render: rowData => {
                const score = rowData.successScore + '%'
                const color = rowData.successScore > 70 ? '#4CAF50' : '#f44336'
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
            birthYear: 1987,
            birthCity: 63,
            successScore: 58,
            plot: <OneDimension /> ,
            },
            {
            name: 'Contour',
            surname: 'Plot',
            birthYear: 2017,
            birthCity: 34,
            successScore: 90,
            plot: <Contourplot /> ,
            },
            {
            name: 'Comparison',
            surname: 'Plot',
            birthYear: 1986,
            birthCity: 10,
            successScore: 70,
            plot: <DiffPlot /> ,
            },
        ]}
        title="Custom Render Example"
        // actions={[
        //     {
        //        icon: 'search', 
        //        tooltip: 'Preview File',
        //        onClick: (event, rowData) => {
        //             // alert('Previewing file ' + rowData.name)
        //        },
        //        iconProps: {
        //             style: {
        //                 fontSize: 30,
        //                 // color: 'blue',
        //             },
        //        },
        //     },
        // ]}

        detailPanel={[
            // {
            //     tooltip: 'Show Row info',
            //     render: rowData => {
            //     return (
            //         <div style={{fontSize: 100,textAlign: 'center',color: 'white',backgroundColor: '#43A047',}}>
            //         {rowData.birthYear}                    
            //         </div>
            //     )
            //     },              
            // //     render: () => {
            // //         alert('Previewing file ')
            // //    },
            // },

            {
                icon: 'search',
                tooltip: 'Show Preview',
                render: rowData => {
                return (
                    <div>               
                        {rowData.plot}  
                        {/* <CircularIntegration /> */}
                        {/* <PDFFile /> */}
                        {/* <spdf.SimplePDF file="./test.pdf"/> */}
                    </div>
                )
                },
            },

            // rowData => ({
            //     disabled: rowData.name === 'ax',
            //     icon: 'favorite_border',
            //     openIcon: 'favorite',
            //     tooltip: 'Show Both',
            //     render: rowData => {
            //     return (
            //         <div style={{fontSize: 100,textAlign: 'center',color: 'white',backgroundColor: '#FDD835',}}>
            //         {rowData.name} {rowData.surname}
            //         </div>
            //     )
            //     },
            // }),
        ]}

        editable={{
        // onRowAdd: newData =>
        //     new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         {
        //     //     /* const data = this.state.data;
        //     // data.push(newData);
        //     // this.setState({ data }, () => resolve()); */
        //         }
        //         resolve()
        //     }, 1000)
        //     }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
            setTimeout(() => {
                // {
                //         /* const data = this.state.data;
                // const index = data.indexOf(oldData);
                // data[index] = newData;                
                // this.setState({ data }, () => resolve()); */
                // }
                resolve()
            }, 1000)
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
            setTimeout(() => {
                // {
                //         /* let data = this.state.data;
                // const index = data.indexOf(oldData);
                // data.splice(index, 1);
                // this.setState({ data }, () => resolve()); */
                // }
                resolve()
            }, 1000)
            }),
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel(1)}
        />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('react-table'));
export default NewTable;
  
