const Discord = require('discord.js')
const token = ''
const client = new Discord.Client()

const kick = require('./modules/kick.js')
const ban = require('./modules/ban.js')
const unban = require('./modules/unban.js')

client.on('ready', () => {
    var test = client.channels.cache.get("685609545548169278")
    test.send("Hello!  I am a bot.")
})

client.on('message', async msg => {
    if (msg.content === '!test'){
        msg.channel.send(`Hello ${msg.author}`)
    }

    if (msg.content === '!francis'){
        msg.channel.send('https://github.com/ftweedy')
    }

    if (msg.content != ""){
        if ((msg.member.roles.cache.has(700816495189426276)) || (msg.member.id === msg.guild.owner.id)){
            if (msg.content.startsWith('!kick')) {
                const user = msg.mentions.users.first();
                kick.kickUser(msg, user)
            }

            if (msg.content.startsWith('!ban')) {
                let user = msg.mentions.users.first();
                ban.banUser(msg, user)
            }

            if (msg.content.startsWith('!unban')) {
                unban.unbanUser(msg)
            }
        }
    }
})

client.login(token)