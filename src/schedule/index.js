// 定时定点发群消息
const { CronJob } = require('cron') // node-cron
const config = require("../config") // 配置文件

module.exports = (bot)=> {
  console.log('now is time to run schedul');
  const job = new CronJob('00 13 16 * * 1-5', () => {
    const d = new Date()
    console.log('log about schedule', d)
    const rooms = config.room.roomList
    Object.keys(rooms).map(async (roomName) => {
      // 通过群聊id获取到该群聊实例
      const room = await bot.Room.find({ id: rooms[roomName] })
      room.say(`现在是${d}，是不是该下班了`) // TODO 先实现发固定消息
    })
  })
  job.start();
}
// schedule('t')