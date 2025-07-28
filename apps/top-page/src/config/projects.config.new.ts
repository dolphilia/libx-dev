/**
 * プロジェクト設定（JSON移行版）
 * 新旧API互換性を保つためのラッパー
 */
import { getTopPageConfig, clearConfigCache } from './projects-config-loader';
import type { Project, TopPageConfig } from './projects-config-schema';

// 後方互換性のため、既存の関数名とインターフェースを維持
export { getTopPageConfig };
export type { Project, TopPageConfig };

/**
 * 設定キャッシュをクリア（開発・テスト用）
 */
export function resetProjectsConfig(): void {
  clearConfigCache();
}

// デフォルトエクスポート用のプロキシオブジェクト（必要に応じて）
const configProxy = {
  getTopPageConfig,
  resetProjectsConfig
};

export default configProxy;