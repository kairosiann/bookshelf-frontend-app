import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, typography, spacing } from '../styles/theme';

// Content screen component
export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Create New Content</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionIcon}>
            <Feather name="image" size={24} color={colors.textDark} />
          </View>
          <Text style={styles.optionText}>Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionIcon}>
            <Feather name="video" size={24} color={colors.textDark} />
          </View>
          <Text style={styles.optionText}>Video</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionIcon}>
            <Feather name="file-text" size={24} color={colors.textDark} />
          </View>
          <Text style={styles.optionText}>Article</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.recentDraftsContainer}>
        <Text style={styles.sectionTitle}>Recent Drafts</Text>
        
        <View style={styles.emptyStateContainer}>
          <Feather name="edit-3" size={60} color={colors.gray} />
          <Text style={styles.emptyStateText}>No drafts found</Text>
          <Text style={styles.emptyStateSubtext}>
            Your saved drafts will appear here
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.base,
  },
  headline: {
    ...typography.headline,
    marginVertical: spacing.large,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: spacing.large,
  },
  optionButton: {
    alignItems: 'center',
  },
  optionIcon: {
    width: 60,
    height: 60,
    backgroundColor: colors.lightGray,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  optionText: {
    fontFamily: 'Merriweather',
    fontSize: 14,
    color: colors.textDark,
  },
  recentDraftsContainer: {
    marginTop: spacing.xlarge,
  },
  sectionTitle: {
    ...typography.sectionTitle,
    marginBottom: spacing.large,
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xlarge,
  },
  emptyStateText: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginTop: spacing.base,
  },
  emptyStateSubtext: {
    fontFamily: 'Merriweather',
    fontSize: 14,
    color: colors.textLight,
    marginTop: spacing.tiny,
  },
});