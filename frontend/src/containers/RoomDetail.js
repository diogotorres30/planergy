import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RoomTips from '../components/planergy/RoomTips';
import RoomEstimations from '../components/planergy/RoomEstimations';

const getTips = (roomId) => {
    if(roomId === 'whole'){
        return {
            id: 'whole',
            name: 'Whole house',
            tips: [].concat(...data.map(o => o.tips))
        };
    }
    return data.find(o => o.id === roomId);
};

class RoomDetal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '0',
            data: null
        };
    }

    componentWillMount(){
        const data = getTips(this.props.match.params.room);
        const selected = this.props.location.search.slice(-1)
        this.setState({value: `${selected}`});
        this.setState({data: data});
        if(!data) return;
    }

    handleChange = (value) => {
        this.setState({
          value: value,
        });
      };    

    render(){
        const data = this.state.data;
        if(this.state.data === null) return (<h2>..Loading..</h2>);
        if(this.state.data === undefined) return (<h2>Room not found</h2>);     
        
        const heading = data.name === 'whole' ? null : (
            <div style={{background: '#efefef', borderBottom: '1px solid red', overflow: 'hidden'}}>
                <h3 style={{fontSize: '1.75rem', paddingLeft: '2rem', fontWeight: 'normal'}}>{data.name}</h3>
            </div>
        )
        return(
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            tabItemContainerStyle={{backgroundColor:'#dddddd', color: 'black'}}
          >
            <Tab label="Consumptions" value={'0'} buttonStyle={{color: 'black'}}>
                {heading}          
                <h1>0</h1>
            </Tab>
            <Tab label="Estimations" value={'1'} buttonStyle={{color: 'black'}}>
                {heading}            
                <RoomEstimations />
            </Tab>
            <Tab label="Tips" value={'2'} buttonStyle={{color: 'black'}}>
                {heading}
                <RoomTips data={data.tips}/>
            </Tab>            
          </Tabs>            
        );
    }
}

export default RoomDetal;

const data = [
    {
        id: 'kitchen',
        name: 'Kitchen',
        tips: [
            {
                id: 'oven1',
                appliance: 'Oven',
                savingValue: 10,
                description: 'Turn the oven when not using',
                isOn: true,
            },
            {
                id: 'oven2',
                appliance: 'Oven',
                savingValue: 14,
                description: 'Plan your cooking for 2 hours',
                isOn: false,
            },
            {
                id: 'washer1',
                appliance: 'Washing machine',
                savingValue: 9,
                description: 'Turn off the washing when not using',
                isOn: false,
            },
            {
                id: 'washer2',
                appliance: 'Washing machine',
                savingValue: 7,
                description: 'Schedule washing on 01am - 06am period',
                isOn: true,
            },                                                                        
        ],
        estemations:[

        ]
    },
    {
        id: 'livingRoom',
        name: 'Living Room',
        tips: [
            {
                id: 'tv1',
                appliance: 'Tv',
                savingValue: 5,
                description: 'Tv tip 1',
                isOn: true,
            },
            {
                id: 'tv2',
                appliance: 'Tv',
                savingValue: 2,
                description: 'Tv tip 2',
                isOn: false,
            },
            {
                id: 'tv3',
                appliance: 'Tv',
                savingValue: 1,
                description: 'Better go out',
                isOn: false,
            },
            {
                id: 'playstation',
                appliance: 'Playstation',
                savingValue: 7,
                description: 'Try to play less that 18 hours a day',
                isOn: true,
            },                                                                        
        ]
    },
    {
        id: 'garage',
        name: 'Garage',
        tips: [
            {
                id: 'light1',
                appliance: 'Lights',
                savingValue: 8,
                description: 'Turn off the light more often',
                isOn: true,
            },
            {
                id: 'light2',
                appliance: 'Lights',
                savingValue: 14,
                description: 'Install saving lightbulbs',
                isOn: false,
            },                                                                       
        ]
    },
    {
        id: 'bathRoom',
        name: 'Bath room',
        tips: [
            {
                id: 'light11',
                appliance: 'Lights',
                savingValue: 7,
                description: 'Turn off the light more often',
                isOn: true,
            },
            {
                id: 'heating',
                appliance: 'Heating',
                savingValue: 21,
                description: 'Turn off the heating when not home',
                isOn: false,
            },                                                                       
        ]
    },               
];