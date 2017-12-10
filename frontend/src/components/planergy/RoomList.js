import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';

const style = {color: 'black'};	

const RomList = ({selectIndex, rooms}) => {
    return (
    <div className="roomList">
        <List>
            <Link style={style} to={`/?selected=${selectIndex}`}>
                <ListItem primaryText="Whole house" />
            </Link>            
            {rooms.map(o => 
                (<Link style={style} to={`/rooms/${o.id}?selected=${selectIndex}`} key={o.id}>
                    <ListItem primaryText={o.name} />
                </Link>)
            )}
        </List>
    </div>
);
}

RomList.propTypes = {
    roomList: PropTypes.array,
    selectIndex: PropTypes.number
  };

function mapStateToProps(state) {
    const{
        rooms,
    } = state;
    
    return {
        rooms,      
    };
  }

  
  export default connect(
    mapStateToProps,
    null
  )(RomList);
