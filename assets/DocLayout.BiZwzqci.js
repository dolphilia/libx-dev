import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server.BeZcSwAP.js';
import { t, $ as $$MainLayout, a as $$Sidebar } from './MainLayout.BOqWZmRq.js';
import { $ as $$SearchBar, a as $$SearchResults, b as $$VersionSelector } from './SearchResults.CZVeRA8w.js';

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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "lang": lang, "version": version }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row gap-8"> <aside class="w-full md:w-64 shrink-0"> <div class="sticky top-4 space-y-6"> <div class="space-y-2"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "placeholder": t("search.placeholder", lang) })} ${renderComponent($$result2, "SearchResults", $$SearchResults, { "className": "mt-2", "lang": lang })} </div> ${renderComponent($$result2, "VersionSelector", $$VersionSelector, { "currentVersion": version, "versions": versions, "basePath": `${baseUrl}/${lang}` })} ${renderComponent($$result2, "Sidebar", $$Sidebar, { "items": sidebarItems, "title": t("docs.documentation", lang) })} </div> </aside> <div class="flex-grow"> <article class="prose max-w-none"> <h1>${title}</h1> ${renderSlot($$result2, $$slots["default"])} </article> </div> </div> ` })}`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/layouts/DocLayout.astro", void 0);

export { $$DocLayout as $ };
