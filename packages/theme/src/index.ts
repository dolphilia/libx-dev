/**
 * テーマパッケージのメインエントリーポイント
 */

// 各モジュールをエクスポート
export * from './colors';
export * from './typography';
export { 
  spacing,
  containers,
  breakpoints,
  zIndices,
  borderRadius,
  shadows,
  spacingVariables
} from './spacing';
export * from './css';

// 各モジュールのデフォルトエクスポートをインポート
import colors from './colors';
import typography from './typography';
import spacingModule from './spacing';

// デフォルトエクスポート
export default {
  colors,
  typography,
  spacing: spacingModule,
};
