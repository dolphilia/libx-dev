// ドロップダウンのユーティリティ関数

/**
 * ドロップダウンメニューの表示/非表示を切り替えるスクリプトを取得する
 * @returns ドロップダウンメニューの動作を制御するJavaScriptコード
 */
export function getDropdownScript(): string {
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

/**
 * カスタム要素の定義を取得する
 * @returns カスタム要素の定義を行うJavaScriptコード
 */
export function getCustomElementScript(): string {
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
