import { a as createAstro, b as createComponent, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, j as renderSlot, d as renderTemplate, u as unescapeHTML, q as renderHead, r as renderComponent } from './astro/server.DZ9z6Le0.js';
/* empty css                         */

const $$Astro$7 = createAstro("https://dolphilia.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
    ghost: "btn-ghost",
    link: "btn-link",
    outline: "btn-outline"
  };
  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "",
    // デフォルトサイズ
    lg: "btn-lg"
  };
  const classes = [
    "btn",
    variantClasses[variant],
    sizeClasses[size],
    className
  ];
  return renderTemplate`${rest.href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(classes, "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(classes, "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Button.astro", void 0);

const $$Astro$6 = createAstro("https://dolphilia.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, class: className = "", variant = "default", ...rest } = Astro2.props;
  const variantClasses = {
    default: "",
    bordered: "card-bordered",
    image: "image-full"
  };
  const classes = [
    "card",
    "bg-base-100",
    "shadow-xl",
    variantClasses[variant],
    className
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${spreadAttributes(rest)}> ${title && renderTemplate`<div class="card-body"> <h2 class="card-title">${title}</h2> ${renderSlot($$result, $$slots["default"])} ${Astro2.slots.has("footer") && renderTemplate`<div class="card-actions justify-end"> ${renderSlot($$result, $$slots["footer"])} </div>`} </div>`} ${!title && renderTemplate`<div class="card-body"> ${renderSlot($$result, $$slots["default"])} ${Astro2.slots.has("footer") && renderTemplate`<div class="card-actions justify-end"> ${renderSlot($$result, $$slots["footer"])} </div>`} </div>`} </div>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Card.astro", void 0);

const $$Astro$5 = createAstro("https://dolphilia.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { items, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["navbar bg-base-100", className], "class:list")}> <div class="navbar-start"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> ${items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}>${item.title}</a> ${item.children && item.children.length > 0 && renderTemplate`<ul class="p-2"> ${item.children.map((child) => renderTemplate`<li><a${addAttribute(child.href, "href")}>${child.title}</a></li>`)} </ul>`} </li>`)} </ul> </div> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1"> ${items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}>${item.title}</a> ${item.children && item.children.length > 0 && renderTemplate`<ul class="p-2"> ${item.children.map((child) => renderTemplate`<li><a${addAttribute(child.href, "href")}>${child.title}</a></li>`)} </ul>`} </li>`)} </ul> </div> </div>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro("https://dolphilia.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { items, title, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["w-64 shrink-0", className], "class:list")}> ${title && renderTemplate`<h3 class="mb-3 font-semibold text-lg">${title}</h3>`} <nav> <ul class="menu bg-base-200 w-full rounded-box"> ${items.map((section) => renderTemplate`<li> ${section.title && renderTemplate`<h4 class="menu-title">${section.title}</h4>`} ${section.items && renderTemplate`<ul> ${section.items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}> ${item.title} </a> </li>`)} </ul>`} </li>`)} </ul> </nav> </aside>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro("https://dolphilia.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    copyright = `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Your Company. All rights reserved.`,
    linkGroups = [],
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["footer p-10 bg-base-200 text-base-content", className], "class:list")}> <div> ${renderSlot($$result, $$slots["logo"])} <p>${copyright}</p> <div class="flex space-x-4 mt-4"> ${renderSlot($$result, $$slots["social-links"])} </div> </div> ${linkGroups.map((group) => renderTemplate`<nav> <h6 class="footer-title">${group.title}</h6> ${group.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="link link-hover">${link.title}</a>`)} </nav>`)} </footer>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://dolphilia.github.io");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Alert;
  const {
    title,
    variant = "info",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variantClasses = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error"
  };
  const classes = [
    "alert",
    variantClasses[variant],
    className
  ];
  const iconMap = {
    info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")} role="alert"${spreadAttributes(rest)}> <div>${unescapeHTML(iconMap[variant])}</div> <div> ${title && renderTemplate`<h3 class="font-bold">${title}</h3>`} <div class="text-sm"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Alert.astro", void 0);

const common$1 = {"home":"Home","search":"Search","menu":"Menu","close":"Close","back":"Back","next":"Next","previous":"Previous","loading":"Loading...","error":"Error","success":"Success","warning":"Warning","info":"Information"};
const navigation$1 = {"docs":"Documentation","api":"API","examples":"Examples","blog":"Blog","community":"Community","github":"GitHub"};
const footer$1 = {"copyright":"© {year} All rights reserved.","terms":"Terms of Service","privacy":"Privacy Policy","contact":"Contact Us"};
const docs$1 = {"onThisPage":"On this page","editThisPage":"Edit this page","lastUpdated":"Last updated on {date}","version":"Version","versions":"Versions","language":"Language","languages":"Languages","toc":"Table of Contents","documentation":"Documentation","guide":"Guide","getting_started":"Getting Started","installation":"Installation","configuration":"Configuration","overview":"Overview","reference":"Reference","latest":"Latest","showLatest":"Show latest version","showDiff":"Show version differences"};
const search$1 = {"placeholder":"Search documentation...","noResults":"No results found for '{query}'","searchResults":"Search Results","searchIn":"Search in"};
const error$1 = {"notFound":"Page not found","notFoundDescription":"The page you are looking for does not exist or has been moved.","goHome":"Go to Home"};
const en = {
  common: common$1,
  navigation: navigation$1,
  footer: footer$1,
  docs: docs$1,
  search: search$1,
  error: error$1,
};

const common = {"home":"ホーム","search":"検索","menu":"メニュー","close":"閉じる","back":"戻る","next":"次へ","previous":"前へ","loading":"読み込み中...","error":"エラー","success":"成功","warning":"警告","info":"情報"};
const navigation = {"docs":"ドキュメント","api":"API","examples":"サンプル","blog":"ブログ","community":"コミュニティ","github":"GitHub"};
const footer = {"copyright":"© {year} All rights reserved.","terms":"利用規約","privacy":"プライバシーポリシー","contact":"お問い合わせ"};
const docs = {"onThisPage":"このページの内容","editThisPage":"このページを編集","lastUpdated":"最終更新日: {date}","version":"バージョン","versions":"バージョン一覧","language":"言語","languages":"言語一覧","toc":"目次","documentation":"ドキュメント","guide":"ガイド","getting_started":"はじめに","installation":"インストール","configuration":"設定","overview":"概要","reference":"リファレンス","latest":"最新","showLatest":"最新バージョンを表示","showDiff":"バージョン間の差分を表示"};
const search = {"placeholder":"ドキュメントを検索...","noResults":"'{query}'に一致する結果が見つかりませんでした","searchResults":"検索結果","searchIn":"検索対象"};
const error = {"notFound":"ページが見つかりません","notFoundDescription":"お探しのページは存在しないか、移動された可能性があります。","goHome":"ホームに戻る"};
const ja = {
  common,
  navigation,
  footer,
  docs,
  search,
  error,
};

const locales = {
  en,
  ja
};
const defaultLocale = "en";
const supportedLocales = ["en", "ja"];

function getLanguageFromPath(path) {
  const pathSegments = path.split("/").filter(Boolean);
  if (pathSegments.length > 0) {
    const potentialLang = pathSegments[0];
    if (supportedLocales.includes(potentialLang)) {
      return potentialLang;
    }
  }
  return defaultLocale;
}

function localizedPath(path, lang) {
  if (path === "/") {
    return lang === defaultLocale ? "/" : `/${lang}/`;
  }
  const currentLang = getLanguageFromPath(path);
  const pathWithoutLang = removeLanguagePrefix(path, currentLang);
  if (lang === defaultLocale) {
    return pathWithoutLang;
  }
  return `/${lang}${pathWithoutLang}`;
}
function removeLanguagePrefix(path, lang) {
  if (path === "/" || path === `/${lang}/`) {
    return "/";
  }
  if (path.startsWith(`/${lang}/`)) {
    return path.substring(lang.length + 1);
  }
  return path;
}
function switchLanguage(currentPath, targetLang) {
  return localizedPath(currentPath, targetLang);
}

function t(key, lang = defaultLocale, params = {}) {
  const segments = key.split(".");
  let translation = locales[lang];
  if (!translation) {
    translation = locales[defaultLocale];
  }
  for (const segment of segments) {
    if (translation && typeof translation === "object" && segment in translation) {
      translation = translation[segment];
    } else {
      if (lang !== defaultLocale) {
        return t(key, defaultLocale, params);
      }
      return key;
    }
  }
  if (typeof translation !== "string") {
    return key;
  }
  return replaceParams(translation, params);
}
function replaceParams(text, params) {
  return Object.entries(params).reduce((result, [key, value]) => {
    const regex = new RegExp(`{${key}}`, "g");
    return result.replace(regex, String(value));
  }, text);
}

const $$Astro$1 = createAstro("https://dolphilia.github.io");
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const BASE_URL = "/docs-astro";
  const LANG_NAMES = {
    en: "English",
    ja: "\u65E5\u672C\u8A9E"
  };
  const {
    currentLang,
    supportedLangs = ["en", "ja"],
    className = ""
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const relativePath = currentPath.replace(BASE_URL, "");
  const langPaths = supportedLangs.map((langCode) => {
    const localeKey = langCode;
    return {
      lang: langCode,
      name: LANG_NAMES[langCode] || langCode,
      path: `${BASE_URL}${switchLanguage(relativePath, localeKey)}`,
      isCurrent: langCode === currentLang
    };
  });
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["dropdown dropdown-end", className], "class:list")}>  <div tabindex="0" role="button" class="btn btn-ghost m-1"> <span>${LANG_NAMES[currentLang] || currentLang}</span> <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div>  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"> ${langPaths.map((pathInfo) => renderTemplate`<li> <a${addAttribute(pathInfo.path, "href")}${addAttribute(pathInfo.isCurrent ? "active" : "", "class")}${addAttribute(pathInfo.isCurrent ? "page" : void 0, "aria-current")}> ${pathInfo.name} </a> </li>`)} </ul> </div>`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/components/LanguageSelector.astro", void 0);

const $$Astro = createAstro("https://dolphilia.github.io");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, lang, version = "v1" } = Astro2.props;
  const baseUrl = "/docs-astro";
  const navItems = [
    { title: "Home", href: `${baseUrl}/${lang}` },
    { title: "Docs", href: `${baseUrl}/${lang}/${version}/guide/getting-started` },
    { title: "API", href: `${baseUrl}/${lang}/${version}/api` }
  ];
  const linkGroups = [
    {
      title: "Docs",
      links: [
        { title: "Getting Started", href: `${baseUrl}/${lang}/${version}/guide/getting-started` },
        { title: "API Reference", href: `${baseUrl}/${lang}/${version}/api` }
      ]
    },
    {
      title: "Community",
      links: [
        { title: "GitHub", href: "https://github.com" },
        { title: "Discord", href: "https://discord.com" }
      ]
    }
  ];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${baseUrl}/favicon.svg`, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Docs</title><!-- スタイルシートを動的に読み込み -->${renderHead()}</head> <body class="min-h-screen flex flex-col"> <header class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"> <div class="container mx-auto px-4 py-4"> <div class="flex justify-between items-center"> ${renderComponent($$result, "Navigation", $$Navigation, { "items": navItems })} ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "currentLang": lang })} </div> </div> </header> <main class="flex-grow container mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "linkGroups": linkGroups, "copyright": `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Docs Astro. All rights reserved.` })} </body></html>`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/layouts/MainLayout.astro", void 0);

const versions = [
  {
    id: "v1",
    name: "Version 1.0",
    date: /* @__PURE__ */ new Date("2024-01-01"),
    isLatest: false
  },
  {
    id: "v2",
    name: "Version 2.0",
    date: /* @__PURE__ */ new Date("2025-01-01"),
    isLatest: true
  }
];

export { $$MainLayout as $, $$Card as a, $$Button as b, $$Sidebar as c, t, versions as v };
