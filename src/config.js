module.exports = {
  // token: "你申请的token", TODO
  token: "puppet_donut_******",
  // 机器人名字
  name: "天狗",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: {
      // 群名(用于展示，最好是群名，可随意) : 群id(这个可不能随意)
      // TODO
      机器人: "******@chatroom"
    },
    // 加入房间回复
    roomJoinReply: `\n 你好，欢迎你的加入！ \n\n Hello, welcome to join！😊`
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["机器人", "前端"],
    // 是否开启加群
    addRoom: true
  }
}
