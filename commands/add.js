module.exports.run = async (bot, message, args,db) => {
	
let property = args[0]
let value = args[1]
if(!value) value = "1";
let obj = {};
obj[property] = value;
db.collection('members').doc(message.member.id).update(obj);
message.channel.send("`" + `${property} [x${value}] has been added to your list!` + "`")
}

module.exports.help = {
    name: "add"
}