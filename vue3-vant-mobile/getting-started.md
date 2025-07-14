---
title: 快速开始
description: 如何开始创建第一个项目
outline: deep
---

# :rocket: 快速开始 {#getting-started}

## 开发环境 {#development}

`vue3-vant-mobile` 使用 [Vite](https://cn.vitejs.dev/) 作为前端构建工具，使用 [pnpm](https://pnpm.io/zh/) 作为包管理器，两者能够显著提升前端开发体验。
在最新的 `Vite` 版本当中，要求 [Node.js](https://nodejs.org/en) 版本 `20+`（推荐优先安装长期维护 `LTS` 版）, `pnpm` 版本应不小于 `v9`。

如果您还没有安装 `pnpm`，请执行下面的命令进行安装。

```bash
npm install -g pnpm
```

安装完成以后，我们建议您更换为国内的镜像源。

```bash
npm config set registry https://registry.npmmirror.com
```

## 拉取代码 {#pull-code}

我们提供了以下几种方式拉取代码。

### Github 模板 {#use-template}

这种方式是你希望使用 [GitHub](https://github.com/) 作为代码仓库的时候使用。

[使用这个模板在 GitHub 上创建一个仓库](https://github.com/vue-zone/vue3-vant-mobile/generate)

### 本地克隆 {#local-clone}

如果您喜欢使用更干净的 `git` 历史记录，请执行下面的操作。

```bash
npx tiged vue-zone/vue3-vant-mobile my-mobile-app
cd my-mobile-app
```

接下来，安装项目依赖。

```bash
pnpm install
```

## 本地开发 {#local-development}

### 项目启动 {#dev}

只需运行并访问 <http://localhost:3000>

```bash
pnpm dev
```

### 生产构建 {#build}

要构建打包，请运行

```bash
pnpm build
```

你将会在 `dist` 目录中看到生成的文件，它已经可以被使用了。

### 生产预览 {#preview}

想要预览打包后的文件，请运行

```bash
pnpm preview
```

访问 <http://localhost:4173/>
