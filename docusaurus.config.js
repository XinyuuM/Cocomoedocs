// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '可可萌〃•ω‹〃',
  tagline:'万物皆「可萌」(⑅˃◡˂⑅)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cocomoe.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XinyuuM', // Usually your GitHub org/user name.
  projectName: 'Cocomoedocs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '可可萌',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            href: 'https://nintendoswitch-docs.cocomoe.cn/',
            label: 'NintendoSwitchDocs',
          },
          {
            position: 'left',
            href: 'https://hcia.cocomoe.cn/',
            label: 'HCIALab',
          },
          
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服务',
            items: [
              {
                label: 'Coco巡查姬',
                href: 'https://status.cocomoe.cn',
              },
            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: '电子邮箱',
                to: 'mailto:webmaster@cocomoe.cn'
              }
            ],
          },
          
          {
            title: '文档许可',
            items: [
              {
                label: 'Creativecommons',
                href: 'https://creativecommons.org/'

              },
              {
                label: '署名-非商业性-相同方式共享',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
              },


            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20242444号',
                href: 'https://icp.gov.moe/?keyword=20242444',
              },
            
            ],
            
            
          },
          {
            title: '友情链接',
            items: [
              
            
            ],
            
            
          },
          {
            
            
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cocomoe All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'PCYCO9TUAS',
  
        // Public API key: it is safe to commit it
        apiKey: 'b6e8b7a23df2bdf1e0ebee764d14176f',
  
        indexName: 'cocomoecn',
  
        // Optional: see doc section below
        contextualSearch: true,
  
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '', // or as RegExp: /\/docs\//
          to: '',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

export default config;
