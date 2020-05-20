const Discord = require('discord.js');
const { prefix, token, memes } = require('./config.json');
const client = new Discord.Client();

client.once('ready', ()=>{
    console.log("I'm alive as " + client.user.tag);
    client.user.setActivity("Dani", {type: "WATCHING"});
})

function sendRandomMeme(message) {
    var index = Math.round(Math.random() * memes.length);
    console.log(index);
    message.channel.send(memes[index]);
}

client.on('message', message => {
    console.log(message.content);
    if(message.content.startsWith(`${prefix}hi`)) {
        message.channel.send("Hello World!");
        message.react("👍");
    } else
    if(message.content.startsWith(`${prefix}meme`)) {
        sendRandomMeme(message);
        message.react("👍");
    } else
    if(message.content.startsWith(`${prefix}spam`)) {
        message.react("😱");
        for(i=0;i<9;i++) {
            sendRandomMeme(message);
        }
    } else {
        if(message.author != client.user) {
            message.react("👍");
        }
    }
})

client.login(token);
