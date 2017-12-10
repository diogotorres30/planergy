import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RoomTips from '../components/planergy/RoomTips';
import RoomEstimations from '../components/planergy/RoomEstimations';
import RoomConsumptions from '../components/planergy/RoomConsumptions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tipsActions';

class RoomDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '0',
        };
    }

    componentWillMount(){
        const selected = this.props.location.search ? this.props.location.search.slice(-1) : '0';
        this.setState({value: `${selected}`});
    }

    // componentWillReceiveProps(newProps){

    //     const selected = newProps.location.search ? this.props.location.search.slice(-1) : '0';
    //     this.setState({value: `${selected}`});
    // }

    tipToggle = (tipId) => {
        this.props.actions.toggleTip(tipId)
    }

    handleChange = (value) => {
        this.setState({
          value: value,
        });
      };    

    render(){
        let room, tips, keys, appliances;
        let roomId = 'whole';
        if(this.props.match.params.room){ //Not from main page
            roomId = this.props.match.params.room;
            room = this.props.rooms.find(o => o.id === roomId);
            tips =  this.props.tips.filter(o => o.roomId === roomId);
            keys = this.props.appliances.filter(o => o.roomId === roomId);
            appliances = this.props.appliances.filter(o => o.roomId === roomId);
            
            // this.setState({estimations: this.props.estimations.filter(o => o.roomId === roomId)});
        }
        else{
            room = {id: 'whole', name: 'Whole house'};
            tips = this.props.tips;
            keys = this.props.rooms;
            appliances = this.props.appliances;
        }
        if(room === null) return (<h2>..Loading..</h2>);
        if(room === undefined) return (<h2>Room not found</h2>);

        const whole = room.id === 'whole';
        
        const heading = whole ? null : (
            <div style={{background: '#efefef', borderBottom: '1px solid #c32738', overflow: 'hidden'}}>
                <h3 style={{fontSize: '1.75rem', paddingLeft: '2rem', fontWeight: 'normal', margin: '1.2rem 0'}}>{room.name}</h3>
            </div>
        )
        return(
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            inkBarStyle={{backgroundColor: '#c32738'}}
            tabItemContainerStyle={{backgroundColor:'#dddddd', color: 'black'}}
          >
            <Tab label="Consumptions" value={'0'} buttonStyle={{color: 'black'}}>
                {heading}          
                <RoomConsumptions keys={keys} data={appliances} whole={whole} handleTabChange={this.handleChange}/>
            </Tab>
            <Tab label="Estimations" value={'1'} buttonStyle={{color: 'black'}}>
                {heading}            
                <RoomEstimations keys={keys} data={appliances} whole={whole}/>
            </Tab>
            <Tab label="Tips" value={'2'} buttonStyle={{color: 'black'}}>
                {heading}
                {<RoomTips keys={keys} data={tips} toggleTip={this.tipToggle} whole={whole}/>}
            </Tab>
          </Tabs>
        );
    }
}

function mapStateToProps(state) {
    const{
        tips,
        rooms,
        appliances,
        estimations,
        consumptions
    } = state;
    
    return {
        tips,
        rooms,
        appliances,
        estimations,
        consumptions        
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoomDetail);
