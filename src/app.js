import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<Text>Hello</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
