import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';

const RomList = ({roomList}) => (
    <div className="roomList">
        <List>
            {roomList.map(o => 
                (<Link to={`/Tips/${o.id}`} key={o.id}>
                    <ListItem primaryText={o.text} />
                </Link>)
            )}
        </List>
    </div>
);

RomList.propTypes = {
    roomList: PropTypes.array,
  };
  

export default RomList;