import React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';


class Settings extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            open: false,
        };
    }

    select = (item) => {
        this.setState({item: item});
    }
    
    handleOpen = () => {
    this.setState({open: true});
    };

    handleClose = () => {
    this.setState({open: false});
    };    
    
    render() {
        const {rooms, appliances} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Save"
                disabled={true}
                onClick={this.handleClose}
            />,
        ];    
        return (
        <div className="roomList">
            <div style={{background: '#efefef', borderBottom: '1px solid #c32738', overflow: 'hidden'}}>
                <h3 style={{fontSize: '1.75rem', paddingLeft: '2rem', fontWeight: 'normal', margin: '1.2rem 0'}}>Settings</h3>
            </div>
            <List>
                {rooms.map(o => 
                (<ListItem
                    key={o.id}
                    primaryText={o.name}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={
                        appliances.filter(p => p.roomId === o.id).map(p => (
                            <ListItem
                                key={p.id}
                                primaryText={p.name}
                                onClick={() => {this.handleOpen(); this.select(p);}}
                        />
                        ))
                    }
                />)
                )}
            </List>
                <Dialog
                title={`${this.state.item ? this.state.item.name : ''} Settings`}
                actions={actions}
                modal={true}
                open={this.state.open}
                style={{width: '75vh', float: 'left'}}
            >
                <ListItem primaryText="Name:"><div style={{float: 'right', textAlign: 'middle'}}>{this.state.item ? this.state.item.name : ''}</div></ListItem>
                <ListItem rightAvatar={<Avatar backgroundColor={this.state.item? this.state.item.color: 'black'} />} primaryText="Color:"/>
            </Dialog>
        </div>
    );
}}


function mapStateToProps(state) {
    const{
        rooms,
        appliances
    } = state;
    
    return {
        rooms,
        appliances  
    };
  }

  
  export default connect(
    mapStateToProps,
    null
  )(Settings);
