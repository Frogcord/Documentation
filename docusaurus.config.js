// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Backup Mode',
  tagline: 'Backup Mode | 一個超優質的備份機器人',
  url: 'https://docs.backupmode.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Backup-Mode', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true, // 在生产环境启用插件
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Backup-Mode/Documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Backup-Mode/Documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '本文檔網站正在慢慢成型中，歡迎加入<a target="_blank" rel="noopener noreferrer" href="#">我們的Discord群組</a>來獲取最新消息。',
        backgroundColor: '#696969',
        textColor: '#ffffe0',
        isCloseable: true,
      },
      navbar: {
        title: 'Backup Mode',
        logo: {
          alt: 'Backup Mode Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教學文檔',
          },
          {to: '/blog', label: '部落格', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Backup-Mode/Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文檔',
            items: [
              {
                label: '入門',
                to: '/docs',
              },
            ],
          },
          {
            title: '更多區域',
            items: [
              {
                label: '部落格',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Backup-Mode/Documentation',
              },
            ],
          },
        ],
        copyright: `The entirety of this site is protected by copyright ©️ 2021–${new Date().getFullYear()} Backup Mode.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
