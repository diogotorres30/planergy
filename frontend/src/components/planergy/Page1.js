import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

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


render() {
    return (
      
        <div  >
        <div style = {{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
        
               <Tabs  onChange={this.handleChange}
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
        
       </div>
       </div>
    )
}    }    
export default Estimations;