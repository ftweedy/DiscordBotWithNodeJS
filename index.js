const Discord = require('discord.js')
const token = 'Njg1NjEwMDQxNTkxNzI2MDk2.XmLKMw.t6987qsvTUjuEBou6762tnMzQow'
const client = new Discord.Client()

client.on('ready', () => {
    var test = client.channels.cache.get("685609545548169278")
    test.send("Hello!  I am a bot.")
})

client.on('message', (msg) => {
    if (msg.content === '!test'){
        msg.channel.send(`Hello ${msg.author}`)
    }

    if (msg.content === '!francis'){
        msg.channel.send('https://github.com/ftweedy')
    }

    // if (!msg.guild) return;

    if (msg.content.startsWith('!kick')) {
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
            // If the member is in the guild, run on member not user
            if (member) {
                member.kick('Kicked because of testing')
                .then(() => {
                    msg.reply(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                    msg.reply('I was unable to kick the member');
                    console.error(err);
                });
            } else {
                msg.reply("That user isn't in this guild!");
            }
        } else {
            msg.reply("You didn't mention the user to kick!");
        }
    }

    if (msg.content.startsWith('!ban')) {
        let user = msg.mentions.users.first();
        if (user) {
            let member = msg.guild.member(user);
            // If the member is in the guild, run on member not user
            if (member) {
                member.ban({reason: 'They were bad!', })
                .then(() => {
                    msg.reply(`Successfully banned ${user.tag}`);
                })
                .catch(err => {
                    msg.reply('I was unable to ban the member');
                    console.error(err);
                });
            } else {
                msg.reply("That user isn't in this guild!");
            }
        } else {
             msg.reply("You didn't mention the user to ban!");
        }
    }

    if (msg.content.startsWith('!unban')) {
        let invite = msg.channel.createInvite({ maxUses: 1 })
        let args = msg.content.slice(6).split(' ')
        emptyElement = args.shift()
        if (args === '') {
            return msg.channel.send("Provide a user to unban")
        }
        let bannedUser = args[0]
console.log(bannedUser)
        try {
            msg.guild.unban(bannedUser)
            msg.channel.send(`${bannedUser.tag} has been unbanned!`)
        } catch(e) {
            console.log("Member is not banned")
        }

        // msg.guild.fetchBans().then(bans => {
        //     let member = bans.filter(r => r === args[0])
        //     if (member){
        //         console.log(member)
        //         msg.guild.unban(member)
        //         member.send(invite)
        //     } else {
        //         msg.reply(`There is no match for the user `)
        //     }
        // })
    }
})

client.login(token)