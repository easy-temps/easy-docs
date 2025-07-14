---
title: 浏览器适配
outline: deep
---

# :computer: 浏览器适配 {#browser-adaptation}

浏览器适配是为了确保网页在不同设备和屏幕尺寸上都有良好的显示效果。

## 适配方案 {#rem-or-vw}

目前移动端适配主要有两种方案，包括 vw 布局和 rem 布局。vw 布局根据视口宽度进行尺寸调整；rem 布局则基于文档根元素字体大小，保证不同设备上文字和元素的相对比例一致。

选择上，我们**默认**采用了 vw 方案，首先是因为它得到了现代浏览器的支持，很少出现兼容性问题，其次它更容易理解，不用像 rem 动态修改根元素的 `font-size`。vw 让我们的代码更纯粹。

## Viewport 布局 {#viewport}

Vant 组件和业务代码，全部采用 `px` 作为样式单位，如果需要使用 `viewport` 单位（`vw`, `vh`, `vmin`, `vmax`），我们推荐使用 [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) 进行转换。

它是一款 PostCSS 插件，用于将 `px` 单位转换为 `vw` 单位。

### PostCSS 示例配置 {#postcss-example}

下面提供了一份 PostCSS 基础配置。

```ts{6,8}
// vite.config.ts
postcss: {
  plugins: [
    viewport({
      // 最外层选择器
      appSelector: '#app',
      // 设计稿宽度（Vant 设计稿的尺寸是375）
      viewportWidth: 375,
    }),
  ],
}
```

::: tip
模板已经内置好这些，这里介绍是为了助于你理解。
:::

### 桌面端访问 {#desktop-access}

我们知道 vw 布局的原理是根据视口宽度进行同比例放大，这样很好。

但想象这样一个场景，当我们从桌面端访问我们移动应用的时候，我们的视图元素也会同比例放大，这让我们的使用体验非常差，甚至无法操作 `DOM` 元素。

再次推荐 [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever)，它不仅可以完成样式单位的转换，还对桌面端可访问性做了功能增强，提升了用户体验。我们只需要配置 `maxDisplayWidth` 属性，它可以限制视口单位的最大宽度。

```ts{7}
// vite.config.ts
postcss: {
  plugins: [
    viewport({
      appSelector: '#app',
      viewportWidth: 375,
      maxDisplayWidth: 600
    }),
  ],
}
```

::: warning
桌面端访问的特性是通过 CSS 函数 `min()`、`max()`、`calc()` 实现的，请注意业务中有否老旧设备的投放场景，如果有，请关闭 `maxDisplayWidth` 选项或查看后面的 [Rem 布局](#rem)。更多的兼容性情况可以查看 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min#browser_compatibility) 和 [caniuse.com](https://caniuse.com/css-math-functions)。
:::

### 行内样式转换 {#inline-px-to-vw}

虽然这款 PostCSS 插件可以帮我们转换单位，但是像是一些行内样式单位它无法进行转换，因为这款插件是用于编译阶段的。我们需要一个运行时解决方案，在我们的行内样式需要转换的时候可以工作。好消息是，模板已经内置好这样一组函数。

```ts
// src/utils/inline-px-to-vw.ts
...
export default function vw(n: number) {
  if (n === 0)
    return n

  const vwN = round(n * 100 / idealWidth, 3)
  const maxN = round(n * maxWidth / idealWidth, 3)
  const cssF = n > 0 ? 'min' : 'max'
  return `${cssF}(${vwN}vw, ${maxN}px)`
}


```

你只需要像这样引入。

```ts
import vw from '@/utils/inline-px-to-vw'
```

然后在 `template` 像这样使用就好。

```vue
<div :style="`width: ${vw(width)}; height: ${vw(height)}`"></div>
```

## Rem 布局 {#rem}

Viewport 布局使用 `max()` 等 CSS 函数实现，无法兼容老旧设备，会出现样式错乱问题。

为了解决兼容问题，同时希望限制视图的最大宽度以适配桌面端屏幕，请按下面的配置启动 Rem 布局：

```ts{8}
// vite.config.ts
postcss: {
  plugins: [
    viewport({
      appSelector: '#app',
      viewportWidth: 375,
      maxDisplayWidth: 600,
      mobileUnit: 'rem',
    }),
  ],
}
```

相比 Viewport 布局配置，多了一行 `mobileUnit: 'rem'` 选项来指定 Rem 布局。添加配置后，在全局样式文件中添加一个空的 `<html>` 样式（若已存在则无需添加）：

```css{1}
html { }
body, p, li {
  margin: 0;
  /* 省略样式 */
}
/* 省略其它选择器样式 */
```

恭喜你！已经完成了 Rem 布局的适配，现在请重新检查兼容性问题是否解决。

> 遇到问题[扫码进群](/vue3-vant-mobile/#feedback)或提交[议题](https://github.com/vue-zone/vue3-vant-mobile/issues)寻求帮助。

## 原子化 CSS (Atomic CSS) {#atomic-css}

目前，我们已经基本覆盖了常规 `css` 单位的转换。但是像是原子化 CSS 框架，比如 `Tailwind CSS`，`Windi CSS`，以及我们模板内置的 `Unocss`，它们都使用 `rem` 单位作为样式单位。面对这种新的情况，我们需要将 `rem` 转成 `px`，再由 PostCSS 插件把 `px` 转成 `vw`。

::: info
原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。
:::

非常幸运的是，Unocss 提供了这样一个预设，可以把 rem 转成 px 单位。

> <https://unocss.dev/presets/rem-to-px>

我们只需要在 `uno.config.ts` 这样引入。

```ts
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
   presets: [
    ...
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
})

```

::: tip
为什么要设置基础字体大小？请看这篇 [文章](https://juejin.cn/post/7262975395620618298)
:::

然后，像下面这样写原子化 CSS，它会自动转换为相应的 vw 单位。

```vue
<h1 class="text-6xl color-pink font-semibold">
  Hello, Unocss!
</h1>

<p class="mt-4 text-gray-700 dark:text-white">
  This is a simple example of Unocss in action.
</p>

```

以上，就是我们适配的全部了。
