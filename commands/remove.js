module.exports.run = async (bot, message, args,db) => {
let FieldValue = require('firebase-admin').firestore.FieldValue;

// Create a document reference
let cityRef = db.collection('members').doc(message.member.id);

let property = args[0]
let value = args[1];
let obj = {};
obj[property] = value;

// Remove the 'capital' field from the document
let removeCapital = cityRef.update({
[property]: FieldValue.delete()
});
message.channel.send("`Removed " + `${property}` + " from your list`")
}

module.exports.help = {
    name: "remove"
}