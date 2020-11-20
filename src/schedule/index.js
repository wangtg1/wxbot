// import { Wechaty } from 'wechaty'
import { articleBot } from './article'

export async function schedule (bot) {
    await articleBot(bot)
    // await schedule1(bot)
    // await schedule2(bot)
  }