import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ba1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b53'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '223'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '77a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a11'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ae1'),
    exact: true
  },
  {
    path: '/blog/2022-09-26/update-backup',
    component: ComponentCreator('/blog/2022-09-26/update-backup', 'aa7'),
    exact: true
  },
  {
    path: '/blog/2022-11-21-maintenance',
    component: ComponentCreator('/blog/2022-11-21-maintenance', '746'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '6ca'),
    exact: true
  },
  {
    path: '/blog/demo',
    component: ComponentCreator('/blog/demo', 'f47'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'fe3'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f83'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ac3'),
    exact: true
  },
  {
    path: '/blog/tags/更新',
    component: ComponentCreator('/blog/tags/更新', '1e8'),
    exact: true
  },
  {
    path: '/blog/tags/通過',
    component: ComponentCreator('/blog/tags/通過', 'b00'),
    exact: true
  },
  {
    path: '/blog/tags/新增',
    component: ComponentCreator('/blog/tags/新增', 'e95'),
    exact: true
  },
  {
    path: '/blog/tags/演示文章',
    component: ComponentCreator('/blog/tags/演示文章', '216'),
    exact: true
  },
  {
    path: '/blog/tags/維護中',
    component: ComponentCreator('/blog/tags/維護中', '1b0'),
    exact: true
  },
  {
    path: '/blog/tags/驗證',
    component: ComponentCreator('/blog/tags/驗證', '835'),
    exact: true
  },
  {
    path: '/blog/tags/discord',
    component: ComponentCreator('/blog/tags/discord', 'e78'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '87c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ecd'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e17'),
    exact: true
  },
  {
    path: '/blog/verfied',
    component: ComponentCreator('/blog/verfied', '5af'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6df'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '161'),
    exact: true
  },
  {
    path: '/reporting-guidelines',
    component: ComponentCreator('/reporting-guidelines', 'aeb'),
    exact: true
  },
  {
    path: '/tos',
    component: ComponentCreator('/tos', 'a5c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '761'),
    routes: [
      {
        path: '/docs/0.0.0-beta.1',
        component: ComponentCreator('/docs/0.0.0-beta.1', 'f8b'),
        routes: [
          {
            path: '/docs/0.0.0-beta.1',
            component: ComponentCreator('/docs/0.0.0-beta.1', '04d'),
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
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f3b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5c0'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'c29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/announce',
                component: ComponentCreator('/docs/announce', 'e30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/backup/create',
                component: ComponentCreator('/docs/backup/create', 'c97'),
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
                component: ComponentCreator('/docs/category/指令', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/備份',
                component: ComponentCreator('/docs/category/備份', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/贈送',
                component: ComponentCreator('/docs/category/贈送', '269'),
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
                path: '/docs/giveaway/create',
                component: ComponentCreator('/docs/giveaway/create', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/giveaway/delete',
                component: ComponentCreator('/docs/giveaway/delete', 'ffd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grateful',
                component: ComponentCreator('/docs/grateful', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd86'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
