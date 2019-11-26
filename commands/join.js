module.exports.run = async (bot, message, args,db) => {
	
let district = args[0]
if(!district) district = "1";
let user = message.author.username
let obj = {};
obj[user] = district;
db.collection('playerbase').doc('players').update(obj);
message.channel.send("`" + `${user} has been added to district ${district}` + "`")
}

module.exports.help = {
    name: "join"
}