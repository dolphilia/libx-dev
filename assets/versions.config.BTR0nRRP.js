import { a as createAstro, b as createComponent, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, j as renderSlot, d as renderTemplate, u as unescapeHTML, e as renderScript, q as renderHead, r as renderComponent } from './astro/server.DZ9z6Le0.js';
/* empty css                         */

const $$Astro$7 = createAstro("https://dolphilia.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: additionalClass = "",
    ...rest
  } = Astro2.props;
  const isLink = variant === "link";
  const classes = [
    "btn",
    `btn-${variant}`,
    !isLink && `btn-${size}`,
    additionalClass
  ];
  return renderTemplate`${rest.href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(classes, "class:list")}${spreadAttributes(rest)} data-astro-cid-vdt45vlw>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(classes, "class:list")}${spreadAttributes(rest)} data-astro-cid-vdt45vlw>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Button.astro", void 0);

const $$Astro$6 = createAstro("https://dolphilia.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, class: className = "", variant = "default", ...rest } = Astro2.props;
  const classes = [
    "card",
    `card-${variant}`,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${spreadAttributes(rest)} data-astro-cid-acjo2zw3> <div class="card-body" data-astro-cid-acjo2zw3> ${title && renderTemplate`<h2 class="card-title" data-astro-cid-acjo2zw3>${title}</h2>`} <div class="card-content" data-astro-cid-acjo2zw3> ${renderSlot($$result, $$slots["default"])} </div> ${Astro2.slots.has("footer") && renderTemplate`<div class="card-footer" data-astro-cid-acjo2zw3> ${renderSlot($$result, $$slots["footer"])} </div>`} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Card.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://dolphilia.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { items, class: className = "" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<nav", ' aria-label="\u30E1\u30A4\u30F3\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3" data-astro-cid-pclxhes2> <div class="container" data-astro-cid-pclxhes2> <div class="nav-wrapper" data-astro-cid-pclxhes2> <div class="nav-content" data-astro-cid-pclxhes2> <div class="mobile-menu-toggle" data-astro-cid-pclxhes2> <button type="button" aria-haspopup="true" aria-expanded="false" aria-label="\u30E2\u30D0\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC\u3092\u5207\u308A\u66FF\u3048" id="mobile-menu-button" data-astro-cid-pclxhes2> <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-pclxhes2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" data-astro-cid-pclxhes2></path> </svg> </button> </div> <div class="desktop-menu" data-astro-cid-pclxhes2> <ul class="menu-list" role="menubar" aria-label="\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3" data-astro-cid-pclxhes2> ', ' </ul> </div> </div> </div> </div> <!-- \u30E2\u30D0\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC --> <div class="mobile-menu hidden" id="mobile-menu" data-astro-cid-pclxhes2> <div class="mobile-menu-content" data-astro-cid-pclxhes2> <ul class="mobile-menu-list" role="menu" aria-label="\u30E2\u30D0\u30A4\u30EB\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3" data-astro-cid-pclxhes2> ', " </ul> </div> </div> </nav>  <script>\n  document.addEventListener('DOMContentLoaded', function() {\n    const mobileButton = document.getElementById('mobile-menu-button');\n    const mobileMenu = document.getElementById('mobile-menu');\n    \n    if (mobileButton && mobileMenu) {\n      mobileButton.addEventListener('click', function() {\n        const expanded = mobileButton.getAttribute('aria-expanded') === 'true';\n        mobileButton.setAttribute('aria-expanded', (!expanded).toString());\n        mobileMenu.classList.toggle('hidden');\n      });\n    }\n  });\n<\/script>"])), maybeRenderHead(), addAttribute(["navigation", className], "class:list"), items.map((item) => renderTemplate`<li class="menu-item" data-astro-cid-pclxhes2> <a${addAttribute(item.href, "href")} role="menuitem"${addAttribute(`${item.title}\u30DA\u30FC\u30B8\u3078\u79FB\u52D5`, "aria-label")} class="menu-link" data-astro-cid-pclxhes2> ${item.title} ${item.children && item.children.length > 0 && renderTemplate`<svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-pclxhes2> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-pclxhes2></path> </svg>`} </a> ${item.children && item.children.length > 0 && renderTemplate`<ul class="dropdown-menu" role="menu"${addAttribute(`${item.title}\u306E\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC`, "aria-label")} data-astro-cid-pclxhes2> ${item.children.map((child) => renderTemplate`<li data-astro-cid-pclxhes2> <a${addAttribute(child.href, "href")} role="menuitem"${addAttribute(`${child.title}\u30DA\u30FC\u30B8\u3078\u79FB\u52D5`, "aria-label")} class="dropdown-item" data-astro-cid-pclxhes2> ${child.title} </a> </li>`)} </ul>`} </li>`), items.map((item) => renderTemplate`<li class="mobile-menu-item" data-astro-cid-pclxhes2> <a${addAttribute(item.href, "href")} role="menuitem"${addAttribute(`${item.title}\u30DA\u30FC\u30B8\u3078\u79FB\u52D5`, "aria-label")} class="mobile-menu-link" data-astro-cid-pclxhes2> ${item.title} </a> ${item.children && item.children.length > 0 && renderTemplate`<ul class="mobile-submenu" role="menu"${addAttribute(`${item.title}\u306E\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC`, "aria-label")} data-astro-cid-pclxhes2> ${item.children.map((child) => renderTemplate`<li data-astro-cid-pclxhes2> <a${addAttribute(child.href, "href")} role="menuitem"${addAttribute(`${child.title}\u30DA\u30FC\u30B8\u3078\u79FB\u52D5`, "aria-label")} class="mobile-submenu-link" data-astro-cid-pclxhes2> ${child.title} </a> </li>`)} </ul>`} </li>`));
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro("https://dolphilia.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { items, title, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["sidebar", className], "class:list")} role="complementary"${addAttribute(title || "\u30B5\u30A4\u30C9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", "aria-label")} data-astro-cid-7hrmydxt> ${title && renderTemplate`<h3 class="sidebar-title" id="sidebar-title" data-astro-cid-7hrmydxt> ${title} </h3>`} <nav aria-labelledby="sidebar-title" data-astro-cid-7hrmydxt> <ul class="sidebar-menu" data-astro-cid-7hrmydxt> ${items.map((section, index) => renderTemplate`<li class="sidebar-section" data-astro-cid-7hrmydxt> ${section.title && renderTemplate`<h4 class="section-title"${addAttribute(`section-${index}-title`, "id")} data-astro-cid-7hrmydxt> ${section.title} </h4>`} ${section.items && renderTemplate`<ul${addAttribute(`section-${index}-title`, "aria-labelledby")} class="section-items" data-astro-cid-7hrmydxt> ${section.items.map((item) => renderTemplate`<li data-astro-cid-7hrmydxt> <a${addAttribute(item.href, "href")} class="sidebar-link" data-astro-cid-7hrmydxt> ${item.title} </a> </li>`)} </ul>`} </li>`)} </ul> </nav> </aside> `;
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
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["footer", className], "class:list")} role="contentinfo" data-astro-cid-v2payc3g> <div class="footer-content" data-astro-cid-v2payc3g> <div class="brand-section" data-astro-cid-v2payc3g> ${renderSlot($$result, $$slots["logo"])} <p class="copyright" data-astro-cid-v2payc3g>${copyright}</p> <div class="social-links" data-astro-cid-v2payc3g> ${renderSlot($$result, $$slots["social-links"])} </div> </div> ${linkGroups.map((group) => renderTemplate`<nav class="link-group"${addAttribute(`footer-${group.title.toLowerCase().replace(/\s+/g, "-")}`, "aria-labelledby")} data-astro-cid-v2payc3g> <h6 class="group-title"${addAttribute(`footer-${group.title.toLowerCase().replace(/\s+/g, "-")}`, "id")} data-astro-cid-v2payc3g> ${group.title} </h6> <ul class="link-list" data-astro-cid-v2payc3g> ${group.links.map((link) => renderTemplate`<li class="link-item" data-astro-cid-v2payc3g> <a${addAttribute(link.href, "href")} class="link"${addAttribute(link.ariaLabel || link.title, "aria-label")} data-astro-cid-v2payc3g> ${link.title} </a> </li>`)} </ul> </nav>`)} </div> </footer> `;
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
  const iconMap = {
    info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert", `alert-${variant}`, className], "class:list")} role="alert"${spreadAttributes(rest)} data-astro-cid-ndlnvn3i> <div data-astro-cid-ndlnvn3i>${unescapeHTML(iconMap[variant])}</div> <div class="content" data-astro-cid-ndlnvn3i> ${title && renderTemplate`<h3 class="title" data-astro-cid-ndlnvn3i>${title}</h3>`} <div class="message" data-astro-cid-ndlnvn3i> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["language-selector", className], "class:list")} data-astro-cid-ltpqzwiw>  <div data-astro-cid-ltpqzwiw> <button type="button" class="selector-button" id="language-menu-button" aria-expanded="false" aria-haspopup="true" data-astro-cid-ltpqzwiw> <span data-astro-cid-ltpqzwiw>${LANG_NAMES[currentLang] || currentLang}</span> <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-ltpqzwiw> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-ltpqzwiw></path> </svg> </button> </div>  <div class="dropdown-menu hidden" role="menu" aria-orientation="vertical" aria-labelledby="language-menu-button" tabindex="-1" id="language-menu" data-astro-cid-ltpqzwiw> <div class="menu-content" role="none" data-astro-cid-ltpqzwiw> ${langPaths.map((pathInfo) => renderTemplate`<a${addAttribute(pathInfo.path, "href")}${addAttribute([
    "menu-item",
    pathInfo.isCurrent && "menu-item-active"
  ], "class:list")} role="menuitem" tabindex="-1"${addAttribute(pathInfo.isCurrent ? "page" : void 0, "aria-current")} data-astro-cid-ltpqzwiw> ${pathInfo.name} </a>`)} </div> </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/components/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/components/LanguageSelector.astro", void 0);

const $$Astro = createAstro("https://dolphilia.github.io");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const BASE_URL = "/docs-astro";
  const { title, lang, version = "v1" } = Astro2.props;
  const navItems = [
    { title: "Home", href: `${BASE_URL}/${lang}` },
    { title: "Docs", href: `${BASE_URL}/${lang}/${version}/guide/getting-started` },
    { title: "API", href: `${BASE_URL}/${lang}/${version}/api` }
  ];
  const linkGroups = [
    {
      title: "Docs",
      links: [
        { title: "Getting Started", href: `${BASE_URL}/${lang}/${version}/guide/getting-started` },
        { title: "API Reference", href: `${BASE_URL}/${lang}/${version}/api` }
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
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${BASE_URL}/favicon.svg`, "href")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Documentation site built with Astro"><title>${title} | Docs</title>${renderHead()}</head> <body data-astro-cid-ouamjn2i> <header data-astro-cid-ouamjn2i> <div class="header-container" data-astro-cid-ouamjn2i> <div class="header-content" data-astro-cid-ouamjn2i> <nav aria-label="メインナビゲーション" data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navigation", $$Navigation, { "items": navItems, "data-astro-cid-ouamjn2i": true })} </nav> <div aria-label="言語選択" data-astro-cid-ouamjn2i> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "currentLang": lang, "data-astro-cid-ouamjn2i": true })} </div> </div> </div> </header> <main id="main-content" data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "linkGroups": linkGroups, "copyright": `\xA9 ${currentYear} Docs Astro. All rights reserved.`, "data-astro-cid-ouamjn2i": true })} </body></html>`;
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
