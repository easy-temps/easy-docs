---
title: 图标
description: 如何使用图标
outline: deep
---

# :tada: 图标 {#icons}

图标是文字的隐喻，可以实现视觉引导和功能划分。

## 内置图标 {#built-in-icons}

内置图标是模板预先提供好的，开发者可以直接使用。模板默认以 [Vant](https://github.com/youzan/vant) 作为移动端组件库，它提供了基于字体的图标集 [Icon](https://vant-ui.github.io/vant/#/zh-CN/icon)  组件。

我们可以像下面一样使用，非常地简单。

```vue
<van-icon name="chat-o" />
```

大部分时候，内置的图标无法满足我们的需求场景，这就需要引入外部图标集。

## 外部图标 {#external-icons}

我们推荐 [iconify](https://iconify.design/)。它是统一的图标框架，超过 `150` 多个图标集，和 `200,000` 个开源矢量图标，并且会定期更新图标。您可以在 [iconify](https://icon-sets.iconify.design/) 或者 [icones](https://icones.js.org/) 中看到所有的图标集。

使用 `iconify` 有多种方式，我们模板使用 [CSS icon](https://antfu.me/posts/icons-in-pure-css) 方案，此方案由 `@unocss/preset-icons` 提供支持，可以很好的和  [Unocss](https://unocss.dev/) 配合使用。

### 安装和使用 {#install-use}

假设我们用到 [carbon](https://icones.js.org/collection/carbon) 图标集，首先安装它。

::: code-group

  ```bash [pnpm]
  pnpm add -D @iconify-json/carbon
  ```

:::

安装完成后，还应该将其引入到 [exclude](https://github.com/vue-zone/vue3-vant-mobile/blob/main/build/vite/optimize.ts) 配置里。

::: info

所有以 `@iconify-icons/` 开头引入的的本地图标模块，都应该加入到下面的 `exclude` 里，因为平台推荐的使用方式是按需引入，不需要预构建，直接让浏览器加载。

:::

然后像下面这样使用它。

```vue
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
```

::: tip

请遵循以下约定使用图标：

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

:::

### 图标插件 {#icon-plugin}

VSCode 用户，推荐安装 [antfu.iconify](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 插件。它可以高亮图标的显示和自动完成。
