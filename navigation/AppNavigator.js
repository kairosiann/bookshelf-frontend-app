/** 
 * AppNavigator.js
 * Written March 27th 2025 by Ryan Kim
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddReviewScreen from '../screens/AddReviewScreen';

import { colors, spacing } from '../styles/theme';

// Creating bottom tab navigator (to hold 'Home', 'Create' and 'Profile' tabs)
const Tab = createBottomTabNavigator();

const CreateButton = ({ onPress }) => {
	<TouchableOpacity style={style.createButton} onPress={onPress}>
		<Feather name="plus" size={24} color={color.white} />
	</TouchableOpacity>
};

// Bottom app navigator tab
export default function AppNavigator() {
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false,
			tabBarShowLabel: true,
			tabBarStyle: styles.tabBar,
			tabBarActiveTintColor: colors.primary,
			tabBarInactiveTintColor: colors.textDark,
			tabBarLabelStyle: styles.tabBarLabel,
		}}>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({ color, size }) => (
					// <Feather name="home" size={size} color={color}/>
					<AntDesign name="home" size={24} color="black" />
				),
			}}/>

			<Tab.Screen name="Add Review" component={AddReviewScreen} options={{
				tabBarButton: (props) => <CreateButton {...props}/>	
			}}/>

			<Tab.Screen name="Profile" component={ProfileScreen} options = {{
				tabBarIcon: ({ color, size }) => (
					<Feather name="user" size={size} color={color} />
				),
			}}/>
		</Tab.Navigator>
	);
}

// Styles
const styles = StyleSheet.create({
	tabBar: {
		height: 60,
		backgroundColor: colors.background,
		borderTopColor: colors.border,
		borderTopWidth: 1,
		paddingBottom: 5,
	},
	tabBarLabel: {
		fontFamily: 'IBMPlexSans-Medium',
		fontSize: 10,
		letterSpacing: 0.16,
	},
	createButton: {
		backgroundColor: colors.textDark,
		width: 26,
		height: 26,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 5,
	},
});