/*
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom:20,
    fontWeight: 400,
    background:'#e0e0e0'
  },
  slide: {
    padding: 10,
  },
};

class BottomNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Consumptions" value={'/'} />
          <Tab label="Estimations" value={'Estimations'} />
          <Tab label="Tips" value={'/Tips'} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
         
        </SwipeableViews>
      </div>
    );
  }
}
export default BottomNav;
/*


import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).*/
/*
class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1} style={{bottom: 400, position: 'fixed', width: '75vh'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <Tabs>
              <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
              <Tab icon={<ActionFlightTakeoff />} />
              <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
            </Tabs>
          
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;*/