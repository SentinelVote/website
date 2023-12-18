import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = { //TODO: change names
  title: 'VoteShield', 
  tagline: 'An e-voting platform on Hyperledger Fabric with Linkable Ring Signatures',
  favicon: 'img/VoteShield.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
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
      title: 'VoteShield', //TODO: change org name
      logo: {
        alt: 'My Site Logo',
        src: 'img/VoteShield.ico',
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
          href: 'https://github.com/QuantumSecureVote', //TODO: change organisation name
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
              to: '/docs/intro',
            },
            {
              label: 'Github',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CSIT321, FYP-23-S4-10`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
