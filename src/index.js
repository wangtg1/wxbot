const { Wechaty } = require("wechaty") // Wechaty核心包
const config = require("./config") // 配置文件

const onScan = require("./onScan") // 机器人需要扫描二维码时监听回调
const onRoomJoin = require("./onRoomJoin") // 加入房间监听回调
const onMessage = require("./onMessage") // 消息监听回调
const onFriendShip = require("./onFriendShip") // 好友添加监听回调

// 初始化
const bot = new Wechaty({
  puppet: "wechaty-puppet-hostie",
  puppetOptions: {
    token: config.token
  },
  name: config.name,
})

// user: {
//   "_events":{},
//   "_eventsCount":0,
//   "id":"wxid",
//   "payload":{
//     "address":"Beijing Fengtai",
//     "alias":"",
//     "avatar":"",
//     "city":"Fengtai",
//     "friend":true,
//     "gender":2,
//     "id":"wx",
//     "name":"天狗",
//     "province":"Beijing",
//     "signature":"。",
//     "star":false,
//     "type":1,
//     "weixin":""
//   }
// }

bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("room-join", onRoomJoin) // 加入房间监听
  .on('login', async user => {
    console.log(`user: ${JSON.stringify(user)}`)
  })
  .on("message", onMessage(bot)) // 消息监听
  .on("friendship", onFriendShip) // 好友添加监听
  .start()