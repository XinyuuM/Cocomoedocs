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
          alt: 'Moe！',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            href: 'https://hcia.cocomoe.cn/',
            label: 'HCIALab',
          },
          {
            position: 'left',
            href: 'https://ns.cocomoe.cn/',
            label: 'Switch Document',
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
                label: '文档汇总',
                href: '/blackboard'
              },
              {
                label: '黑名荣誉榜',
                href: '/blackboard/blacklist'
              },
              {
                label: '留言箱',
                href: 'https://kiku.page/xinyuu'
              },

            ],
          },
          {
            title: '社交',
            items: [
             

              
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/xinyuu-nasa/',
              },
              {
                label: '云音乐',
                href: 'https://music.163.com/#/user/home?id=594434593',
              },
              {
                label: '小红书',
                href: 'https://www.xiaohongshu.com/user/profile/628722af0000000021028d5e',
              },
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/142202292/',
              },
              {
                label: '500px摄影社区',
                href: 'https://500px.com.cn/atxinyuu',
              },
              {
                label: 'Steamcommunity',
                href: 'https://steamcommunity.com/id/xinyuu/',
              },
            ],
            
            
          },
          
          {
            title: '可可的裤衩',
            items: [
              {
                label: 'P5预告信生成器',
                href: 'https://p5.cocomoe.cn',
              },
              {
                label: '飞鸟云',
                href: 'https://feiniaoyun01.com/',
              },
              {
                label: '火星联盟',
                href: 'https://hxlm.org/',
              },
              {
                label: 'OpenAI',
                href: 'https://openai.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/',
              },
              {
                label: 'Cloudflare',
                href: 'https://dash.cloudflare.com/',
              },
            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20249960号',
                href: 'https://icp.gov.moe/?keyword=20249960',
              },
            
            ],
            
            
          },
          {
            
            
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Cocomoe All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
