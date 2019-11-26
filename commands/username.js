module.exports.run = async (bot, message, args,db) => {
message.channel.send(message.author.username)
}

module.exports.help = {
    name: "username"
}