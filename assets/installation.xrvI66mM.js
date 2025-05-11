import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.CCXMlRHZ.js';

const frontmatter = {
  "title": "Installation",
  "description": "Description of Installation",
  "pubDate": "2025-05-09T00:00:00.000Z",
  "author": "Docs Team",
  "order": 1,
  "next": {
    "text": "Getting Started",
    "link": "/docs-astro/en/v1/guide/getting-started"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "installation",
    "text": "Installation"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.p, {
      children: "Write your content here…"
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

const url = "src/content/docs/en/v1/guide/installation.mdx";
const file = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/installation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/docs-astro-dev/docs-astro-dev/apps/sample-docs/src/content/docs/en/v1/guide/installation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
