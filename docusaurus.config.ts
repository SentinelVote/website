import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "SentinelVote";
const projectName = "website";    

const config: Config = { 
  title: 'SentinelVote', 
  tagline: 'An e-voting platform on Hyperledger Fabric with Linkable Ring Signatures',
  favicon: '/img/SentinelVote.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: `https://docs.sentinelvote.tech`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,  // Usually your GitHub org/user name.
  projectName,  // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SentinelVote', 
      logo: {
        alt: 'SentinelVote Logo',
        src: '/img/SentinelVote.ico',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'documentation',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'meeting-minutes',
          label: 'Meeting Minutes',
        },
        // once confirm no need blog, can remove it
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${organizationName}`, 
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark', //TODO: remove later
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Documentation',
              to: '/docs/documentation/overview',
            },
            {
              label: 'Github',
              href: 'hhttps://github.com/SentinelVote/website',
            },
          ],
        },
      ],
      copyright: `SentinelVote © 2024 by FYP-23-S4-10 is licensed under CC BY-NC-SA 4.0`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
