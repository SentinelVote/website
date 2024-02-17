import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
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

  url: `https://docs.sentinelvote.tech`,
  baseUrl: `/`,
  trailingSlash: false,
  organizationName,
  projectName,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
    image: 'img/docusaurus-social-card.jpg', // TODO: Replace with project's social card

    navbar: {
      title: 'SentinelVote',
      style: 'dark',
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
        // { to: '/blog', label: 'Blog', position: 'left' }, // TODO: Remove this line if not using blog.
        {
          href: `https://github.com/${organizationName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
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
              href: 'https://github.com/SentinelVote/website',
            },
            {
              label: 'App',
              href: 'https://sentinelvote.tech/',
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
