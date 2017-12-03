import React from 'react';
import RoomList from './RoomList';


class Page1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rooms: [
                {id: 'whole', text: 'Whole house'},
                {id: 'kitchen', text: 'Kitchen'},
                {id: 'livingRoom', text: 'Living room'},
                {id: 'garage', text: 'Garage'},
                {id: 'bathRoom', text: 'Bath room'}
            ]
        };
    }

    render(){
        return (
            <div>
                <h2>Select room to see estimations</h2>
                <RoomList roomList={this.state.rooms} selectIndex={1}/>    
            </div>
        );
    }
}


export default Page1;