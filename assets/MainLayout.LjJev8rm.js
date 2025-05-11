import { a as createAstro, b as createComponent, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, j as renderSlot, u as unescapeHTML, d as renderTemplate, r as renderComponent, J as defineStyleVars, F as Fragment, e as renderScript, K as defineScriptVars, O as renderHead } from './astro/server.s15Ed_2b.js';
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
/* empty css                                                                 */
/* empty css                                                                      */
/* empty css                                                               */
/* empty css                                                                   */
/* empty css                                                             */
/* empty css                                                                 */
/* empty css                         */

const $$Astro$y = createAstro("https://dolphilia.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
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

const $$Astro$x = createAstro("https://dolphilia.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
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
  // シェブロンアイコン（サイドバーの折りたたみ用）
  "chevron": '<path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
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

const $$Astro$w = createAstro("https://dolphilia.github.io");
const $$Icon$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Icon$1;
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

const $$Astro$v = createAstro("https://dolphilia.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    items,
    siteTitle = "Docs Astro",
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
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["header", className, { "header-sticky": sticky, "header-with-scroll": changeOnScroll }], "class:list")} data-astro-cid-pclxhes2> <div class="header-container" data-astro-cid-pclxhes2> <div class="header-content" data-astro-cid-pclxhes2> <div class="site-title-wrapper" data-astro-cid-pclxhes2> <a href="/" class="site-title" data-astro-cid-pclxhes2> ${logoUrl && renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(siteTitle, "alt")} class="site-logo" data-astro-cid-pclxhes2>`} <span data-astro-cid-pclxhes2>${siteTitle}</span> </a> </div> <nav class="navigation" aria-label="メインナビゲーション" data-astro-cid-pclxhes2> <div class="nav-items" data-astro-cid-pclxhes2> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-pclxhes2> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon$1, { "name": item.icon, "data-astro-cid-pclxhes2": true })}`} <span data-astro-cid-pclxhes2>${item.title}</span> </a>`)} </div> </nav> <div class="header-actions" data-astro-cid-pclxhes2>   <div class="header-right" data-astro-cid-pclxhes2> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-pclxhes2> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon$1, { "name": icon, "data-astro-cid-pclxhes2": true })} </a>`)} </div>`} ${showThemeToggle && renderTemplate`${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-pclxhes2": true })}`} </div> ${renderComponent($$result, "docs-menu-button", "docs-menu-button", { "data-astro-cid-pclxhes2": true }, { "default": () => renderTemplate` <button type="button" aria-expanded="false" aria-label="モバイルメニューを切り替え" aria-controls="mobile-menu" class="menu-toggle-button" data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "bars", "class": "open-icon", "data-astro-cid-pclxhes2": true })} ${renderComponent($$result, "Icon", $$Icon$1, { "name": "close", "class": "close-icon", "data-astro-cid-pclxhes2": true })} </button> ` })} </div> </div> </div> </header> <!-- モバイルメニュー --> <div class="mobile-menu" id="mobile-menu" data-astro-cid-pclxhes2> <div class="mobile-menu-content" data-astro-cid-pclxhes2>   <ul class="mobile-nav-items" data-astro-cid-pclxhes2> ${items.map((item) => renderTemplate`<li data-astro-cid-pclxhes2> <a${addAttribute(item.href, "href")}${addAttribute(["mobile-nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-pclxhes2> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon$1, { "name": item.icon, "data-astro-cid-pclxhes2": true })}`} <span data-astro-cid-pclxhes2>${item.title}</span> </a> </li>`)} </ul> ${socialLinks.length > 0 && renderTemplate`<div class="mobile-social-links" data-astro-cid-pclxhes2> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="mobile-social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-pclxhes2> ${renderComponent($$result, "Icon", $$Icon$1, { "name": icon, "data-astro-cid-pclxhes2": true })} <span data-astro-cid-pclxhes2>${label}</span> </a>`)} </div>`} </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Navigation.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$u = createAstro("https://dolphilia.github.io");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const { hash = "sidebar-hash" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "data-astro-cid-6ye3nkeq": true }, { "default": () => renderTemplate(_a$3 || (_a$3 = __template$3([` <script aria-hidden="true">
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

const $$Astro$t = createAstro("https://dolphilia.github.io");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
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

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$s = createAstro("https://dolphilia.github.io");
const $$SidebarResizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SidebarResizer;
  const {
    minWidth = 200,
    maxWidth = 400,
    initialWidth = 280,
    collapsedWidth = 50,
    storageKey = "sidebar-width"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ minWidth, maxWidth, initialWidth, collapsedWidth }]);
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-osrdoibr', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-osrdoibr', '> <div class="handle-line" data-astro-cid-osrdoibr', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-osrdoibr', '> <span class="collapse-icon" data-astro-cid-osrdoibr', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(`${storageKey}-collapsed`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = `${sidebarWidth}px`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = `${newWidth}px`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(`${storageKey}-collapsed`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(`${storageKey}-width-before-collapse`)) {\n        localStorage.setItem(`${storageKey}-width-before-collapse`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = `${collapsedWidth}px`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(`${storageKey}-width-before-collapse`) || initialWidth;\n      sidebar.style.width = `${widthBeforeCollapse}px`;\n      localStorage.removeItem(`${storageKey}-width-before-collapse`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(`${storageKey}-collapsed`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"], ["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-osrdoibr', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-osrdoibr', '> <div class="handle-line" data-astro-cid-osrdoibr', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-osrdoibr', '> <span class="collapse-icon" data-astro-cid-osrdoibr', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(\\`\\${storageKey}-collapsed\\`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = \\`\\${sidebarWidth}px\\`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = \\`\\${newWidth}px\\`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(\\`\\${storageKey}-collapsed\\`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`)) {\n        localStorage.setItem(\\`\\${storageKey}-width-before-collapse\\`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = \\`\\${collapsedWidth}px\\`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`) || initialWidth;\n      sidebar.style.width = \\`\\${widthBeforeCollapse}px\\`;\n      localStorage.removeItem(\\`\\${storageKey}-width-before-collapse\\`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(\\`\\${storageKey}-collapsed\\`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), defineScriptVars({ minWidth, maxWidth, initialWidth, collapsedWidth, storageKey }));
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/SidebarResizer.astro", void 0);

const $$Astro$r = createAstro("https://dolphilia.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["sidebar", className], "class:list")} role="complementary"${addAttribute(title || "\u30B5\u30A4\u30C9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", "aria-label")} id="sidebar" style="position: relative;" data-astro-cid-7hrmydxt> ${renderComponent($$result, "SidebarResizer", $$SidebarResizer, { "data-astro-cid-7hrmydxt": true })} ${title && renderTemplate`<h3 class="sidebar-title" id="sidebar-title" data-astro-cid-7hrmydxt> ${title} </h3>`} <nav aria-labelledby="sidebar-title" data-astro-cid-7hrmydxt> ${renderComponent($$result, "SidebarPersister", $$SidebarPersister, { "hash": sidebarHash, "data-astro-cid-7hrmydxt": true }, { "default": ($$result2) => renderTemplate` <ul class="top-level" data-astro-cid-7hrmydxt> ${items.map((section) => renderTemplate`<li data-astro-cid-7hrmydxt> ${section.href ? renderTemplate`<a${addAttribute(section.href, "href")}${addAttribute(isCurrentPage(section) ? "page" : void 0, "aria-current")}${addAttribute(["large", { active: isCurrentPage(section) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${section.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(section), "open")} data-astro-cid-7hrmydxt> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-7hrmydxt": true })} <summary data-astro-cid-7hrmydxt> <div class="group-label" data-astro-cid-7hrmydxt> <span class="large" data-astro-cid-7hrmydxt>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${section.badge.text} </span>`} </div> <span class="caret-container" data-astro-cid-7hrmydxt> <span class="caret-wrapper" data-astro-cid-7hrmydxt> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "chevron", "size": "1.25rem", "data-astro-cid-7hrmydxt": true })} </span> </span> </summary> ${section.items && renderTemplate`<ul data-astro-cid-7hrmydxt> ${section.items.map((item) => renderTemplate`<li data-astro-cid-7hrmydxt> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(item) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${item.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(item), "open")} data-astro-cid-7hrmydxt> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-7hrmydxt": true })} <summary data-astro-cid-7hrmydxt> <div class="group-label" data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${item.badge.text} </span>`} </div> <span class="caret-container" data-astro-cid-7hrmydxt> <span class="caret-wrapper" data-astro-cid-7hrmydxt> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "chevron", "size": "1rem", "data-astro-cid-7hrmydxt": true })} </span> </span> </summary> ${item.items && renderTemplate`<ul data-astro-cid-7hrmydxt> ${item.items.map((subItem) => renderTemplate`<li data-astro-cid-7hrmydxt> <a${addAttribute(subItem.href, "href")}${addAttribute(isCurrentPage(subItem) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(subItem) }], "class:list")} data-astro-cid-7hrmydxt> <span data-astro-cid-7hrmydxt>${subItem.title}</span> ${subItem.badge && renderTemplate`<span${addAttribute(["badge", subItem.badge.variant || "default", subItem.badge.class], "class:list")} data-astro-cid-7hrmydxt> ${subItem.badge.text} </span>`} </a> </li>`)} </ul>`} </details>`} </li>`)} </ul>`} </details>`} </li>`)} </ul> ` })} </nav> </aside>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Sidebar.astro", void 0);

const $$Astro$q = createAstro("https://dolphilia.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["footer", className, { "footer-sticky": sticky }], "class:list")} data-astro-cid-v2payc3g> <div class="footer-container" data-astro-cid-v2payc3g> <div class="footer-content" data-astro-cid-v2payc3g> ${showPagination && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { "prev": prevPage, "next": nextPage, "data-astro-cid-v2payc3g": true })}`} ${linkGroups.length > 0 && renderTemplate`<div class="footer-links" data-astro-cid-v2payc3g> ${linkGroups.map((group) => renderTemplate`<div class="footer-group" data-astro-cid-v2payc3g> <h3 class="group-title" data-astro-cid-v2payc3g>${group.title}</h3> <ul class="group-links" data-astro-cid-v2payc3g> ${group.links.map((link) => renderTemplate`<li data-astro-cid-v2payc3g> <a${addAttribute(link.href, "href")}${addAttribute(link.target, "target")}${addAttribute(link.rel, "rel")} class="footer-link" data-astro-cid-v2payc3g> ${link.title} </a> </li>`)} </ul> </div>`)} </div>`} <div class="footer-bottom" data-astro-cid-v2payc3g> <div class="footer-meta" data-astro-cid-v2payc3g> ${showEditLink && renderTemplate`${renderComponent($$result, "EditLink", $$EditLink, { "url": editUrl, "data-astro-cid-v2payc3g": true })}`} ${copyright && renderTemplate`<p class="copyright" data-astro-cid-v2payc3g>${copyright}</p>`} </div> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-v2payc3g> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-v2payc3g> ${renderComponent($$result, "Icon", $$Icon$1, { "name": icon, "data-astro-cid-v2payc3g": true })} </a>`)} </div>`} </div> </div> </div> </footer> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Footer.astro", void 0);

const $$Astro$p = createAstro("https://dolphilia.github.io");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
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

const $$Astro$o = createAstro("https://dolphilia.github.io");
const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
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

const $$Astro$n = createAstro("https://dolphilia.github.io");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, depth = 0, isMobile = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["starlight-toc__list", { "starlight-toc__list--mobile": isMobile }], "class:list")} data-astro-cid-athkbvwp> ${toc.map((heading) => renderTemplate`<li class="starlight-toc__item" data-astro-cid-athkbvwp> <a class="starlight-toc__link"${addAttribute("#" + heading.slug, "href")}${addAttribute(depth, "data-depth")} data-astro-cid-athkbvwp> <span data-astro-cid-athkbvwp>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "data-astro-cid-athkbvwp": true })}`} </li>`)} </ul> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$m = createAstro("https://dolphilia.github.io");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
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

const $$Astro$l = createAstro("https://dolphilia.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prev, next, dir = "ltr" } = Astro2.props;
  const isRtl = dir === "rtl";
  const prevText = "\u524D\u306E\u30DA\u30FC\u30B8";
  const nextText = "\u6B21\u306E\u30DA\u30FC\u30B8";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links"${addAttribute(dir, "dir")} data-astro-cid-2vx2ddwg> ${prev && renderTemplate`<a${addAttribute(prev.url, "href")} rel="prev" data-astro-cid-2vx2ddwg> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-2vx2ddwg> <path fill="currentColor"${addAttribute(isRtl ? "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z" : "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z", "d")} data-astro-cid-2vx2ddwg></path> </svg> <span data-astro-cid-2vx2ddwg> ${prevText} <br data-astro-cid-2vx2ddwg> <span class="link-title" data-astro-cid-2vx2ddwg>${prev.title}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.url, "href")} rel="next" data-astro-cid-2vx2ddwg> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-2vx2ddwg> <path fill="currentColor"${addAttribute(isRtl ? "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z" : "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z", "d")} data-astro-cid-2vx2ddwg></path> </svg> <span data-astro-cid-2vx2ddwg> ${nextText} <br data-astro-cid-2vx2ddwg> <span class="link-title" data-astro-cid-2vx2ddwg>${next.title}</span> </span> </a>`} </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Pagination.astro", void 0);

const $$Astro$k = createAstro("https://dolphilia.github.io");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$EditLink;
  const {
    url,
    text = "GitHub\u3067\u7DE8\u96C6",
    showIcon = true
  } = Astro2.props;
  return renderTemplate`${url && renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="edit-link" data-astro-cid-or7fkga6>${showIcon && renderTemplate`<svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" data-astro-cid-or7fkga6><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" data-astro-cid-or7fkga6></path></svg>`}${text}</a>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/EditLink.astro", void 0);

const $$Astro$j = createAstro("https://dolphilia.github.io");
const $$AnchorHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AnchorHeading;
  const { level, id, class: className } = Astro2.props;
  if (!id) {
    throw new Error("Missing `id` attribute passed to `<AnchorHeading>` component");
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`heading-wrapper level-h${level}`, "class")} data-astro-cid-avvu5fbz> ${level === 1 && renderTemplate`<h1${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h1>`} ${level === 2 && renderTemplate`<h2${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h2>`} ${level === 3 && renderTemplate`<h3${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h3>`} ${level === 4 && renderTemplate`<h4${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h4>`} ${level === 5 && renderTemplate`<h5${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h5>`} ${level === 6 && renderTemplate`<h6${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-avvu5fbz>${renderSlot($$result, $$slots["default"])}</h6>`} <a class="anchor-link"${addAttribute(`#${id}`, "href")} data-astro-cid-avvu5fbz> <span aria-hidden="true" class="anchor-icon" data-astro-cid-avvu5fbz> <svg width="16" height="16" viewBox="0 0 24 24" data-astro-cid-avvu5fbz> <path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z" data-astro-cid-avvu5fbz></path> </svg> </span> <span class="sr-only" data-astro-cid-avvu5fbz>このセクションへのリンク</span> </a> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/AnchorHeading.astro", void 0);

const $$Astro$i = createAstro("https://dolphilia.github.io");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Banner;
  const { type = "info", dismissible = false } = Astro2.props;
  const bannerClass = `sl-banner sl-banner-${type}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(bannerClass, "class")} role="alert" data-astro-cid-woj6bprr> <div class="sl-banner-container" data-astro-cid-woj6bprr> <div class="sl-banner-content" data-astro-cid-woj6bprr> ${renderSlot($$result, $$slots["default"])} </div> ${dismissible && renderTemplate`<button class="sl-banner-close-button" aria-label="閉じる" data-dismiss-banner data-astro-cid-woj6bprr> <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-woj6bprr> <path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z" fill="currentColor" data-astro-cid-woj6bprr></path> </svg> </button>`} </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Banner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Banner.astro", void 0);

const $$Astro$h = createAstro("https://dolphilia.github.io");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
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

const $$Astro$g = createAstro("https://dolphilia.github.io");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, tagline, image, actions = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-3piqs2o6> ${image && renderTemplate`<div class="hero-image" data-astro-cid-3piqs2o6> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="400" height="400" loading="eager" decoding="async" data-astro-cid-3piqs2o6> </div>`} <div class="hero-content" data-astro-cid-3piqs2o6> <div class="hero-text" data-astro-cid-3piqs2o6> <h1 id="page-title" data-astro-cid-3piqs2o6>${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="hero-tagline" data-astro-cid-3piqs2o6>${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="hero-actions" data-astro-cid-3piqs2o6> ${actions.map(({ text, link, variant = "primary", icon }) => renderTemplate`<a${addAttribute(link, "href")}${addAttribute(`hero-action hero-action-${variant}`, "class")} data-astro-cid-3piqs2o6> <span data-astro-cid-3piqs2o6>${text}</span> ${icon && renderTemplate`<span class="hero-action-icon" aria-hidden="true" data-astro-cid-3piqs2o6> <span class="icon" data-astro-cid-3piqs2o6>${icon}</span> </span>`} </a>`)} </div>`} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Hero.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-34jcewsu": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="theme-toggle" type="button" aria-label="テーマを切り替える" data-astro-cid-34jcewsu> <span class="theme-toggle-icon" data-astro-cid-34jcewsu> <!-- 太陽アイコン（ライトモード用） --> <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-34jcewsu> <circle cx="12" cy="12" r="5" data-astro-cid-34jcewsu></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-34jcewsu></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-34jcewsu></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-34jcewsu></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-34jcewsu></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-34jcewsu></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-34jcewsu></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-34jcewsu></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-34jcewsu></line> </svg> <!-- 月アイコン（ダークモード用） --> <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-34jcewsu> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-34jcewsu></path> </svg> </span> </button> ` })}  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/ThemeToggle.astro", void 0);

const $$Astro$f = createAstro("https://dolphilia.github.io");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  const { leftWidth = "50%", gap = "1rem" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="two-column-content"${addAttribute(`--left-width: ${leftWidth}; --column-gap: ${gap};`, "style")} data-astro-cid-ava4ouzk> <div class="left-column" data-astro-cid-ava4ouzk> ${renderSlot($$result, $$slots["left"])} </div> <div class="right-column" data-astro-cid-ava4ouzk> ${renderSlot($$result, $$slots["right"])} </div> </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/TwoColumnContent.astro", void 0);

const $$Astro$e = createAstro("https://dolphilia.github.io");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, href, icon, class: className, ...rest } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "variant": "link", "href": href, "title": title, "icon": icon, "class:list": ["link-card", className], ...rest, "data-astro-cid-f2kkmdj7": true }, { "default": ($$result2) => renderTemplate`${description && renderTemplate`${maybeRenderHead()}<p class="link-card-description" data-astro-cid-f2kkmdj7>${description}</p>`}` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/LinkCard.astro", void 0);

const $$Astro$d = createAstro("https://dolphilia.github.io");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$c = createAstro("https://dolphilia.github.io");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { class: className, syncKey, ...attrs } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  const didRenderTabsScriptSymbol = Symbol.for("docs:did-render-tabs-script");
  const shouldRenderTabsScript = Astro2.locals[didRenderTabsScriptSymbol] !== true;
  if (shouldRenderTabsScript) {
    Astro2.locals[didRenderTabsScriptSymbol] = true;
  }
  return renderTemplate`${shouldRenderTabsScript && renderTemplate(_a$1 || (_a$1 = __template$1(["<script>", "<\/script>"])), unescapeHTML(getTabsScript()))}${renderComponent($$result, "docs-tabs", "docs-tabs", { "class:list": ["tabs", className], "data-sync-key": syncKey, ...attrs, "data-astro-cid-fv5wxlmv": true }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content" data-astro-cid-fv5wxlmv> <ul role="tablist" data-astro-cid-fv5wxlmv> ${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab" data-astro-cid-fv5wxlmv> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} data-astro-cid-fv5wxlmv> ${icon && renderTemplate`<span class="tab-icon" data-astro-cid-fv5wxlmv>${unescapeHTML(icon)}</span>`} ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Tabs/Tabs.astro", void 0);

const $$Astro$b = createAstro("https://dolphilia.github.io");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    label,
    icon,
    class: className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "docs-tab-item", "docs-tab-item", { "data-label": label, "data-icon": icon, "class:list": ["tab-item", className], ...attrs, "data-astro-cid-5i6kcy5t": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Tabs/TabItem.astro", void 0);

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$a = createAstro("https://dolphilia.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/runner/work/docs-astro/docs-astro/node_modules/.pnpm/@lucide+astro@0.509.0_astro@3.6.5/node_modules/@lucide/astro/src/Icon.astro", void 0);

const $$Astro$9 = createAstro("https://dolphilia.github.io");
const $$LucideIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LucideIcon;
  const {
    name,
    size = "1em",
    color = "currentColor",
    label,
    class: className = "",
    strokeWidth = 2
  } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "icon-size": size }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`lucide-icon-wrapper ${className}`, "class")}${spreadAttributes(a11yAttrs)} data-astro-cid-p6eb5r3n${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "LucideIconBase", $$Icon, { "name": name, "size": size, "color": color, "stroke-width": strokeWidth, "data-astro-cid-p6eb5r3n": true })} </div> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/icons/LucideIcon.astro", void 0);

/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

const noop = () => {};
let _WINDOW = {};
let _DOCUMENT = {};
let _MUTATION_OBSERVER = null;
let _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}
const {
  userAgent = ''
} = _WINDOW.navigator || {};
const WINDOW = _WINDOW;
const DOCUMENT = _DOCUMENT;
const MUTATION_OBSERVER = _MUTATION_OBSERVER;
const PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    }
  },
  A = {
    GROUP: "duotone-group",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var s = "classic",
  t$1 = "duotone",
  r = "sharp",
  o = "sharp-duotone",
  L = [s, t$1, r, o];
var G = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    duotone: {
      900: "fad",
      400: "fadr",
      300: "fadl",
      100: "fadt"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds",
      400: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
var lt = {
    "Font Awesome 6 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 6 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt"
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
var pt = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }]]),
  xt = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab"
    },
    duotone: {
      solid: "fad",
      regular: "fadr",
      light: "fadl",
      thin: "fadt"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt"
    }
  };
var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  St = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  },
  At = ["kit"];
var Ct = {
  kit: {
    "fa-kit": "fak"
  }};
var Lt = ["fak", "fakd"],
  Wt = {
    kit: {
      fak: "fa-kit"
    }};
var Et = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

var t$1$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var Yt = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  };
var ua = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    }
  },
  I$1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
  },
  ga = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    }
  },
  x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"],
  Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x],
  m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1$1.GROUP, t$1$1.SWAP_OPACITY, t$1$1.PRIMARY, t$1$1.SECONDARY].concat(c$1.map(a => "".concat(a, "x"))).concat(F$1.map(a => "w-".concat(a)));
var wa = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };

const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
const UNITS_IN_GRID = 16;
const DEFAULT_CSS_PREFIX = 'fa';
const DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
const DATA_FA_I2SVG = 'data-fa-i2svg';
const DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
const DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
const DATA_PREFIX = 'data-prefix';
const DATA_ICON = 'data-icon';
const HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
const MUTATION_APPROACH_ASYNC = 'async';
const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
const PRODUCTION = (() => {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[s];
    }
  });
}
const _PREFIX_TO_STYLE = _objectSpread2({}, S);

// We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
// {'fa-duotone': 'duotone'}
_PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  'fa-duotone': 'duotone'
}), S[s]), St['kit']), St['kit-duotone']);
const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

// We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: 'fad'
}), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
familyProxy(_LONG_STYLE_TO_PREFIX);
const ICON_SELECTION_SYNTAX_PATTERN = p; // eslint-disable-line no-useless-escape

const LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
const FONT_FAMILY_PATTERN = g;
const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
familyProxy(_FONT_WEIGHT_TO_PREFIX);
const ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
const DUOTONE_CLASSES = A;
const RESERVED_CLASSES = [...At, ...ma];

const initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  const attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(_ref => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}
const _default = {
  styleDefault: 'solid',
  familyDefault: s,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

// familyPrefix is deprecated but we must still support it if present
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
const _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
const config = {};
Object.keys(_default).forEach(key => {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function (val) {
      _config[key] = val;
      _onChangeCb.forEach(cb => cb(config));
    },
    get: function () {
      return _config[key];
    }
  });
});

// familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function (val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(cb => cb(config));
  },
  get: function () {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
const _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

const d$2 = UNITS_IN_GRID;
const meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }
  const style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  const headChildren = DOCUMENT.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
const idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  let size = 12;
  let id = '';
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  const array = [];
  for (let i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(i => i);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = '';
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";

function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config.cssPrefix;
  const rc = config.replacementClass;
  let s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    const rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
let _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};

const w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

const functions = [];
const listener = function () {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(fn => fn());
};
let loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
    length = keys.length,
    iterator = fn,
    i,
    key,
    result;
  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon = icons[iconName];
    const expanded = !!icon.icon;
    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

const {
  styles,
  shims
} = namespace;
const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
let _defaultUsablePrefix = null;
let _byUnicode = {};
let _byLigature = {};
let _byOldName = {};
let _byOldUnicode = {};
let _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts = cls.split('-');
  const prefix = parts[0];
  const iconName = parts.slice(1).join('-');
  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
const build = () => {
  const lookup = reducer => {
    return reduce(styles, (o$$1, style, prefix) => {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup((acc, icon, iconName) => {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'number';
      });
      aliases.forEach(alias => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup((acc, icon, iconName) => {
    acc[iconName] = iconName;
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'string';
      });
      aliases.forEach(alias => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup((acc, icon, iconName) => {
    const aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(alias => {
      acc[alias] = iconName;
    });
    return acc;
  });

  // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.
  const hasRegular = 'far' in styles || config.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }
    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(c$$1 => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
const emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  let family = s;
  const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  L.forEach(familyId => {
    if (values.includes(famProps[familyId]) || values.some(v$$1 => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    family = s
  } = params;
  const style = PREFIX_TO_STYLE[family][styleOrPrefix];

  // handles the exception of passing in only a family of 'duotone' with no style
  if (family === t$1 && !styleOrPrefix) {
    return 'fad';
  }
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  let rest = [];
  let iconName = null;
  classNames.forEach(cls => {
    const result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  });
}
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  let givenPrefix = null;
  const faCombinedClasses = Ia.concat(bt$1);
  const faStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => faCombinedClasses.includes(cls)));
  const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => !Ia.includes(cls)));
  const faStyles = faStyleOrFamilyClasses.filter(cls => {
    givenPrefix = cls;
    return !P.includes(cls);
  });
  const [styleFromValues = null] = faStyles;
  const family = getFamilyId(faStyleOrFamilyClasses);
  const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles,
    config,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  let {
    prefix,
    iconName
  } = canonical;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  const shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
  const aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
    // Allow a fallback from the regular style to solid if regular is not available
    // but only if we aren't auto-fetching SVGs
    prefix = 'fas';
  }
  return {
    prefix,
    iconName
  };
}
const newCanonicalFamilies = L.filter(familyId => {
  return familyId !== s || familyId !== t$1;
});
const newCanonicalStyles = Object.keys(ga).filter(key => key !== s).map(key => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  const {
    values,
    family,
    canonical,
    givenPrefix = '',
    styles = {},
    config: config$$1 = {}
  } = prefixOptions;
  const isDuotoneFamily = family === t$1;
  const valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
  const defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
  const canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = 'fad';
  }
  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    const validPrefix = Object.keys(styles).find(key => newCanonicalStyles.includes(key));
    if (validPrefix || config$$1.autoFetchSvg) {
      const defaultPrefix = pt.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }
  return canonical;
}

class Library {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach(key => {
      this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);

      // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
      const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map(key => {
      const {
        prefix,
        iconName,
        icon
      } = normalized[key];
      const aliases = icon[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases.length > 0) {
        aliases.forEach(alias => {
          if (typeof alias === 'string') {
            additions[prefix][alias] = icon;
          }
        });
      }
      additions[prefix][iconName] = icon;
    });
    return additions;
  }
}

let _plugins = [];
let _hooks = {};
const providers = {};
const defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(k => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(plugin => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(tk => {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === 'object') {
        Object.keys(mixout[tk]).forEach(sk => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach(hook => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    accumulator = hookFn.apply(null, [accumulator, ...args]); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
const library = new Library();
const noAuto = () => {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
const dom = {
  i2svg: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject(new Error('Operation requires a DOM of some kind.'));
    }
  },
  watch: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
const parse = {
  icon: icon => {
    if (icon === null) {
      return null;
    }
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
      return {
        prefix: icon.prefix,
        iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
      };
    }
    if (Array.isArray(icon) && icon.length === 2) {
      const iconName = icon[1].indexOf('fa-') === 0 ? icon[1].slice(3) : icon[1];
      const prefix = getCanonicalPrefix(icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon === 'string' && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon === 'string') {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon) || icon
      };
    }
  }
};
const api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
const autoReplace = function () {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function () {
      return val.abstract.map(a => toHtml(a));
    }
  });
  Object.defineProperty(val, 'node', {
    get: function () {
      if (!IS_DOM) return;
      const container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: 'svg',
    attributes,
    children
  }];
}

function asSymbol (_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = Lt.includes(prefix);
  const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(c$$1 => extra.classes.indexOf(c$$1) === -1).filter(c$$1 => c$$1 !== '' || !!c$$1).concat(extra.classes).join(' ');
  let content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }
  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }
  const styles = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles['-webkit-transform'] = styles['transform'];
  }
  const styleString = joinStyles(styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}

const {
  styles: styles$1
} = namespace;
function asFoundIcon(icon) {
  const width = icon[0];
  const height = icon[1];
  const [vectorData] = icon.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
const missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === 'fa') {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      const icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

const noop$1 = () => {};
const p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
const preamble = "FA \"6.7.2\"";
const begin = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
const end = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};

const noop$2 = () => {};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === 'svg' ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */
  return comment;
}
const mutators = {
  replace: function (mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(abstract => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        let comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function (mutation) {
    const node = mutation[0];
    const abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(' ').reduce((acc, cls) => {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }
    const newInnerHTML = abstract.map(a => toHtml(a)).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  const callbackFunction = typeof callback === 'function' ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
let disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
let mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT
  } = options;
  mo = new MUTATION_OBSERVER(objects => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(mutationRecord => {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  const style = node.getAttribute('style');
  let val = [];
  if (style) {
    val = style.split(';').reduce((acc, style) => {
      const styles = style.split(':');
      const prop = styles[0];
      const value = styles.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }
      return acc;
    }, {});
  }
  return val;
}

function classParser (node) {
  const existingPrefix = node.getAttribute('data-prefix');
  const existingIconName = node.getAttribute('data-icon');
  const innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}

function attributesParser (node) {
  const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute('title');
  const titleId = node.getAttribute('data-fa-title-id');
  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }
  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  let extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

const {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [...Ft, ...Ia];
}
function onTree(root) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT.documentElement.classList;
  const hclAdd = suffix => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = suffix => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(p$$1 => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(', ');
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
    // noop
  }
  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin('onTree');
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === 'MissingIcon') {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then(resolvedMutations => {
      perform(resolvedMutations, () => {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(e$$1 => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(mutation => {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function (maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
const render = function (iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes = [],
    attributes = {},
    styles = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon
  } = iconDefinition;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), () => {
    callHooks('beforeDOMElementCreation', {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      const {
        node = DOCUMENT,
        callback = () => {}
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(_ref => {
          let [main, mask] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function (_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles
      } = _ref2;
      const styleString = joinStyles(styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};

var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          classes = []
        } = params;
        return domVariants({
          type: 'layer'
        }, () => {
          callHooks('beforeDOMElementCreation', {
            assembler,
            params
          });
          let children = [];
          assembler(args => {
            Array.isArray(args) ? args.map(a => {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(' ')
            },
            children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'counter',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'text',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};

const CLEAN_CONTENT_PATTERN = new RegExp('\u{22}', 'ug');
const SECONDARY_UNICODE_RANGE = [1105920, 1112319];
const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: 'fas',
    400: 'fas'
  }
}), lt), wa), Yt);
const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }
    const children = toArray(node.children);
    const alreadyProcessedPseudoElement = children.filter(c$$1 => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles.getPropertyValue('font-family');
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles.getPropertyValue('font-weight');
    const content = styles.getPropertyValue('content');
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== 'none' && content !== '') {
      const content = styles.getPropertyValue('content');
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content);
      const isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }

      // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(main => {
          const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(a$$1 => toHtml(a$$1)).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}
function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    const end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(() => {
      end();
      enableObservation();
      resolve();
    }).catch(() => {
      end();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.pseudoElements2svg = function (params) {
      const {
        node = DOCUMENT
      } = params;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

let _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};

const parseTransformString = transformString => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce((acc, n) => {
    const parts = n.toLowerCase().split('-');
    const first = parts[0];
    let rest = parts.slice(1).join('-');
    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;
      case 'shrink':
        acc.size = acc.size - rest;
        break;
      case 'left':
        acc.x = acc.x - rest;
        break;
      case 'right':
        acc.x = acc.x + rest;
        break;
      case 'up':
        acc.y = acc.y - rest;
        break;
      case 'down':
        acc.y = acc.y + rest;
        break;
      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: transformString => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute('data-fa-transform');
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

const ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute('data-fa-mask');
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(i => i.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      const maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides(providers) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    providers.missingIconAbstract = function () {
      const gChildren = [];
      const FILL = {
        fill: 'currentColor'
      };
      const ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      };

      // Ring
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });
      const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });
      const dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });
      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }
      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute('data-fa-symbol');
        const symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
api.config;
api.library;
api.dom;
api.parse;
const findIconDefinition$1 = api.findIconDefinition;
api.toHtml;
const icon = api.icon;
api.layer;
api.text;
api.counter;

const $$Astro$8 = createAstro("https://dolphilia.github.io");
const $$FontAwesomeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FontAwesomeIcon;
  const {
    name,
    prefix = "fas",
    size = "1em",
    color = "currentColor",
    label,
    class: className = ""
  } = Astro2.props;
  const iconLookup = { prefix, iconName: name };
  const iconDefinition = findIconDefinition$1(iconLookup);
  const { html, width, height } = iconDefinition ? icon(iconDefinition, { classes: ["fa-icon"] }) : { html: [], width: 0, height: 0 };
  const svgContent = html.join("");
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "icon-color": color, "icon-size": size }]);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`fa-icon-wrapper ${className}`, "class")}${spreadAttributes(a11yAttrs)} data-astro-cid-mlnikpiz${addAttribute($$definedVars, "style")}>${unescapeHTML(svgContent)}</span> `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/icons/FontAwesomeIcon.astro", void 0);

function getDropdownScript() {
  return `
  document.addEventListener('DOMContentLoaded', function() {
    // すべてのドロップダウンコンポーネントを初期化
    document.querySelectorAll('docs-dropdown').forEach(dropdown => {
      if (dropdown._initialized) return;
      dropdown._initialized = true;
      
      const button = dropdown.querySelector('[data-dropdown-button]');
      const menu = dropdown.querySelector('[data-dropdown-menu]');
      
      if (button && menu) {
        // ボタンクリックでメニューの表示/非表示を切り替え
        button.addEventListener('click', function() {
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', (!expanded).toString());
          menu.classList.toggle('hidden');
        });
        
        // 外部クリックでメニューを閉じる
        document.addEventListener('click', function(event) {
          if (!dropdown.contains(event.target)) {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
          }
        });
        
        // ESCキーでメニューを閉じる
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
          }
        });
      }
    });
  });
  `;
}
function getCustomElementScript() {
  return `
  class DocsDropdown extends HTMLElement {
    constructor() {
      super();
    }
  }
  
  // カスタム要素として登録
  customElements.define('docs-dropdown', DocsDropdown);
  `;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://dolphilia.github.io");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const {
    label,
    icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`,
    align = "right",
    width = "14rem",
    class: className = "",
    ...attrs
  } = Astro2.props;
  const didRenderDropdownScriptSymbol = Symbol.for("docs:did-render-dropdown-script");
  const shouldRenderDropdownScript = Astro2.locals[didRenderDropdownScriptSymbol] !== true;
  if (shouldRenderDropdownScript) {
    Astro2.locals[didRenderDropdownScriptSymbol] = true;
  }
  const buttonId = `dropdown-button-${Math.random().toString(36).substring(2, 11)}`;
  const menuId = `dropdown-menu-${Math.random().toString(36).substring(2, 11)}`;
  const $$definedVars = defineStyleVars([{ align, width }]);
  return renderTemplate`${shouldRenderDropdownScript && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["<script>", "<\/script><script>", "<\/script>"])), unescapeHTML(getCustomElementScript()), unescapeHTML(getDropdownScript())) })}`}${renderComponent($$result, "docs-dropdown", "docs-dropdown", { "class:list": ["dropdown", className], ...attrs, "data-astro-cid-weodxc7q": true, "style": $$definedVars }, { "default": () => renderTemplate`  ${maybeRenderHead()}<div data-astro-cid-weodxc7q${addAttribute($$definedVars, "style")}> <button type="button" class="dropdown-button"${addAttribute(buttonId, "id")} aria-expanded="false" aria-haspopup="true"${addAttribute(menuId, "aria-controls")} data-dropdown-button data-astro-cid-weodxc7q${addAttribute($$definedVars, "style")}> <span class="dropdown-label" data-astro-cid-weodxc7q${addAttribute($$definedVars, "style")}>${label}</span> <span class="dropdown-icon" data-astro-cid-weodxc7q${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span> </button> </div>  <div class="dropdown-menu hidden"${addAttribute(menuId, "id")} role="menu" aria-orientation="vertical"${addAttribute(buttonId, "aria-labelledby")} tabindex="-1" data-dropdown-menu${addAttribute(align, "data-align")}${addAttribute(`${`width: ${width};`}; ${$$definedVars}`, "style")} data-astro-cid-weodxc7q> <div class="dropdown-content" role="none" data-astro-cid-weodxc7q${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> </div> ` })} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Dropdown/Dropdown.astro", void 0);

const $$Astro$6 = createAstro("https://dolphilia.github.io");
const $$DropdownItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownItem;
  const {
    label,
    href,
    isActive = false,
    class: className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "dropdown-item",
    isActive && "dropdown-item-active",
    className
  ], "class:list")} role="menuitem" tabindex="-1"${addAttribute(isActive ? "page" : void 0, "aria-current")}${spreadAttributes(attrs)} data-astro-cid-bp2xjo7n>${renderSlot($$result, $$slots["before-label"])}<span class="dropdown-item-label" data-astro-cid-bp2xjo7n>${label}</span>${renderSlot($$result, $$slots["after-label"])}${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button type="button"${addAttribute([
    "dropdown-item",
    isActive && "dropdown-item-active",
    className
  ], "class:list")} role="menuitem" tabindex="-1"${addAttribute(isActive ? "true" : void 0, "aria-current")}${spreadAttributes(attrs)} data-astro-cid-bp2xjo7n>${renderSlot($$result, $$slots["before-label"])}<span class="dropdown-item-label" data-astro-cid-bp2xjo7n>${label}</span>${renderSlot($$result, $$slots["after-label"])}${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/ui/src/components/Dropdown/DropdownItem.astro", void 0);

const $$Astro$5 = createAstro("https://dolphilia.github.io");
const $$VersionSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$VersionSelector;
  const {
    versions,
    currentVersion,
    basePath,
    currentSlug = "",
    // 追加
    className = "",
    showVersionHistory = false
  } = Astro2.props;
  const currentVersionObj = versions.find((v) => v.id === currentVersion) || versions[0];
  const latestVersion = versions.find((v) => v.isLatest) || versions[0];
  const sortedVersions = [...versions].sort((a, b) => {
    if (a.isLatest === true && b.isLatest !== true) return -1;
    if (b.isLatest === true && a.isLatest !== true) return 1;
    const dateA = a.date ? a.date.getTime() : 0;
    const dateB = b.date ? b.date.getTime() : 0;
    return dateB - dateA;
  });
  function getVersionTag(version) {
    if (version.isLatest) {
      return { text: "\u6700\u65B0", type: "latest" };
    }
    if (version.tag) {
      if (version.tag.includes("beta")) {
        return { text: "\u30D9\u30FC\u30BF", type: "beta" };
      } else if (version.tag.includes("alpha")) {
        return { text: "\u30A2\u30EB\u30D5\u30A1", type: "alpha" };
      } else if (version.tag.includes("dev")) {
        return { text: "\u958B\u767A\u7248", type: "dev" };
      } else if (version.tag.includes("stable")) {
        return { text: "\u5B89\u5B9A\u7248", type: "stable" };
      }
    }
    return null;
  }
  function getVersionPath(versionId) {
    let path = `${basePath}/${versionId}`;
    if (currentSlug) {
      path += `/${currentSlug}`;
    }
    if (!path.endsWith("/") && path !== basePath) {
      path += "/";
    }
    return path;
  }
  function getDiffPath() {
    let diffBasePath = basePath;
    if (currentVersion && diffBasePath.includes(`/${currentVersion}`)) {
      diffBasePath = diffBasePath.replace(`/${currentVersion}`, "");
    }
    const slugPart = currentSlug ? `/${currentSlug}` : "";
    return `${diffBasePath}/version-diff${slugPart}`;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["version-selector", className], "class:list")} data-astro-cid-kqgt6mya> ${renderComponent($$result, "Dropdown", $$Dropdown, { "label": currentVersionObj.name, "align": "right", "width": "14rem", "class": "version-dropdown", "data-astro-cid-kqgt6mya": true }, { "after-items": ($$result2) => renderTemplate`<div class="version-dropdown-footer" data-astro-cid-kqgt6mya> <a${addAttribute(getDiffPath(), "href")} class="version-footer-link" data-astro-cid-kqgt6mya> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "code", "class": "version-footer-icon", "data-astro-cid-kqgt6mya": true })}
バージョン間の差分を表示
</a> </div>`, "before-items": ($$result2) => renderTemplate`<div class="version-dropdown-header" data-astro-cid-kqgt6mya> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "document", "class": "version-icon", "data-astro-cid-kqgt6mya": true })} <span data-astro-cid-kqgt6mya>バージョンを選択</span> </div>`, "default": ($$result2) => renderTemplate`  ${sortedVersions.map((version) => {
    const tag = getVersionTag(version);
    return renderTemplate`${renderComponent($$result2, "DropdownItem", $$DropdownItem, { "label": version.name, "href": getVersionPath(version.id), "isActive": version.id === currentVersion, "data-astro-cid-kqgt6mya": true }, { "after-label": ($$result3) => renderTemplate`${tag && renderTemplate`<span${addAttribute(`version-badge version-badge-${tag.type}`, "class")} data-astro-cid-kqgt6mya> ${tag.text} </span>`}`, "default": ($$result3) => renderTemplate`<div class="version-meta" data-astro-cid-kqgt6mya> <div class="version-date" data-astro-cid-kqgt6mya> ${version.date && typeof version.date.toLocaleDateString === "function" ? version.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" }) : "N/A"} </div> ${version.description && renderTemplate`<div class="version-description" data-astro-cid-kqgt6mya>${version.description}</div>`} </div> ` })}`;
  })} ` })} <div class="version-info" data-astro-cid-kqgt6mya> ${currentVersion !== latestVersion.id && renderTemplate`<div class="version-alert" data-astro-cid-kqgt6mya> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "warning", "class": "version-alert-icon", "data-astro-cid-kqgt6mya": true })} <span data-astro-cid-kqgt6mya>
これは最新バージョンではありません。
<a${addAttribute(getVersionPath(latestVersion.id), "href")} class="version-alert-link" data-astro-cid-kqgt6mya>
最新バージョン（${latestVersion.name}）を表示
</a> </span> </div>`} ${showVersionHistory && renderTemplate`<div class="version-history" data-astro-cid-kqgt6mya> <h3 class="version-history-title" data-astro-cid-kqgt6mya>バージョン履歴</h3> <ul class="version-history-list" data-astro-cid-kqgt6mya> ${sortedVersions.slice(0, 3).map((version) => renderTemplate`<li class="version-history-item" data-astro-cid-kqgt6mya> <a${addAttribute(getVersionPath(version.id), "href")}${addAttribute(["version-history-link", { "is-current": version.id === currentVersion }], "class:list")} data-astro-cid-kqgt6mya> <span class="version-history-name" data-astro-cid-kqgt6mya>${version.name}</span> ${getVersionTag(version) && renderTemplate`<span${addAttribute(`version-badge version-badge-${getVersionTag(version)?.type}`, "class")} data-astro-cid-kqgt6mya> ${getVersionTag(version)?.text} </span>`} <span class="version-history-date" data-astro-cid-kqgt6mya> ${version.date && typeof version.date.toLocaleDateString === "function" ? version.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" }) : "N/A"} </span> </a> </li>`)} </ul> ${versions.length > 3 && renderTemplate`<a href="#" class="version-history-more" data-astro-cid-kqgt6mya>すべてのバージョンを表示</a>`} </div>`} </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionSelector.astro", void 0);

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines$1(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffLines(oldText, newText, options = {}) {
  const { ignoreWhitespace = false, context = 3 } = options;
  const changes = diffLines$1(oldText, newText, {
    ignoreWhitespace
  });
  let oldLineNumber = 1;
  let newLineNumber = 1;
  const results = [];
  changes.forEach((change) => {
    const lines = change.value.split("\n");
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }
    lines.forEach((line) => {
      const result = {
        value: line,
        lineNumber: {}
      };
      if (change.added) {
        result.type = "added";
        result.lineNumber.new = newLineNumber++;
      } else if (change.removed) {
        result.type = "removed";
        result.lineNumber.old = oldLineNumber++;
      } else {
        result.type = "unchanged";
        result.lineNumber.old = oldLineNumber++;
        result.lineNumber.new = newLineNumber++;
      }
      results.push(result);
    });
  });
  if (context !== void 0 && context >= 0) {
    return limitDiffContext(results, context);
  }
  return results;
}
function limitDiffContext(results, context) {
  if (context === Infinity) {
    return results;
  }
  const limitedResults = [];
  let inChangePart = false;
  let unchangedCount = 0;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.type !== "unchanged") {
      if (!inChangePart && i > 0) {
        const startIdx = Math.max(0, i - context);
        for (let j = startIdx; j < i; j++) {
          limitedResults.push(results[j]);
        }
      }
      limitedResults.push(result);
      inChangePart = true;
      unchangedCount = 0;
    } else {
      if (inChangePart) {
        unchangedCount++;
        if (unchangedCount <= context) {
          limitedResults.push(result);
        } else {
          inChangePart = false;
        }
      }
    }
  }
  return limitedResults;
}
function createHtmlDiff(diffResults) {
  let html = "";
  diffResults.forEach((result) => {
    let className = "";
    let linePrefix = "";
    switch (result.type) {
      case "added":
        className = "diff-added";
        linePrefix = "+";
        break;
      case "removed":
        className = "diff-removed";
        linePrefix = "-";
        break;
      case "unchanged":
        className = "diff-unchanged";
        linePrefix = " ";
        break;
    }
    let lineNumberHtml = "";
    if (result.lineNumber) {
      const oldLineNum = result.lineNumber.old || "";
      const newLineNum = result.lineNumber.new || "";
      lineNumberHtml = `<span class="diff-line-number">${oldLineNum}</span><span class="diff-line-number">${newLineNum}</span>`;
    }
    html += `<div class="diff-line ${className}">${lineNumberHtml}<span class="diff-prefix">${linePrefix}</span><span class="diff-content">${escapeHtml(result.value)}</span></div>`;
  });
  return html;
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const $$Astro$4 = createAstro("https://dolphilia.github.io");
const $$VersionDiff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$VersionDiff;
  const {
    versions,
    oldVersionId,
    newVersionId,
    oldContent,
    newContent,
    title = "\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306E\u5DEE\u5206",
    className = ""
  } = Astro2.props;
  const oldVersion = versions.find((v) => v.id === oldVersionId);
  const newVersion = versions.find((v) => v.id === newVersionId);
  const diffResults = diffLines(oldContent, newContent, { context: 3 });
  const diffHtml = createHtmlDiff(diffResults);
  const addedLines = diffResults.filter((r) => r.type === "added").length;
  const removedLines = diffResults.filter((r) => r.type === "removed").length;
  const unchangedLines = diffResults.filter((r) => r.type === "unchanged").length;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`version-diff ${className}`, "class")} data-astro-cid-c4vhpv52> ${renderComponent($$result, "Card", $$Card, { "data-astro-cid-c4vhpv52": true }, { "content": ($$result2) => renderTemplate`<div data-astro-cid-c4vhpv52> <div class="diff-stats" data-astro-cid-c4vhpv52> <div class="diff-stat-item diff-stat-removed" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "error", "class": "diff-stat-icon", "data-astro-cid-c4vhpv52": true })} <span data-astro-cid-c4vhpv52>削除: ${removedLines}行</span> </div> <div class="diff-stat-item diff-stat-added" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "check", "class": "diff-stat-icon", "data-astro-cid-c4vhpv52": true })} <span data-astro-cid-c4vhpv52>追加: ${addedLines}行</span> </div> <div class="diff-stat-item diff-stat-unchanged" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "check", "class": "diff-stat-icon", "data-astro-cid-c4vhpv52": true })} <span data-astro-cid-c4vhpv52>変更なし: ${unchangedLines}行</span> </div> </div> <div class="version-diff-controls" data-astro-cid-c4vhpv52> <div class="diff-control-group" data-astro-cid-c4vhpv52> <label class="diff-control-label" data-astro-cid-c4vhpv52> <input type="checkbox" id="toggle-context" class="diff-control-checkbox" checked data-astro-cid-c4vhpv52> <span class="diff-control-text" data-astro-cid-c4vhpv52>コンテキストを表示</span> </label> <label class="diff-control-label" data-astro-cid-c4vhpv52> <input type="checkbox" id="toggle-whitespace" class="diff-control-checkbox" data-astro-cid-c4vhpv52> <span class="diff-control-text" data-astro-cid-c4vhpv52>空白の変更を無視</span> </label> </div> <div class="diff-version-meta" data-astro-cid-c4vhpv52> ${oldVersion?.date && newVersion?.date && renderTemplate`<div class="diff-date-range" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "document", "class": "diff-meta-icon", "data-astro-cid-c4vhpv52": true })} <span data-astro-cid-c4vhpv52> ${oldVersion.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
から
${newVersion.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
まで
</span> </div>`} </div> </div> <div class="diff-scroll-container" data-astro-cid-c4vhpv52> <div class="diff-container" data-astro-cid-c4vhpv52> <div class="diff-header" data-astro-cid-c4vhpv52> <div class="diff-header-old" data-astro-cid-c4vhpv52>旧</div> <div class="diff-header-new" data-astro-cid-c4vhpv52>新</div> <div class="diff-header-code" data-astro-cid-c4vhpv52>コード</div> </div> <div id="diff-content" class="diff-content" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(diffHtml)}` })} </div> </div> </div> </div>`, "title": ($$result2) => renderTemplate`<div class="diff-title-container" data-astro-cid-c4vhpv52> <h2 class="diff-title" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "code", "class": "diff-title-icon", "data-astro-cid-c4vhpv52": true })} ${title} </h2> <div class="diff-version-info" data-astro-cid-c4vhpv52> <span class="diff-version-old" data-astro-cid-c4vhpv52>${oldVersion?.name || oldVersionId}</span> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "right-arrow", "class": "diff-arrow-icon", "data-astro-cid-c4vhpv52": true })} <span class="diff-version-new" data-astro-cid-c4vhpv52>${newVersion?.name || newVersionId}</span> </div> </div>` })} </div>   ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionDiff.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionDiff.astro", void 0);

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

const $$Astro$3 = createAstro("https://dolphilia.github.io");
const $$SearchBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const {
    lang,
    placeholder = t("search.placeholder", lang),
    className = ""
  } = Astro2.props;
  const translations = {
    placeholder,
    searchResults: t("search.searchResults", lang),
    noResults: t("search.noResults", lang),
    oneResult: t("search.oneResult", lang),
    manyResults: t("search.manyResults", lang),
    searching: t("search.searching", lang),
    closeSearch: t("search.closeSearch", lang),
    searchError: t("search.error", lang),
    ctrlKey: "Ctrl",
    slashKey: "/"
  };
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "class": className, "data-translations": JSON.stringify(translations), "data-astro-cid-perfc75k": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(t("search.label", lang), "aria-label")} aria-keyshortcuts="Control+K /" data-astro-cid-perfc75k> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "search", "data-astro-cid-perfc75k": true })} <span class="search-text" data-astro-cid-perfc75k>${t("search.label", lang)}</span> <kbd class="shortcut-hint" data-astro-cid-perfc75k> <kbd class="platform-key" data-astro-cid-perfc75k>${translations.ctrlKey}</kbd><kbd data-astro-cid-perfc75k>K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(t("search.label", lang), "aria-label")} data-astro-cid-perfc75k> <div class="dialog-frame" data-astro-cid-perfc75k> <div class="dialog-header" data-astro-cid-perfc75k> <div class="search-input-container" data-astro-cid-perfc75k> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "search", "class": "search-icon", "data-astro-cid-perfc75k": true })} <input type="search" id="search-input"${addAttribute(placeholder, "placeholder")} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-astro-cid-perfc75k> </div> <button data-close-modal class="close-button" data-astro-cid-perfc75k> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "close", "data-astro-cid-perfc75k": true })} <span class="sr-only" data-astro-cid-perfc75k>${translations.closeSearch}</span> </button> </div> <div class="search-results" data-astro-cid-perfc75k> <div id="search-results-container" class="results-container" data-astro-cid-perfc75k> <div class="loading-indicator" data-astro-cid-perfc75k> <div class="loading-spinner" data-astro-cid-perfc75k></div> <p data-astro-cid-perfc75k>${t("search.searching", lang)}</p> </div> </div> </div> </div> </dialog> ` })}  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchBar.astro", void 0);

const $$Astro$2 = createAstro("https://dolphilia.github.io");
const $$SearchResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SearchResults;
  const { lang, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="search-results-container"${addAttribute(["search-results-container hidden", className], "class:list")} data-astro-cid-c7xfp4xw> <div class="modal-overlay" data-astro-cid-c7xfp4xw> <div class="modal-container" data-astro-cid-c7xfp4xw> <div class="modal-header" data-astro-cid-c7xfp4xw> <h2 class="modal-title" data-astro-cid-c7xfp4xw>${t("search.searchResults", lang)}</h2> <button id="close-search-results" class="close-button" aria-label="閉じる" data-astro-cid-c7xfp4xw> <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-c7xfp4xw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-c7xfp4xw></path> </svg> </button> </div> <div id="search-results" class="search-results-content" data-astro-cid-c7xfp4xw> <div class="loading-container" data-astro-cid-c7xfp4xw> <div class="loading-animation" data-astro-cid-c7xfp4xw> <div class="loading-content" data-astro-cid-c7xfp4xw> <div class="loading-bar loading-bar-large" data-astro-cid-c7xfp4xw></div> <div class="loading-bar-group" data-astro-cid-c7xfp4xw> <div class="loading-bar loading-bar-full" data-astro-cid-c7xfp4xw></div> <div class="loading-bar loading-bar-medium" data-astro-cid-c7xfp4xw></div> </div> </div> </div> </div> </div> </div> </div> </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchResults.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchResults.astro", void 0);

const $$Astro$1 = createAstro("https://dolphilia.github.io");
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const BASE_URL = "/docs-astro";
  const LANG_NAMES = {
    en: "English",
    ja: "\u65E5\u672C\u8A9E"
  };
  const LANG_FLAGS = {
    en: "\u{1F1FA}\u{1F1F8}",
    ja: "\u{1F1EF}\u{1F1F5}"
  };
  const {
    currentLang,
    currentVersion,
    supportedLangs = ["en", "ja"],
    className = "",
    showLanguageInfo = false
  } = Astro2.props;
  const currentPathname = Astro2.url.pathname;
  const normalizedPathname = currentPathname.endsWith("/") ? currentPathname : `${currentPathname}/`;
  const pathWithoutBase = normalizedPathname.startsWith(BASE_URL) ? normalizedPathname.substring(BASE_URL.length) : normalizedPathname;
  const pathSegments = pathWithoutBase.split("/").filter((segment) => segment !== "");
  let langFromPath = void 0;
  let versionFromPath = void 0;
  let slugFromPath = "";
  if (pathSegments.length > 0 && supportedLangs.includes(pathSegments[0])) {
    langFromPath = pathSegments.shift();
  }
  if (pathSegments.length > 0 && pathSegments[0].match(/^v\d+$/)) {
    versionFromPath = pathSegments.shift();
  }
  slugFromPath = pathSegments.join("/");
  if (slugFromPath && !slugFromPath.endsWith("/")) {
    slugFromPath += "/";
  }
  if (!slugFromPath && (langFromPath || versionFromPath)) {
    slugFromPath = "";
  }
  const langPaths = supportedLangs.map((langCode) => {
    const targetLang = langCode;
    let newPath = BASE_URL;
    if (targetLang !== "en" || targetLang === "en" && (versionFromPath || slugFromPath)) {
      newPath += `/${targetLang}`;
    } else if (targetLang === "en" && !versionFromPath && !slugFromPath) {
      newPath += `/${targetLang}`;
    }
    if (versionFromPath) {
      newPath += `/${versionFromPath}`;
    }
    if (slugFromPath) {
      newPath += `/${slugFromPath}`;
    }
    if (!newPath.endsWith("/") && newPath !== BASE_URL) {
      newPath += "/";
    }
    if (newPath === BASE_URL && targetLang === "en") {
      newPath = `${BASE_URL}/en/`;
    }
    const baseLangPattern = new RegExp(`^${BASE_URL}/(${supportedLangs.join("|")})$`);
    if (baseLangPattern.test(newPath)) {
      newPath += "/";
    }
    return {
      lang: langCode,
      name: LANG_NAMES[langCode] || langCode,
      flag: LANG_FLAGS[langCode] || "\u{1F310}",
      path: newPath,
      isCurrent: langCode === currentLang
    };
  });
  const languageInfo = {
    en: {
      nativeName: "English",
      englishName: "English",
      direction: "ltr",
      description: "Official documentation in English"
    },
    ja: {
      nativeName: "\u65E5\u672C\u8A9E",
      englishName: "Japanese",
      direction: "ltr",
      description: "\u65E5\u672C\u8A9E\u306E\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="language-selector-container" data-astro-cid-ltpqzwiw> ${renderComponent($$result, "Dropdown", $$Dropdown, { "label": LANG_NAMES[currentLang] || currentLang, "align": "right", "width": "14rem", "class": `language-dropdown ${className}`, "data-astro-cid-ltpqzwiw": true }, { "after-items": ($$result2) => renderTemplate`<div class="language-dropdown-footer" data-astro-cid-ltpqzwiw> <a href="https://github.com/dolphilia/docs-astro/tree/main/packages/i18n" class="language-footer-link" target="_blank" rel="noopener" data-astro-cid-ltpqzwiw> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "external-link", "class": "language-footer-icon", "data-astro-cid-ltpqzwiw": true })}
翻訳に貢献する
</a> </div>`, "before-items": ($$result2) => renderTemplate`<div class="language-dropdown-header" data-astro-cid-ltpqzwiw> ${renderComponent($$result2, "Icon", $$Icon$1, { "name": "document", "class": "language-icon", "data-astro-cid-ltpqzwiw": true })} <span data-astro-cid-ltpqzwiw>言語を選択</span> </div>`, "default": ($$result2) => renderTemplate`  ${langPaths.map((pathInfo) => renderTemplate`${renderComponent($$result2, "DropdownItem", $$DropdownItem, { "label": pathInfo.name, "href": pathInfo.path, "isActive": pathInfo.isCurrent, "data-astro-cid-ltpqzwiw": true }, { "after-label": ($$result3) => renderTemplate`${pathInfo.isCurrent && renderTemplate`<span class="language-current-badge" data-astro-cid-ltpqzwiw>現在</span>`}`, "before-label": ($$result3) => renderTemplate`<span class="language-flag" data-astro-cid-ltpqzwiw>${pathInfo.flag}</span>`, "default": ($$result3) => renderTemplate`  ${showLanguageInfo && languageInfo[pathInfo.lang] && renderTemplate`<div class="language-info" data-astro-cid-ltpqzwiw> <div class="language-native-name" data-astro-cid-ltpqzwiw> ${languageInfo[pathInfo.lang].nativeName} ${languageInfo[pathInfo.lang].nativeName !== languageInfo[pathInfo.lang].englishName && renderTemplate`<span class="language-english-name" data-astro-cid-ltpqzwiw>(${languageInfo[pathInfo.lang].englishName})</span>`} </div> <div class="language-description" data-astro-cid-ltpqzwiw>${languageInfo[pathInfo.lang].description}</div> </div>`}` })}`)} ` })} ${showLanguageInfo && renderTemplate`<div class="language-info-panel" data-astro-cid-ltpqzwiw> <h3 class="language-info-title" data-astro-cid-ltpqzwiw>現在の言語: ${LANG_NAMES[currentLang]}</h3> <div class="language-info-content" data-astro-cid-ltpqzwiw> <p class="language-info-description" data-astro-cid-ltpqzwiw> ${languageInfo[currentLang]?.description || ""} </p> <div class="language-info-meta" data-astro-cid-ltpqzwiw> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>ネイティブ名:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.nativeName || currentLang}</span> </div> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>英語名:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.englishName || currentLang}</span> </div> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>テキスト方向:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.direction === "rtl" ? "\u53F3\u304B\u3089\u5DE6" : "\u5DE6\u304B\u3089\u53F3"}</span> </div> </div> </div> </div>`} </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/components/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/components/LanguageSelector.astro", void 0);

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
    hasToc = false,
    showSearch = true,
    showVersionSelector = true
  } = Astro2.props;
  versions.find((v) => v.isLatest)?.id || version;
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
  return renderTemplate`<html${addAttribute(lang, "lang")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-ouamjn2i" })} data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${BASE_URL}/favicon.svg`, "href")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Documentation site built with Astro"><title>${title} | Docs</title>${renderHead()}</head> <body data-astro-cid-ouamjn2i> <div class="page sl-flex" data-astro-cid-ouamjn2i> <header class="header" data-astro-cid-ouamjn2i> <div class="header-container" data-astro-cid-ouamjn2i> <div class="header-content" data-astro-cid-ouamjn2i> <div class="title-wrapper sl-flex" data-astro-cid-ouamjn2i> <a${addAttribute(`${BASE_URL}/${lang}`, "href")} class="site-title" data-astro-cid-ouamjn2i>Docs Astro</a> </div> <div class="sl-flex print:hidden" data-astro-cid-ouamjn2i> ${showSearch && renderTemplate`<div class="search-container" data-astro-cid-ouamjn2i> ${renderComponent($$result, "SearchBar", $$SearchBar, { "lang": lang, "placeholder": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u691C\u7D22...`, "data-astro-cid-ouamjn2i": true })} </div>`} </div> <div class="sl-hidden md:sl-flex print:hidden right-group" data-astro-cid-ouamjn2i> ${showVersionSelector && version && renderTemplate`<div class="version-selector-container" data-astro-cid-ouamjn2i> ${renderComponent($$result, "VersionSelector", $$VersionSelector, { "currentVersion": version, "versions": versions, "basePath": `${BASE_URL}/${lang}`, "currentSlug": Astro2.url.pathname.split("/").slice(4).join("/"), "data-astro-cid-ouamjn2i": true })} </div>`} <div aria-label="言語選択" data-astro-cid-ouamjn2i> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "currentLang": lang, "data-astro-cid-ouamjn2i": true })} </div> <nav aria-label="メインナビゲーション" data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navigation", $$Navigation, { "items": navItems, "data-astro-cid-ouamjn2i": true })} </nav> </div> </div> </div> </header> <div class="main-frame" data-astro-cid-ouamjn2i> <main id="main-content" data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "linkGroups": linkGroups, "copyright": `\xA9 ${currentYear} Docs Astro. All rights reserved.`, "data-astro-cid-ouamjn2i": true })} </div> </body></html>`;
}, "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/layouts/MainLayout.astro", void 0);

export { $$Icon$1 as $, $$LucideIcon as a, $$FontAwesomeIcon as b, $$Tabs as c, $$TabItem as d, $$MainLayout as e, $$Card as f, $$Button as g, $$Sidebar as h, $$TableOfContents as i, $$Pagination as j, $$EditLink as k, t, versions as v };
