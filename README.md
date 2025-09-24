# 光影同行 - 相册网站

一个精美的相册展示网站，支持照片上传、下载和本地存储功能。

## 项目特性

- 响应式设计，适配各种屏幕尺寸
- 精美的照片展示和相册管理
- 照片上传和下载功能
- 使用localStorage进行本地数据存储
- 平滑的动画和过渡效果

## 技术栈

- HTML5
- Tailwind CSS v3
- Font Awesome
- JavaScript
- Vite 构建工具

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 部署指南

### GitHub Pages 部署

1. 创建一个GitHub仓库
2. 将项目推送到GitHub
3. 修改vite.config.js中的base配置为你的仓库名称：
   ```javascript
   base: '/your-repo-name/',
   ```
4. 构建项目：`npm run build`
5. 部署dist目录到GitHub Pages

### Netlify 部署

1. 登录Netlify账号
2. 点击"New site from Git"
3. 选择你的GitHub仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击"Deploy site"

## 功能说明

- **照片上传**：点击上传按钮，选择本地照片并填写相关信息，照片将存储在浏览器的localStorage中
- **照片下载**：点击照片查看大图，然后点击下载按钮保存照片
- **查看全部照片**：点击"查看全部照片"按钮，可以浏览所有上传的照片
- **相册管理**：支持创建新相册和将照片归类到不同相册

## 注意事项

- 由于使用localStorage存储照片，请注意浏览器的存储限制
- 清除浏览器缓存可能会导致存储的照片丢失
- 对于跨域图片的下载可能受到浏览器安全策略限制

## License

MIT