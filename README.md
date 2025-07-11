# 地址、手机号与信用卡信息生成器

一个支持多国家/地区的地址、手机号和信用卡信息生成器，采用 React + TypeScript + Vite + Tailwind CSS，界面简洁现代，支持中英文切换。

## 🚀 特性

- **纯前端架构**：无需后端服务，部署简单
- **多语言支持**：支持中文和英文界面
- **多国家支持**：支持10个主要国家和地区
- **完全随机化**：每次生成的数据都是随机的，包含随机街道名、门牌号、楼层等
- **真实格式**：所有生成的数据都符合当地格式规范
- **一键复制**：支持一键复制生成的内容
- **响应式设计**：适配桌面和移动设备，宽度自适应
- **Luhn算法**：信用卡号通过Luhn算法校验

## 🛠️ 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **路由**：React Router DOM
- **国际化**：React i18next

## 📁 目录结构

```
AddressGenerator/
├── frontend/
│   ├── src/
│   │   ├── pages/           # 页面组件
│   │   │   ├── Home.tsx
│   │   │   ├── AddressGenerator.tsx
│   │   │   ├── PhoneGenerator.tsx
│   │   │   └── CreditCardGenerator.tsx
│   │   ├── utils/           # 数据生成逻辑
│   │   │   └── generators.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── README.md
└── README.md
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd frontend
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

- 默认会在 `http://localhost:5173` 启动开发环境。
- 如果端口被占用，终端会提示新的端口。

### 3. 构建生产版本

```bash
npm run build
```

- 构建后的静态文件会输出到 `dist` 目录。

### 4. 预览生产版本

```bash
npm run preview
```

- 用于本地预览生产构建效果。

## 🎯 功能说明

### 地址生成器
- 生成符合当地格式的随机地址
- 支持中英文地址格式
- 包含随机街道、城市、地区、门牌号、楼层、房间号信息

### 手机号生成器
- 生成带国家代码的随机手机号
- 符合各国手机号格式规范
- 支持国际格式显示

### 信用卡生成器
- 生成通过Luhn算法校验的随机信用卡号
- 包含随机有效期、CVV等信息
- 支持不同国家的卡类型

## ⚠️ 常见问题

- **页面宽度未铺满/样式异常？**
  - 请确保已保存所有文件，并重启开发服务（`Ctrl+C` 停止后重新 `npm run dev`）。
  - 强制刷新浏览器缓存（Win: `Ctrl+F5`，Mac: `Command+Shift+R`）。
- **依赖安装失败？**
  - 请确保使用 Node.js 16 及以上版本。
  - 推荐使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node 版本。

## 📝 使用说明

1. 选择要使用的生成器（地址/手机号/信用卡）
2. 选择目标国家/地区
3. 点击生成按钮
4. 每次点击都会生成全新的随机数据
5. 使用一键复制功能复制结果

## ⚠️ 免责声明

本工具仅用于测试和学习目的，生成的所有数据都是虚构的，不代表真实存在的地址、手机号或信用卡信息。请勿用于任何非法用途。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！ 