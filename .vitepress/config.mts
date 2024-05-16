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
  head: [
    ["link", { rel: "icon", href: "logo.jpg" }],
    [
      "script",
      { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-EGKX0P7QM0" },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EGKX0P7QM0');`,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: "logo.jpg",
    nav: nav,
    sidebar: sidebar,
    socialLinks: [{ icon: "x", link: "https://twitter.com/Shanshi66" }],
    search: {
      provider: "local",
    },
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
      },
    },
  },
});
