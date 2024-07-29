---
title: 目录结构
---

# :open_book: 目录结构

模板文件结构说明。

```yaml
.
├─ .github # GitHub 配置文件
│  ├─ workflows # 工作流
│  │  └─ release.yml # 发布任务
│  └─ CODE_OF_CONDUCT.md # 参与者行为规范
├─ .husky # 代码提交前校验配置文件
│  ├─ commit-msg # git commit 钩子
│  └─ pre-commit # eslint 钩子
├─ .vscode # IDE 工具推荐配置文件
│  ├─ extensions.json # 模板推荐的 vscode 插件
│  └─ settings.json # 设置扩展程序或 vscode 编辑器的一些属性
├─ build # 构建工具
│  └─ vite # vite 配置相关
│     ├─ index.ts # vite 相关插件存放处
│     ├─ optimize.ts # vite 依赖预构建配置项
│     └─ vconsole.ts # vconsole 配置项
├─ mock # mock 模拟后台数据
│  ├─ modules # mock 模块
│  ├─ data.ts # 定义 mock 数据
│  ├─ index.ts # 导出 mock 模块
│  └─ util.ts # mock 工具包
├─ node_modules # 项目依赖
├─ public  # 静态资源
│  ├─ favicon-dark.svg # favicon dark
│  ├─ favicon.svg # favicon
│  ├─ pwa-192x192.png # PWA 192
│  ├─ pwa-512x512.png # PWA 512
│  └─ safari-pinned-tab.svg # 专属 Safari 浏览器图标
├─ scripts # 公共脚本
│  └─ verifyCommit.js # git commit 前置校验
├─ src
│  ├─ api # 接口请求统一管理
│  ├─ assets # 字体、图片等静态资源
│  ├─ components # 自定义通用组件
│  │  ├─ Chart # 封装图表组件
│  │  ├─ Container.vue # 内容包装组件
│  │  ├─ NavBar.vue # 顶部菜单栏组件
│  │  ├─ TabBar.vue # 底部菜单栏组件
│  │  └─ ...
│  ├─ composables # 组合函数
│  │  └─ dark.ts # Dark 模式相关函数
│  ├─ hooks # 钩子函数
│  │  └─ useAutoThemeSwitcher.ts # 处理自动切换模式的钩子
│  ├─ locales # 国际化文件存放处
│  │  ├─ en-US.json # 英文配置
│  │  └─ zh-CN.json # 中文配置
│  ├─ pages # 存放编写业务代码页面
│  ├─ router # 路由配置
│  ├─ stores # Pinia 状态管理
│  ├─ styles # 全局样式
│  │  ├─ app.less # 全局样式
│  │  └─ var.less # 样式变量
│  ├─ utils # 全局工具方法
│  │  ├─ auth.ts # 处理用户信息和 token 相关
│  │  ├─ request.ts # 封装 axios 文件
│  │  └─ i18n.ts # vant 语言包和业务语言包初始化
│  ├─ App.vue # 入口页面
│  ├─ auto-imports.d.ts # Vue3 组合式 API 类型声明文件
│  ├─ components.d.ts # 组件自注册类型声明文件
│  ├─ env.d.ts # 全局 TypeScript 类型
│  ├─ main.ts # 入口文件
│  ├─ typed-router.d.ts # 文件路由类型声明
│  └─ vue-router.d.ts # 全局路由类型声明
├─ tests # 单元测试
│  └─ index.spec.ts # 最小示例
├─ .editorconfig # 编辑器读取文件格式及样式定义配置
├─ .env # 全局环境变量配置
├─ .env.development # 开发环境变量配置
├─ .env.production # 生产环境变量配置
├─ .gitignore # git 提交忽略文件
├─ .npmrc # npm 配置文件
├─ eslint.config.ts  # eslint 语法检查配置
├─ index.html # html 主入口
├─ LICENSE # 证书
├─ netlify.toml # Netlify 项目部署的配置
├─ pnpm-lock.yaml # 依赖包版本锁定文件
├─ package.json # 依赖包管理以及命令配置
├─ README.md # README（英文版）
├─ README.zh-CN.md # README（中文版）
├─ tsconfig.json # typescript 配置
├─ uno.config.ts # unocss 配置
└─ vite.config.ts # vite 配置

```
