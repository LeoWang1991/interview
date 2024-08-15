import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Interview",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '面试题', link: '/deepclone' }
    ],

    sidebar: [
      {
        text: 'Question',
        items: [
          { text: '深拷贝实现', link: '/deepclone' },
          { text: 'url到页面展示', link: '/url2page' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
