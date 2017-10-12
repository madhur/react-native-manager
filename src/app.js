import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBhaZAsT5ln4BSFc0QITywfnOmYbSdAIG0',
			authDomain: 'analytics-dashclock.firebaseapp.com',
			databaseURL: 'https://analytics-dashclock.firebaseio.com',
			projectId: 'analytics-dashclock',
			storageBucket: '',
			messagingSenderId: '443920875912'
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
