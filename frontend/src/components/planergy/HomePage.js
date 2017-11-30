import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
//import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';





class HomePage extends React.Component{
    //export default React.HomePage({
        //displayName: 'DoughnutExample',
select = (index) => this.setState({selectedIndex: index});
    render() {
        return (
          
            <div  >
            <div style={{marginTop:'20', background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
            <h3 style={{fontSize: '1.75rem', paddingLeft: '1rem', fontWeight: 'normal'}}>Consumptions</h3>
            </div>
            
            <Doughnut style ={{widht: "30", height: "50"}} data={data}/>
            <div style={{ borderBottom: '2px solid red', overflow: 'hidden'}}></div>
            <div style = {{borderLeft: '2px solid red'}}>
            
        <HorizontalBar  data={data} />
            </div>
          </div>

        );
      }
    }
    

export default HomePage;

const data = {
    labels: [
        'Kitchen',
        'Living Room',
        'Basement',
        'Kevins Room'
    ],
    
    datasets: [{
        label: 'Consumption',
        data: [40, 27, 23,10],
        backgroundColor: [
        '#FF1C00',
        '#FF5C5C',
        '#E34234',
        '#FF6961'
        ],
        hoverBackgroundColor: [
        '#c32738',
        '#36A2EB',
        '#03C03C',
        '#36AFFF'
        ]
    }]
};

