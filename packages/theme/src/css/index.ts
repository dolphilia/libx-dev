/**
 * テーマのCSSエクスポート
 */

// CSSファイルをインポート
import './variables.css';
import './base.css';

// 他のCSSファイルがあれば追加でインポート

// エクスポート
export { default as colors } from '../colors';
export { default as typography } from '../typography';
export { default as spacing } from '../spacing';

// ユーティリティ関数
export const applyTheme = (darkMode = false) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const toggleDarkMode = () => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  applyTheme(!isDarkMode);
  return !isDarkMode;
};

export const detectPrefersDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const initTheme = (respectUserPreference = true) => {
  if (respectUserPreference) {
    const prefersDarkMode = detectPrefersDarkMode();
    applyTheme(prefersDarkMode);
    
    // 設定変更を監視
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      applyTheme(e.matches);
    });
  }
};
