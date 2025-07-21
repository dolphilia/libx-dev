/**
 * バージョン管理ユーティリティ
 * 
 * このモジュールは、ドキュメントのバージョン管理に関連するユーティリティ関数を提供します。
 */

export interface Version {
  id: string;
  name: string;
  date: Date;
  isLatest?: boolean;
  tag?: string;
  description?: string;
}

export interface VersionedDocument {
  path: string;
  versions: Record<string, string>; // バージョンID -> ドキュメントパス
}

/**
 * バージョン情報を比較します
 */
export function compareVersions(a: Version, b: Version): number {
  // 最新バージョンは常に先頭
  if (a.isLatest) return -1;
  if (b.isLatest) return 1;
  
  // 日付の新しい順
  return b.date.getTime() - a.date.getTime();
}

/**
 * バージョンリストをソートします
 */
export function sortVersions(versions: Version[]): Version[] {
  return [...versions].sort(compareVersions);
}

/**
 * 指定されたパスからバージョン情報を抽出します
 */
export function extractVersionFromPath(path: string): string | null {
  // パスからバージョン部分を抽出（例: /ja/v1/guide -> v1）
  const match = path.match(/\/([^\/]+)\/([^\/]+)/);
  if (match && match[2] && match[2].startsWith('v')) {
    return match[2];
  }
  return null;
}

/**
 * 指定されたパスのバージョンを変更します
 */
export function changePathVersion(path: string, newVersion: string): string {
  // パス内のバージョン部分を置換（例: /ja/v1/guide -> /ja/v2/guide）
  return path.replace(/\/([^\/]+)\/([^\/]+)\//, `/$1/${newVersion}/`);
}

/**
 * 最新バージョンのパスを取得します
 */
export function getLatestVersionPath(
  path: string,
  versions: Version[]
): string | null {
  const latestVersion = versions.find(v => v.isLatest);
  if (!latestVersion) {
    return null;
  }
  
  return changePathVersion(path, latestVersion.id);
}

/**
 * 指定されたバージョンが存在するかチェックします
 */
export function versionExists(
  versionId: string,
  versions: Version[]
): boolean {
  return versions.some(v => v.id === versionId);
}

/**
 * 指定されたバージョンのドキュメントが存在するかチェックします
 */
export function versionedDocumentExists(
  versionId: string,
  document: VersionedDocument
): boolean {
  return versionId in document.versions;
}

/**
 * 指定されたバージョンのドキュメントパスを取得します
 */
export function getVersionedDocumentPath(
  versionId: string,
  document: VersionedDocument
): string | null {
  if (versionedDocumentExists(versionId, document)) {
    return document.versions[versionId];
  }
  return null;
}

/**
 * ファイル名から番号プレフィックスを削除して正規化します
 */
export function normalizeSlugForVersioning(slug: string): string {
  // スラッグの各セグメントから番号プレフィックス（例: "01-"）を削除
  return slug.replace(/\/(\d+-)([^\/]+)/g, '/$2');
}

/**
 * バージョン間の移動先URLを計算します（番号プレフィックス対応版）
 */
export function calculateVersionedUrl(
  currentPath: string,
  targetVersion: string,
  document: VersionedDocument
): string | null {
  // 現在のパスからバージョンを抽出
  const currentVersion = extractVersionFromPath(currentPath);
  if (!currentVersion) {
    return null;
  }
  
  // ターゲットバージョンのドキュメントが存在するか確認
  if (!versionedDocumentExists(targetVersion, document)) {
    return null;
  }
  
  // パスのバージョン部分を置換
  return changePathVersion(currentPath, targetVersion);
}

/**
 * バージョン間で対応するページのURLを安全に計算します
 * 番号プレフィックス付きファイル名を考慮し、存在しない場合はフォールバックします
 */
export function calculateSafeVersionedUrl(
  currentSlug: string,
  targetVersion: string,
  basePath: string,
  versions: Version[]
): string {
  // 番号プレフィックスを正規化
  const normalizedSlug = normalizeSlugForVersioning(currentSlug);
  
  // ターゲットバージョンが存在するかチェック
  const targetVersionExists = versionExists(targetVersion, versions);
  if (!targetVersionExists) {
    // バージョンが存在しない場合は最新バージョンへフォールバック
    const latestVersion = versions.find(v => v.isLatest) || versions[0];
    return `${basePath}/${latestVersion.id}/`;
  }
  
  // 理想的には、ここでターゲットバージョンに実際にページが存在するかチェックすべきですが、
  // 静的サイト生成時にはこの情報にアクセスできないため、正規化されたスラッグを使用
  return `${basePath}/${targetVersion}/${normalizedSlug}`;
}
