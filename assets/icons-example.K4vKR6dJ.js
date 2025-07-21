import { x as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.BUMCauiJ.js';
import { g as $$Icon } from './MainLayout.CPMgM44-.js';

const frontmatter = {
  "title": "Icons Example",
  "description": "Examples of using the Icon component"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "icon-component-examples",
    "text": "Icon Component Examples"
  }, {
    "depth": 2,
    "slug": "basic-usage",
    "text": "Basic Usage"
  }, {
    "depth": 2,
    "slug": "icon-sizes",
    "text": "Icon Sizes"
  }, {
    "depth": 2,
    "slug": "icon-colors",
    "text": "Icon Colors"
  }, {
    "depth": 2,
    "slug": "available-icons",
    "text": "Available Icons"
  }, {
    "depth": 3,
    "slug": "basic-icons",
    "text": "Basic Icons"
  }, {
    "depth": 3,
    "slug": "navigation-icons",
    "text": "Navigation Icons"
  }, {
    "depth": 3,
    "slug": "action-icons",
    "text": "Action Icons"
  }, {
    "depth": 3,
    "slug": "documentation-icons",
    "text": "Documentation Icons"
  }, {
    "depth": 3,
    "slug": "theme-icons",
    "text": "Theme Icons"
  }, {
    "depth": 2,
    "slug": "using-icons-in-text",
    "text": "Using Icons in Text"
  }, {
    "depth": 2,
    "slug": "accessibility",
    "text": "Accessibility"
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
      id: "icon-component-examples",
      children: "Icon Component Examples"
    }), "\n", createVNode(_components.p, {
      children: "The Icon component allows you to display various icons in your documentation."
    }), "\n", createVNode(_components.h2, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", createVNode(_components.p, {
      children: "Here’s a basic example of using the Icon component:"
    }), "\n", createVNode($$Icon, {
      name: "info"
    }), "\n", createVNode(_components.h2, {
      id: "icon-sizes",
      children: "Icon Sizes"
    }), "\n", createVNode(_components.p, {
      children: "You can specify different sizes for icons using various units:"
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
      children: "You can also use pixel units:"
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
      id: "icon-colors",
      children: "Icon Colors"
    }), "\n", createVNode(_components.p, {
      children: "You can customize the color of icons:"
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
      id: "available-icons",
      children: "Available Icons"
    }), "\n", createVNode(_components.p, {
      children: "Here are all the available icons:"
    }), "\n", createVNode(_components.h3, {
      id: "basic-icons",
      children: "Basic Icons"
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
          name: "settings"
        }), createVNode("span", {
          children: "settings"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "triangle-alert"
        }), createVNode("span", {
          children: "triangle-alert"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-alert"
        }), createVNode("span", {
          children: "circle-alert"
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
          name: "file-text"
        }), createVNode("span", {
          children: "file-text"
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
          name: "x"
        }), createVNode("span", {
          children: "x"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "languages"
        }), createVNode("span", {
          children: "languages"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "navigation-icons",
      children: "Navigation Icons"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-right"
        }), createVNode("span", {
          children: "arrow-right"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-left"
        }), createVNode("span", {
          children: "arrow-left"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-down"
        }), createVNode("span", {
          children: "arrow-down"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "arrow-up"
        }), createVNode("span", {
          children: "arrow-up"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "external-link"
        }), createVNode("span", {
          children: "external-link"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "action-icons",
      children: "Action Icons"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "pencil"
        }), createVNode("span", {
          children: "pencil"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "copy"
        }), createVNode("span", {
          children: "copy"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "download"
        }), createVNode("span", {
          children: "download"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-check"
        }), createVNode("span", {
          children: "circle-check"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "documentation-icons",
      children: "Documentation Icons"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "sticky-note"
        }), createVNode("span", {
          children: "sticky-note"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "lightbulb"
        }), createVNode("span", {
          children: "lightbulb"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "circle-alert"
        }), createVNode("span", {
          children: "circle-alert (important)"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "triangle-alert"
        }), createVNode("span", {
          children: "triangle-alert (caution)"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "theme-icons",
      children: "Theme Icons"
    }), "\n", createVNode("div", {
      style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;",
      children: [createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "sun"
        }), createVNode("span", {
          children: "sun"
        })]
      }), createVNode("div", {
        style: "display: flex; flex-direction: column; align-items: center;",
        children: [createVNode($$Icon, {
          name: "moon"
        }), createVNode("span", {
          children: "moon"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "using-icons-in-text",
      children: "Using Icons in Text"
    }), "\n", createVNode(_components.p, {
      children: "Icons can be used inline with text:"
    }), "\n", createVNode(_components.p, {
      children: ["This is an information ", createVNode($$Icon, {
        name: "info"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is a warning ", createVNode($$Icon, {
        name: "triangle-alert",
        color: "#ffc107"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is an error ", createVNode($$Icon, {
        name: "circle-alert",
        color: "#dc3545"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is a success ", createVNode($$Icon, {
        name: "circle-check",
        color: "#28a745"
      }), " message."]
    }), "\n", createVNode(_components.h2, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", createVNode(_components.p, {
      children: "For accessibility purposes, you can provide a label for the icon:"
    }), "\n", createVNode($$Icon, {
      name: "info",
      label: "Information"
    }), "\n", createVNode(_components.p, {
      children: "When a label is provided, the icon will be announced by screen readers. Without a label, the icon is treated as decorative and will be ignored by screen readers."
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

const url = "src/content/docs/en/v1/guide/icons-example.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
