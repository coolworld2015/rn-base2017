//'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView,
    ScrollView,
    TabBarIOS,
    NavigatorIOS,
    TextInput
} from 'react-native';

console.disableYellowBox = true;

import Login from './login';
import AppContainer from './appContainer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkingAuth: false,
            showProgress: false,
            isLoggedIn: false
        };

        window.appConfig = {
            access_token: '',
            url: 'http://jwt-base.herokuapp.com/',
            onLogOut: this.onLogOut.bind(this),
            search: {
                refresh: true,
                items: [],
                item: {}
            },
            users: {
                refresh: true,
                items: [],
                item: {}
            },
            phones: {
                refresh: true,
                items: [],
                item: {}
            },
            audit: {
                refresh: true,
                items: [],
                item: {}
            },
            socket: {
                name: ''
            }
        };
    }

    render() {
        if (this.state.checkingAuth) {
            return (
                <View style={styles.container}>
                    <ActivityIndicatorIOS
                        animating={true}
                        size="large"
                        style={styles.loader}/>
                </View>
            )
        }

        if (this.state.isLoggedIn) {
            return (
                <AppContainer onLogOut={this.onLogOut.bind(this)}/>
            )
        } else {
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            )
        }
    }

    onLogin() {
        console.log('onLogin');
        this.setState({isLoggedIn: true});
    }

    onLogOut() {
        console.log('onLogOut');
        this.setState({isLoggedIn: false});
    }
}

export default App;