// タブパネルのデータ型を定義
export interface Panel {
  panelId: string;
  tabId: string;
  label: string;
  icon?: string;
}

// カウンターを使用してユニークなIDを生成
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: 'tab-panel-' + id, tabId: 'tab-' + id };
};

/**
 * タブパネルのHTMLを処理し、必要なデータを抽出する関数
 * Astroのサーバーサイドレンダリングでも動作するシンプルな実装
 * @param html タブコンポーネントの内部HTML
 */
export function processPanels(html: string): { panels: Panel[]; html: string } {
  // パネルデータを収集
  const panels: Panel[] = [];
  
  // 正規表現を使用してタブアイテムを検出
  // 属性の順序に依存しないように正規表現を改善
  const regex = /<docs-tab-item[^>]*?data-label="([^"]*)"[^>]*?(?:data-icon="([^"]*)")?[^>]*?>([\s\S]*?)<\/docs-tab-item>/g;
  
  // アイコン属性を個別に抽出するための正規表現
  const iconRegex = /data-icon="([^"]*)"/;
  let match;
  let isFirst = true;
  let processedHtml = html;
  
  // すべてのタブアイテムを処理
  while ((match = regex.exec(html)) !== null) {
    const fullMatch = match[0];
    const label = match[1];
    let icon = match[2] || undefined;
    const content = match[3];
    
    // アイコン属性が正規表現で取得できなかった場合、個別に抽出を試みる
    if (!icon) {
      const iconMatch = fullMatch.match(iconRegex);
      if (iconMatch && iconMatch[1]) {
        icon = iconMatch[1];
      }
    }
    
    // ユニークなIDを生成
    const ids = getIDs();
    
    // パネルデータを追加
    const panel: Panel = {
      ...ids,
      label,
    };
    
    if (icon) {
      panel.icon = icon;
    }
    
    panels.push(panel);
    
    // タブアイテムをdivに変換
    const hiddenAttr = isFirst ? '' : 'hidden';
    const replacement = `<div id="${ids.panelId}" aria-labelledby="${ids.tabId}" role="tabpanel" ${hiddenAttr}>${content}</div>`;
    
    // HTMLを更新
    processedHtml = processedHtml.replace(fullMatch, replacement);
    
    isFirst = false;
  }
  
  return {
    panels,
    html: processedHtml,
  };
}

// クライアントサイドでのみ実行される関数
export function getTabsScript(): string {
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
        });
      }

      switchTab(newTab, index, shouldSync = true) {
        if (!newTab) return;

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
        
        if (shouldSync && this.syncKey) {
          newTab.focus();
          this.syncTabs(newTab);
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
