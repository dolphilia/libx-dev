import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server.XtKDsyC1.js';
import { f as defaultLocale, l as locales, a as $$MainLayout, c as $$SearchBar, g as $$SearchResults, d as $$VersionSelector, h as $$Sidebar } from './SearchResults.Dy7ltw56.js';

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

const $$Astro = createAstro("https://dolphilia.github.io");
const $$DocLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocLayout;
  const { title, lang: langProp, version } = Astro2.props;
  const lang = langProp;
  const baseUrl = "/docs-astro";
  const sidebarItems = [
    {
      title: t("docs.guide", lang),
      items: [
        { title: t("docs.getting_started", lang), href: `${baseUrl}/${lang}/${version}/guide/getting-started` },
        { title: t("docs.installation", lang), href: `${baseUrl}/${lang}/${version}/guide/installation` },
        { title: t("docs.configuration", lang), href: `${baseUrl}/${lang}/${version}/guide/configuration` }
      ]
    },
    {
      title: t("navigation.api", lang),
      items: [
        { title: t("docs.overview", lang), href: `${baseUrl}/${lang}/${version}/api` },
        { title: t("docs.reference", lang), href: `${baseUrl}/${lang}/${version}/api/reference` }
      ]
    }
  ];
  const versions = [
    { id: "v1", name: "Version 1.0", date: /* @__PURE__ */ new Date("2024-01-01"), isLatest: false },
    { id: "v2", name: "Version 2.0", date: /* @__PURE__ */ new Date("2025-01-01"), isLatest: true }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "lang": lang, "version": version }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row gap-8"> <aside class="w-full md:w-64 shrink-0"> <div class="sticky top-4 space-y-6"> <div class="space-y-2"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "placeholder": t("search.placeholder", lang) })} ${renderComponent($$result2, "SearchResults", $$SearchResults, { "className": "mt-2" })} </div> ${renderComponent($$result2, "VersionSelector", $$VersionSelector, { "currentVersion": version, "versions": versions, "basePath": `${baseUrl}/${lang}` })} ${renderComponent($$result2, "Sidebar", $$Sidebar, { "items": sidebarItems, "title": t("docs.documentation", lang) })} </div> </aside> <div class="flex-grow"> <article class="prose max-w-none"> <h1>${title}</h1> ${renderSlot($$result2, $$slots["default"])} </article> </div> </div> ` })}`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/layouts/DocLayout.astro", void 0);

export { $$DocLayout as $ };
