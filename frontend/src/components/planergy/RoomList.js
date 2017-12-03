import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';

const RomList = ({roomList, selectIndex}) => (
    <div className="roomList">
        <List>
            {roomList.map(o => 
                (<Link to={`/rooms/${o.id}?selected=${selectIndex}`} key={o.id}>
                    <ListItem primaryText={o.text} />
                </Link>)
            )}
        </List>
    </div>
);

RomList.propTypes = {
    roomList: PropTypes.array,
    selectIndex: PropTypes.number
  };
  

export default RomList;