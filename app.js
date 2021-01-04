const Telegraf = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1463687344:AAHtivk9MInoCI-LACX_oX5BsL1QRJm0vsU')

bot.start((ctx) => {
    ctx.reply('The bot has started!!!')
})

bot.help((ctx) => {
    ctx.reply("This bot can perform the following commands\n - /start\n - /help")
})

bot.on('sticker', (ctx) => {
    ctx.reply('Cool Sticker!!')
})

bot.hears('hello', (ctx) => {
    ctx.reply("Hello sir, How are you?")
})

bot.command('say', (ctx) => {
    msg = ctx.message.text
    msgArray = msg.split(' ')
    msgArray.shift()
    newMsg = msgArray.join(' ')
    ctx.reply(newMsg)
})

bot.command('fortune', (ctx) => {
    url = 'http://yerkee.com/api/fortune'

    axios.get(url)
    .then((res) => {
        console.log(res.data.fortune)
        ctx.reply(res.data.fortune)
    })
})

bot.command('c', (ctx) => {
    msg = ctx.message.text
    msgArray = msg.split(' ')

    newMsg = "stock : " + msgArray[1] + "\n";
    newMsg += "indicator : " + msgArray[2];

    ctx.reply(newMsg)
})

bot.launch()