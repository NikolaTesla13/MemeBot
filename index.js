const Discord = require('discord.js');
const { prefix, token, memes } = require('./config.json');
const client = new Discord.Client();

client.once('ready', ()=>{
    console.log("I'm alive");
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
    }
    if(message.content.startsWith(`${prefix}meme`)) {
        sendRandomMeme(message);
    }
})

client.login(token);