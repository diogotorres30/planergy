import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

const getTips = (roomId) => {
    console.log(data.map(o => o.tips));
    if(roomId === 'whole'){
        return {
            id: 'whole',
            name: 'Whole house',
            tips: [].concat(...data.map(o => o.tips))
        };
    }
    return data.find(o => o.id === roomId);
}

const getNestedListItem = ({id, description, isOn}, onToggle) => {

    return (
        <ListItem key={id} primaryText={description} rightToggle={
            <Toggle toggled={isOn} onClick={() => onToggle(id)} thumbSwitchedStyle={{backgroundColor: '#1bcc18'}} trackSwitchedStyle={{backgroundColor: '#c5e0c5'}}/>}
        />);
};

const styles = {
    selected: {
        borderBottom: '2px solid red',
        margin: '0 1rem'
    },
    unselected: {
        borderBottom: 'none',
        margin: '0 1rem'        
    }
};

class RoomTips extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null,
            byAppliance: true,
        };
    }

    componentWillMount(){
        const data = getTips(this.props.match.params.room);
        this.setState({selected: data});
        if(!data) return;
        const appliances = [...new Set(data.tips.map(o => o.appliance))];
        this.setState({appliances: appliances});
    }

    onToggle = (id) => {
        const {selected} = this.state;
        this.setState({selected: { ...selected, tips: selected.tips.map(o => o.id === id ? {...o, isOn: !o.isOn} : o)}});
    }

    handleShowModeChange = (byAppliance) => {
        this.setState({byAppliance: byAppliance});
    };

    render(){
        if(this.state.selected === null) return (<h2>..Loading..</h2>);
        if(this.state.selected === undefined) return (<h2>Room not found</h2>);
        const{selected: {name, tips}, byAppliance, appliances} = this.state;

        let grouped = {};
        const sortedTips = tips.sort((a, b) => b.savingValue - a.savingValue);
        appliances.forEach(o => {
            let groupedTips = tips.filter(p => p.appliance === o);
            grouped[o] = groupedTips;
        });    
        return (
            <div>
                <div style={{background: '#e0e0e0', borderBottom: '1px solid red', overflow: 'hidden'}}>
                    <h3 style={{fontSize: '1.75rem', paddingLeft: '2rem', fontWeight: 'normal'}}>{name}</h3>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <FlatButton style={byAppliance? styles.selected : styles.unselected} label="By Appliance" onClick={() => this.handleShowModeChange(true)}/>
                        <FlatButton style={byAppliance? styles.unselected : styles.selected}label="By Saving" onClick={() => this.handleShowModeChange(false)}/>
                    </div>
                    {byAppliance? (
                        <List>
                            {appliances.map(o => 
                                (<ListItem 
                                    key={o} 
                                    primaryText={o} 
                                    initiallyOpen 
                                    primaryTogglesNestedList
                                    nestedListStyle={{borderLeft: '2px solid red', marginLeft: '1.1rem'}}
                                    nestedItems={grouped[o].map(p => getNestedListItem(p, this.onToggle))}
                                />)
                            )}
                        </List>
                    ) : (
                        <List>
                            {sortedTips.map(o => getNestedListItem(o, this.onToggle))}
                        </List>
                    )}
                </div>
            </div>
        ); 
    }
}

export default RoomTips;

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