import { x as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.BUMCauiJ.js';
import { g as $$Icon } from './MainLayout.B35VslRc.js';

const frontmatter = {
  "title": "アイコンの例",
  "description": "アイコンコンポーネントの使用例"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "アイコンコンポーネントの例",
    "text": "アイコンコンポーネントの例"
  }, {
    "depth": 2,
    "slug": "基本的な使い方",
    "text": "基本的な使い方"
  }, {
    "depth": 2,
    "slug": "アイコンのサイズ",
    "text": "アイコンのサイズ"
  }, {
    "depth": 2,
    "slug": "アイコンの色",
    "text": "アイコンの色"
  }, {
    "depth": 2,
    "slug": "利用可能なアイコン",
    "text": "利用可能なアイコン"
  }, {
    "depth": 3,
    "slug": "基本アイコン",
    "text": "基本アイコン"
  }, {
    "depth": 3,
    "slug": "ナビゲーションアイコン",
    "text": "ナビゲーションアイコン"
  }, {
    "depth": 3,
    "slug": "アクションアイコン",
    "text": "アクションアイコン"
  }, {
    "depth": 3,
    "slug": "ドキュメントアイコン",
    "text": "ドキュメントアイコン"
  }, {
    "depth": 3,
    "slug": "テーマアイコン",
    "text": "テーマアイコン"
  }, {
    "depth": 2,
    "slug": "テキスト内でのアイコンの使用",
    "text": "テキスト内でのアイコンの使用"
  }, {
    "depth": 2,
    "slug": "アクセシビリティ",
    "text": "アクセシビリティ"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "アイコンコンポーネントの例",
      children: "アイコンコンポーネントの例"
    }), "\n", createVNode(_components.p, {
      children: "アイコンコンポーネントを使用すると、ドキュメント内にさまざまなアイコンを表示できます。"
    }), "\n", createVNode(_components.h2, {
      id: "基本的な使い方",
      children: "基本的な使い方"
    }), "\n", createVNode(_components.p, {
      children: "アイコンコンポーネントの基本的な使用例："
    }), "\n", createVNode($$Icon, {
      name: "info"
    }), "\n", createVNode(_components.h2, {
      id: "アイコンのサイズ",
      children: "アイコンのサイズ"
    }), "\n", createVNode(_components.p, {
      children: "アイコンにはさまざまな単位でサイズを指定できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$Icon, {
        name: "info",
        size: "1em"
      }), createVNode($$Icon, {
        name: "info",
        size: "1.5em"
      }), createVNode($$Icon, {
        name: "info",
        size: "2em"
      }), createVNode($$Icon, {
        name: "info",
        size: "3em"
      })]
    }), "\n", createVNode(_components.p, {
      children: "ピクセル単位でも指定できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$Icon, {
        name: "info",
        size: "16px"
      }), createVNode($$Icon, {
        name: "info",
        size: "24px"
      }), createVNode($$Icon, {
        name: "info",
        size: "32px"
      }), createVNode($$Icon, {
        name: "info",
        size: "48px"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "アイコンの色",
      children: "アイコンの色"
    }), "\n", createVNode(_components.p, {
      children: "アイコンの色をカスタマイズできます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$Icon, {
        name: "info",
        color: "#007bff"
      }), createVNode($$Icon, {
        name: "triangle-alert",
        color: "#ffc107"
      }), createVNode($$Icon, {
        name: "circle-alert",
        color: "#dc3545"
      }), createVNode($$Icon, {
        name: "circle-check",
        color: "#28a745"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "利用可能なアイコン",
      children: "利用可能なアイコン"
    }), "\n", createVNode(_components.p, {
      children: "利用可能なすべてのアイコン："
    }), "\n", createVNode(_components.h3, {
      id: "基本アイコン",
      children: "基本アイコン"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "info"
        }), createVNode("span", {
          children: "info（情報）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "settings"
        }), createVNode("span", {
          children: "settings（設定）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "triangle-alert"
        }), createVNode("span", {
          children: "triangle-alert（警告）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-alert"
        }), createVNode("span", {
          children: "circle-alert（エラー）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "code"
        }), createVNode("span", {
          children: "code（コード）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "file-text"
        }), createVNode("span", {
          children: "file-text（文書）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "search"
        }), createVNode("span", {
          children: "search（検索）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "x"
        }), createVNode("span", {
          children: "x（閉じる）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "languages"
        }), createVNode("span", {
          children: "languages（言語）"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "ナビゲーションアイコン",
      children: "ナビゲーションアイコン"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-right"
        }), createVNode("span", {
          children: "arrow-right（右矢印）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-left"
        }), createVNode("span", {
          children: "arrow-left（左矢印）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-down"
        }), createVNode("span", {
          children: "arrow-down（下矢印）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-up"
        }), createVNode("span", {
          children: "arrow-up（上矢印）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "external-link"
        }), createVNode("span", {
          children: "external-link（外部リンク）"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "アクションアイコン",
      children: "アクションアイコン"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "pencil"
        }), createVNode("span", {
          children: "pencil（編集）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "copy"
        }), createVNode("span", {
          children: "copy（コピー）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "download"
        }), createVNode("span", {
          children: "download（ダウンロード）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-check"
        }), createVNode("span", {
          children: "circle-check（成功）"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "ドキュメントアイコン",
      children: "ドキュメントアイコン"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "sticky-note"
        }), createVNode("span", {
          children: "sticky-note（ノート）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "lightbulb"
        }), createVNode("span", {
          children: "lightbulb（ヒント）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-alert"
        }), createVNode("span", {
          children: "circle-alert（重要）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "triangle-alert"
        }), createVNode("span", {
          children: "triangle-alert（注意）"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "テーマアイコン",
      children: "テーマアイコン"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "sun"
        }), createVNode("span", {
          children: "sun（ライト）"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "moon"
        }), createVNode("span", {
          children: "moon（ダーク）"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "テキスト内でのアイコンの使用",
      children: "テキスト内でのアイコンの使用"
    }), "\n", createVNode(_components.p, {
      children: "アイコンはテキスト内でインラインで使用できます："
    }), "\n", createVNode(_components.p, {
      children: ["これは情報 ", createVNode($$Icon, {
        name: "info"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これは警告 ", createVNode($$Icon, {
        name: "triangle-alert",
        color: "#ffc107"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これはエラー ", createVNode($$Icon, {
        name: "circle-alert",
        color: "#dc3545"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これは成功 ", createVNode($$Icon, {
        name: "circle-check",
        color: "#28a745"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.h2, {
      id: "アクセシビリティ",
      children: "アクセシビリティ"
    }), "\n", createVNode(_components.p, {
      children: "アクセシビリティのために、アイコンにラベルを提供できます："
    }), "\n", createVNode($$Icon, {
      name: "info",
      label: "情報"
    }), "\n", createVNode(_components.p, {
      children: "ラベルが提供されると、アイコンはスクリーンリーダーによって読み上げられます。ラベルがない場合、アイコンは装飾的なものとして扱われ、スクリーンリーダーによって無視されます。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/docs/ja/v1/guide/03-icons-example.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/03-icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/03-icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
