import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.5q-sLdO5.js';

const frontmatter = {
  "title": "サイドバーの自動生成",
  "description": "サイドバー自動生成機能の使い方を学ぶ",
  "category": "guide",
  "categoryOrder": 1,
  "pubDate": "2025-05-09T00:00:00.000Z",
  "updatedDate": "2025-05-09T00:00:00.000Z",
  "author": "ドキュメントチーム",
  "order": 3,
  "prev": {
    "text": "インストール",
    "link": "/docs-astro/ja/v1/guide/installation"
  },
  "next": {
    "text": "設定",
    "link": "/docs-astro/ja/v1/guide/configuration"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "サイドバーの自動生成",
    "text": "サイドバーの自動生成"
  }, {
    "depth": 2,
    "slug": "概要",
    "text": "概要"
  }, {
    "depth": 2,
    "slug": "自動生成の有効化",
    "text": "自動生成の有効化"
  }, {
    "depth": 2,
    "slug": "フロントマターの設定",
    "text": "フロントマターの設定"
  }, {
    "depth": 3,
    "slug": "プロパティ",
    "text": "プロパティ"
  }, {
    "depth": 2,
    "slug": "動作の仕組み",
    "text": "動作の仕組み"
  }, {
    "depth": 2,
    "slug": "パスベースのカテゴリ",
    "text": "パスベースのカテゴリ"
  }, {
    "depth": 2,
    "slug": "カテゴリタイトル",
    "text": "カテゴリタイトル"
  }, {
    "depth": 2,
    "slug": "例",
    "text": "例"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "サイドバーの自動生成",
      children: "サイドバーの自動生成"
    }), "\n", createVNode(_components.p, {
      children: "このガイドでは、コンテンツ構造に基づいてサイドバーナビゲーションを自動的に作成するサイドバー自動生成機能の使い方を説明します。"
    }), "\n", createVNode(_components.h2, {
      id: "概要",
      children: "概要"
    }), "\n", createVNode(_components.p, {
      children: "サイドバー自動生成機能では、以下のことが可能です："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "コンテンツファイルに基づいてサイドバーナビゲーションを自動生成"
      }), "\n", createVNode(_components.li, {
        children: "フロントマターを使用してカテゴリとその順序を定義"
      }), "\n", createVNode(_components.li, {
        children: "カテゴリ内の項目の順序を制御"
      }), "\n", createVNode(_components.li, {
        children: "設定ファイルを手動で更新せずにサイドバー表示をカスタマイズ"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "自動生成の有効化",
      children: "自動生成の有効化"
    }), "\n", createVNode(_components.p, {
      children: ["サイドバー自動生成を有効にするには、", createVNode(_components.code, {
        children: "docs.config.ts"
      }), "ファイルで", createVNode(_components.code, {
        children: "useAutoSidebar"
      }), "オプションを", createVNode(_components.code, {
        children: "true"
      }), "に設定します："]
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
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// apps/sample-docs/src/config/docs.config.ts"
          })
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
            children: " docsConfig"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ... その他のオプション"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // サイドバー自動生成を有効化"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  useAutoSidebar: "
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
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ... その他のオプション"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "フロントマターの設定",
      children: "フロントマターの設定"
    }), "\n", createVNode(_components.p, {
      children: "サイドバーでのコンテンツの表示方法を制御するには、以下のフロントマタープロパティを使用します："
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"ドキュメントのタイトル\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"ドキュメントの説明\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "category"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"guide\""
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # カテゴリ名（省略可、デフォルトはパスベースのカテゴリ）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "categoryOrder"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   # サイドバーでのカテゴリの順序（省略可）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "order"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "           # カテゴリ内での順序（省略可）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "---"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "プロパティ",
      children: "プロパティ"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "プロパティ"
          }), createVNode(_components.th, {
            children: "型"
          }), createVNode(_components.th, {
            children: "説明"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "title"
            })
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "ドキュメントのタイトル（必須）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "category"
            })
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "サイドバーでのグループ化に使用するカテゴリ名（省略可）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "categoryOrder"
            })
          }), createVNode(_components.td, {
            children: "number"
          }), createVNode(_components.td, {
            children: "サイドバーでのカテゴリの順序（数値が小さいほど先に表示）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "order"
            })
          }), createVNode(_components.td, {
            children: "number"
          }), createVNode(_components.td, {
            children: "カテゴリ内でのドキュメントの順序（数値が小さいほど先に表示）"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "動作の仕組み",
      children: "動作の仕組み"
    }), "\n", createVNode(_components.p, {
      children: "サイドバー生成プロセスは以下の手順で行われます："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "現在の言語とバージョンのすべてのコンテンツファイルを収集"
      }), "\n", createVNode(_components.li, {
        children: "カテゴリ（フロントマターまたはファイルパスから）でグループ化"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "categoryOrder"
        }), "に基づいてカテゴリを並べ替え"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "order"
        }), "に基づいて各カテゴリ内のドキュメントを並べ替え"]
      }), "\n", createVNode(_components.li, {
        children: "適切なタイトルとリンクを持つサイドバー構造を生成"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "パスベースのカテゴリ",
      children: "パスベースのカテゴリ"
    }), "\n", createVNode(_components.p, {
      children: ["フロントマターで", createVNode(_components.code, {
        children: "category"
      }), "を指定しない場合、システムはパスベースのカテゴリを使用します。例えば："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "src/content/docs/ja/v1/guide/getting-started.mdx"
        }), "のファイルは「guide」としてカテゴリ分けされます"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "src/content/docs/ja/v1/api/reference.mdx"
        }), "のファイルは「api」としてカテゴリ分けされます"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "カテゴリタイトル",
      children: "カテゴリタイトル"
    }), "\n", createVNode(_components.p, {
      children: "カテゴリタイトルは以下の順序で決定されます："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "docs.{category}"
        }), "に一致する翻訳キー（例：", createVNode(_components.code, {
          children: "docs.guide"
        }), " → 「ガイド」）"]
      }), "\n", createVNode(_components.li, {
        children: "翻訳が見つからない場合、カテゴリ名の最初の文字を大文字にします（例：「guide」→ 「Guide」）"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "例",
      children: "例"
    }), "\n", createVNode(_components.p, {
      children: "以下はドキュメントのフロントマターの完全な例です："
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"入門\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"プラットフォームの使い方を学ぶ\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "category"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"guide\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "categoryOrder"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "order"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "pubDate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2025-01-01"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "updatedDate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2025-01-01"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"ドキュメントチーム\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "next"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  text"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"インストール\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  link"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/docs-astro/ja/v1/guide/installation\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "---"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "これにより、ドキュメントは「ガイド」カテゴリ（サイドバーで最初に表示される）に配置され、そのカテゴリ内の最初の項目になります。"
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

const url = "src/content/docs/ja/v1/guide/sidebar-auto-generation.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/sidebar-auto-generation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/sidebar-auto-generation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
