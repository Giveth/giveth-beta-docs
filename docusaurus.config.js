module.exports = {
  title: 'Giveth Beta Docs',
  tagline: 'Documentation and Guides for Giveth.io',
  url: 'https://docs.beta.giveth.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'giveth', // Usually your GitHub org/user name.
  projectName: 'giveth-beta-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'beta.giveth.io Documentation',
      logo: {
        alt: 'Giveth Docs Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'User Guides',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developer Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/giveth/giveth-beta-docs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Users',
              to: 'docs/'
            },
            {
              label: 'Developers',
              to: 'guides/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join',
              href: 'https://giveth.io/join'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/givethio'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/giveth/giveth-beta-docs'
            }
          ]
        }
      ],
      copyright: `${new Date().getFullYear()} no rights reserved - made with ❤️ by Giveth.io`
    }
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',

      {
        id: 'guides',

        path: 'guides',

        editUrl: 'https://github.com/giveth/giveth-beta-docs/edit/master/',

        routeBasePath: 'guides',

        sidebarPath: require.resolve('./sidebarsGuides.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/giveth/giveth-beta-docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/giveth/giveth-beta-docs/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
