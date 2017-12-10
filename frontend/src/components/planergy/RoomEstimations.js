import React from 'react';
import {Bar} from 'react-chartjs-2';

const RoomEstimations = ({keys, data, whole}) =>{

    let transformed = [];
    
      if(whole){
        keys.map(o => {
            transformed.push(
            {
                // id: o.id, 
                name: o.name, 
                color: o.color,
                value: data.filter(p => p.roomId === o.id).map(p => p.consumption).reduce((sum, x) => sum + x, 0),
                estimation: data.filter(p => p.roomId === o.id).map(p => p.consumption * p.estimation).reduce((sum, x) => sum + x, 0)
            });
            // transformed.push(
            //     {
            //         // id: o.id, 
            //         name: `${o.name} Est.` , 
            //         color: o.color,
            //         // value: data.filter(p => p.roomId === o.id).map(p => p.consumption).reduce((sum, x) => sum + x, 0),
            //         value: data.filter(p => p.roomId === o.id).map(p => p.consumption * p.estimation).reduce((sum, x) => sum + x, 0)
            //     });            
        }
        );
      }
      else{
        data.map(o => transformed.push({id: o.id, color: o.color, name: o.name, value: o.consumption, estimation: o.consumption * o.estimation}));
      }

    const barChartDataSet = {
        labels: transformed.map(o => o.name),
        datasets: [{
            label: 'Real consumption',
            data: transformed.map(o => o.value),
            backgroundColor: transformed.map(o => o.color)
          },{
            label: 'Estimation',
            data: transformed.map(o => o.estimation),
            borderColor: transformed.map(o => o.color),
            borderWidth: 1
          }
    ]
      };

    return (
        <div>
           <Bar data={barChartDataSet} options={{legend: {display: false}}}/>
        </div>     
    );
};
export default RoomEstimations;

  
  
  
 