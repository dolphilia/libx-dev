import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.CcJSDeTb.js';

const frontmatter = {
  "title": "Getting Started",
  "description": "Learn how to get started with our platform",
  "category": "guide",
  "categoryOrder": 1,
  "pubDate": "2024-01-01T00:00:00.000Z",
  "updatedDate": "2025-01-01T00:00:00.000Z",
  "author": "Docs Team",
  "order": 1,
  "next": {
    "text": "Installation",
    "link": "/docs-astro/en/v1/guide/installation"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 2,
    "slug": "basic-usage",
    "text": "Basic Usage"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
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
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to our documentation! This guide will help you get started with our platform."
    }), "\n", createVNode(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Node.js 18 or higher"
      }), "\n", createVNode(_components.li, {
        children: "npm, yarn, or pnpm"
      }), "\n", createVNode(_components.li, {
        children: "Basic knowledge of JavaScript"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.p, {
      children: "You can install our package using npm:"
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
      children: "Or using yarn:"
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
      children: "Or using pnpm:"
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
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", createVNode(_components.p, {
      children: "Here’s a simple example of how to use our package:"
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
            children: "  // Configuration options"
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
      id: "next-steps",
      children: "Next Steps"
    }), "\n", createVNode(_components.p, {
      children: "Now that you have the basics set up, you can:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Learn more about ", createVNode(_components.a, {
          href: "/docs-astro/en/v1/guide/configuration",
          children: "configuration options"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Explore the ", createVNode(_components.a, {
          href: "/docs-astro/en/v1/api/reference",
          children: "API reference"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Check out some ", createVNode(_components.a, {
          href: "/docs-astro/en/v1/examples",
          children: "examples"
        })]
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

const url = "src/content/docs/en/v1/guide/getting-started.mdx";
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
