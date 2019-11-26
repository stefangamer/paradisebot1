module.exports.run = async (bot, message, args, db) => {
    var docRef = db.collection("members").doc(message.author.id);

docRef.get().then(function(doc) {
    if (doc.exists) {
       let oof = doc.data();
       var myJSON = JSON.stringify(oof);
	message.channel.send("```" + `${myJSON}` + "```")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("error getting document");
})
}


module.exports.help = {
    name: "list"
}