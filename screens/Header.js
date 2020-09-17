import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import HamberguerMenu from '../assets/HamberguerMenu.svg';

const Header = () => {
	return (
		<View style={styles.container}>
			<HamberguerMenu width={50} height={50} />
			<View style={styles.textContainer}>
				<Text style={styles.text}> Serre connectée</Text>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flex: 0.09,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#0A8807',
		paddingTop: 20
	},
	image: {
		width: '25%',
		height: '25%'
	},
	textContainer: {
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontSize: 30,
		alignSelf: 'center'
	}
});
