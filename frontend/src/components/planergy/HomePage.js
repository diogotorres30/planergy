import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';



    const data = {
        labels: [
            'Kitchen',
            'Living Room',
            'Basement',
            'Kevins Room'
        ],
        
        datasets: [{
            label: 'Consumption',
            data: [43, 27, 10,20],
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
class HomePage extends React.Component{
    //export default React.HomePage({
        //displayName: 'DoughnutExample',
    render() {
        return (
          
              <div>
            <div style={{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
            <h2>Consumptions</h2> 
                <h3 style={{fontSize: '1.75rem', paddingLeft: '3rem', fontWeight: 'normal'}}>{name}</h3>
            </div>
            
            <Doughnut style ={{widht: "30", height: "50"}} data={data}/>
            <div style={{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}></div>
            <div>
       
        <HorizontalBar style ={{widht: "30", height: "50"}} data={data} />
        </div>
          </div>

        );
      }
    }
    
   /* return(
        <div style>
            ikke noe texts ?
            </div>
    )
/*const styles = {
    selected: {
        borderBottom: '2px solid red',
        margin: '0 1rem'
    },
    unselected: {
        borderBottom: 'none',
        margin: '0 1rem'   
        return (
        <div>
            <div style={{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
                <h3 style={{fontSize: '3.75rem', paddingLeft: '3rem', fontWeight: 'normal'}}>{name}</h3>
            </div>
           
         

               </div>
    )     
    }
};*/
   
  //  }
//}


export default HomePage;


