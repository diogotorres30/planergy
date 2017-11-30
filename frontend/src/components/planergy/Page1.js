import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Line} from 'react-chartjs-2';
import SwipeableViews from 'react-swipeable-views';

class Estimations extends React.Component{
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
    componentWillMount(){
        this.setState(initialState);
    }
    componentDidMount(){
        
        var _this = this;
        
        setInterval(function(){
        var oldDataSet = _this.state.datasets[0];
        var newData = [];
        
        for(var x=0; x< _this.state.labels.length; x++){
            newData.push(Math.floor(Math.random() * 300));
                    }
        
                var newDataSet = {
                    ...oldDataSet
                    };
        
                newDataSet.data = newData;
        
                var newState = {
                    ...initialState,
                    datasets: [newDataSet]
                    };
        
                    _this.setState(newState);
                }, 5000);
            }


render() {
    return (
      
        <div  >
        <div style = {{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
        
               <Tabs style = {{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}} onChange={this.handleChange}
               value={this.state.slideIndex}
                                       >
               <Tab label="Consumptions" value={'/'} nav/>
               <Tab label="Estimations" value={'Page1'} />
               <Tab label="Tips" value={'Tips'} />
               </Tabs>
           <SwipeableViews
         index={this.state.slideIndex}
         onChangeIndex={this.handleChange}
       >
        
       </SwipeableViews>
      
       <div style = {{background: '#e0e0e0', borderLeft: '2px solid red', overflow: 'hidden'}}>
        <Line data={this.state} />
     </div>
     
        </div>
        
       </div>
     
    )
}    }    
export default Estimations;

const initialState = {
    labels: ['Kitchen', 'Living Room', 'Kevins Room', 'Bed rom', 'Garden'],
    datasets: [
      {
        label: 'Estimations',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [35, 20 , 15, 15, 10 ]
      }
    ]
  };
  
  
  
  
  
 