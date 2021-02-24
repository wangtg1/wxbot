# wechaty-Robot

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/chatie/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

基于 wechaty-puppet-donut 的微信机器人助手



#### 目前实现功能

- 自动通过好友验证
  - 当有人添加机器人时，判断验证消息关键字后通过或直接通过
- 私聊关键字回复
  - 例如回复 `加群` 推送群聊邀请
- 自动聊天
  - 群聊中通过 `@[机器人]xxx` 可以和机器人聊天
  - 私聊发送消息即可聊天
- 加入群聊自动欢迎
  - 当新的小伙伴加入群聊后自动 `@[新的小伙伴]` 发一个文字欢迎



#### 结构

```js
|-- src/
    |---- index.js	    # 入口文件
|---- config.js		  	# 配置文件
|---- onScan.js			# 机器人需要扫描二维码时监听回调
|---- onRoomJoin.js 	# 进入房间监听回调
|---- onMessage.js		# 消息监听回调
|---- onFriendShip.js	# 好友添加监听回调
|-- package.json
```



#### 最后
由于本人只有一个微信号，暂时不予公开机器人微信号；不定期更新中...

---- 不知道为什么 微信说我有违规行为群功能有两周时间不能用了，就 很苦恼。我整理了下开发的过程 写道了[./微信机器人.md](./微信机器人.md)文件，有兴趣可以看一下...