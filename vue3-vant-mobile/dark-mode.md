---
title: 暗黑模式
description: 如何只使用某种模式
outline: deep
---

# :last_quarter_moon: 暗黑模式

## 初始化模式 {#initialization-mode}

根据本地存储的主题设置和系统偏好，自动添加或移除`dark`类，实现暗黑模式的切换。

```ts
<script>
  ;(function () {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
    if (setting === 'dark' || (prefersDark && setting !== 'light'))
      document.documentElement.classList.toggle('dark', true)
  })()
</script>
```

## 如何使用？ {#use}

`dark.ts`文件统一管理暗黑模式的状态、切换和用户偏好，方便在 Vue 组件中直接使用，无需引入。

```text
src/composables/
└── composables/
    └── dark.ts
```

```ts
// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
```

### 获取当前模式
```ts
const mode = isDark.value ? 'dark' : 'light'
```

### 切换模式 {#switch-mode}
```ts
toggleDark()
```

### 获取用户偏好
```ts
const userPreferredDark = preferredDark.value ? 'dark' : 'light'
```

## 常见问题 {#FAQ}

### 固定模式 {#fixed-mode}

固定使用某种模式，并且不受设备、浏览器影响。例如固定`light`模式，只需在`dark.ts`文件添加一行代码即可。

```ts{2}
// these APIs are auto-imported from @vueuse/core
useDark().value = false
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
```
