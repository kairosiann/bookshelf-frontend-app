/** 
 * HomeScreen.js
 * Written March 27th 2025 by Ryan Kim
 * 
 * UI for Bookshelf home screen
 */

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ReviewItem from '../components/ReviewItem';

import { colors, typography, spacing } from '../styles/theme';

// TODO: Need to change this so that it's imported from the database!
const sampleReviews = [
	{
		id: '1',
		title: 'Snowball by Warren Buffet',
		category: ['business', 'biography'],
		time: '2h ago',
		summary: "Is Warren Buffet strong enough to make a snowball? I don't think so. How on Earth does he think he can do that? In this economy? Pfff",
	},
	{
		id: '2',
		title: 'Antifragile by Nassim Nicholas Taleb',
		category: ['theology', 'self-help'],
		time: '3h ago',
		summary: "What does it mean to be antifragile? My Hopkins mug was anti antifragile...",
	}
];

// Home Screen component
export default function HomeScreen() {
	const [activeCategory, setActiveCategory] = useState('For You');

	return (
		<ScrollView style={styles.container}>
			{ /* Search Bar*/ }
			<View style={styles.searchContainer}>
				<TextInput style={styles.searchInput} placeholder="Find a book" placeholderTextColor="rgba(30, 30, 30, 0.6)"/>
			</View>

			{ /* Main Title */ }
			<Text style={styles.headline}>Bookshelf</Text>

			{ /* Your friends just rated */ }
			<View style={styles.mediaSection}>
				<View style={styles.mediaItem}/>
				<View style={styles.mediaItem}/>
				<View style={styles.mediaItem}/>
			</View>

			{ /* Categories – TODO: What is this? */ }
			<View style={styles.categories}>
				{['For You', 'Popular', 'Recent'].map((category) => (
					<TouchableOpacity key={category} onPress={() => setActiveCategory(category)}>
						<View style={styles.categoryItem}>
							<Text style={[styles.categoryText, activeCategory === category && styles.activeCategory]}>
								{category}
							</Text>
							{activeCategory === category && <View style={styles.categoryIndicator} />}
						</View>
					</TouchableOpacity>
				))}
			</View>

			{ /* Reviews */ }
			<View style={styles.reviewSection}>
				<Text style={styles.sectionHeadline}>Reviews</Text>

				{sampleReviews.map((item) => (
					<ReviewItem key={item.id} article={item}/>
				))}
			</View>
		</ScrollView>
	);
}

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: colors.background,
		padding: spacing.base,
	},
	searchContainer: {
		marginVertical: spacing.small,
	},
	searchInput: {
		height: 46,
		backgroundColor: colors.background,
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 9999, // TODO: This doesn't look right??
		fontFamily: "Inter",
		fontSize: 16,
		texxtAlign: 'center',
		color: colors.textDark
	},
	headline: {
		...typography.headline,
		marginVertical: spacing.small
	},
	mediaSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: spacing.large,
	},
	mediaItem: {
		width: 58,
		height: 88,
		backgroundColor: colors.gray,
		borderRadius: 10,
	},
	categories: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: spacing.large,
		paddingBottom: spacing.small,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
	categoryItem: {
		alignItems: 'center',
		padding: spacing.tiny,
	},
	categoryText: {
		fontFamily: 'Merriweather',
		fontSize: 11,
		lineHeight: 22,
		color: colors.textDark,
	},
	activeCategoryText: {
		fontWeight: '700' // TODO: Doesn't look right?
	},
	categoryIndicator: {
		marginTop: 5,
		width: 20,
		height: 2,
		backgroundColor: colors.textDark,
	},
	reviewSection: {
		paddingBottom: spacing.large,
	},
	sectionHeadline: {
		...typography.sectionTitle,
		marginBottom: spacing.base,
	},
});