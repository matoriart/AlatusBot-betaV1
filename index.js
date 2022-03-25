const Discord = require("discord.js")
const TOKEN = "OTUzMzM3ODM5NzMzNTkyMTg1.YjDHDQ.Kb50daweEARl_vo6p1TUkwoaph4"


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "Can u hear me xiao?") {
        message.reply("Can i call u @everyone")      
    }
    if(message.content == "u know my name?") {
        message.reply("Nahh!!")
    }
    if(message.content == "u know morax?") {
        message.reply("Yeah i know, he's my sensei")
    }
})


const welcomeChannelId = "955857254442238082"

client.on("guildMemberAdd", (member) => {
member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}>welcome to the server!`)
})

client.login(TOKEN)
