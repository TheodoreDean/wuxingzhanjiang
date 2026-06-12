# 五行战将 (Wuxing Zhanjiang) - iOS 游戏官方介绍网站

基于 Vite + React + Tailwind CSS 构建的 五行战将 官方展示网站。

## 项目特点
- **响应式设计**：适配移动端优先，符合 App Store 审核要求。
- **合规页面**：包含独立的隐私政策、用户协议、支持页面。
- **纯静态部署**：构建产物位于 `dist/`，可一键部署至 Vercel, Netlify, Cloudflare Pages 等。

## 本地开发

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **构建生产版本**
   ```bash
   npm run build
   ```

4. **本地预览构建产物**
   ```bash
   npm run preview
   ```

## 部署说明 (Vercel)

1. 将代码推送至 GitHub。
2. 在 [Vercel](https://vercel.com) 导入项目。
3. 框架预设选择 `Vite`。
4. 构建命令：`npm run build`。
5. 输出目录：`dist`。
6. 点击 `Deploy`。

## 资源替换说明
- **App 截图**：请将 `public/screenshots/` 下的占位图替换为真实的 App 截图。
- **联系邮箱**：在 `src/constants.ts` 中修改 `SUPPORT_EMAIL` 占位符。
- **App ID**：在 `src/constants.ts` 中修改 `APP_STORE_ID`。

## 许可
MIT
