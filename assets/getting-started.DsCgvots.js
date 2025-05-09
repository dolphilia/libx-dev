import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.BeZcSwAP.js';

const frontmatter = {
  "title": "はじめに",
  "description": "プラットフォームの使い方を学ぶ",
  "pubDate": "2024-01-01T00:00:00.000Z",
  "updatedDate": "2025-01-01T00:00:00.000Z",
  "author": "ドキュメントチーム",
  "order": 1,
  "next": {
    "text": "インストール",
    "link": "/docs-astro/ja/v1/guide/installation"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "はじめに",
    "text": "はじめに"
  }, {
    "depth": 2,
    "slug": "前提条件",
    "text": "前提条件"
  }, {
    "depth": 2,
    "slug": "インストール",
    "text": "インストール"
  }, {
    "depth": 2,
    "slug": "基本的な使い方",
    "text": "基本的な使い方"
  }, {
    "depth": 2,
    "slug": "次のステップ",
    "text": "次のステップ"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "はじめに",
      children: "はじめに"
    }), "\n", createVNode(_components.p, {
      children: "ドキュメントへようこそ！このガイドでは、プラットフォームの使い方について説明します。"
    }), "\n", createVNode(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Node.js 18以上"
      }), "\n", createVNode(_components.li, {
        children: "npm、yarn、またはpnpm"
      }), "\n", createVNode(_components.li, {
        children: "JavaScriptの基本的な知識"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "インストール",
      children: "インストール"
    }), "\n", createVNode(_components.p, {
      children: "npmを使用してパッケージをインストールできます："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @our-package/core"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "または、yarnを使用："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "yarn"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @our-package/core"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "または、pnpmを使用："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pnpm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @our-package/core"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "基本的な使い方",
      children: "基本的な使い方"
    }), "\n", createVNode(_components.p, {
      children: "パッケージの使用例："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { createApp } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '@our-package/core'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " app"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createApp"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 設定オプション"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  debug: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  mode: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'development'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "app."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "start"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "次のステップ",
      children: "次のステップ"
    }), "\n", createVNode(_components.p, {
      children: "基本的なセットアップが完了したら、以下のことができます："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/docs-astro/ja/v1/guide/configuration",
          children: "設定オプション"
        }), "について詳しく学ぶ"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/docs-astro/ja/v1/api/reference",
          children: "APIリファレンス"
        }), "を調べる"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/docs-astro/ja/v1/examples",
          children: "サンプル"
        }), "を確認する"]
      }), "\n"]
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

const url = "src/content/docs/ja/v1/guide/getting-started.mdx";
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/ja/v1/guide/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
