import React from 'react';
import RoomList from './RoomList';


const Estimations = () =>(
    <div>
        <h2 className="sectionHeading">Select room to see estimations</h2>
        <RoomList selectIndex={1}/>    
    </div>
);

export default Estimations;