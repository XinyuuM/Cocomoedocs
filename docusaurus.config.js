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
  url: 'https://www.cocomoe.cn',
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
          
          postsPerPage: 4,
          blogSidebarCount: 'ALL',
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
            href: '/blackboard/topic/tp235',
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
            title: '文档',
            items: [
              {
                label: '收支一览',
                href: '/blackboard/topic/tp233',
              },
              {
                label: '留言箱',
                href: 'https://www.wjx.cn/vm/OhIxqSE.aspx'
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
            title: '镜像服务',
            items: [
              {
                label: 'P5预告信生成器',
                href: 'https://p5.cocomoe.cn',
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
