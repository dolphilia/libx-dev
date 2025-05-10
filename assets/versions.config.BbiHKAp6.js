import { a as createAstro, b as createComponent, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, j as renderSlot, u as unescapeHTML, d as renderTemplate, r as renderComponent, q as defineStyleVars, F as Fragment, e as renderScript, t as defineScriptVars, v as renderHead } from './astro/server.DgO4_T66.js';
/* empty css                                                             */
/* empty css                                                           */
/* empty css                                                           */
/* empty css                                                                       */
/* empty css                                                                     */
/* empty css                                                              */
import './Alert_astro_astro_type_style_index_0_lang.6009b11b.l0sNRNKZ.js';
import './ContentPanel_astro_astro_type_style_index_0_lang.681033bb.l0sNRNKZ.js';
/* empty css                                                                          */
/* empty css                                                                      */
/* empty css                                                                 */
/* empty css                                                               */
import './AnchorHeading_astro_astro_type_style_index_0_lang.b9f2af13.l0sNRNKZ.js';
import './Banner_astro_astro_type_style_index_0_lang.8a6cba30.l0sNRNKZ.js';
import './ContentNotice_astro_astro_type_style_index_0_lang.cd256761.l0sNRNKZ.js';
import './Hero_astro_astro_type_style_index_0_lang.11d5116d.l0sNRNKZ.js';
/* empty css                                                                  */
import './TwoColumnContent_astro_astro_type_style_index_0_lang.64f9b8ce.l0sNRNKZ.js';
import './LinkCard_astro_astro_type_style_index_0_lang.ceda4718.l0sNRNKZ.js';
import './CardGrid_astro_astro_type_style_index_0_lang.c4bdb400.l0sNRNKZ.js';
/* empty css                                                           */
/* empty css                                                              */
/* empty css                                                             */
/* empty css                                                                 */
/* empty css                         */

const $$Astro$p = createAstro("https://dolphilia.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: additionalClass = "",
    icon,
    iconPlacement = "end",
    href,
    ...rest
  } = Astro2.props;
  const isLink = variant === "link" || variant === "minimal";
  const classes = [
    "btn",
    `btn-${variant}`,
    !isLink && `btn-${size}`,
    additionalClass
  ];
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(classes, "class:list")}${addAttribute(href, "href")}${spreadAttributes(rest)} data-astro-cid-vdt45vlw>${icon && iconPlacement === "start" && renderTemplate`<span class="icon icon-start" aria-hidden="true" data-astro-cid-vdt45vlw>${unescapeHTML(icon)}</span>`}${renderSlot($$result, $$slots["default"])}${icon && iconPlacement === "end" && renderTemplate`<span class="icon icon-end" aria-hidden="true" data-astro-cid-vdt45vlw>${unescapeHTML(icon)}</span>`}</a>` : renderTemplate`<button${addAttribute(classes, "class:list")}${spreadAttributes(rest)} data-astro-cid-vdt45vlw>${icon && iconPlacement === "start" && renderTemplate`<span class="icon icon-start" aria-hidden="true" data-astro-cid-vdt45vlw>${unescapeHTML(icon)}</span>`}${renderSlot($$result, $$slots["default"])}${icon && iconPlacement === "end" && renderTemplate`<span class="icon icon-end" aria-hidden="true" data-astro-cid-vdt45vlw>${unescapeHTML(icon)}</span>`}</button>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Button.astro", void 0);

const $$Astro$o = createAstro("https://dolphilia.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    class: className = "",
    variant = "default",
    href,
    icon,
    ...rest
  } = Astro2.props;
  const classes = [
    "card",
    `card-${variant}`,
    href && "card-interactive",
    className
  ];
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...linkProps, ...rest, "data-astro-cid-acjo2zw3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card-body" data-astro-cid-acjo2zw3> ${title && renderTemplate`<div class="card-header" data-astro-cid-acjo2zw3> ${icon && renderTemplate`<span class="card-icon" data-astro-cid-acjo2zw3>${unescapeHTML(icon)}</span>`} <h2 class="card-title" data-astro-cid-acjo2zw3>${title}</h2> </div>`} <div class="card-content" data-astro-cid-acjo2zw3> ${renderSlot($$result2, $$slots["default"])} </div> ${Astro2.slots.has("footer") && renderTemplate`<div class="card-footer" data-astro-cid-acjo2zw3> ${renderSlot($$result2, $$slots["footer"])} </div>`} </div> ${href && variant === "link" && renderTemplate`<div class="card-cta" data-astro-cid-acjo2zw3> <span class="card-cta-icon" data-astro-cid-acjo2zw3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-acjo2zw3> <path d="M5 12h14" data-astro-cid-acjo2zw3></path> <path d="m12 5 7 7-7 7" data-astro-cid-acjo2zw3></path> </svg> </span> </div>`}` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Card.astro", void 0);

const Icons = {
  // メニューバーアイコン
  "bars": '<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  // 情報アイコン
  "info": '<path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  // 設定アイコン
  "setting": '<path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>',
  // 警告アイコン
  "warning": '<path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"/>',
  // エラーアイコン
  "error": '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z"/>',
  // チェックアイコン
  "check": '<path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/>',
  // コードアイコン
  "code": '<path d="m8.64 5.23-5.99 6a.996.996 0 0 0 0 1.41l5.99 6a1.001 1.001 0 0 0 1.42-1.41L4.7 12l5.36-5.23a1.001 1.001 0 1 0-1.42-1.41l.01-.13Zm6.71-.01a1.001 1.001 0 0 0-1.42 1.41L19.3 12l-5.36 5.23a1.001 1.001 0 0 0 1.42 1.41l5.99-6a.996.996 0 0 0 0-1.41l-5.99-6Z"/>',
  // ドキュメントアイコン
  "document": '<path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"/>',
  // 検索アイコン
  "search": '<path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/>',
  // 閉じるアイコン
  "close": '<path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/>',
  // 右矢印アイコン
  "right-arrow": '<path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"/>',
  // 左矢印アイコン
  "left-arrow": '<path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/>',
  // 下矢印アイコン
  "down-arrow": '<path d="M17.71 11.29a1 1 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l5-5a1 1 0 0 0 0-1.42Z"/>',
  // 上矢印アイコン
  "up-arrow": '<path d="m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"/>',
  // 外部リンクアイコン - Starlightスタイル
  "external-link": '<path d="M19.5 8.25h-4.5a.75.75 0 0 0 0 1.5h2.69L8.91 18.53a.75.75 0 0 0 1.06 1.06L18.75 10.8v2.7a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75Z"/><path d="M8.25 6.75a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 0-1.5H9v-9.75a.75.75 0 0 0-.75-.75Z"/>',
  // 編集アイコン
  "edit": '<path d="M19.4 7.34 16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71ZM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7-5.62 5.6Zm8.35-8.36-1.91 1.91-2.7-2.7 1.91-1.91a.93.93 0 0 1 1.3 0l1.4 1.4a.93.93 0 0 1 0 1.3Z"/>',
  // コピーアイコン
  "copy": '<path d="M20 2H10a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM14 18H4V10h10v8Zm6-6h-4v-2a2 2 0 0 0-2-2h-2V4h8v8Z"/>',
  // 成功アイコン
  "success": '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.36-11.71a1 1 0 0 0-1.41 0l-3.36 3.37-1.17-1.17a1 1 0 0 0-1.41 1.41l1.87 1.87a1 1 0 0 0 1.41 0l4.07-4.07a1 1 0 0 0 0-1.41Z"/>',
  // ノートアイコン
  "note": '<path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10Z"/><path d="M7 12h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm0 2h7a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z"/>',
  // ヒントアイコン
  "tip": '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z"/>',
  // 重要アイコン
  "important": '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z"/><path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"/>',
  // 注意アイコン
  "caution": '<path d="M12 7.5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Zm0 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM21.49 19.67 13 4.48a1.39 1.39 0 0 0-2 0l-8.49 15.19A1.4 1.4 0 0 0 3.52 21h16.96a1.4 1.4 0 0 0 1.01-1.33ZM4.77 19 12 5.93 19.23 19H4.77Z"/>',
  // ダウンロードアイコン
  "download": '<path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16Z"/><path d="M12 16a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z"/><path d="M19 20H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/>',
  // ライトテーマアイコン
  "light": '<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 11h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Zm0-18h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Zm9 9a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2h2ZM6 12H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm11.66-5.66a1 1 0 0 0 0-1.41l-1.42-1.42a1 1 0 1 0-1.41 1.41l1.41 1.42a1 1 0 0 0 1.42 0Zm-12.02 12a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 1 0 1.41 1.41l1.42-1.41a1 1 0 0 0 0-1.42Zm12.02 0-1.42 1.42a1 1 0 0 0 1.42 1.41l1.41-1.41a1 1 0 0 0-1.41-1.42Zm-12.02-12 1.42-1.42a1 1 0 0 0-1.42-1.41L4.64 4.93a1 1 0 0 0 1.41 1.41Z"/>',
  // ダークテーマアイコン
  "dark": '<path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z"/>'
};

const $$Astro$n = createAstro("https://dolphilia.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    name,
    size = "1em",
    color,
    label,
    class: className = ""
  } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "icon-color": color, "icon-size": size }]);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-7zy7jqun": true, "style": $$definedVars }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(a11yAttrs)}${addAttribute(`icon ${className}`, "class")} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-7zy7jqun${addAttribute($$definedVars, "style")}>${unescapeHTML(Icons[name])}</svg>` })}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/icons/Icon.astro", void 0);

const $$Astro$m = createAstro("https://dolphilia.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    items,
    siteTitle = "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
    logoUrl,
    socialLinks = [],
    showSearch = false,
    // デフォルトで無効化
    showThemeToggle = true,
    sticky = true,
    changeOnScroll = true,
    class: className = ""
  } = Astro2.props;
  function isCurrentPage(item) {
    return item.isCurrent || false;
  }
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["header", className, { "header-sticky": sticky, "header-with-scroll": changeOnScroll }], "class:list")} data-astro-cid-pclxhes2> <div class="header-container" data-astro-cid-pclxhes2> <div class="header-content" data-astro-cid-pclxhes2> <div class="site-title-wrapper" data-astro-cid-pclxhes2> <a href="/" class="site-title" data-astro-cid-pclxhes2> ${logoUrl && renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(siteTitle, "alt")} class="site-logo" data-astro-cid-pclxhes2>`} <span data-astro-cid-pclxhes2>${siteTitle}</span> </a> </div> <nav class="navigation" aria-label="メインナビゲーション" data-astro-cid-pclxhes2> <div class="nav-items" data-astro-cid-pclxhes2> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-pclxhes2> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "data-astro-cid-pclxhes2": true })}`} <span data-astro-cid-pclxhes2>${item.title}</span> </a>`)} </div> </nav> <div class="header-actions" data-astro-cid-pclxhes2>   <div class="header-right" data-astro-cid-pclxhes2> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-pclxhes2> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-pclxhes2": true })} </a>`)} </div>`} ${showThemeToggle && renderTemplate`${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-pclxhes2": true })}`} </div> ${renderComponent($$result, "docs-menu-button", "docs-menu-button", { "data-astro-cid-pclxhes2": true }, { "default": () => renderTemplate` <button type="button" aria-expanded="false" aria-label="モバイルメニューを切り替え" aria-controls="mobile-menu" class="menu-toggle-button" data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-icon", "data-astro-cid-pclxhes2": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-icon", "data-astro-cid-pclxhes2": true })} </button> ` })} </div> </div> </div> </header> <!-- モバイルメニュー --> <div class="mobile-menu" id="mobile-menu" data-astro-cid-pclxhes2> <div class="mobile-menu-content" data-astro-cid-pclxhes2>   <ul class="mobile-nav-items" data-astro-cid-pclxhes2> ${items.map((item) => renderTemplate`<li data-astro-cid-pclxhes2> <a${addAttribute(item.href, "href")}${addAttribute(["mobile-nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-pclxhes2> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "data-astro-cid-pclxhes2": true })}`} <span data-astro-cid-pclxhes2>${item.title}</span> </a> </li>`)} </ul> ${socialLinks.length > 0 && renderTemplate`<div class="mobile-social-links" data-astro-cid-pclxhes2> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="mobile-social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-pclxhes2": true })} <span data-astro-cid-pclxhes2>${label}</span> </a>`)} </div>`} </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$l = createAstro("https://dolphilia.github.io");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const { hash = "sidebar-hash" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "data-astro-cid-6ye3nkeq": true }, { "default": () => renderTemplate(_a$2 || (_a$2 = __template$2([` <script aria-hidden="true">
    (() => {
      try {
        if (!matchMedia('(min-width: 50em)').matches) return;
        /** @type {HTMLElement | null} */
        const target = document.querySelector('sl-sidebar-state-persist');
        const state = JSON.parse(sessionStorage.getItem('sidebar-state') || '0');
        if (!target || !state || target.dataset.hash !== state.hash) return;
        window._sidebarScrollRestore = state.scroll;
        customElements.define(
          'sl-sidebar-restore',
          class SidebarRestore extends HTMLElement {
            connectedCallback() {
              try {
                const idx = parseInt(this.dataset.index || '');
                const details = this.closest('details');
                if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
              } catch {}
            }
          }
        );
      } catch {}
    })();
  <\/script> `, ` <script aria-hidden="true">
    (() => {
      const scroller = document.getElementById('sidebar');
      if (!window._sidebarScrollRestore || !scroller) return;
      scroller.scrollTop = window._sidebarScrollRestore;
      delete window._sidebarScrollRestore;
    })();
  <\/script> `])), renderSlot($$result, $$slots["default"])) })} ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/SidebarPersister.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/SidebarPersister.astro", void 0);

const $$Astro$k = createAstro("https://dolphilia.github.io");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals?.[currentGroupIndexSymbol] || 0;
  if (locals) {
    locals[currentGroupIndexSymbol] = index + 1;
  } else {
    globalThis.sidebarGroupIndex = (globalThis.sidebarGroupIndex || 0) + 1;
  }
  const usedIndex = locals ? index : globalThis.sidebarGroupIndex - 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": usedIndex })}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/SidebarRestorePoint.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$j = createAstro("https://dolphilia.github.io");
const $$SidebarResizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SidebarResizer;
  const {
    minWidth = 200,
    maxWidth = 400,
    initialWidth = 280,
    collapsedWidth = 50,
    storageKey = "sidebar-width"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ minWidth, maxWidth, initialWidth, collapsedWidth }]);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-osrdoibr', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-osrdoibr', '> <div class="handle-line" data-astro-cid-osrdoibr', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-osrdoibr', '> <span class="collapse-icon" data-astro-cid-osrdoibr', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(`${storageKey}-collapsed`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = `${sidebarWidth}px`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = `${newWidth}px`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(`${storageKey}-collapsed`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(`${storageKey}-width-before-collapse`)) {\n        localStorage.setItem(`${storageKey}-width-before-collapse`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = `${collapsedWidth}px`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(`${storageKey}-width-before-collapse`) || initialWidth;\n      sidebar.style.width = `${widthBeforeCollapse}px`;\n      localStorage.removeItem(`${storageKey}-width-before-collapse`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(`${storageKey}-collapsed`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"], ["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-osrdoibr', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-osrdoibr', '> <div class="handle-line" data-astro-cid-osrdoibr', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-osrdoibr', '> <span class="collapse-icon" data-astro-cid-osrdoibr', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(\\`\\${storageKey}-collapsed\\`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = \\`\\${sidebarWidth}px\\`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = \\`\\${newWidth}px\\`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(\\`\\${storageKey}-collapsed\\`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`)) {\n        localStorage.setItem(\\`\\${storageKey}-width-before-collapse\\`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = \\`\\${collapsedWidth}px\\`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`) || initialWidth;\n      sidebar.style.width = \\`\\${widthBeforeCollapse}px\\`;\n      localStorage.removeItem(\\`\\${storageKey}-width-before-collapse\\`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(\\`\\${storageKey}-collapsed\\`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), defineScriptVars({ minWidth, maxWidth, initialWidth, collapsedWidth, storageKey }));
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/SidebarResizer.astro", void 0);

const $$Astro$i = createAstro("https://dolphilia.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { items, title, class: className = "", hash = "sidebar-hash" } = Astro2.props;
  function isCurrentPage(item) {
    return item.isCurrent || false;
  }
  function shouldBeOpen(section) {
    if (!section.items) return false;
    return section.items.some((item) => isCurrentPage(item) || item.items && shouldBeOpen(item));
  }
  function getSidebarHash(items2) {
    return hash || "sidebar-" + Math.random().toString(36).substring(2, 9);
  }
  const sidebarHash = getSidebarHash();
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["sidebar", className], "class:list")} role="complementary"${addAttribute(title || "\u30B5\u30A4\u30C9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", "aria-label")} id="sidebar" style="position: relative;" data-astro-cid-7hrmydxt> ${renderComponent($$result, "SidebarResizer", $$SidebarResizer, { "data-astro-cid-7hrmydxt": true })} ${title && renderTemplate`<h3 class="sidebar-title" id="sidebar-title" data-astro-cid-7hrmydxt> ${title} </h3>`} <nav aria-labelledby="sidebar-title" data-astro-cid-7hrmydxt> ${renderComponent($$result, "SidebarPersister", $$SidebarPersister, { "hash": sidebarHash, "data-astro-cid-7hrmydxt": true }, { "default": ($$result2) => renderTemplate` <ul class="top-level" data-astro-cid-7hrmydxt> ${items.map((section) => renderTemplate`<li data-astro-cid-7hrmydxt> ${section.href ? renderTemplate`<a${addAttribute(section.href, "href")}${addAttribute(isCurrentPage(section) ? "page" : void 0, "aria-current")}${addAttribute(["large", { active: isCurrentPage(section) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${section.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(section), "open")} data-astro-cid-7hrmydxt> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-7hrmydxt": true })} <summary data-astro-cid-7hrmydxt> <div class="group-label" data-astro-cid-7hrmydxt> <span class="large" data-astro-cid-7hrmydxt>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${section.badge.text} </span>`} </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "right-arrow", "class": "caret", "size": "1.25rem", "data-astro-cid-7hrmydxt": true })} </summary> ${section.items && renderTemplate`<ul data-astro-cid-7hrmydxt> ${section.items.map((item) => renderTemplate`<li data-astro-cid-7hrmydxt> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(item) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${item.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(item), "open")} data-astro-cid-7hrmydxt> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-7hrmydxt": true })} <summary data-astro-cid-7hrmydxt> <div class="group-label" data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${item.badge.text} </span>`} </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "right-arrow", "class": "caret", "size": "1rem", "data-astro-cid-7hrmydxt": true })} </summary> ${item.items && renderTemplate`<ul data-astro-cid-7hrmydxt> ${item.items.map((subItem) => renderTemplate`<li data-astro-cid-7hrmydxt> <a${addAttribute(subItem.href, "href")}${addAttribute(isCurrentPage(subItem) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(subItem) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${subItem.title}</span> ${subItem.badge && renderTemplate`<span${addAttribute(["badge", subItem.badge.variant || "default", subItem.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${subItem.badge.text} </span>`} </a> </li>`)} </ul>`} </details>`} </li>`)} </ul>`} </details>`} </li>`)} </ul> ` })} </nav> </aside>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Sidebar.astro", void 0);

const $$Astro$h = createAstro("https://dolphilia.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    linkGroups = [],
    copyright = "",
    socialLinks = [],
    showEditLink = false,
    editUrl = "",
    showPagination = false,
    prevPage,
    nextPage,
    sticky = false,
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["footer", className, { "footer-sticky": sticky }], "class:list")} data-astro-cid-v2payc3g> <div class="footer-container" data-astro-cid-v2payc3g> <div class="footer-content" data-astro-cid-v2payc3g> ${showPagination && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { "prev": prevPage, "next": nextPage, "data-astro-cid-v2payc3g": true })}`} ${linkGroups.length > 0 && renderTemplate`<div class="footer-links" data-astro-cid-v2payc3g> ${linkGroups.map((group) => renderTemplate`<div class="footer-group" data-astro-cid-v2payc3g> <h3 class="group-title" data-astro-cid-v2payc3g>${group.title}</h3> <ul class="group-links" data-astro-cid-v2payc3g> ${group.links.map((link) => renderTemplate`<li data-astro-cid-v2payc3g> <a${addAttribute(link.href, "href")}${addAttribute(link.target, "target")}${addAttribute(link.rel, "rel")} class="footer-link" data-astro-cid-v2payc3g> ${link.title} </a> </li>`)} </ul> </div>`)} </div>`} <div class="footer-bottom" data-astro-cid-v2payc3g> <div class="footer-meta" data-astro-cid-v2payc3g> ${showEditLink && renderTemplate`${renderComponent($$result, "EditLink", $$EditLink, { "url": editUrl, "data-astro-cid-v2payc3g": true })}`} ${copyright && renderTemplate`<p class="copyright" data-astro-cid-v2payc3g>${copyright}</p>`} </div> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-v2payc3g> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-v2payc3g> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-v2payc3g": true })} </a>`)} </div>`} </div> </div> </div> </footer> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Footer.astro", void 0);

const $$Astro$g = createAstro("https://dolphilia.github.io");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Alert;
  const {
    title,
    variant = "info",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variantConfig = {
    info: {
      icon: "information",
      label: "\u60C5\u5831"
    },
    success: {
      icon: "approve-check-circle",
      label: "\u6210\u529F"
    },
    warning: {
      icon: "warning",
      label: "\u8B66\u544A"
    },
    error: {
      icon: "error",
      label: "\u30A8\u30E9\u30FC"
    }
  };
  const config = variantConfig[variant];
  const ariaLabel = title || config.label;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert", `alert-${variant}`, className], "class:list")} role="alert"${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(rest)} data-astro-cid-ndlnvn3i> <div class="alert-icon" data-astro-cid-ndlnvn3i> ${variant === "info" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ndlnvn3i> <path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z" fill="currentColor" data-astro-cid-ndlnvn3i></path> </svg>`} ${variant === "success" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ndlnvn3i> <path d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z" fill="currentColor" data-astro-cid-ndlnvn3i></path> </svg>`} ${variant === "warning" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ndlnvn3i> <path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" fill="currentColor" data-astro-cid-ndlnvn3i></path> </svg>`} ${variant === "error" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ndlnvn3i> <path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z" fill="currentColor" data-astro-cid-ndlnvn3i></path> </svg>`} </div> <div class="alert-content" data-astro-cid-ndlnvn3i> ${title && renderTemplate`<p class="alert-title" data-astro-cid-ndlnvn3i>${title}</p>`} <div class="alert-message" data-astro-cid-ndlnvn3i> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Alert.astro", void 0);

const $$Astro$f = createAstro("https://dolphilia.github.io");
const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ContentPanel;
  const {
    maxWidth = "var(--sl-content-width)",
    padding = "1.5rem var(--sl-content-pad-x)",
    withBorder = false,
    class: className = ""
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ maxWidth, padding }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["content-panel", className, { "with-border": withBorder }], "class:list")} data-astro-cid-uk277ml2${addAttribute($$definedVars, "style")}> <div class="sl-container" data-astro-cid-uk277ml2${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ContentPanel.astro", void 0);

const $$Astro$e = createAstro("https://dolphilia.github.io");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, depth = 0, isMobile = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["starlight-toc__list", { "starlight-toc__list--mobile": isMobile }], "class:list")} data-astro-cid-athkbvwp> ${toc.map((heading) => renderTemplate`<li class="starlight-toc__item" data-astro-cid-athkbvwp> <a class="starlight-toc__link"${addAttribute("#" + heading.slug, "href")}${addAttribute(depth, "data-depth")} data-astro-cid-athkbvwp> <span data-astro-cid-athkbvwp>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "data-astro-cid-athkbvwp": true })}`} </li>`)} </ul> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$d = createAstro("https://dolphilia.github.io");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  function translate(key, locale = "en") {
    const translations = {
      "tableOfContents.onThisPage": {
        en: "On this page",
        ja: "\u3053\u306E\u30DA\u30FC\u30B8\u306E\u5185\u5BB9"
      }
    };
    return translations[key]?.[locale] || key;
  }
  const {
    headings,
    minLevel = 2,
    maxLevel = 3,
    lang = "en",
    isMobile = false
  } = Astro2.props;
  const filteredHeadings = headings.filter(
    (heading) => heading.depth >= minLevel && heading.depth <= maxLevel
  );
  const TOC_TITLE = "tableOfContents.onThisPage";
  return renderTemplate`${filteredHeadings.length > 0 && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": minLevel, "data-max-h": maxLevel, "class:list": { "starlight-toc--mobile": isMobile }, "data-astro-cid-hjm4xq65": true }, { "default": () => renderTemplate`${maybeRenderHead()}<div class="starlight-toc-wrapper" data-astro-cid-hjm4xq65><nav aria-labelledby="starlight-toc-heading" data-astro-cid-hjm4xq65><h2 id="starlight-toc-heading" class="starlight-toc-heading" data-astro-cid-hjm4xq65>${translate(TOC_TITLE, lang)}</h2><div class="starlight-toc-list" data-astro-cid-hjm4xq65>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": filteredHeadings, "isMobile": isMobile, "data-astro-cid-hjm4xq65": true })}</div></nav></div>` })}`}${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TableOfContents/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TableOfContents/TableOfContents.astro", void 0);

const $$Astro$c = createAstro("https://dolphilia.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prev, next, dir = "ltr" } = Astro2.props;
  const isRtl = dir === "rtl";
  const prevText = "\u524D\u306E\u30DA\u30FC\u30B8";
  const nextText = "\u6B21\u306E\u30DA\u30FC\u30B8";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links"${addAttribute(dir, "dir")} data-astro-cid-2vx2ddwg> ${prev && renderTemplate`<a${addAttribute(prev.url, "href")} rel="prev" data-astro-cid-2vx2ddwg> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-2vx2ddwg> <path fill="currentColor"${addAttribute(isRtl ? "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z" : "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z", "d")} data-astro-cid-2vx2ddwg></path> </svg> <span data-astro-cid-2vx2ddwg> ${prevText} <br data-astro-cid-2vx2ddwg> <span class="link-title" data-astro-cid-2vx2ddwg>${prev.title}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.url, "href")} rel="next" data-astro-cid-2vx2ddwg> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-2vx2ddwg> <path fill="currentColor"${addAttribute(isRtl ? "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z" : "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z", "d")} data-astro-cid-2vx2ddwg></path> </svg> <span data-astro-cid-2vx2ddwg> ${nextText} <br data-astro-cid-2vx2ddwg> <span class="link-title" data-astro-cid-2vx2ddwg>${next.title}</span> </span> </a>`} </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Pagination.astro", void 0);

const $$Astro$b = createAstro("https://dolphilia.github.io");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$EditLink;
  const {
    url,
    text = "GitHub\u3067\u7DE8\u96C6",
    showIcon = true
  } = Astro2.props;
  return renderTemplate`${url && renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="edit-link" data-astro-cid-or7fkga6>${showIcon && renderTemplate`<svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" data-astro-cid-or7fkga6><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" data-astro-cid-or7fkga6></path></svg>`}${text}</a>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/EditLink.astro", void 0);

const $$Astro$a = createAstro("https://dolphilia.github.io");
const $$AnchorHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AnchorHeading;
  const { level, id, class: className } = Astro2.props;
  if (!id) {
    throw new Error("Missing `id` attribute passed to `<AnchorHeading>` component");
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`heading-wrapper level-h${level}`, "class")} data-astro-cid-avvu5fbz> ${level === 1 && renderTemplate`<h1${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h1>`} ${level === 2 && renderTemplate`<h2${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h2>`} ${level === 3 && renderTemplate`<h3${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h3>`} ${level === 4 && renderTemplate`<h4${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h4>`} ${level === 5 && renderTemplate`<h5${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h5>`} ${level === 6 && renderTemplate`<h6${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h6>`} <a class="anchor-link"${addAttribute(`#${id}`, "href")} data-astro-cid-avvu5fbz> <span aria-hidden="true" class="anchor-icon" data-astro-cid-avvu5fbz> <svg width="16" height="16" viewBox="0 0 24 24" data-astro-cid-avvu5fbz> <path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z" data-astro-cid-avvu5fbz></path> </svg> </span> <span class="sr-only" data-astro-cid-avvu5fbz>このセクションへのリンク</span> </a> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/AnchorHeading.astro", void 0);

const $$Astro$9 = createAstro("https://dolphilia.github.io");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Banner;
  const { type = "info", dismissible = false } = Astro2.props;
  const bannerClass = `sl-banner sl-banner-${type}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(bannerClass, "class")} role="alert" data-astro-cid-woj6bprr> <div class="sl-banner-container" data-astro-cid-woj6bprr> <div class="sl-banner-content" data-astro-cid-woj6bprr> ${renderSlot($$result, $$slots["default"])} </div> ${dismissible && renderTemplate`<button class="sl-banner-close-button" aria-label="閉じる" data-dismiss-banner data-astro-cid-woj6bprr> <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-woj6bprr> <path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z" fill="currentColor" data-astro-cid-woj6bprr></path> </svg> </button>`} </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Banner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Banner.astro", void 0);

const $$Astro$8 = createAstro("https://dolphilia.github.io");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { type = "draft" } = Astro2.props;
  const typeConfig = {
    draft: {
      label: "\u4E0B\u66F8\u304D",
      color: "orange"
    },
    deprecated: {
      label: "\u975E\u63A8\u5968",
      color: "red"
    },
    wip: {
      label: "\u4F5C\u696D\u4E2D",
      color: "blue"
    },
    translation: {
      label: "\u7FFB\u8A33\u4E2D",
      color: "purple"
    }
  };
  const config = typeConfig[type];
  return renderTemplate`${maybeRenderHead()}<div class="starlight-aside starlight-aside--notice"${addAttribute(type, "data-type")} data-astro-cid-vwh4f2k5> <div class="starlight-aside__title" data-astro-cid-vwh4f2k5> <span class="starlight-aside__icon" data-astro-cid-vwh4f2k5> ${type === "draft" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-vwh4f2k5> <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" fill="currentColor" data-astro-cid-vwh4f2k5></path> </svg>`} ${type === "deprecated" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-vwh4f2k5> <path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z" fill="currentColor" data-astro-cid-vwh4f2k5></path> </svg>`} ${type === "wip" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-vwh4f2k5> <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor" data-astro-cid-vwh4f2k5></path> </svg>`} ${type === "translation" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-vwh4f2k5> <path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd" fill="currentColor" data-astro-cid-vwh4f2k5></path> </svg>`} </span> <span data-astro-cid-vwh4f2k5>${config.label}</span> </div> <div class="starlight-aside__content" data-astro-cid-vwh4f2k5> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ContentNotice.astro", void 0);

const $$Astro$7 = createAstro("https://dolphilia.github.io");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, tagline, image, actions = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-3piqs2o6> ${image && renderTemplate`<div class="hero-image" data-astro-cid-3piqs2o6> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="400" height="400" loading="eager" decoding="async" data-astro-cid-3piqs2o6> </div>`} <div class="hero-content" data-astro-cid-3piqs2o6> <div class="hero-text" data-astro-cid-3piqs2o6> <h1 id="page-title" data-astro-cid-3piqs2o6>${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="hero-tagline" data-astro-cid-3piqs2o6>${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="hero-actions" data-astro-cid-3piqs2o6> ${actions.map(({ text, link, variant = "primary", icon }) => renderTemplate`<a${addAttribute(link, "href")}${addAttribute(`hero-action hero-action-${variant}`, "class")} data-astro-cid-3piqs2o6> <span data-astro-cid-3piqs2o6>${text}</span> ${icon && renderTemplate`<span class="hero-action-icon" aria-hidden="true" data-astro-cid-3piqs2o6> <span class="icon" data-astro-cid-3piqs2o6>${icon}</span> </span>`} </a>`)} </div>`} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Hero.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-34jcewsu": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="theme-toggle" type="button" aria-label="テーマを切り替える" data-astro-cid-34jcewsu> <span class="theme-toggle-icon" data-astro-cid-34jcewsu> <!-- 太陽アイコン（ライトモード用） --> <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-34jcewsu> <circle cx="12" cy="12" r="5" data-astro-cid-34jcewsu></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-34jcewsu></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-34jcewsu></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-34jcewsu></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-34jcewsu></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-34jcewsu></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-34jcewsu></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-34jcewsu></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-34jcewsu></line> </svg> <!-- 月アイコン（ダークモード用） --> <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-34jcewsu> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-34jcewsu></path> </svg> </span> </button> ` })}  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ThemeToggle.astro", void 0);

const $$Astro$6 = createAstro("https://dolphilia.github.io");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  const { leftWidth = "50%", gap = "1rem" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="two-column-content"${addAttribute(`--left-width: ${leftWidth}; --column-gap: ${gap};`, "style")} data-astro-cid-ava4ouzk> <div class="left-column" data-astro-cid-ava4ouzk> ${renderSlot($$result, $$slots["left"])} </div> <div class="right-column" data-astro-cid-ava4ouzk> ${renderSlot($$result, $$slots["right"])} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TwoColumnContent.astro", void 0);

const $$Astro$5 = createAstro("https://dolphilia.github.io");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, href, icon, class: className, ...rest } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "variant": "link", "href": href, "title": title, "icon": icon, "class:list": ["link-card", className], ...rest, "data-astro-cid-f2kkmdj7": true }, { "default": ($$result2) => renderTemplate`${description && renderTemplate`${maybeRenderHead()}<p class="link-card-description" data-astro-cid-f2kkmdj7>${description}</p>`}` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/LinkCard.astro", void 0);

const $$Astro$4 = createAstro("https://dolphilia.github.io");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { class: className, stagger = false, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card-grid", stagger && "stagger", className], "class:list")}${spreadAttributes(attrs)} data-astro-cid-h53xvnyp> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/CardGrid.astro", void 0);

let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
function processPanels(html) {
  const panels = [];
  const regex = /<docs-tab-item[^>]*?data-label="([^"]*)"[^>]*?(?:data-icon="([^"]*)")?[^>]*?>([\s\S]*?)<\/docs-tab-item>/g;
  const iconRegex = /data-icon="([^"]*)"/;
  let match;
  let isFirst = true;
  let processedHtml = html;
  while ((match = regex.exec(html)) !== null) {
    const fullMatch = match[0];
    const label = match[1];
    let icon = match[2] || void 0;
    const content = match[3];
    if (!icon) {
      const iconMatch = fullMatch.match(iconRegex);
      if (iconMatch && iconMatch[1]) {
        icon = iconMatch[1];
      }
    }
    const ids = getIDs();
    const panel = {
      ...ids,
      label
    };
    if (icon) {
      panel.icon = icon;
    }
    panels.push(panel);
    const hiddenAttr = isFirst ? "" : "hidden";
    const replacement = `<div id="${ids.panelId}" aria-labelledby="${ids.tabId}" role="tabpanel" ${hiddenAttr}>${content}</div>`;
    processedHtml = processedHtml.replace(fullMatch, replacement);
    isFirst = false;
  }
  return {
    panels,
    html: processedHtml
  };
}
function getTabsScript() {
  return `
  document.addEventListener('DOMContentLoaded', () => {
    class DocsTabs extends HTMLElement {
      // 同期キーごとのタブグループを追跡するマップ
      static syncedTabs = new Map();

      constructor() {
        super();
        const tablist = this.querySelector('[role="tablist"]');
        if (!tablist) return;
        
        this.tabs = [...tablist.querySelectorAll('[role="tab"]')];
        this.panels = [...this.querySelectorAll(':scope > [role="tabpanel"]')];
        this.syncKey = this.dataset.syncKey;

        // 同期キーが指定されている場合、同期タブのマップに追加
        if (this.syncKey) {
          const syncedTabs = DocsTabs.syncedTabs.get(this.syncKey) || [];
          syncedTabs.push(this);
          DocsTabs.syncedTabs.set(this.syncKey, syncedTabs);
        }

        // タブにイベントリスナーを追加
        this.tabs.forEach((tab, i) => {
          // クリックイベント
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTab = tablist.querySelector('[aria-selected="true"]');
            if (e.currentTarget !== currentTab) {
              this.switchTab(e.currentTarget, i);
            }
          });

          // キーボードイベント - Starlightスタイルのキーボードナビゲーション
          tab.addEventListener('keydown', (e) => {
            const index = this.tabs.indexOf(e.currentTarget);
            // ユーザーが押したキーに基づいて新しいタブのインデックスを計算
            const nextIndex =
              e.key === 'ArrowLeft'
                ? index - 1
                : e.key === 'ArrowRight'
                  ? index + 1
                  : e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                      ? this.tabs.length - 1
                      : null;
            if (nextIndex === null) return;
            if (this.tabs[nextIndex]) {
              e.preventDefault();
              this.switchTab(this.tabs[nextIndex], nextIndex);
            }
          });
        });

        // ローカルストレージから同期タブの状態を復元
        if (this.syncKey && typeof localStorage !== 'undefined') {
          const storedLabel = localStorage.getItem('docs-synced-tabs__' + this.syncKey);
          if (storedLabel) {
            const tabIndex = this.tabs.findIndex(tab => tab.textContent.trim() === storedLabel);
            if (tabIndex > 0) { // 最初のタブ以外の場合のみ切り替え
              this.switchTab(this.tabs[tabIndex], tabIndex, false);
            }
          }
        }
      }

      switchTab(newTab, index, shouldSync = true) {
        if (!newTab) return;

        // タブ切り替え前のスクロール位置を保存
        const previousTabsOffset = shouldSync ? this.getBoundingClientRect().top : 0;

        // すべてのタブを非アクティブにし、すべてのパネルを非表示にする
        this.tabs.forEach((tab) => {
          tab.setAttribute('aria-selected', 'false');
          tab.setAttribute('tabindex', '-1');
        });
        this.panels.forEach((oldPanel) => {
          oldPanel.hidden = true;
        });

        // 新しいタブとパネルをアクティブにする
        const newPanel = this.panels[index];
        if (newPanel) newPanel.hidden = false;
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        
        if (shouldSync) {
          newTab.focus();
          this.syncTabs(newTab);
          
          // スクロール位置を調整して、タブ切り替え後も同じ位置に表示されるようにする
          window.scrollTo({
            top: window.scrollY + (this.getBoundingClientRect().top - previousTabsOffset),
            behavior: 'instant'
          });
        }
      }

      // 同期キーを持つすべてのタブグループ間でタブを同期
      syncTabs(newTab) {
        if (!this.syncKey) return;
        const label = newTab.textContent.trim();
        const syncedTabs = DocsTabs.syncedTabs.get(this.syncKey);
        if (!syncedTabs) return;

        // 同じ同期キーを持つ他のタブグループも同期
        for (const receiver of syncedTabs) {
          if (receiver === this) continue;
          const labelIndex = receiver.tabs.findIndex((tab) => tab.textContent.trim() === label);
          if (labelIndex === -1) continue;
          receiver.switchTab(receiver.tabs[labelIndex], labelIndex, false);
        }

        // 選択されたタブをローカルストレージに保存
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('docs-synced-tabs__' + this.syncKey, label);
        }
      }
    }

    // カスタム要素として登録
    customElements.define('docs-tabs', DocsTabs);
    
    // 既存のタブを初期化
    document.querySelectorAll('docs-tabs').forEach(tabs => {
      // すでに初期化されている場合は何もしない
      if (tabs._initialized) return;
      tabs._initialized = true;
    });
  });
  `;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://dolphilia.github.io");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { class: className, syncKey, ...attrs } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  const didRenderTabsScriptSymbol = Symbol.for("docs:did-render-tabs-script");
  const shouldRenderTabsScript = Astro2.locals[didRenderTabsScriptSymbol] !== true;
  if (shouldRenderTabsScript) {
    Astro2.locals[didRenderTabsScriptSymbol] = true;
  }
  return renderTemplate`${shouldRenderTabsScript && renderTemplate(_a || (_a = __template(["<script>", "<\/script>"])), unescapeHTML(getTabsScript()))}${renderComponent($$result, "docs-tabs", "docs-tabs", { "class:list": ["tabs", className], "data-sync-key": syncKey, ...attrs, "data-astro-cid-fv5wxlmv": true }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content" data-astro-cid-fv5wxlmv> <ul role="tablist" data-astro-cid-fv5wxlmv> ${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab" data-astro-cid-fv5wxlmv> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} data-astro-cid-fv5wxlmv> ${icon && renderTemplate`<span class="tab-icon" data-astro-cid-fv5wxlmv>${unescapeHTML(icon)}</span>`} ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Tabs/Tabs.astro", void 0);

const $$Astro$2 = createAstro("https://dolphilia.github.io");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    label,
    icon,
    class: className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "docs-tab-item", "docs-tab-item", { "data-label": label, "data-icon": icon, "class:list": ["tab-item", className], ...attrs, "data-astro-cid-5i6kcy5t": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Tabs/TabItem.astro", void 0);

const common$1 = {"home":"Home","search":"Search","menu":"Menu","close":"Close","back":"Back","next":"Next","previous":"Previous","loading":"Loading...","error":"Error","success":"Success","warning":"Warning","info":"Information"};
const navigation$1 = {"docs":"Documentation","api":"API","examples":"Examples","blog":"Blog","community":"Community","github":"GitHub"};
const footer$1 = {"copyright":"© {year} All rights reserved.","terms":"Terms of Service","privacy":"Privacy Policy","contact":"Contact Us"};
const docs$1 = {"onThisPage":"On this page","editThisPage":"Edit this page","lastUpdated":"Last updated on {date}","version":"Version","versions":"Versions","language":"Language","languages":"Languages","toc":"Table of Contents","documentation":"Documentation","guide":"Guide","getting_started":"Getting Started","installation":"Installation","configuration":"Configuration","overview":"Overview","reference":"Reference","latest":"Latest","showLatest":"Show latest version","showDiff":"Show version differences"};
const search$1 = {"placeholder":"Search documentation...","noResults":"No results found for '{query}'","oneResult":"1 result for '{query}'","manyResults":"{count} results for '{query}'","searchResults":"Search Results","searchIn":"Search in","searching":"Searching...","closeSearch":"Close","error":"Search error","label":"Search","ctrlKey":"Ctrl"};
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
const search = {"placeholder":"ドキュメントを検索...","noResults":"'{query}'に一致する結果が見つかりませんでした","oneResult":"'{query}'の検索結果: 1件","manyResults":"'{query}'の検索結果: {count}件","searchResults":"検索結果","searchIn":"検索対象","searching":"検索中...","closeSearch":"閉じる","error":"検索エラー","label":"検索","ctrlKey":"Ctrl"};
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
  const {
    title,
    lang,
    version = "v1",
    hasSidebar = false,
    hasToc = false
  } = Astro2.props;
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
  const htmlDataAttributes = { "data-theme": "dark" };
  if (hasToc) htmlDataAttributes["data-has-toc"] = "";
  if (hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  return renderTemplate`<html${addAttribute(lang, "lang")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-ouamjn2i" })} data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${BASE_URL}/favicon.svg`, "href")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Documentation site built with Astro"><title>${title} | Docs</title>${renderHead()}</head> <body data-astro-cid-ouamjn2i> <div class="page sl-flex" data-astro-cid-ouamjn2i> <header class="header" data-astro-cid-ouamjn2i> <div class="header-container" data-astro-cid-ouamjn2i> <div class="header-content" data-astro-cid-ouamjn2i> <div class="title-wrapper sl-flex" data-astro-cid-ouamjn2i> <a${addAttribute(`${BASE_URL}/${lang}`, "href")} class="site-title" data-astro-cid-ouamjn2i>Docs Astro</a> </div> <div class="sl-flex print:hidden" data-astro-cid-ouamjn2i> <!-- 検索コンポーネントがここに入る予定 --> </div> <div class="sl-hidden md:sl-flex print:hidden right-group" data-astro-cid-ouamjn2i> <div aria-label="言語選択" data-astro-cid-ouamjn2i> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "currentLang": lang, "data-astro-cid-ouamjn2i": true })} </div> <nav aria-label="メインナビゲーション" data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navigation", $$Navigation, { "items": navItems, "data-astro-cid-ouamjn2i": true })} </nav> </div> </div> </div> </header> <div class="main-frame" data-astro-cid-ouamjn2i> <main id="main-content" data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "linkGroups": linkGroups, "copyright": `\xA9 ${currentYear} Docs Astro. All rights reserved.`, "data-astro-cid-ouamjn2i": true })} </div> </body></html>`;
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

export { $$Icon as $, $$Tabs as a, $$TabItem as b, $$MainLayout as c, $$Card as d, $$Button as e, $$Sidebar as f, $$TableOfContents as g, $$Pagination as h, $$EditLink as i, t, versions as v };
