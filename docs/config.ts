import Unocss from 'unocss/vite'
import { resolve } from 'path'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { version } from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Vue Library Starter',
  description: 'Library creation for vuejs component',
  cleanUrls: true,
  srcDir: './src',
  base: '/',
  vite: {
    plugins: [Unocss()],
    resolve: {
      alias: {
        '@point-hub/vue-library-starter': resolve(__dirname, '../dist/vue-library-starter.js') // to resolve @ inside docs
      }
    }
  },
  sitemap: {
    hostname: 'https://dev.pointhub.net'
  },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarDocs() },
      '/contribution-guide/': { base: '/contribution-guide/', items: sidebarContributionGuide() }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub/vue-library-starter' }],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Pointhub'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs', link: '/docs/introduction' },
    { text: 'Contribution Guide', link: '/contribution-guide/getting-started/introduction' },
    {
      text: 'v' + version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/point-hub/vue-library-starter/commits/main/'
        },
        {
          text: 'Contributing',
          link: 'https://dev.pointhub.net'
        }
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Quickstart', link: 'quickstart' }
      ]
    },
    {
      text: 'Components',
      collapsed: true,
      items: [{ text: 'Base Component', link: 'components/base-component' }]
    }
  ]
}

function sidebarContributionGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: 'getting-started/introduction' },
        { text: 'Quickstart', link: 'getting-started/quickstart' },
        { text: 'Directory Structure', link: 'getting-started/directory-structure' },
        { text: 'Example', link: 'getting-started/example' },
        { text: 'Documentation', link: 'getting-started/documentation' }
      ]
    },
    {
      text: 'Maintainer',
      items: [{ text: 'Deployment', link: 'maintainer/deployment' }]
    }
  ]
}
