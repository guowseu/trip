# 旅行助手应用

这是一个基于React和TypeScript的旅行规划与记录应用。

## 功能

- 旅行规划
- 旅行记录
- 个人中心

## 如何运行

### 安装依赖

```bash
npm install
```

或者使用yarn:

```bash
yarn install
```

### 启动开发服务器

```bash
npm start
```

或者使用yarn:

```bash
yarn start
```

应用将在 http://localhost:3000 启动。

## 项目结构

- `/src`: 源代码目录
  - `/components`: React组件
  - `App.tsx`: 主应用组件
  - `index.tsx`: 应用入口点
- `/public`: 静态资源目录

## 本地图片

项目中使用的图片已经下载到本地的 `src/images` 目录中，并通过 `src/utils/imageUtils.ts` 工具进行管理。要在组件中使用本地图片，可以使用以下方法：

### 方法1：使用 LocalImage 组件

```jsx
import LocalImage from './components/LocalImage';

// 在组件中使用
<LocalImage 
  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=300&auto=format&fit=crop" 
  alt="旅行图片" 
  className="rounded-lg w-full h-32 object-cover" 
/>
```

这个组件会自动检查是否有对应的本地图片，如果有则使用本地图片，否则使用远程URL。

### 方法2：直接使用 imageUtils

```jsx
import getLocalImagePath from './utils/imageUtils';

// 在组件中使用
const imageSrc = getLocalImagePath("https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=300&auto=format&fit=crop");

<img src={imageSrc} alt="旅行图片" className="rounded-lg w-full h-32 object-cover" />
```

## 添加新图片

如果需要添加新图片，可以：

1. 将图片放入 `src/images` 目录
2. 在 `src/utils/imageUtils.ts` 文件中添加新图片的映射

## 技术栈

- React
- TypeScript
- Lucide React (图标库)
