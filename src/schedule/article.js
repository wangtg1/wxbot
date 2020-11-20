// 定时定点发群消息
// import { Wechaty } from 'wechaty'
import { CronJob } from 'cron' // node-cron
const config = require("./config") // 配置文件

export default async (bot) => {
    return new CronJob('13 12 * * *', async () => {
      const rooms = config.room.roomList
      const article = await recentArticle()
      await pMap(targetRooms, async room => {
        await room.say(article)
      }, {
        concurrency: 6
      })
    }, null, true, 'Asia/Shanghai')
  }