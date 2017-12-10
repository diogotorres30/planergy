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
        borderBottom: '2px solid #c32738',
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

    handleShowModeChange = (byAppliance) => {
        this.setState({byAppliance: byAppliance});
    };

    render(){
        const{byAppliance} = this.state;
        const{keys, data, whole, toggleTip} = this.props;
        const sortedTips = [...data].sort((a, b) => b.savingValue - a.savingValue);
        
        return (
            <div>
                <div style={{marginTop: '1rem'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <FlatButton style={byAppliance? styles.selected : styles.unselected} label={whole ? 'By room' : 'By Appliance'} onClick={() => this.handleShowModeChange(true)}/>
                        <FlatButton style={byAppliance? styles.unselected : styles.selected}label="By Saving" onClick={() => this.handleShowModeChange(false)}/>
                    </div>
                    {byAppliance? (
                        <List>
                            {keys.map(o =>{
                                let curr = whole ? data.filter(p => p.roomId === o.id) : data.filter(p => p.applianceId === o.id)
                                return (<ListItem 
                                    key={o.id} 
                                    primaryText={`${o.name}    ${curr.filter(o => o.isOn).length}/${curr.length}`} 
                                    initiallyOpen 
                                    primaryTogglesNestedList
                                    nestedListStyle={{borderLeft: '2px solid #c32738', marginLeft: '1.1rem'}}
                                    nestedItems={curr.map(p => getNestedListItem(p, toggleTip))
                                    }
                                />)
                            }

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