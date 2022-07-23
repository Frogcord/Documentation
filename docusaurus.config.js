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
          '本文檔網站正在慢慢成型中，歡迎加入<a target="_blank" rel="noopener noreferrer" href="https://discord.backupmode.xyz/">我們的Discord群組</a>來獲取最新消息。',
        backgroundColor: '#696969',
        textColor: '#ffffe0',
        isCloseable: true,
      },
      navbar: {
        title: 'Backup Mode',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教學文檔',
          },
          {
            to: '/blog', 
            label: '部落格', 
            position: 'left'
          },
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
            title: '文檔推薦',
            items: [
              {
                label: '入門介紹',
                to: '/docs',
              },
              {
                label: '如何使用機器人',
                to: '/docs/commands',
              },
              {
                label: '備份功能教學',
                to: '/docs/backup',
              },
              {
                label: '感謝名單',
                to: '/docs/grateful',
              },
            ],
          },
          {
            title: '部落格推薦文章',
            items: [
              {
                label: '部落格',
                to: '/blog',
              },
            ],
          },
          {
            title: '相關連結',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Backup-Mode/Documentation',
              },
              {
                label: '隱私權保護政策', 
                to: 'privacy', 
              },
              {
                label: '服務條款', 
                to: 'tos', 
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
