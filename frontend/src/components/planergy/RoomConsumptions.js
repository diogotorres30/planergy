import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';
import RaisedButton from 'material-ui/RaisedButton';

class RoomConsumptions extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
        };
      }
      
      
      handleChange = (value) => {
        
        this.setState({
          slideIndex: value,
        });
      };
        
//select = (index) => this.setState({selectedIndex: index});
    render() {
        return (
            <div>
              <Doughnut style ={{widht: "30", height: "50"}} data={data}/>
              <HorizontalBar  style={{borderLeft: '1px solid red', borderTop: '1px solid red'}} data={data} />
              <div style={{display: 'inline'}}>
                <RaisedButton label="Living room Tips"/>
                <RaisedButton label="Bed room Tips"/>
                <RaisedButton label="Kitchen room Tips"/>
              </div>
            </div>
        );
      }
    }
  

export default RoomConsumptions;


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

