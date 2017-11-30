import React from 'react';
import {Doughnut} from 'react-chartjs-2';



    const data = {
        labels: [
            'Kitchen',
            'Living Room',
            'Basement'
        ],
        datasets: [{
            data: [200, 50, 100],
            backgroundColor: [
            '#c32738',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#c32738',
            '#36A2EB',
            '#FFCE56'
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
            
            <Doughnut data={data} />
            <div style={{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}></div>
            <h3 style={{fontSize: '3.75rem', paddingLeft: '3rem', fontWeight: 'normal'}}></h3>
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


