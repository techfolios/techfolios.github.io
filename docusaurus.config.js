// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechFolios',
  tagline: 'Easily create technical portfolios using GitHub Pages, Jekyll, Bootstrap 5, and JSON Resume.',
  url: 'https://techfolios.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  deploymentBranch: 'main',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'techfolios', // Usually your GitHub org/user name.
  projectName: 'techfolios.github.io', // Usually your repo name.
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({ docs: { sidebarPath: require.resolve('./sidebars.js'), breadcrumbs: false },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Techfolios',
        logo: {
          alt: 'TechFolios',
          src: 'img/techfolio-logo.png',
        },
        items: [
          { to: 'docs/overview', label: 'Overview', position: 'right' },
          { to: 'docs/user-guide/overview', label: 'User Guide', position: 'right' },
          { to: 'docs/developer-guide/overview', label: 'Developer Guide', position: 'right' },
          { to: '/blog', label: 'News', position: 'right'},
          { to: '/docs/help', label: 'Help', position: 'right'},
          { href: 'https://github.com/techfolios', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `TechFolios is developed by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a>`,
      },
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    }),
};

module.exports = config;
