const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Advanced Traffic Data Collection Technology',
  tagline: 'SMATS Documentation',
  url: 'https://smats-doc.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          includeCurrentVersion: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SMATS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documention',
          
        },
        {
          type: 'docsVersionDropdown'
        },
        {
          type: 'localeDropdown', // Add the localeDropdown to the left side of the navbar
          position: 'left',
        },
        {
          href: 'https://github.com/alkomij/SMATS-DOC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'SMATS website',
              href: 'https://www.smatstraffic.com/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/smats-traffic-solutions-inc./',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fsmatstraffic',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/smatstraffic/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCepK-wBkizhZ9_xEky7WeYw',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/alkomij/SMATS-DOC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SMATS Doc., Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'f51b0bdf97522da923c1a5a4cb6070e2',
      indexName: 'SMATS-DOC',
      appId: 'EGK72GR1GO',
    },
    
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'French',
      },
    },
  },
};
