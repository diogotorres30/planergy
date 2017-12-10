import React from 'react';
import RoomList from './RoomList';


const Consumptions = () => (
    <div>
        <h2 className="sectionHeading">Select room to see consumptions</h2>
        <RoomList selectIndex={0}/>    
    </div>    
)

export default Consumptions;