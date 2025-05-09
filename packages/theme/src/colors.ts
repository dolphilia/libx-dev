/**
 * テーマのカラーパレット定義
 */

export const colors = {
  // ブランドカラー
  brand: {
    primary: '#3B82F6', // blue-500
    secondary: '#6B7280', // gray-500
    accent: '#8B5CF6', // violet-500
  },

  // テキストカラー
  text: {
    primary: '#1F2937', // gray-800
    secondary: '#4B5563', // gray-600
    muted: '#9CA3AF', // gray-400
    inverted: '#FFFFFF', // white
  },

  // 背景カラー
  background: {
    primary: '#FFFFFF', // white
    secondary: '#F9FAFB', // gray-50
    tertiary: '#F3F4F6', // gray-100
    inverted: '#1F2937', // gray-800
  },

  // ボーダーカラー
  border: {
    light: '#E5E7EB', // gray-200
    default: '#D1D5DB', // gray-300
    dark: '#9CA3AF', // gray-400
  },

  // ステータスカラー
  status: {
    info: '#3B82F6', // blue-500
    success: '#10B981', // emerald-500
    warning: '#F59E0B', // amber-500
    error: '#EF4444', // red-500
  },

  // ダークモード用カラー
  dark: {
    background: {
      primary: '#111827', // gray-900
      secondary: '#1F2937', // gray-800
      tertiary: '#374151', // gray-700
    },
    text: {
      primary: '#F9FAFB', // gray-50
      secondary: '#E5E7EB', // gray-200
      muted: '#9CA3AF', // gray-400
    },
    border: {
      light: '#374151', // gray-700
      default: '#4B5563', // gray-600
      dark: '#6B7280', // gray-500
    },
  },
};

// CSS変数としてエクスポート
export const colorVariables = {
  light: {
    '--color-brand-primary': colors.brand.primary,
    '--color-brand-secondary': colors.brand.secondary,
    '--color-brand-accent': colors.brand.accent,

    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-text-muted': colors.text.muted,
    '--color-text-inverted': colors.text.inverted,

    '--color-bg-primary': colors.background.primary,
    '--color-bg-secondary': colors.background.secondary,
    '--color-bg-tertiary': colors.background.tertiary,
    '--color-bg-inverted': colors.background.inverted,

    '--color-border-light': colors.border.light,
    '--color-border-default': colors.border.default,
    '--color-border-dark': colors.border.dark,

    '--color-status-info': colors.status.info,
    '--color-status-success': colors.status.success,
    '--color-status-warning': colors.status.warning,
    '--color-status-error': colors.status.error,
  },
  dark: {
    '--color-brand-primary': colors.brand.primary,
    '--color-brand-secondary': colors.brand.secondary,
    '--color-brand-accent': colors.brand.accent,

    '--color-text-primary': colors.dark.text.primary,
    '--color-text-secondary': colors.dark.text.secondary,
    '--color-text-muted': colors.dark.text.muted,
    '--color-text-inverted': colors.text.primary,

    '--color-bg-primary': colors.dark.background.primary,
    '--color-bg-secondary': colors.dark.background.secondary,
    '--color-bg-tertiary': colors.dark.background.tertiary,
    '--color-bg-inverted': colors.background.primary,

    '--color-border-light': colors.dark.border.light,
    '--color-border-default': colors.dark.border.default,
    '--color-border-dark': colors.dark.border.dark,

    '--color-status-info': colors.status.info,
    '--color-status-success': colors.status.success,
    '--color-status-warning': colors.status.warning,
    '--color-status-error': colors.status.error,
  },
};

export default colors;
