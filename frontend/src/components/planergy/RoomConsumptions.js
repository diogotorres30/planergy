import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import RaisedButton from 'material-ui/RaisedButton';
import { NavLink } from 'react-router-dom';


const buttonStyle = {
  height: '25px',
  float: 'right',
  // paddingRight: '5px',
  minWidth: '5.5%',
  width: '5.5%'
};

const RoomConsumptions  = ({keys, data, whole, handleTabChange}) => {

  let transformed = [];

  if(whole){
    keys.map(o => transformed.push({id: o.id, name: o.name, color: o.color, value: data.filter(p => p.isOn && p.roomId === o.id).map(p => p.consumption).reduce((sum, x) => sum + x, 0)}))
  }
  else{
    data.map(o => transformed.push({id: o.id, name: o.name, color: o.color, value: o.isOn ? o.consumption : 0}));
  }
  const max = Math.max(...transformed.map(o => o.value));
  const doughnutDataSet = {
    labels: transformed.map(o => o.name),
    datasets: [{
      data: transformed.map(o => o.value),
      backgroundColor: transformed.map(o => o.color)
    }]
  };
  const consumption = transformed.map(o => o.value).reduce((sum, x) => sum + x, 0);

  return (
      <div>
        <div>
          <div style={{whiteSpace: 'nowrap', position: 'absolute', left: `${consumption > 10 ? '45%' : '46%'}`, top: `${whole ? '53%' : '63%'}`}}>
            {`${consumption} W/h`}
          </div>
          <div>
            <Doughnut style ={{widht: "30", height: "50"}} data={doughnutDataSet}/>
          </div>
        </div>
        <div style={{width: '100%', position: 'absolute'}}>
          <div style={{padding: '5px'}}>
          {transformed.sort((a, b) => b.value - a.value).map(o =>{
            
            return(
              <div key={o.id} style={{width: '100%', margin: '5px 0', height: '25px'}}> 
                <div style={{width: '20%', float: 'left'}}>{o.name}</div>
                {
                  whole? (<NavLink to={`/rooms/${o.id}?selected=0`}>
                    <div style={{float: 'left', height: '25px', backgroundColor: '#c32738', width: `${o.value/max*72}%`}}/>
                  </NavLink>
                  ) : (<div style={{float: 'left', height: '25px', backgroundColor: '#c32738', width: `${o.value/max*72}%`}}/>)
                }
                {whole ? (
                  <NavLink to={`/rooms/${o.id}?selected=2`}>
                    <RaisedButton style={buttonStyle} icon={<LightBulb />}/>
                  </NavLink>
                ) : (<RaisedButton onClick={() => handleTabChange("2")} style={buttonStyle} icon={<LightBulb />}/>)}
              </div>)
          })}
          </div>
        </div>
      </div>
  );
      
}
  
export default RoomConsumptions;