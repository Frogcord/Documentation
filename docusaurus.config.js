// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config = {
  title: 'Backup Core',
  tagline: 'Backup Core | 一個超優質的多功能機器人',
  url: 'https://bk.mwdmc.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
  plugins: [require.resolve('docusaurus-lunr-search')],
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
            'https://github.com/Backup-Mode/Documentation/tree/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '尚未發布版本 🚧',
              path: '',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Backup-Mode/Documentation/tree/main',
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
      markdown: {
        mermaid: true,
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      },
      metadata: [{name: 'og:title', content: 'Backup Mode'}],
      metadata: [{name: 'og:image', content: 'https://cdn.discordapp.com/attachments/992235414578548776/1000654248956149861/image.png'}],
      metadata: [{name: 'og:url', content: 'https://bk.mwdmc.dev/'}],
      metadata: [{name: 'og:image:type', content: 'image/png'}],
      metadata: [{name: 'og:image:width', content: '1200'}],
      metadata: [{name: 'og:image:height', content: '630'}],
      metadata: [{name: 'twitter:card', content: 'summary_large_image'}],
      metadata: [{name: 'twitter:image:src', content: 'https://cdn.discordapp.com/attachments/992235414578548776/1000654248956149861/image.png'}],
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
        title: 'Backup Core',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: '首頁',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教學文檔',
          },
          {
            to: '/blog/', 
            label: '部落格', 
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
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
                label: '隱私權保護政策', 
                to: 'privacy', 
              },
              {
                label: '服務條款', 
                to: 'tos', 
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Backup-Mode/Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} Backup Core. Orignal Backup Mode. All Rights Reserved.`,
      }
    }),
};

module.exports = config;
