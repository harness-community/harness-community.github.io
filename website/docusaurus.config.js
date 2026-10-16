// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harness ❤️ Open Source',
  tagline: 'The home for the Harness Community and the Harness open-source ecosystem.',
  url: 'https://harness-community.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'harness-community', // Usually your GitHub org/user name.
  projectName: 'harness-community.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/harness-community/harness-community.github.io/tree/main/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/harness-community/harness-community.github.io/tree/main/website',
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
      image: 'img/logo.svg',
      colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
      },
      navbar: {
        title: 'Harness Community',
        logo: {
          alt: 'Harness Community Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://community.harness.io',
            label: 'Community Forum',
            position: 'left',
          },
          {
            href: 'https://github.com/harness',
            label: 'Open Source on GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'Harness Platform Overview',
                href: 'https://harness.io/products/platform',
              },
              {
                label: 'Developer Hub',
                href: 'https://developer.harness.io',
              },
              {
                label: 'Harness Community Forum',
                href: 'https://community.harness.io',
              },
              {
                label: 'Contact Us',
                href: 'https://harness.io/company/contact-us',
              },
            ],
          },
          {
            title: 'OPEN SOURCE PROJECTS',
            items: [
              {
                label: 'Harness Open Source',
                href: 'https://github.com/harness/harness',
              },
              {
                label: 'Harness CLI',
                href: 'https://github.com/harness/cli',
              },
              {
                label: 'Harness MCP Server',
                href: 'https://github.com/harness/mcp-server',
              },
              {
                label: 'LitmusChaos',
                href: 'https://github.com/litmuschaos/litmus',
              },
              {
                label: 'All Harness repos on GitHub',
                href: 'https://github.com/harness',
              },
            ],
          },
          {
            title: 'COMMUNITY',
            items: [
              {
                label: 'Join us on Slack',
                href: 'https://harnesscommunity.slack.com/join/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw#/shared-invite/email',
              },
              {
                label: 'Harness Community (Discourse)',
                href: 'https://community.harness.io',
              },
              {
                label: 'Open Source category',
                href: 'https://community.harness.io/c/open-source/36',
              },
              {
                label: 'Harness on Meetup',
                href: 'https://www.meetup.com/harness-india/',
              },
            ],
          },
          {
            title: 'MORE ON THIS SITE',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'COMPANY',
            items: [
              {
                label: 'About Us',
                href: 'https://harness.io/company/about-us',
              },
              {
                label: 'Press & News',
                href: 'https://harness.io/company/press-and-news',
              },
              {
                label: 'Trademark Policy',
                href: 'https://harness.io/legal/trademark',
              },
              {
                label: 'Legal',
                href: 'https://harness.io/legal',
              },
              {
                label: 'Security',
                href: 'https://harness.io/security',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harness, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
