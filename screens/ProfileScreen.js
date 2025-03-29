/** 
 * ProfileScreen.js
 * Written March 27th 2025 by Ryan Kim
 * 
 * UI for Bookshelf profile screen
 */

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SectionList, ActivityIndicatorBase } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, typography, spacing } from '../styles/theme';

// Activity Item Components - TODO: What does this mean?
const ActivityItem = ({ title, category, date, description, thumbnailSize='large'}) => (
	<View style={styles.activityItem}>
		<View style={[styles.activityThumbnail, thumbnailSize === "small" && styles.smallThumbnail]}/>
		<View style={styles.activityDetails}>
			<Text style={styles.activityTitle}>{title}</Text>
			<Text style={styles.activityMeta}>{category} • {date}</Text>
			<Text style={styles.activityDescription}>{description}</Text>
		</View>
	</View>
);

/* TODO: Need to add more features for the 'More Options' button.
Features to change profile text, profile photo, bio etc.*/

// Profile Screen Component
export default function ProfileScreen() {
	return (
		<ScrollView style={styles.container}>
			{ /* Profile Header */ }
			<View style={styles.profileHeader}>
				<View style={styles.profileImage}/>
				<View style={styles.profileInfo}>
					<Text style={styles.profileName}>Username</Text>
					<Text style={styles.profileBio}>Bio</Text>
					<TouchableOpacity style={styles.editButton}>
						<Text style={styles.editButtonText}>EDIT</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.moreOptionsButton}>
					<Feather name="more-horizontal" size={16} color="white"/>
				</TouchableOpacity>
			</View>

			{/* Profile Stats */}
			<View style={styles.profileStats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>125</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>348</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      
      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <ActivityItem 
          title="Post Title"
          category="Category"
          date="2 days ago"
          description="Description of the activity that the user has performed recently."
        />
      </View>
      
      {/* Highest Rated */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highest Rated</Text>
        <ActivityItem 
          title="Highly Rated Post"
          category="Category"
          date="Last week"
          description="Description of this highly rated post."
          thumbnailSize="small"
        />
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
	profileHeader: {
		flexDirection: 'row',
		padding: spacing.large,
		position: 'relative',
	},
	profileImage: {
		width: 118,
		height: 118,
		backgroundColor: colors.gray,
		borderRadius: 59,
	},
	profileInfo: {
		marginLeft: spacing.large,
		justifyContent: 'center',
	},
	profileName: {
		...typography.headline,
		marginBottom: spacing.tiny,
	},
	editButton: {
		width: 56,
		height: 30,
		backgroudnColor: colors.textDark,
		borderRadius: 17,
		justifyContent: 'center',
		alignItems: 'center',
	},
	editButtonText: {
		fontFamily: 'Merriweather-Bold',
		fontSize: 15,
		color: colors.background,
		letterSpacing: -0.24,
	},
	moreOptionsButton: {
		position: 'absolute', // TODO: shouldn't this be relative? Depending on screen size
		top: 20,
		right: 10,
		width: 28,
		height: 28,
		backgroundColor: colors.accent,
		borderRadius: 14,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileStats: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVeritcal: spacing.large,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		marginBottom: spacing.large,
	},
	statItem: {
		alignItems: 'center',
	},
	statValue: {
		fontFamily: 'Merriweather-Bold',
		fontSize: 17,
		lineHeight: 22,
		textAlign: 'center',
		letterSpacing: -0.41,
		color: colors.textDark,
	},
	statLabel: {
		fontFamily: 'Merriweather',
		fontSize: 20,
		lineHeight: 18,
		textAlign: 'center',
		letterSpacing: -0.08,
		color: colors.textDark,
		opacity: 0.8,
	},
	section: {
		marginBottom: spacing.large,
	},
	sectionTitle: {
		...typography.sectionTitle.color,
		marginBottom: spacing.base,
	},
	activityItem: {
		flexDirection: 'row',
		gap: spacing.base,
		marginBottom: spacing.large,
		paddingBottom: spacing.small,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
	activityThumbnail: {
		width: 71,
		height: 107,
		backgroundColor: colors.gray,
		borderRadius: 10,
	},
	smallThumbnail: {
		width: 40,
		height: 60,
	},
	activityDetails: {
		flex: 1,
	},
	activityTitle: {
		fontFamily: 'Merriweather-Bold',
		fontSize: 15,
		lineHeight: 13,
		letterSpacing: 0.07,
		color: colors.textDark,
		marginBottom: spacing.tiny,
	},
	activityMeta: {
		fontFamily: 'Merriweather',
		fontSize: 11,
		lineHeight: 13,
		letterSpacing: 0.07,
		color: colors.textDark,
		opacity: 0.6,
		marginBottom: spacing.tiny,
	},
	activityDescription: {
		fontFamily: 'Merriweather',
		fontSize: 12,
		lineHeight: 22,
		letterSpacing: -0.41,
		color: colors.textDark,
	},
});