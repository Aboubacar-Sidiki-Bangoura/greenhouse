import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './screens/Header';
import Home from './screens/Home';

export default function App () {
	return (
		<View style={styles.container}>
			<Header />
			<Home />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
