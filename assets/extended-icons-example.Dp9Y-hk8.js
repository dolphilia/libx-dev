import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.s15Ed_2b.js';
import { $ as $$Icon, a as $$LucideIcon, b as $$FontAwesomeIcon } from './MainLayout.LjJev8rm.js';

/*Solid*/
/*Regular*/
/*Brands*/
const frontmatter = {
  "title": "Extended Icons Example",
  "description": "Examples of using Lucide and FontAwesome icons"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "extended-icon-components",
    "text": "Extended Icon Components"
  }, {
    "depth": 2,
    "slug": "built-in-icons",
    "text": "Built-in Icons"
  }, {
    "depth": 2,
    "slug": "lucide-icons",
    "text": "Lucide Icons"
  }, {
    "depth": 3,
    "slug": "basic-usage",
    "text": "Basic Usage"
  }, {
    "depth": 3,
    "slug": "icon-sizes",
    "text": "Icon Sizes"
  }, {
    "depth": 3,
    "slug": "icon-colors",
    "text": "Icon Colors"
  }, {
    "depth": 3,
    "slug": "stroke-width",
    "text": "Stroke Width"
  }, {
    "depth": 3,
    "slug": "popular-lucide-icons",
    "text": "Popular Lucide Icons"
  }, {
    "depth": 2,
    "slug": "fontawesome-icons",
    "text": "FontAwesome Icons"
  }, {
    "depth": 3,
    "slug": "basic-usage-1",
    "text": "Basic Usage"
  }, {
    "depth": 3,
    "slug": "icon-styles",
    "text": "Icon Styles"
  }, {
    "depth": 3,
    "slug": "icon-sizes-1",
    "text": "Icon Sizes"
  }, {
    "depth": 3,
    "slug": "icon-colors-1",
    "text": "Icon Colors"
  }, {
    "depth": 3,
    "slug": "popular-fontawesome-icons",
    "text": "Popular FontAwesome Icons"
  }, {
    "depth": 4,
    "slug": "solid-icons-fas",
    "text": "Solid Icons (fas)"
  }, {
    "depth": 4,
    "slug": "regular-icons-far",
    "text": "Regular Icons (far)"
  }, {
    "depth": 4,
    "slug": "brand-icons-fab",
    "text": "Brand Icons (fab)"
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
    h3: "h3",
    h4: "h4",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "extended-icon-components",
      children: "Extended Icon Components"
    }), "\n", createVNode(_components.p, {
      children: "This guide demonstrates how to use the extended icon components in your documentation."
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
      id: "lucide-icons",
      children: "Lucide Icons"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "LucideIcon"
      }), " component allows you to use any icon from the ", createVNode(_components.a, {
        href: "https://lucide.dev/icons/",
        children: "Lucide icon library"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", createVNode($$LucideIcon, {
      name: "activity"
    }), "\n", createVNode(_components.h3, {
      id: "icon-sizes",
      children: "Icon Sizes"
    }), "\n", createVNode(_components.p, {
      children: "You can specify different sizes for icons:"
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
      id: "icon-colors",
      children: "Icon Colors"
    }), "\n", createVNode(_components.p, {
      children: "You can customize the color of icons:"
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
      id: "stroke-width",
      children: "Stroke Width"
    }), "\n", createVNode(_components.p, {
      children: "You can adjust the stroke width of Lucide icons:"
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
      id: "popular-lucide-icons",
      children: "Popular Lucide Icons"
    }), "\n", createVNode(_components.p, {
      children: "Here are some popular Lucide icons:"
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
      id: "fontawesome-icons",
      children: "FontAwesome Icons"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "FontAwesomeIcon"
      }), " component allows you to use any icon from the ", createVNode(_components.a, {
        href: "https://fontawesome.com/icons",
        children: "FontAwesome icon library"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "basic-usage-1",
      children: "Basic Usage"
    }), "\n", createVNode($$FontAwesomeIcon, {
      name: "coffee"
    }), "\n", createVNode(_components.h3, {
      id: "icon-styles",
      children: "Icon Styles"
    }), "\n", createVNode(_components.p, {
      children: "FontAwesome provides different icon styles through prefixes:"
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
      id: "icon-sizes-1",
      children: "Icon Sizes"
    }), "\n", createVNode(_components.p, {
      children: "You can specify different sizes for icons:"
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
      id: "icon-colors-1",
      children: "Icon Colors"
    }), "\n", createVNode(_components.p, {
      children: "You can customize the color of icons:"
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
      id: "popular-fontawesome-icons",
      children: "Popular FontAwesome Icons"
    }), "\n", createVNode(_components.p, {
      children: "Here are some popular FontAwesome icons:"
    }), "\n", createVNode(_components.h4, {
      id: "solid-icons-fas",
      children: "Solid Icons (fas)"
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
      id: "regular-icons-far",
      children: "Regular Icons (far)"
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
      id: "brand-icons-fab",
      children: "Brand Icons (fab)"
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
      id: "using-icons-in-text",
      children: "Using Icons in Text"
    }), "\n", createVNode(_components.p, {
      children: "Icons can be used inline with text:"
    }), "\n", createVNode(_components.p, {
      children: ["This is an information ", createVNode($$Icon, {
        name: "info"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is a warning ", createVNode($$LucideIcon, {
        name: "alert-triangle",
        color: "#ffc107"
      }), " message."]
    }), "\n", createVNode(_components.p, {
      children: ["This is an error ", createVNode($$FontAwesomeIcon, {
        name: "exclamation-circle",
        color: "#dc3545"
      }), " message."]
    }), "\n", createVNode(_components.h2, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", createVNode(_components.p, {
      children: "For accessibility purposes, you can provide a label for the icon:"
    }), "\n", createVNode($$LucideIcon, {
      name: "info",
      label: "Information"
    }), "\n", createVNode($$FontAwesomeIcon, {
      name: "info-circle",
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
const file = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/extended-icons-example.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro/docs-astro/apps/sample-docs/src/content/docs/en/v1/guide/extended-icons-example.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
