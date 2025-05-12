import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.5q-sLdO5.js';
import { a as $$Tabs, b as $$TabItem } from './MainLayout.C9o2takC.js';

const frontmatter = {
  "title": "タブコンポーネントの例",
  "description": "ドキュメントでのタブコンポーネントの使用例"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "タブコンポーネントの例",
    "text": "タブコンポーネントの例"
  }, {
    "depth": 2,
    "slug": "基本的な使い方",
    "text": "基本的な使い方"
  }, {
    "depth": 2,
    "slug": "同期タブ",
    "text": "同期タブ"
  }, {
    "depth": 2,
    "slug": "アイコン付きタブ",
    "text": "アイコン付きタブ"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "タブコンポーネントの例",
      children: "タブコンポーネントの例"
    }), "\n", createVNode(_components.p, {
      children: "このページでは、ドキュメントでのタブコンポーネントの使用方法を示します。"
    }), "\n", createVNode(_components.h2, {
      id: "基本的な使い方",
      children: "基本的な使い方"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "HTML",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "html",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "<!"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "DOCTYPE"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "html"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "head"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    <"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "title"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">Hello World</"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "title"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  </"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "head"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "body"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    <"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "h1"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">Hello, world!</"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "h1"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  </"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "body"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "html"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">"
              })]
            })]
          })
        })
      }), createVNode($$TabItem, {
        label: "CSS",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "css",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "body"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "  font-family"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "system-ui"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "sans-serif"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "  color"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "#333"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "  background-color"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "#f9f9f9"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#85E89D"
                },
                children: "h1"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "  color"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "navy"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "}"
              })
            })]
          })
        })
      }), createVNode($$TabItem, {
        label: "JavaScript",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "js",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "document."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "addEventListener"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'DOMContentLoaded'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", () "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Hello, world!'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "});"
              })
            })]
          })
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "同期タブ",
      children: "同期タブ"
    }), "\n", createVNode(_components.p, {
      children: ["これらのタブは ", createVNode(_components.code, {
        children: "syncKey"
      }), " プロパティを使用してページ全体で同期されます。"]
    }), "\n", createVNode($$Tabs, {
      syncKey: "languages",
      children: [createVNode($$TabItem, {
        label: "JavaScript",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "js",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// JavaScript の例"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " greet"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " `こんにちは、${"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "}さん！`"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "greet"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'世界'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "));"
              })]
            })]
          })
        })
      }), createVNode($$TabItem, {
        label: "TypeScript",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "ts",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// TypeScript の例"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " greet"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " `こんにちは、${"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "}さん！`"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "greet"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'世界'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "));"
              })]
            })]
          })
        })
      }), createVNode($$TabItem, {
        label: "Python",
        children: createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "# Python の例"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " greet"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(name):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    return"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " f"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"こんにちは、"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "{"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "}"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "さん！\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "print"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(greet("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"世界\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "))"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["同じ ", createVNode(_components.code, {
        children: "syncKey"
      }), " を持つ別のタブセットは、上記のタブと同期状態を維持します："]
    }), "\n", createVNode($$Tabs, {
      syncKey: "languages",
      children: [createVNode($$TabItem, {
        label: "JavaScript",
        children: createVNode(_components.p, {
          children: "JavaScriptは、Webページで動的なコンテンツを可能にするスクリプト言語です。"
        })
      }), createVNode($$TabItem, {
        label: "TypeScript",
        children: createVNode(_components.p, {
          children: "TypeScriptは、JavaScriptをベースにした強力な型付けプログラミング言語です。"
        })
      }), createVNode($$TabItem, {
        label: "Python",
        children: createVNode(_components.p, {
          children: "Pythonは、高水準の汎用プログラミング言語です。"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "アイコン付きタブ",
      children: "アイコン付きタブ"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "情報",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide-info\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/></svg>",
        children: createVNode(_components.p, {
          children: "このタブには情報アイコンがあります。"
        })
      }), createVNode($$TabItem, {
        label: "設定",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide-settings\"><path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>",
        children: createVNode(_components.p, {
          children: "このタブには設定アイコンがあります。"
        })
      }), createVNode($$TabItem, {
        label: "警告",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide-alert-triangle\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg>",
        children: createVNode(_components.p, {
          children: "このタブには警告アイコンがあります。"
        })
      })]
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

const url = "src/content/docs/ja/v1/guide/tabs-example.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/tabs-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/ja/v1/guide/tabs-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
