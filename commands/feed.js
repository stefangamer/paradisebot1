module.exports.run = async (bot, message, args,db) => {
message.channel.send(`${message.author} fed ${message.mentions.members.first()} :D`)
}

module.exports.help = {
    name: "feed"
}