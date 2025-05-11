import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.s15Ed_2b.js';
import { $ as $$Icon, a as $$LucideIcon, b as $$FontAwesomeIcon } from './MainLayout.LjJev8rm.js';

/*Solid*/
/*Regular*/
/*Brands*/
const frontmatter = {
  "title": "拡張アイコン例",
  "description": "LucideとFontAwesomeアイコンの使用例"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "拡張アイコンコンポーネント",
    "text": "拡張アイコンコンポーネント"
  }, {
    "depth": 2,
    "slug": "組み込みアイコン",
    "text": "組み込みアイコン"
  }, {
    "depth": 2,
    "slug": "lucideアイコン",
    "text": "Lucideアイコン"
  }, {
    "depth": 3,
    "slug": "基本的な使い方",
    "text": "基本的な使い方"
  }, {
    "depth": 3,
    "slug": "アイコンサイズ",
    "text": "アイコンサイズ"
  }, {
    "depth": 3,
    "slug": "アイコンの色",
    "text": "アイコンの色"
  }, {
    "depth": 3,
    "slug": "ストロークの太さ",
    "text": "ストロークの太さ"
  }, {
    "depth": 3,
    "slug": "人気のlucideアイコン",
    "text": "人気のLucideアイコン"
  }, {
    "depth": 2,
    "slug": "fontawesomeアイコン",
    "text": "FontAwesomeアイコン"
  }, {
    "depth": 3,
    "slug": "基本的な使い方-1",
    "text": "基本的な使い方"
  }, {
    "depth": 3,
    "slug": "アイコンスタイル",
    "text": "アイコンスタイル"
  }, {
    "depth": 3,
    "slug": "アイコンサイズ-1",
    "text": "アイコンサイズ"
  }, {
    "depth": 3,
    "slug": "アイコンの色-1",
    "text": "アイコンの色"
  }, {
    "depth": 3,
    "slug": "人気のfontawesomeアイコン",
    "text": "人気のFontAwesomeアイコン"
  }, {
    "depth": 4,
    "slug": "solidアイコン-fas",
    "text": "Solidアイコン (fas)"
  }, {
    "depth": 4,
    "slug": "regularアイコン-far",
    "text": "Regularアイコン (far)"
  }, {
    "depth": 4,
    "slug": "ブランドアイコン-fab",
    "text": "ブランドアイコン (fab)"
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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "拡張アイコンコンポーネント",
      children: "拡張アイコンコンポーネント"
    }), "\n", createVNode(_components.p, {
      children: "このガイドでは、ドキュメント内で拡張アイコンコンポーネントを使用する方法を説明します。"
    }), "\n", createVNode(_components.h2, {
      id: "組み込みアイコン",
      children: "組み込みアイコン"
    }), "\n", createVNode(_components.p, {
      children: ["基本的な", createVNode(_components.code, {
        children: "Icon"
      }), "コンポーネントは、組み込みのアイコンセットを提供します："]
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$Icon, {
        name: "info"
      }), createVNode($$Icon, {
        name: "warning"
      }), createVNode($$Icon, {
        name: "error"
      }), createVNode($$Icon, {
        name: "success"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["組み込みアイコンの詳細については、", createVNode(_components.a, {
        href: "/ja/v1/guide/icons-example",
        children: "アイコン例"
      }), "ページをご覧ください。"]
    }), "\n", createVNode(_components.h2, {
      id: "lucideアイコン",
      children: "Lucideアイコン"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "LucideIcon"
      }), "コンポーネントを使用すると、", createVNode(_components.a, {
        href: "https://lucide.dev/icons/",
        children: "Lucideアイコンライブラリ"
      }), "のあらゆるアイコンを使用できます。"]
    }), "\n", createVNode(_components.h3, {
      id: "基本的な使い方",
      children: "基本的な使い方"
    }), "\n", createVNode($$LucideIcon, {
      name: "activity"
    }), "\n", createVNode(_components.h3, {
      id: "アイコンサイズ",
      children: "アイコンサイズ"
    }), "\n", createVNode(_components.p, {
      children: "アイコンのサイズを指定できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$LucideIcon, {
        name: "activity",
        size: "1em"
      }), createVNode($$LucideIcon, {
        name: "activity",
        size: "1.5em"
      }), createVNode($$LucideIcon, {
        name: "activity",
        size: "2em"
      }), createVNode($$LucideIcon, {
        name: "activity",
        size: "3em"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "アイコンの色",
      children: "アイコンの色"
    }), "\n", createVNode(_components.p, {
      children: "アイコンの色をカスタマイズできます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$LucideIcon, {
        name: "heart",
        color: "#ff0000"
      }), createVNode($$LucideIcon, {
        name: "star",
        color: "#ffd700"
      }), createVNode($$LucideIcon, {
        name: "thumbs-up",
        color: "#008000"
      }), createVNode($$LucideIcon, {
        name: "bell",
        color: "#0000ff"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "ストロークの太さ",
      children: "ストロークの太さ"
    }), "\n", createVNode(_components.p, {
      children: "Lucideアイコンのストロークの太さを調整できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$LucideIcon, {
        name: "activity",
        strokeWidth: 1
      }), createVNode($$LucideIcon, {
        name: "activity",
        strokeWidth: 2
      }), createVNode($$LucideIcon, {
        name: "activity",
        strokeWidth: 3
      })]
    }), "\n", createVNode(_components.h3, {
      id: "人気のlucideアイコン",
      children: "人気のLucideアイコン"
    }), "\n", createVNode(_components.p, {
      children: "以下は人気のLucideアイコンです："
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "activity"
        }), createVNode("span", {
          children: "activity"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "alert-circle"
        }), createVNode("span", {
          children: "alert-circle"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "alert-triangle"
        }), createVNode("span", {
          children: "alert-triangle"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "bookmark"
        }), createVNode("span", {
          children: "bookmark"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "check"
        }), createVNode("span", {
          children: "check"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "check-circle"
        }), createVNode("span", {
          children: "check-circle"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "chevron-down"
        }), createVNode("span", {
          children: "chevron-down"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "chevron-up"
        }), createVNode("span", {
          children: "chevron-up"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "clipboard"
        }), createVNode("span", {
          children: "clipboard"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "code"
        }), createVNode("span", {
          children: "code"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "download"
        }), createVNode("span", {
          children: "download"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$LucideIcon, {
          name: "external-link"
        }), createVNode("span", {
          children: "external-link"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "fontawesomeアイコン",
      children: "FontAwesomeアイコン"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "FontAwesomeIcon"
      }), "コンポーネントを使用すると、", createVNode(_components.a, {
        href: "https://fontawesome.com/icons",
        children: "FontAwesomeアイコンライブラリ"
      }), "のあらゆるアイコンを使用できます。"]
    }), "\n", createVNode(_components.h3, {
      id: "基本的な使い方-1",
      children: "基本的な使い方"
    }), "\n", createVNode($$FontAwesomeIcon, {
      name: "coffee"
    }), "\n", createVNode(_components.h3, {
      id: "アイコンスタイル",
      children: "アイコンスタイル"
    }), "\n", createVNode(_components.p, {
      children: "FontAwesomeは、プレフィックスを通じて異なるアイコンスタイルを提供します："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$FontAwesomeIcon, {
        name: "star",
        prefix: "fas"
      }), createVNode($$FontAwesomeIcon, {
        name: "star",
        prefix: "far"
      }), createVNode($$FontAwesomeIcon, {
        name: "github",
        prefix: "fab"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "アイコンサイズ-1",
      children: "アイコンサイズ"
    }), "\n", createVNode(_components.p, {
      children: "アイコンのサイズを指定できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$FontAwesomeIcon, {
        name: "coffee",
        size: "1em"
      }), createVNode($$FontAwesomeIcon, {
        name: "coffee",
        size: "1.5em"
      }), createVNode($$FontAwesomeIcon, {
        name: "coffee",
        size: "2em"
      }), createVNode($$FontAwesomeIcon, {
        name: "coffee",
        size: "3em"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "アイコンの色-1",
      children: "アイコンの色"
    }), "\n", createVNode(_components.p, {
      children: "アイコンの色をカスタマイズできます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$FontAwesomeIcon, {
        name: "heart",
        color: "#ff0000"
      }), createVNode($$FontAwesomeIcon, {
        name: "star",
        color: "#ffd700"
      }), createVNode($$FontAwesomeIcon, {
        name: "thumbs-up",
        color: "#008000"
      }), createVNode($$FontAwesomeIcon, {
        name: "bell",
        color: "#0000ff"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "人気のfontawesomeアイコン",
      children: "人気のFontAwesomeアイコン"
    }), "\n", createVNode(_components.p, {
      children: "以下は人気のFontAwesomeアイコンです："
    }), "\n", createVNode(_components.h4, {
      id: "solidアイコン-fas",
      children: "Solidアイコン (fas)"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "home",
          prefix: "fas"
        }), createVNode("span", {
          children: "home"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "user",
          prefix: "fas"
        }), createVNode("span", {
          children: "user"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "cog",
          prefix: "fas"
        }), createVNode("span", {
          children: "cog"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "search",
          prefix: "fas"
        }), createVNode("span", {
          children: "search"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "check",
          prefix: "fas"
        }), createVNode("span", {
          children: "check"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "times",
          prefix: "fas"
        }), createVNode("span", {
          children: "times"
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "regularアイコン-far",
      children: "Regularアイコン (far)"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "bookmark",
          prefix: "far"
        }), createVNode("span", {
          children: "bookmark"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "calendar",
          prefix: "far"
        }), createVNode("span", {
          children: "calendar"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "comment",
          prefix: "far"
        }), createVNode("span", {
          children: "comment"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "file",
          prefix: "far"
        }), createVNode("span", {
          children: "file"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "heart",
          prefix: "far"
        }), createVNode("span", {
          children: "heart"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "star",
          prefix: "far"
        }), createVNode("span", {
          children: "star"
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "ブランドアイコン-fab",
      children: "ブランドアイコン (fab)"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "github",
          prefix: "fab"
        }), createVNode("span", {
          children: "github"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "twitter",
          prefix: "fab"
        }), createVNode("span", {
          children: "twitter"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "facebook",
          prefix: "fab"
        }), createVNode("span", {
          children: "facebook"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "linkedin",
          prefix: "fab"
        }), createVNode("span", {
          children: "linkedin"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "youtube",
          prefix: "fab"
        }), createVNode("span", {
          children: "youtube"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$FontAwesomeIcon, {
          name: "npm",
          prefix: "fab"
        }), createVNode("span", {
          children: "npm"
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
      children: ["これは警告 ", createVNode($$LucideIcon, {
        name: "alert-triangle",
        color: "#ffc107"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これはエラー ", createVNode($$FontAwesomeIcon, {
        name: "exclamation-circle",
        color: "#dc3545"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.h2, {
      id: "アクセシビリティ",
      children: "アクセシビリティ"
    }), "\n", createVNode(_components.p, {
      children: "アクセシビリティのために、アイコンにラベルを提供できます："
    }), "\n", createVNode($$LucideIcon, {
      name: "info",
      label: "情報"
    }), "\n", createVNode($$FontAwesomeIcon, {
      name: "info-circle",
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

const url = "src/content/docs/ja/v1/guide/extended-icons-example.mdx";
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/extended-icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/extended-icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
