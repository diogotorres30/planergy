import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';
//import Paper from 'material-ui/Paper';
//import Paper from 'material-ui/Paper';
//import FontIcon from 'material-ui/FontIcon';
//import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';





class HomePage extends React.Component{
    
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
        
//select = (index) => this.setState({selectedIndex: index});
    render() {
        return (
          
            <div  >
            <div style = {{background: '#e0e0e0', borderBottom: '2px solid red', overflow: 'hidden'}}>
         
                <Tabs  onChange={this.handleChange}
                value={this.state.slideIndex}
                                        >
                <Tab label="Consumptions" value={'/'} nav/>
                <Tab label="Estimations" value={'Page1'} />
                <Tab label="Tips" value={'Tips'} />
                </Tabs>
            <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
         
        </SwipeableViews>
      
             <div>
            
                </div>
            </div>
            
            <Doughnut style ={{widht: "30", height: "50"}} data={data}/>
            <div style={{ borderBottom: '2px solid red', overflow: 'hidden'}}></div>
            <div style = {{borderLeft: '2px solid red'}}>
            
        <HorizontalBar  data={data} />
            </div>
          </div>

        );
      }
    }
  

export default HomePage;

/*var value = [
    {'id':1 , 'url': '/'},
    {'id':2, 'url':'Page1'},
    {'id':3, 'url':'Tips'}
    
];*/
 
/*
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

*/






/*
Nav.propTypes = {

    <Nav pills>
                 <NavItem>
                 <NavLink href="/" active>Consumptions</NavLink>
                 </NavItem>
         
                <NavItem>
                    <NavLink href="/Page1">Estimations</NavLink>
                    </NavItem>
                    <NavItem>
            <NavLink href="/Tips">Tips</NavLink>
          </NavItem>
         
        </Nav>

    tabs: PropTypes.bool,
    pills: PropTypes.bool,
    card: PropTypes.bool,
    justified: PropTypes.bool,
    fill: PropTypes.bool,
    vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    horizontal: PropTypes.string,
    navbar: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }
  NavItem.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    // pass in custom element to use
  }

  NavLink.propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }
*/
const data = {
    labels: [
        'Kitchen',
        'Living Room',
        'Basement',
        'Kevins Room'
    ],
    
    datasets: [{
        label: 'Consumption',
        data: [40, 27, 23,10],
        backgroundColor: [
        '#FF1C00',
        '#FF5C5C',
        '#E34234',
        '#FF6961'
        ],
        hoverBackgroundColor: [
        '#c32738',
        '#36A2EB',
        '#03C03C',
        '#36AFFF'
        ]
    }]
};

