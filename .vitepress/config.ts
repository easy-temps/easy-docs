import { defineConfig, DefaultTheme } from 'vitepress'

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: '介绍', link: '/guide/' },
]

const vue3VantMobile: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/vue3-vant-mobile/' },
]

const vue3VarletMobile: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/vue3-varlet-mobile/' },
]

const nuxt3VantMobile: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/nuxt3-vant-mobile/' },
]

const vue3ElementAdmin: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/vue3-element-admin/' },
]

const vue3AntdvMobile: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/vue3-antdv-admin/' },
]

const Nav: DefaultTheme.NavItem[] = [
  {
    text: '快速开始',
    items: [
      {
        text: '指南',
        items: Guides,
      },
    ],
    activeMatch: '^/guide/',
  },
  
  {
    text: '移动模板',
    items: [
      {
        text: 'vue3-vant-mobile',
        link: '/vue3-vant-mobile/',
      },
      {
        text: 'vue3-varlet-mobile',
        link: '/vue3-varlet-mobile/',
      },
      {
        text: 'nuxt3-vant-mobile',
        link: '/nuxt3-vant-mobile/',
      },
    ]
  },
  {
    text: '中后台模版',
    items: [
      {
        text: 'vue3-antdv-admin',
        link: '/vue3-antdv-admin/',
      },
      {
        text: 'vue3-element-admin',
        link: '/vue3-element-admin/',
      }
    ]
  },
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: Guides,
  },
  {
    text: '移动模板',
    items: [
      {
        text: 'vue3-vant-mobile',
        link: '/vue3-vant-mobile/',
      },
      {
        text: 'vue3-varlet-mobile',
        link: '/vue3-varlet-mobile/',
      },
      {
        text: 'nuxt3-vant-mobile',
        link: '/nuxt3-vant-mobile/',
      },
    ],
  },
  {
    text: '中后台模板',
    items: [
      {
        text: 'vue3-antdv-admin',
        link: '/vue3-antdv-admin/',
      },
      {
        text: 'vue3-element-admin',
        link: '/vue3-element-admin/',
      },
    ],
  }
]

const vue3VantMobileSidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'vue3-vant-mobile',
    collapsed: false,
    items: vue3VantMobile,
  },
]

const vue3VarletMobileSidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'vue3-varlet-mobile',
    collapsed: false,
    items: vue3VarletMobile,
  },
]

const nuxt3VantMobileSidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'nuxt3-vant-mobile',
    collapsed: false,
    items: nuxt3VantMobile,
  },
]

const vue3AntdvMobileSidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'vue3-antdv-admin',
    collapsed: false,
    items: vue3AntdvMobile,
  },
]

const vue3ElementAdminSidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'vue3-element-admin',
    collapsed: false,
    items: vue3ElementAdmin,
  },
]


export default defineConfig({
  base: '/easy-docs/',
  title: 'EasyTemplate',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', href: '/easy-docs/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/easy-docs/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'theme-color', content: '#55a578' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'EasyTemplate | Out of the box Vue 3 template' }],
    ['meta', { property: 'og:site_name', content: 'EasyTemplate' }],
    // ['meta', { property: 'og:url', content: '' }],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/easy-temps' },
      { icon: 'x', link: 'https://twitter.com/charlie9627' }
    ],

    nav: Nav,

    sidebar: {
      '/guide/': SidebarGuide,
      '/vue3-vant-mobile/': vue3VantMobileSidebarConfig,
      '/vue3-varlet-mobile/': vue3VarletMobileSidebarConfig,
      '/nuxt3-vant-mobile/': nuxt3VantMobileSidebarConfig,
      '/vue3-antdv-admin/': vue3AntdvMobileSidebarConfig,
      '/vue3-element-admin/': vue3ElementAdminSidebarConfig,
    },

    editLink: {
      pattern: 'https://github.com/easy-temps/easy-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页面',
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2022-2024 EasyTemplate',
    },
  }
})
