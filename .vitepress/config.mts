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
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
