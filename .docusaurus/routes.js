import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'de7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cdc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '954'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '42f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6cd'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5b2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f73'),
    exact: true
  },
  {
    path: '/blog/demo',
    component: ComponentCreator('/blog/demo', 'b64'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2b8'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4de'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '06f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '618'),
    exact: true
  },
  {
    path: '/blog/tags/演示文章',
    component: ComponentCreator('/blog/tags/演示文章', '791'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '53b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2d6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '801'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b1f'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '97b'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '96e'),
    exact: true
  },
  {
    path: '/reporting-guidelines',
    component: ComponentCreator('/reporting-guidelines', '57a'),
    exact: true
  },
  {
    path: '/tos',
    component: ComponentCreator('/tos', '080'),
    exact: true
  },
  {
    path: '/docs/0.0.0-beta.1',
    component: ComponentCreator('/docs/0.0.0-beta.1', 'aef'),
    routes: [
      {
        path: '/docs/0.0.0-beta.1/',
        component: ComponentCreator('/docs/0.0.0-beta.1/', '7d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/backup',
        component: ComponentCreator('/docs/0.0.0-beta.1/backup', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/category/tutorial---basics',
        component: ComponentCreator('/docs/0.0.0-beta.1/category/tutorial---basics', 'bc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/category/tutorial---extras',
        component: ComponentCreator('/docs/0.0.0-beta.1/category/tutorial---extras', '948'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/commands',
        component: ComponentCreator('/docs/0.0.0-beta.1/commands', '328'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/grateful',
        component: ComponentCreator('/docs/0.0.0-beta.1/grateful', '7df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/congratulations', '7c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/create-a-blog-post', 'd96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/create-a-document', 'c6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/create-a-page', '16a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/deploy-your-site', '210'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-basics/markdown-features', '3ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-extras/manage-docs-versions', 'd66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.0.0-beta.1/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/0.0.0-beta.1/tutorial-extras/translate-your-site', '0a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '943'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'c29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/backup',
        component: ComponentCreator('/docs/backup', '32a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bug',
        component: ComponentCreator('/docs/bug', 'a82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/指令',
        component: ComponentCreator('/docs/category/指令', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/commands',
        component: ComponentCreator('/docs/commands', '387'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grateful',
        component: ComponentCreator('/docs/grateful', '8f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '62f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
