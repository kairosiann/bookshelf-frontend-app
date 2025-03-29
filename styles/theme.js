/** 
 * theme.js
 * Written March 27th 2025 by Ryan Kim
 * 
 * Application theme with shared styles, colors, and typography
 */


export const colors = {
	primary: '#601410',     // Main brand color
	accent: '#007AFF',      // Accent color (for buttons, links)
	background: '#FFFFFF',  // Background color
	textDark: '#000000',    // Primary text
	textLight: '#777777',   // Secondary/muted text
	border: '#D9D9D9',      // Border color
	gray: '#F0F0F0',        // Gray for backgrounds, thumbnails
	lightGray: '#F8F8F8',   // Lighter gray for inactive states
	error: '#FF3B30',       // Error/warning color
  };
  
  export const spacing = {
	tiny: 4,
	small: 8,
	base: 16,
	large: 24,
	xlarge: 32,
  };
  
  export const typography = {
	// Typography presets
	headline: {
	  fontFamily: 'Merriweather-Bold',
	  fontSize: 26,
	  lineHeight: 28,
	  letterSpacing: 0.35,
	  color: colors.textDark,
	},
	sectionTitle: {
	  fontFamily: 'Merriweather-Bold',
	  fontSize: 22,
	  lineHeight: 28,
	  letterSpacing: 0.35,
	  color: colors.textDark,
	},
	body: {
	  fontFamily: 'Merriweather',
	  fontSize: 13,
	  lineHeight: 22,
	  letterSpacing: -0.41,
	  color: colors.textDark,
	},
	caption: {
	  fontFamily: 'Merriweather',
	  fontSize: 11,
	  lineHeight: 13,
	  letterSpacing: 0.07,
	  color: colors.textDark,
	  opacity: 0.6,
	},
	button: {
	  fontFamily: 'Merriweather-Bold',
	  fontSize: 15,
	  lineHeight: 20,
	  letterSpacing: -0.24,
	  color: colors.background,
	},
	tabLabel: {
	  fontFamily: 'IBMPlexSans-Medium',
	  fontSize: 10,
	  lineHeight: 13,
	  letterSpacing: 0.16,
	  textAlign: 'center',
	},
  };
  
  export const shadows = {
	small: {
	  shadowColor: '#000',
	  shadowOffset: {
		width: 0,
		height: 2,
	  },
	  shadowOpacity: 0.1,
	  shadowRadius: 3,
	  elevation: 2,
	},
	medium: {
	  shadowColor: '#000',
	  shadowOffset: {
		width: 0,
		height: 4,
	  },
	  shadowOpacity: 0.15,
	  shadowRadius: 5,
	  elevation: 4,
	},
  };