import type { Action, NavigationData } from "./types";

export type ProductSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductFeatureGroup = {
  title: string;
  intro: string;
  features: ProductFeature[];
};

export type ProductShot = {
  title: string;
  caption: string;
  alt: string;
};

export type RepoViewerProductData = {
  navigation: NavigationData;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    highlights: string[];
    actions: Action[];
  };
  shots: ProductShot[];
  positioning: ProductSection;
  principles: ProductFeature[];
  workflow: ProductFeature[];
  featureGroups: ProductFeatureGroup[];
  formats: ProductFeature[];
  scenarios: ProductFeature[];
  reliability: ProductFeature[];
  contribution: ProductSection;
};

export const repoViewerProduct: RepoViewerProductData = {
  navigation: {
    brand: "CiaLli†Dev",
    links: [
      {
        label: "公告",
        url: "/repo-viewer/bulletin",
      },
      {
        label: "源码",
        url: "https://github.com/CQUT-OpenProject/Repo-Viewer",
      },
      {
        label: "Channel",
        url: "https://www.ciallichannel.com",
      },
    ],
  },
  hero: {
    eyebrow: "Repo Viewer",
    title: "探索 GitHub 仓库的全新方式。",
    summary:
      "一款专为课程资料打造的现代浏览器。原生的目录结构，极致的搜索体验，加上直观的文件预览与下载，一切尽在掌握。",
    highlights: ["原生目录结构", "全局快速搜索", "沉浸式文件预览", "目录一键打包"],
    actions: [
      {
        label: "打开站点",
        url: "https://rv1.ciallichannel.com",
        variant: "primary",
      },
      {
        label: "查看公告",
        url: "/repo-viewer/bulletin",
        variant: "secondary",
      },
      {
        label: "查看源码",
        url: "https://github.com/CQUT-OpenProject/Repo-Viewer",
        variant: "text",
      },
    ],
  },
  shots: [
    {
      title: "原景呈现",
      caption: "忠实还原 GitHub 仓库的目录层级，保留你最熟悉的结构逻辑。",
      alt: "Repo Viewer 的仓库浏览界面截图",
    },
    {
      title: "精准定位",
      caption: "通过前缀、分支或特定后缀，在海量文件中瞬间发现所需。",
      alt: "Repo Viewer 的搜索界面截图",
    },
    {
      title: "所见即所得",
      caption: "无需下载，直接在浏览器中优雅阅读文档、浏览图片和 PDF。",
      alt: "Repo Viewer 的文件预览界面截图",
    },
  ],
  positioning: {
    eyebrow: "Overview",
    title: "轻量，却无比强大。",
    body: "我们将 GitHub 稳定可靠的结构转化为无缝的网页体验。它为你卸下繁琐，保留核心——让你以最自然的直觉进行浏览、搜索与阅读；而当你需要离线查阅时，所有的文件都能轻易带走。",
  },
  principles: [
    {
      title: "与仓库实时同步",
      body: "无论文件如何变更，它都能自动保持同步，确保你始终拥有最准确的资料状态。",
    },
    {
      title: "快，且直接",
      body: "深度优化的网络代理与多层缓存机制，有效消除漫长等待，每一次开启都顺畅无阻。",
    },
    {
      title: "眼见为实",
      body: "所有主流格式均提供一致的在线预览体验，为你省去盲目下载的时间。",
    },
  ],
  workflow: [
    {
      title: "深入本质",
      body: "从初见的根目录开始，循着学院、专业、课程层层递进，一切井然有序。",
    },
    {
      title: "一击即中",
      body: "强大的过滤与搜索逻辑，让深埋其中的课件与试卷即刻现身。",
    },
    {
      title: "尽在掌握",
      body: "从单份文件的随手保存，到整个目录的一键打包，全部化繁为简。",
    },
  ],
  featureGroups: [
    {
      title: "重新定义仓库浏览。",
      intro: "在熟悉的界面里，感受前所未有的效率飞跃。",
      features: [
        {
          title: "原生结构的视觉重塑",
          body: "无缝衔接 GitHub 存储逻辑，让庞大复杂的层级变得一目了然。",
        },
        {
          title: "智能高效的搜索辅助",
          body: "搭载静态索引引擎，带来更快的响应速度，同时支持细粒度的过滤。",
        },
        {
          title: "灵活自由的下载选项",
          body: "从单个文件的精确获取，到完整文件夹的高效导出，悉数支持。",
        },
      ],
    },
    {
      title: "在浏览器，阅尽一切。",
      intro: "无需离开当前页面，核心内容尽收眼底。",
      features: [
        {
          title: "Markdown",
          body: "原汁原味呈现每一次排版细节与代码高亮，还原极客阅读体验。",
        },
        {
          title: "PDF",
          body: "专为长文档优化的内建渲染引擎，赋予试卷和课件丝滑触感。",
        },
        {
          title: "图像素材",
          body: "从高分辨率扫描件到精致图解，随时放大查看每一处重点。",
        },
      ],
    },
  ],
  formats: [
    {
      title: "Markdown 文档",
      body: "呈现详尽的说明与指南，代码高亮与格式完美保留。",
    },
    {
      title: "PDF 文档",
      body: "针对试卷与课件的内建阅读器，带来顺畅的阅读体验。",
    },
    {
      title: "图像文件",
      body: "支持无缝浏览各类扫描件和图解，视觉细节纤毫毕现。",
    },
    {
      title: "其他格式",
      body: "提供一致的下载体验，把最终选择权交还给你。",
    },
  ],
  scenarios: [
    {
      title: "专注于学习",
      body: "跳过克隆与环境配置，直达想要的文件，把时间留给知识本身。",
    },
    {
      title: "高效率维护",
      body: "以直观的大视野核对文件位置及内容，确保资料体系的严谨性。",
    },
    {
      title: "快速理清项目",
      body: "无需来回切换工具，在一个浏览器标签内就能通览项目结构。",
    },
  ],
  reliability: [
    {
      title: "平顺的网络代理",
      body: "借助 Vercel 性能保障，配合智能 Token 轮换技术突破接口限制。",
    },
    {
      title: "极速的搜索内核",
      body: "构建时集成静态索引结构，将动态请求的依赖降至最低。",
    },
    {
      title: "智能的缓存分层",
      body: "内存结合 LocalStorage 与 IndexedDB，构建瞬时响应的数据底层。",
    },
    {
      title: "优雅的按需加载",
      body: "将复杂的预览组件分离打包，换取更迅捷的首页加载时间。",
    },
  ],
  contribution: {
    eyebrow: "Open Source",
    title: "共塑更佳体验。",
    body: "Repo Viewer 基于 AGPL-3.0 协议开源。无论完善架构、打磨细节，还是将其引向新的知识领域，每一次尝试与提交我们都倍加期待。",
  },
};
