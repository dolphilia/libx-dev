import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.DKee8O4h.js';
import { $ as $$Icon } from './versions.config.Bb-TNpaT.js';

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
      children: "アイコンにはさまざまなサイズを指定できます："
    }), "\n", createVNode("div", {
      style: "display: flex; align-items: center; gap: 1rem;",
      children: [createVNode($$Icon, {
        name: "info",
        size: 16
      }), createVNode($$Icon, {
        name: "info",
        size: 24
      }), createVNode($$Icon, {
        name: "info",
        size: 32
      }), createVNode($$Icon, {
        name: "info",
        size: 48
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
        name: "warning",
        color: "#ffc107"
      }), createVNode($$Icon, {
        name: "error",
        color: "#dc3545"
      }), createVNode($$Icon, {
        name: "check",
        color: "#28a745"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "利用可能なアイコン",
      children: "利用可能なアイコン"
    }), "\n", createVNode(_components.p, {
      children: "利用可能なすべてのアイコン："
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "info"
        }), createVNode("span", {
          children: "info"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "setting"
        }), createVNode("span", {
          children: "setting"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "warning"
        }), createVNode("span", {
          children: "warning"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "error"
        }), createVNode("span", {
          children: "error"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "check"
        }), createVNode("span", {
          children: "check"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "code"
        }), createVNode("span", {
          children: "code"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "document"
        }), createVNode("span", {
          children: "document"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "search"
        }), createVNode("span", {
          children: "search"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "close"
        }), createVNode("span", {
          children: "close"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "right-arrow"
        }), createVNode("span", {
          children: "right-arrow"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "left-arrow"
        }), createVNode("span", {
          children: "left-arrow"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "down-arrow"
        }), createVNode("span", {
          children: "down-arrow"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "up-arrow"
        }), createVNode("span", {
          children: "up-arrow"
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
        name: "warning",
        color: "#ffc107"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これはエラー ", createVNode($$Icon, {
        name: "error",
        color: "#dc3545"
      }), " メッセージです。"]
    }), "\n", createVNode(_components.p, {
      children: ["これは成功 ", createVNode($$Icon, {
        name: "check",
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

const url = "src/content/docs/ja/v1/guide/icons-example.mdx";
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
