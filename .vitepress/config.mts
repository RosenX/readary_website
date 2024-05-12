import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阅牍",
  description: "阅牍RSS阅读器产品官网及使用文档",
  srcDir: "docs",
  lang: "zh-CN",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "logo.jpg" }]],
  themeConfig: {
    logo: "logo.jpg",
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: "x", link: "https://twitter.com/Shanshi66"},
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    }
  },
});
