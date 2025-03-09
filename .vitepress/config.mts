import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLOG",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'FE Notes', link: '/fe/elements' },
      { text: 'Web3', link: '/web3' },
      { text: 'Other', link: '/Other' },
      { text: 'Resume', link: '/resume' }
    ],

    sidebar: {
      '/fe': [
        {
          text: 'FE notes',
          items: [
            { 
              text: 'HTML',
              items: [
                {
                  text: '元素',
                  link: '/fe/elements' 
                }
              ]
            },
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
})
