// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '〃•ω‹〃',
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
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: './sidebars.js',
          
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/XinyuuM/Cocomoedocs/tree/master/',
        },
        blog:false ,
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
        title: '可可萌 文档中心',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          
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
                to: 'https://status.cocomoe.cn',
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
                to: 'https://creativecommons.org/'

              },
              {
                label: '署名-非商业性-相同方式共享',
                to: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
              },
            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20242444号',
                to: 'https://icp.gov.moe/?keyword=20242444',
              },
            
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
    }),
};

export default config;
