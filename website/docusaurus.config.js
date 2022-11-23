// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harness ❤️ Open Source',
  //tagline: 'Harness loves Open Source!',
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
          //{to: 'communityteam', label: 'Meet the Community Team', position: 'right'},
          {
            href: 'https://github.com/harness-community/harness-community.github.io',
            label: 'GitHub',
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
                label: 'Watch Overview Video',
                href: 'https://fast.wistia.net/embed/channel/qauwxlogqz?wvideo=rd23ssxq3k&wchannelid=qauwxlogqz&wmediaid=rd23ssxq3k',
              },
              {
                label: 'Contact Us',
                href: 'https://harness.io/company/contact-us',
              },
              {
                label: 'Developer Hub',
                href: 'https://developer.harness.io',
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
                label: 'Upcoming Events',
                href: 'https://community.harness.io',
              },
              {
                label: 'Harness on Meetup',
                href: 'https://www.meetup.com/harness-india/',
              },
              {
                label: 'Discourse',
                href: 'https://community.harness.io',
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
