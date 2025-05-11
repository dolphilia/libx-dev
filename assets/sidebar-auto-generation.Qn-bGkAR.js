import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.CCXMlRHZ.js';

const frontmatter = {
  "title": "Sidebar Auto-Generation",
  "description": "Learn how to use the sidebar auto-generation feature",
  "category": "guide",
  "categoryOrder": 1,
  "pubDate": "2025-05-09T00:00:00.000Z",
  "updatedDate": "2025-05-09T00:00:00.000Z",
  "author": "Docs Team",
  "order": 3,
  "prev": {
    "text": "Installation",
    "link": "/docs-astro/en/v1/guide/installation"
  },
  "next": {
    "text": "Configuration",
    "link": "/docs-astro/en/v1/guide/configuration"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "sidebar-auto-generation",
    "text": "Sidebar Auto-Generation"
  }, {
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "enabling-auto-generation",
    "text": "Enabling Auto-Generation"
  }, {
    "depth": 2,
    "slug": "frontmatter-configuration",
    "text": "Frontmatter Configuration"
  }, {
    "depth": 3,
    "slug": "properties",
    "text": "Properties"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 2,
    "slug": "path-based-categories",
    "text": "Path-Based Categories"
  }, {
    "depth": 2,
    "slug": "category-titles",
    "text": "Category Titles"
  }, {
    "depth": 2,
    "slug": "example",
    "text": "Example"
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
      id: "sidebar-auto-generation",
      children: "Sidebar Auto-Generation"
    }), "\n", createVNode(_components.p, {
      children: "This guide explains how to use the sidebar auto-generation feature to automatically create sidebar navigation based on your content structure."
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The sidebar auto-generation feature allows you to:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Automatically generate sidebar navigation based on your content files"
      }), "\n", createVNode(_components.li, {
        children: "Define categories and their order using frontmatter"
      }), "\n", createVNode(_components.li, {
        children: "Control the order of items within categories"
      }), "\n", createVNode(_components.li, {
        children: "Customize sidebar display without manually updating configuration files"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "enabling-auto-generation",
      children: "Enabling Auto-Generation"
    }), "\n", createVNode(_components.p, {
      children: ["To enable sidebar auto-generation, set the ", createVNode(_components.code, {
        children: "useAutoSidebar"
      }), " option to ", createVNode(_components.code, {
        children: "true"
      }), " in your ", createVNode(_components.code, {
        children: "docs.config.ts"
      }), " file:"]
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
            children: "  // ... other options"
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
            children: "  // Enable auto sidebar generation"
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
            children: "  // ... other options"
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
      id: "frontmatter-configuration",
      children: "Frontmatter Configuration"
    }), "\n", createVNode(_components.p, {
      children: "To control how your content appears in the sidebar, use these frontmatter properties:"
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
            children: "\"Your Document Title\""
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
            children: "\"Document description\""
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
            children: "  # Category name (optional, defaults to path-based category)"
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
            children: "   # Order of the category in the sidebar (optional)"
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
            children: "           # Order within the category (optional)"
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
      id: "properties",
      children: "Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Property"
          }), createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Description"
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
            children: "The title of the document (required)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "category"
            })
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "The category name for grouping in the sidebar (optional)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "categoryOrder"
            })
          }), createVNode(_components.td, {
            children: "number"
          }), createVNode(_components.td, {
            children: "The order of the category in the sidebar (lower numbers appear first)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "order"
            })
          }), createVNode(_components.td, {
            children: "number"
          }), createVNode(_components.td, {
            children: "The order of the document within its category (lower numbers appear first)"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", createVNode(_components.p, {
      children: "The sidebar generation process follows these steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Collects all content files for the current language and version"
      }), "\n", createVNode(_components.li, {
        children: "Groups them by category (from frontmatter or file path)"
      }), "\n", createVNode(_components.li, {
        children: ["Sorts categories based on ", createVNode(_components.code, {
          children: "categoryOrder"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Sorts documents within each category based on ", createVNode(_components.code, {
          children: "order"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Generates the sidebar structure with proper titles and links"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "path-based-categories",
      children: "Path-Based Categories"
    }), "\n", createVNode(_components.p, {
      children: ["If you don’t specify a ", createVNode(_components.code, {
        children: "category"
      }), " in the frontmatter, the system will use the path-based category. For example:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["A file at ", createVNode(_components.code, {
          children: "src/content/docs/en/v1/guide/getting-started.mdx"
        }), " will be categorized as “guide”"]
      }), "\n", createVNode(_components.li, {
        children: ["A file at ", createVNode(_components.code, {
          children: "src/content/docs/en/v1/api/reference.mdx"
        }), " will be categorized as “api”"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "category-titles",
      children: "Category Titles"
    }), "\n", createVNode(_components.p, {
      children: "Category titles are determined in the following order:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Translation key matching ", createVNode(_components.code, {
          children: "docs.{category}"
        }), " (e.g., ", createVNode(_components.code, {
          children: "docs.guide"
        }), " → “Guide”)"]
      }), "\n", createVNode(_components.li, {
        children: "If no translation is found, the category name is capitalized (e.g., “guide” → “Guide”)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s a complete example of a document frontmatter:"
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
            children: "\"Getting Started\""
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
            children: "\"Learn how to get started with our platform\""
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
            children: "\"Docs Team\""
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
            children: "\"Installation\""
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
            children: "\"/docs-astro/en/v1/guide/installation\""
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
      children: "This will place the document in the “Guide” category (which will be ordered first in the sidebar), and it will be the first item within that category."
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

const url = "src/content/docs/en/v1/guide/sidebar-auto-generation.mdx";
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/sidebar-auto-generation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/sidebar-auto-generation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
