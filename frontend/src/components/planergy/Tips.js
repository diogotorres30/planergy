import React from 'react';
import RoomList from './RoomList';


const Tips = () => (
    <div>
        <h2 className="sectionHeading">Select room to see tips</h2>
        <RoomList selectIndex={2}/>    
    </div>
);


export default Tips;