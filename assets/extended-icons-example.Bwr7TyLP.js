import { x as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.BUMCauiJ.js';
import { g as $$Icon } from './MainLayout.CPMgM44-.js';

const frontmatter = {
  "title": "Built-in Icons Example",
  "description": "Examples of using built-in icons"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "built-in-icon-components",
    "text": "Built-in Icon Components"
  }, {
    "depth": 2,
    "slug": "built-in-icons",
    "text": "Built-in Icons"
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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "built-in-icon-components",
      children: "Built-in Icon Components"
    }), "\n", createVNode(_components.p, {
      children: "This guide demonstrates how to use the built-in icon components in your documentation."
    }), "\n", createVNode(_components.h2, {
      id: "built-in-icons",
      children: "Built-in Icons"
    }), "\n", createVNode(_components.p, {
      children: ["The basic ", createVNode(_components.code, {
        children: "Icon"
      }), " component provides a set of built-in icons:"]
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
      children: ["For more details on the built-in icons, see the ", createVNode(_components.a, {
        href: "/en/v1/guide/icons-example",
        children: "Icons Example"
      }), " page."]
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
        name: "warning",
        color: "#ffc107"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is an error ", createVNode($$Icon, {
        name: "error",
        color: "#dc3545"
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

const url = "src/content/docs/en/v1/guide/extended-icons-example.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/extended-icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/extended-icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
