# 产品故事10：大重构，支持Mac

我基本上每次大更新功能，就会写稿宣传一次，一个月之前阅牍上线了重构的新版本，但是发现了诸多 bug ，想着新版本修复之后再宣传，结果这个新版本苹果审核了近 3 周。。心态都差点崩了。。

闲话就不多说了，给大家介绍一下重新设计之后的阅牍。

## 列表优先

阅牍的设计初衷是想减轻用户的信息过载，希望通过产品机制让用户优先阅读感兴趣的内容，主要通过主题与筛选来实现的。但是在原来的 App 中，主题的使用非常麻烦，而且重要性不明显。本次重构，将主题、发现、聚焦等概念进一步浓缩成『列表』这个概念。

## 内置列表

App 预先设置的列表，包括：

1. 今天：今天更新的内容
2. 稍后读：从任何一个其他列表都可以将内容转为稍后读
3. 关注：关注源或者关键词，内容会更新在关注列表，因为主题转为自定义列表，因此取消了主题关注的功能
4. 所有：所有文章，为默认列表
5. 最近阅读：最近读过的文章，按阅读时间排序
6. 收藏：收藏的内容

关注与稍后读其实是原来聚焦列表的拆分。

## 自定义列表

我将信息分为 [重要信息] 、 [非重要信息] 和 [垃圾信息] 三类，对于垃圾信息，阅牍支持自动化过滤，一般的 RSS 产品也是基于这种思路来解决信息过载问题。但依据作者的使用经验来看，这其实远远不够，我们希望的是把重要信息筛选出来，自定义列表就是为了解决这个问题。

自定义列表借鉴自搜索引擎，用户通过关键词及关键词组合筛选出相关的内容，创建视图，把它固定在 App 面板上后，下次直接进入阅读即可。除了关键词外，后续会尝试加入更多的条件。

在一般 RSS 阅读器中，是把 RSS 或者 RSS 分组当做一种列表，但是阅牍中，列表是比 RSS 或分组更高一个层次的概念，RSS 和分组只作为一个筛选项，同关键词。当选中一个列表后，只会显示符合当前列表的 RSS ，这么做得原因主要考虑两点：

1. 很多 RSS 里的内容可能是很多不同的话题，放到一个列表里是不合适，而自定义列表可以按照话题聚合一个列表，当然也支持按单个 RSS 或分组制作自定义列表
2. 当订阅的数量达到几十个之后，列表就太长了，而自定义列表只会将重要列表固定在面板上，使用起来更方便。

## Mac
初步支持 Mac ，但是 Mac 上还有些功能不够完善，比如不支持视频播放，后面会解决。目前商店版下掉了 AI 和翻译功能，dmg 版本还在，可以在反馈社区进内测群获取。

## 价格
试水了 3 年会员，发现用户并不买账，本次还是回归了永久会员。应苹果审核要求下线了自填 Key 的 AI 摘要和翻译功能，对价格也进行了下调，后续计划推出按量收费的摘要和翻译服务（标题翻译免费）。