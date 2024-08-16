import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Interview",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '面试题', link: '/interview/deepclone' },
      { text: '算法题', link: '/algorithm/niuke' }
    ],

    sidebar: {
      '/interview/': [
        {
          text: '面试题',
          items: [
            { text: '深拷贝实现', link: '/interview/deepclone' },
            { text: 'url到页面展示', link: '/interview/url2page' }
          ]
        }
      ],
      '/algorithm/': [
        {
          text: '算法题',
          items: [
            { text: '牛客网刷题输入输出处理', link: '/algorithm/niuke' }
          ]
        }
      ]
    },

    // sidebar: [
    //   {
    //     text: 'Question',
    //     items: [
    //       { text: '深拷贝实现', link: '/deepclone' },
    //       { text: 'url到页面展示', link: '/url2page' }
    //     ]
    //   },
    //   {
    //     text: 'Algorithm',
    //     items: [
    //       { text: '牛客网刷题输入输出处理', link: '/algorithm/niuke' }
    //     ]
    //   }
    // ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
