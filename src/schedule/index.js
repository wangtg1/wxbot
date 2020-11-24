// 定时定点发群消息
const { CronJob } = require('cron') // node-cron
const config = require("../config") // 配置文件

const schedule = (bot)=> {
  const job = new CronJob('00 00 16 * * 1-5', () => {
    const d = new Date()
    // console.log('At Ten Minutes:', d)
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
module.exports = schedule;