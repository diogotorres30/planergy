import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            error: false
        };
    }

    usernameChanged = (e) => {
        if(this.state.error) this.setState({error: false});
        this.setState({username: e.target.value});
    };

    passwordChanged = (e) => {
        if(this.state.error) this.setState({error: false});        
        this.setState({password: e.target.value});
    };

    validate(){
        const {username, password} = this.state;
        const success = username === "admin" && password ==='admin';
        if(success) localStorage.setItem('loggedIn', true);
        return success;
    }
    refuse(){
        this.setState({error: true});
        this.setState({username: ""});
        this.setState({password: ""});
    }

    render(){
        return(
            <div>
                <div style={{width: '100%', height: '20px', textAlign: 'center'}}>
                    {this.state.error && <div style={{color: 'red'}}>Invalid Username or Password</div>}
                </div>
                <div style={{textAlign: 'center'}}>
                    <TextField
                        floatingLabelText="Username"
                        hintText="Username"
                        onChange={this.usernameChanged}
                        value={this.state.username}
                        underlineFocusStyle={{borderColor: '#c32738'}}
                        floatingLabelStyle={{color: '#c4a2a6'}}                    
                    />
                    <TextField
                        floatingLabelText="Password"    
                        hintText="Password"
                        underlineFocusStyle={{borderColor: '#c32738'}}
                        floatingLabelStyle={{color: '#c4a2a6'}}
                        onChange={this.passwordChanged}
                        value={this.state.password}                    
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', height: '36px', marginTop: '1rem'}}>
                <RaisedButton label="Log in" onClick={() => this.validate()? this.props.toggleLogin() : this.refuse()}/>
                <p> OR </p>
                <RaisedButton label="Register"/>                
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    toggleLogin: PropTypes.func,
};

export default Login;