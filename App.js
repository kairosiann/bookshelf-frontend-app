/** 
 * App.js
 * Written March 27th 2025 by Ryan Kim
 * 
 * Main application file for the React Native app.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator';

// Main application component with font loading
export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	// Loading custom fonts
	useEffects(() => {
		async function loadFonts() {
			await Font.loadAsync({
				'Merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
        		'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf'),
        		'Inter': require('./assets/fonts/Inter-Regular.ttf'),
        		'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
        		'IBMPlexSans-Medium': require('./assets/fonts/IBMPlexSans-Medium.ttf'),
        		'IBMPlexSans-Regular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
			});
			setFontsLoaded(true);
		}

		loadFonts();
	}, []);

	// Loading screen while fonts are loading
	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Loading...</Text>
			</View>
		);
	}

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}