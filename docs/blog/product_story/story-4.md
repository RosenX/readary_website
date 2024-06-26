# 产品故事4：自定义主题

ReadBot 是一款专注于信息过滤的 RSS 阅读器，希望帮助用户解决信息过载问题，但是过滤其实是一种间接的方式，我们真正希望的是找出自己感兴趣的内容。现代媒体平台通过推荐系统解决这个问题，在 RSS 阅读器里搭建一个推荐机制就有点小题大作了，于是我开发了一套规则引擎。

基于这套规则引擎，能够实现自定义主题，比如

1. 包含 Stable Diffusion ，AIGC ，ComfyUI ，AI 绘画等关键词可以归为 [ AI 绘画] 主题
2. 可以将以上关键词新建 [ AI 绘画关键词分组] ，包含该 [关键词分组] 的文章归为 [ AI 绘画] 主题
3. 可以实现关键词组合（同时满足），实现更精细主题定制。比如：
    - [ ChatGPT ] + [ AI 绘画关键词分组] ，可以定制出 [ ChatGPT 与 AI 绘画] 主题
    - [公司名字关键词分组] + [财报] ，可以定制 [投资财报] 主题
    - [ Rust 关键词分组] + [ WebAssembly ] ，可以定制 Rust 与 Wasm 相关主题

一个主题可以包含多条上述规则，满足其中一个即可，灵活度很高。以上规则都可以指定 RSS 源，可以是所有/部分集合/排除某些源。

文章被打上主题标签之后，可以像关键词、RSS 源一样，能够进行筛选，即每个主题有单独的列表。目前这种通过筛选的方式可能不是理想方式，正在构思更好的交互方式，欢迎提建议。

基于这套规则引擎，再配合 APP 后台运行，就可以进一步实现自动归档、自动摘要、自动收藏、自动同步 Cubox 等自动化功能 [开发中，敬请期待]