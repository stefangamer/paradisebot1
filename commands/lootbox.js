let item = "none"
let image = "none"
let rarity = "none"
module.exports.run = async (bot, message, args,db) => {
let oldcoins = await db.collection('coins').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldvalue = await db.collection('members').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().test
})
let oldcoinsnum = parseInt(oldcoins)
let amount = 100;
let amount2 = parseInt(amount)
let newamount = oldcoinsnum - amount
if (newamount < 0) return message.reply("You're too broke pal.")
db.collection('coins').doc(message.member.id).update({
balance: newamount
});
message.channel.send(`lootbox bought for ` + "`" + `${amount}` + "`" + " coins")
let lootbox = Math.random() * (1000 - 1) + 1;
if(lootbox < 500 && lootbox > 0) {
item = "goomba"
rarity = "common"
oldvalue = await db.collection('members').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().goomba
})
} else if(lootbox > 500) {
item = "mario"
rarity = "common"
oldvalue = await db.collection('members').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().mario
})
}
currentslot1 = await db.collection('members').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().slot1
})
currentslot2 = await db.collection('members').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().slot2
})
let property = "slot1"
if(!currentslot1) {
property = "slot 1"
} else if(!currentslot2){
property = "slot 2"
} else {
return message.reply("Too many slots pal!")
}
let value = item 
let obj = {};
obj[property] = value;
db.collection('members').doc(message.member.id).update(obj);
message.channel.send(`Got a ${rarity} ${item} you now have ${value}`)
}


module.exports.help = {
    name: "lootbox"
}