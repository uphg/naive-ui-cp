# build:site 问题修复

## 问题总结

修复 `pnpm build:site` 打包文档页失败的问题。主要问题和解决方案如下：

## 问题原因
1. **package.json 入口点配置错误**：在 `node_modules/naive-ui/package.json` 中，module 字段指向的是 `es/index.mjs`，但实际文件是 `es/index.js`
2. **缺失的 `web-types.json` 文件**：`package.json` 中引用了不存在的 `web-types.json` 文件
3. **Vite 配置问题**：在生产环境下，Vite 尝试从 `node_modules/naive-ui` 解析包，但包配置有问题

## 解决方案

1. 修复 module 字段：将 `node_modules/naive-ui/package.json` 中的 `"module": "es/index.mjs"` 改为 `"module": "es/index.js"`
2. 移除无效引用：从 package.json 中移除了对不存在的 `web-types.json` 文件的引用
3. 修改 Vite 配置：将 `vite.config.ts` 中的 alias 配置改为在生产环境下也使用本地源码，避免从有问题的 `node_modules/naive-ui` 包解析

## 最终结果

- ✅ `pnpm build:site` 命令成功执行
- ✅ 文档站点成功构建到 `site` 目录
- ✅ 生成了完整的静态文件，包括 HTML、CSS、JS 和字体文件
- ✅ 构建时间约 47 秒，生成了大量的演示文件和资源

现在可以正常使用 `pnpm build:site` 命令来构建 Naive UI 的文档站点了
