// Simple color scheme: white base with dark text and orange accents
export const Colors = {
  // Base colors
  background: '#FFFFFF',
  surface: '#FAFAFA',
  
  // Text colors
  text: '#1A1A1A',
  textSecondary: '#666666',
  textTertiary: '#999999',
  
  // Accent colors (orange)
  primary: '#FF6B35', // Main orange
  primaryLight: '#FF8C5A',
  primaryDark: '#E55A2B',
  
  // UI colors
  border: '#E5E5E5',
  separator: '#E5E5E5',
  error: '#DC2626',
  success: '#10B981',
  
  // Tab bar
  tabBarBackground: '#FFFFFF',
  tabBarActive: '#FF6B35',
  tabBarInactive: '#999999',
} as const;

export default Colors;
