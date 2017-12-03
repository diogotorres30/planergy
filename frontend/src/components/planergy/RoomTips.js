import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

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
            byAppliance: true,
        };
    }

    componentWillMount(){
        const data = this.props.data;
        this.setState({selected: data});
        const appliances = [...new Set(data.map(o => o.appliance))];
        this.setState({appliances: appliances});
    }

    onToggle = (id) => {
        const {selected} = this.state;
        this.setState({selected:  [...selected.map(o => o.id === id ? {...o, isOn: !o.isOn} : o)]});
    }

    handleShowModeChange = (byAppliance) => {
        this.setState({byAppliance: byAppliance});
    };

    render(){
        const{selected, byAppliance, appliances} = this.state;
        let grouped = {};
        const sortedTips = selected.sort((a, b) => b.savingValue - a.savingValue);
        appliances.forEach(o => {
            let groupedTips = selected.filter(p => p.appliance === o);
            grouped[o] = groupedTips;
        });    
        return (
            <div>
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