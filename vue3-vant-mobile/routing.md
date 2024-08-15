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

## 常见问题 {#FAQ}

### 如何创建页面组件？ {#page-component}

一般来说，放在 `src/components` 文件夹下的 `.vue` 文件被统称为应用的公共组件。如果要创建页面级组件，也就是只属于某个页面的专用组件，通常会放在 `src/pages/**/components` 目录下。然而，正如之前提到的，`src/pages` 下的所有文件都会被扫描并生成路由，这会导致页面内的组件也生成路由，这并非我们期望的效果。

为了避免这种情况，我们需要设置插件忽略特定的扫描规则。我们可以像这样设置：

```ts
// build/vite/index.ts
export function createVitePlugins() {
  return [
    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages',
      exclude: ['src/pages/**/components/**'], // [!code ++]
      dts: 'src/typed-router.d.ts',
    }),
  ]
}

```

同时，为了让页面专用组件也可以自动导入，我们还需要像这样设置：

```ts
// build/vite/index.ts
export function createVitePlugins() {
  return [
    Components({
      extensions: ['vue'],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],  // [!code --]
      dirs: ['src/components', 'src/pages/**/components'], // [!code ++]
    })
  ]
}
```

这样，我们就可以在页面内使用专用组件，而无需导入，也不会生成多余路由了。
