/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Backup Core",
  "tagline": "Backup Core | 一個超優質的多功能機器人",
  "url": "https://bk.mwdmc.dev",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Backup-Mode",
  "projectName": "Documentation",
  "i18n": {
    "defaultLocale": "zh-TW",
    "locales": [
      "zh-TW",
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "plugins": [
    "H:\\Github\\Documentation\\node_modules\\docusaurus-lunr-search\\src\\index.js"
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "H:\\Github\\Documentation\\sidebars.js",
          "editUrl": "https://github.com/Backup-Mode/Documentation/tree/main",
          "lastVersion": "current",
          "versions": {
            "current": {
              "label": "尚未發布版本 🚧",
              "path": ""
            }
          }
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Backup-Mode/Documentation/tree/main"
        },
        "theme": {
          "customCss": "H:\\Github\\Documentation\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "markdown": {
      "mermaid": true
    },
    "prism": {
      "additionalLanguages": [
        "bash",
        "diff",
        "json"
      ],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "metadata": [
      {
        "name": "twitter:image:src",
        "content": "https://cdn.discordapp.com/attachments/992235414578548776/1000654248956149861/image.png"
      }
    ],
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "announcementBar": {
      "id": "support_us",
      "content": "本文檔網站正在慢慢成型中，歡迎加入<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://discord.backupmode.xyz/\">我們的Discord群組</a>來獲取最新消息。",
      "backgroundColor": "#696969",
      "textColor": "#ffffe0",
      "isCloseable": true
    },
    "navbar": {
      "title": "Backup Core",
      "logo": {
        "alt": "Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "/",
          "label": "首頁",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "教學文檔"
        },
        {
          "to": "/blog/",
          "label": "部落格",
          "position": "left"
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "https://github.com/Backup-Mode/Documentation",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "文檔推薦",
          "items": [
            {
              "label": "入門介紹",
              "to": "/docs"
            },
            {
              "label": "如何使用機器人",
              "to": "/docs/commands"
            },
            {
              "label": "備份功能教學",
              "to": "/docs/backup"
            },
            {
              "label": "感謝名單",
              "to": "/docs/grateful"
            }
          ]
        },
        {
          "title": "部落格推薦文章",
          "items": [
            {
              "label": "部落格",
              "to": "/blog"
            }
          ]
        },
        {
          "title": "相關連結",
          "items": [
            {
              "label": "隱私權保護政策",
              "to": "privacy"
            },
            {
              "label": "服務條款",
              "to": "tos"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/Backup-Mode/Documentation"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022-2023 Backup Core. Orignal Backup Mode. All Rights Reserved."
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    }
  }
};
