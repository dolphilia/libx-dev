import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.5q-sLdO5.js';
import { $ as $$Icon } from './MainLayout.C9o2takC.js';

const frontmatter = {
  "title": "組み込みアイコン例",
  "description": "組み込みアイコンの使用例"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "組み込みアイコンコンポーネント",
    "text": "組み込みアイコンコンポーネント"
  }, {
    "depth": 2,
    "slug": "組み込みアイコン",
    "text": "組み込みアイコン"
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
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "組み込みアイコンコンポーネント",
      children: "組み込みアイコンコンポーネント"
    }), "\n", createVNode(_components.p, {
      children: "このガイドでは、ドキュメント内で組み込みアイコンコンポーネントを使用する方法を説明します。"
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

const url = "src/content/docs/ja/v1/guide/extended-icons-example.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/extended-icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/extended-icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
