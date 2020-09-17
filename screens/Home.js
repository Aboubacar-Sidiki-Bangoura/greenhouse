import React from 'react';
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native';

const Home = () => {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.imageBackground} source={require('../assets/leaf.jpg')}>
				<View style={styles.heroContainer}>
					<Text style={styles.heroText}>
						La technologie au service du bien être de vos plantes!
					</Text>
				</View>

				<View>
					<View>
						<View>
							<Text>28</Text>
						</View>
						<View>
							<Text>°C</Text>
						</View>
					</View>
					<View>
						<Text>Température</Text>
					</View>
				</View>

				<View>
					<View>
						<View>
							<Text>28%</Text>
						</View>
					</View>
					<View>
						<Text>Luminosité</Text>
					</View>
				</View>

				<View>
					<View>
						<View>
							<Text>28%</Text>
						</View>
					</View>
					<View>
						<Text>Humidité</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBackground: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-start',
		opacity: 0.7
	},
	heroContainer: {
		flex: 0.3
	},
	heroText: {
		fontSize: 35,
		fontWeight: 'bold'
	}
});
