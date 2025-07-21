import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';

export interface ContentFile {
  slug: string;
  lang: LocaleKey;
  version: string;
  section: string;
  title?: string;
  fullPath: string;
  url: string;
}

/**
 * ディレクトリ構造を再帰的にスキャンしてMDXファイルを探す
 */
async function scanDirectory(dirPath: string, basePath: string = ''): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? path.join(basePath, entry.name) : entry.name;
      
      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath, relativePath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        files.push(relativePath);
      }
    }
  } catch (error) {
    // ディレクトリが存在しない場合やアクセス権限がない場合はスキップ
  }
  
  return files;
}

/**
 * 実際のディレクトリ構造からコンテンツファイルの一覧を取得し、URLを生成する
 */
export async function getAvailableContent(): Promise<ContentFile[]> {
  const contentFiles: ContentFile[] = [];
  const contentDir = path.join(process.cwd(), 'src', 'content', 'docs');
  
  try {
    const mdxFiles = await scanDirectory(contentDir);
    
    for (const filePath of mdxFiles) {
      const pathParts = filePath.split(path.sep);
      
      if (pathParts.length >= 4) {
        const [lang, version, section, fileName] = pathParts;
        
        // ファイル名から拡張子を除去（番号プレフィックスは保持）
        const fileSlug = fileName.replace('.mdx', '');
        // 表示用のslugは番号プレフィックスを削除
        const displaySlug = fileSlug.replace(/^\d+-/, '');
        
        const contentFile: ContentFile = {
          slug: displaySlug,
          lang: lang as LocaleKey,
          version,
          section,
          fullPath: path.join('src', 'content', 'docs', filePath),
          url: `/${lang}/${version}/${section}/${fileSlug}`
        };
        
        contentFiles.push(contentFile);
      }
    }
  } catch (error) {
    console.warn('コンテンツファイルの読み取りに失敗しました:', error);
  }
  
  return contentFiles;
}

/**
 * 指定された条件に一致する最初のコンテンツファイルを取得
 */
export async function findContent(
  lang: LocaleKey,
  version: string,
  section: string,
  slug?: string
): Promise<ContentFile | undefined> {
  const allContent = await getAvailableContent();
  
  return allContent.find(content => 
    content.lang === lang &&
    content.version === version &&
    content.section === section &&
    (slug ? content.slug === slug : true)
  );
}

/**
 * 指定された条件に一致するコンテンツファイルを全て取得
 */
export async function findAllContent(
  lang: LocaleKey,
  version: string,
  section?: string
): Promise<ContentFile[]> {
  const allContent = await getAvailableContent();
  
  return allContent.filter(content => 
    content.lang === lang &&
    content.version === version &&
    (section ? content.section === section : true)
  );
}

/**
 * カード用のデフォルトコンテンツリンクを生成（存在するファイルのみ）
 */
export async function getDefaultCardLinks(
  lang: LocaleKey,
  version: string,
  baseUrl: string
): Promise<Array<{ title: string; href: string; slug: string }>> {
  const guideContent = await findAllContent(lang, version, 'guide');
  
  // デフォルトのカード項目（優先順位順）
  const defaultCards = [
    { slug: 'getting-started', title: 'docs.getting_started' },
    { slug: 'installation', title: 'docs.installation' },
    { slug: 'sidebar-auto-generation', title: 'docs.sidebar_generation' },
    { slug: 'icons-example', title: 'docs.icons_example' },
    { slug: 'extended-icons-example', title: 'docs.extended_icons_example' },
    { slug: 'tabs-example', title: 'docs.tabs_example' }
  ];
  
  const cardLinks: Array<{ title: string; href: string; slug: string }> = [];
  
  // 存在するファイルのみを含める
  for (const card of defaultCards) {
    const content = guideContent.find(c => c.slug === card.slug);
    if (content) {
      cardLinks.push({
        title: card.title,
        href: `${baseUrl}${content.url}`,
        slug: card.slug
      });
    }
  }
  
  return cardLinks;
}

/**
 * 現在のページに対応する他のバージョンのURLを取得
 * バージョン間でファイル構造が異なる場合に対応
 */
export async function getVersionedUrl(
  currentLang: LocaleKey,
  currentVersion: string,
  targetVersion: string,
  currentSlug: string, // guide/01-getting-started の形式
  baseUrl: string
): Promise<string | null> {
  const allContent = await getAvailableContent();
  
  // currentSlugを解析
  const slugParts = currentSlug.split('/');
  if (slugParts.length < 2) {
    return null;
  }
  
  const section = slugParts[0]; // "guide"
  const fileName = slugParts[1]; // "01-getting-started"
  const displaySlug = fileName.replace(/^\d+-/, ''); // "getting-started"
  
  // ターゲットバージョンで対応するページを探す
  // 1. 同じ表示用スラッグを持つファイルを探す
  const exactMatch = allContent.find(content => 
    content.lang === currentLang &&
    content.version === targetVersion &&
    content.section === section &&
    content.slug === displaySlug
  );
  
  if (exactMatch) {
    return `${baseUrl}${exactMatch.url}`;
  }
  
  // 2. 同じセクションで最初のファイルを探す（フォールバック）
  const sectionContent = allContent
    .filter(content =>
      content.lang === currentLang &&
      content.version === targetVersion &&
      content.section === section
    )
    .sort((a, b) => {
      // ファイル名の番号プレフィックスでソート
      const aNumber = parseInt((a.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      const bNumber = parseInt((b.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      return aNumber - bNumber;
    });
  
  if (sectionContent.length > 0) {
    return `${baseUrl}${sectionContent[0].url}`;
  }
  
  // 3. 最後の手段として、ターゲットバージョンの最初の利用可能なページを探す
  const anyContent = allContent
    .filter(content =>
      content.lang === currentLang &&
      content.version === targetVersion
    )
    .sort((a, b) => {
      // セクション優先度とファイル番号でソート
      const sectionPriority = { guide: 0, api: 1, examples: 2 };
      const aPriority = sectionPriority[a.section as keyof typeof sectionPriority] || 99;
      const bPriority = sectionPriority[b.section as keyof typeof sectionPriority] || 99;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      const aNumber = parseInt((a.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      const bNumber = parseInt((b.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      return aNumber - bNumber;
    });
  
  if (anyContent.length > 0) {
    return `${baseUrl}${anyContent[0].url}`;
  }
  
  // どのファイルも見つからない場合はnullを返す
  return null;
}

/**
 * 実際のファイル構造に基づいてページネーションを生成
 */
export async function generateFileBasedPagination(
  lang: LocaleKey,
  version: string,
  section: string,
  currentSlug: string, // 例: "getting-started"
  baseUrl: string
): Promise<{ prev?: { title: string; url: string }; next?: { title: string; url: string } }> {
  const allContent = await getAvailableContent();
  
  // 同じ言語、バージョン、セクションのコンテンツを取得
  const sectionContent = allContent
    .filter(content => 
      content.lang === lang &&
      content.version === version &&
      content.section === section
    )
    .sort((a, b) => {
      // ファイル名の番号プレフィックスでソート
      const aNumber = parseInt((a.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      const bNumber = parseInt((b.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      return aNumber - bNumber;
    });
  
  // 現在のページのインデックスを見つける
  const currentIndex = sectionContent.findIndex(content => content.slug === currentSlug);
  
  if (currentIndex === -1) {
    return {};
  }
  
  const result: { prev?: { title: string; url: string }; next?: { title: string; url: string } } = {};
  
  // 前のページ
  if (currentIndex > 0) {
    const prevContent = sectionContent[currentIndex - 1];
    result.prev = {
      title: prevContent.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // タイトルを生成
      url: `${baseUrl}${prevContent.url}`
    };
  }
  
  // 次のページ
  if (currentIndex < sectionContent.length - 1) {
    const nextContent = sectionContent[currentIndex + 1];
    result.next = {
      title: nextContent.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // タイトルを生成
      url: `${baseUrl}${nextContent.url}`
    };
  }
  
  return result;
}

/**
 * 指定されたパスのファイルが実際に存在するかチェック
 */
export async function checkFileExists(targetPath: string): Promise<boolean> {
  const allContent = await getAvailableContent();
  return allContent.some(content => targetPath.endsWith(content.url));
}

/**
 * バージョン別のファイル構造を取得
 */
export async function getVersionFileStructure(lang: LocaleKey): Promise<Record<string, ContentFile[]>> {
  const allContent = await getAvailableContent();
  const versionStructure: Record<string, ContentFile[]> = {};
  
  // 言語別にフィルタして、バージョンごとにグループ化
  const langContent = allContent.filter(content => content.lang === lang);
  
  for (const content of langContent) {
    if (!versionStructure[content.version]) {
      versionStructure[content.version] = [];
    }
    versionStructure[content.version].push(content);
  }
  
  // 各バージョン内でソート（優先度順）
  for (const version in versionStructure) {
    versionStructure[version].sort((a, b) => {
      // セクション優先度
      const sectionPriority = { guide: 0, api: 1, examples: 2, faq: 3 };
      const aPriority = sectionPriority[a.section as keyof typeof sectionPriority] || 99;
      const bPriority = sectionPriority[b.section as keyof typeof sectionPriority] || 99;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      // ファイル番号でソート
      const aNumber = parseInt((a.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      const bNumber = parseInt((b.fullPath.match(/\/(\d+)-/) || ['', '999'])[1]);
      return aNumber - bNumber;
    });
  }
  
  return versionStructure;
}

/**
 * バージョン間の対応ファイルを見つける（柔軟なマッチング）
 */
export async function findCorrespondingFile(
  currentLang: LocaleKey,
  currentVersion: string,
  targetVersion: string,
  currentSlug: string,
  baseUrl: string
): Promise<string> {
  const versionStructure = await getVersionFileStructure(currentLang);
  const targetFiles = versionStructure[targetVersion] || [];
  
  if (targetFiles.length === 0) {
    // ターゲットバージョンにファイルがない場合はバージョンのルートページへ
    return `${baseUrl}/${targetVersion}/`;
  }
  
  // currentSlugを解析
  const slugParts = currentSlug.split('/');
  const section = slugParts[0]; // "guide"
  const fileName = slugParts[1]; // "01-getting-started" など
  const displaySlug = fileName ? fileName.replace(/^\d+-/, '') : ''; // "getting-started"
  
  // 1. 完全一致：同じセクション・同じスラッグ
  const exactMatch = targetFiles.find(file => 
    file.section === section && file.slug === displaySlug
  );
  if (exactMatch) {
    return `${baseUrl}${exactMatch.url}`;
  }
  
  // 2. セクション一致：同じセクション内の最初のファイル
  const sectionMatch = targetFiles.find(file => file.section === section);
  if (sectionMatch) {
    return `${baseUrl}${sectionMatch.url}`;
  }
  
  // 3. スラッグ一致：異なるセクションでも同じスラッグ
  const slugMatch = targetFiles.find(file => file.slug === displaySlug);
  if (slugMatch) {
    return `${baseUrl}${slugMatch.url}`;
  }
  
  // 4. 最終フォールバック：ターゲットバージョンの最初のファイル
  return `${baseUrl}${targetFiles[0].url}`;
}