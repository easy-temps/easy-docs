---
title: 路由
outline: deep
---

# :hash: 路由 {#routing}

路由是组织起一个应用的关键骨架。

## 基于文件的路由 {#file-based-routing}

vue3-vant-mobile 使用基于文件的路由系统，由 [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) 插件实现。

在我们的模板中，插件相关配置已完成。您只需在 `src/pages` 文件夹中添加 `.vue` 文件，插件会根据文件名自动生成对应的路由结构。

以下是一个简单的示例：

```text
src/pages/
├── index.vue
├── about.vue
└── users/
    ├── index.vue
    └── [id].vue
```

这将生成以下路由：

- `/`: -> 渲染 `index.vue` 组件
- `/about`: -> 渲染 `about.vue` 组件
- `/users`: -> 渲染 `users/index.vue` 组件
- `/users/:id`: -> 渲染 `users/[id].vue` 组件。 `id` 成为路由参数。

::: tip
通常，您只需创建业务页面即可，如果您希望深入了解并进行高级配置，请访问 [官网](https://uvr.esm.is/)。
:::
