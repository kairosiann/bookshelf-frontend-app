/** 
 * ReviewItem.js
 * Written March 27th 2025 by Ryan Kim
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, typography, spacing } from '../styles/theme';

export default function ReviewItem({ review }) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.articleContainer}>
				<View style={styles.thumbnail}>
					<View styles={styles.content}>
						<Text style={styles.title}>{review.title}</Text>
						<Text style={styles.meta}>{review.category} • {review.time}</Text>
						<Text style={styles.summary}>{review.summary}</Text>
					</View>
				</View>

				<View style={styles.actionsContainer}>
					<TouchableOpacity style={styles.actionButton} onPress={() => setIsLiked(!isLiked)}>
						<Feather 
							name={isLiked ? "heart" : "heart"}
							size={21}
							color={isLiked ? colors.primary : colors.textDark}
							style={isLiked && styles.filledHeart}/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.actionButton}>
						<Feather name="message-circle" size={21} color={colors.textDark}/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

// Styles
const styles = StyleSheet.create({
	container: {
		marginBottom: spacing.base,
		paddingBottom: spacing.base,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
	articleContainer: {
		flexDirection: 'row',
		gap: spacing.base,
	},
	thumbnail: {
		width: 58,
		height: 88,
		backgroundColor: colors.gray,
		borderRadius: 10,
	},
	content: {
		flex: 1,
	},
	title: {
		fontFamily: 'Merriweather-Bold',
		fontSize: 15,
		lineHeight: 13,
		letterSpacing: 0.07,
		color: colors.textDark,
		marginBottom: spacing.tiny,
	},
	meta: {
		fontFamily: 'Merriweather',
		fontSize: 11,
		lineHeight: 22,
		letterSpacing: -0.41,
		color: colors.textDark,
		opacity: 0.8,
		marginBottom: spacing.tiny,
	},
	summary: {
		fontFamily: 'Merriweather',
		fontSize: 13,
		lineHeight: 22,
		letterSpacing: -0.41,
		colors: colors.textDark,
	},
	actionsContainer: {
		flexDirection: 'row',
		gap: 30,
		marginTop: spacing.small,
		paddingLeft: 74,
	},
	actionButton: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	filledHeart: {
		opacity: 1
	},
});