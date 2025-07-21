import fs from 'node:fs/promises';
import path from 'node:path';

async function scanDirectory(dirPath, basePath = "") {
  const files = [];
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? path.join(basePath, entry.name) : entry.name;
      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath, relativePath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        files.push(relativePath);
      }
    }
  } catch (error) {
  }
  return files;
}
async function getAvailableContent() {
  const contentFiles = [];
  const contentDir = path.join(process.cwd(), "src", "content", "docs");
  try {
    const mdxFiles = await scanDirectory(contentDir);
    for (const filePath of mdxFiles) {
      const pathParts = filePath.split(path.sep);
      if (pathParts.length >= 4) {
        const [lang, version, section, fileName] = pathParts;
        const fileSlug = fileName.replace(".mdx", "");
        const displaySlug = fileSlug.replace(/^\d+-/, "");
        const contentFile = {
          slug: displaySlug,
          lang,
          version,
          section,
          fullPath: path.join("src", "content", "docs", filePath),
          url: `/${lang}/${version}/${section}/${fileSlug}`
        };
        contentFiles.push(contentFile);
      }
    }
  } catch (error) {
    console.warn("コンテンツファイルの読み取りに失敗しました:", error);
  }
  return contentFiles;
}
async function findContent(lang, version, section, slug) {
  const allContent = await getAvailableContent();
  return allContent.find(
    (content) => content.lang === lang && content.version === version && content.section === section && (content.slug === slug )
  );
}
async function findAllContent(lang, version, section) {
  const allContent = await getAvailableContent();
  return allContent.filter(
    (content) => content.lang === lang && content.version === version && (content.section === section )
  );
}
async function getDefaultCardLinks(lang, version, baseUrl) {
  const guideContent = await findAllContent(lang, version, "guide");
  const defaultCards = [
    { slug: "getting-started", title: "docs.getting_started" },
    { slug: "installation", title: "docs.installation" },
    { slug: "sidebar-auto-generation", title: "docs.sidebar_generation" },
    { slug: "icons-example", title: "docs.icons_example" },
    { slug: "extended-icons-example", title: "docs.extended_icons_example" },
    { slug: "tabs-example", title: "docs.tabs_example" }
  ];
  const cardLinks = [];
  for (const card of defaultCards) {
    const content = guideContent.find((c) => c.slug === card.slug);
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
async function generateFileBasedPagination(lang, version, section, currentSlug, baseUrl) {
  const allContent = await getAvailableContent();
  const sectionContent = allContent.filter(
    (content) => content.lang === lang && content.version === version && content.section === section
  ).sort((a, b) => {
    const aNumber = parseInt((a.fullPath.match(/\/(\d+)-/) || ["", "999"])[1]);
    const bNumber = parseInt((b.fullPath.match(/\/(\d+)-/) || ["", "999"])[1]);
    return aNumber - bNumber;
  });
  const currentIndex = sectionContent.findIndex((content) => content.slug === currentSlug);
  if (currentIndex === -1) {
    return {};
  }
  const result = {};
  if (currentIndex > 0) {
    const prevContent = sectionContent[currentIndex - 1];
    result.prev = {
      title: prevContent.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      // タイトルを生成
      url: `${baseUrl}${prevContent.url}`
    };
  }
  if (currentIndex < sectionContent.length - 1) {
    const nextContent = sectionContent[currentIndex + 1];
    result.next = {
      title: nextContent.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      // タイトルを生成
      url: `${baseUrl}${nextContent.url}`
    };
  }
  return result;
}
async function checkFileExists(targetPath) {
  const allContent = await getAvailableContent();
  return allContent.some((content) => targetPath.endsWith(content.url));
}

export { getDefaultCardLinks as a, checkFileExists as c, findContent as f, generateFileBasedPagination as g };
