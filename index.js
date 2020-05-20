const Discord = require('discord.js');
const { prefix, token, memes } = require('./config.json');
const client = new Discord.Client();

client.once('ready', ()=>{
    console.log("I'm alive as " + client.user.tag);
    client.user.setActivity("Dani", {type: "WATCHING"});
})

function sendRandomMeme(message) {
    var index = Math.round(Math.random() * memes.length);
    message.channel.send(memes[index]);
}

function answer(message) {
    if(message.content.startsWith(prefix)) {return}

    var msg = message.content;
    const fs = require('fs');
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    var words = [];
    var temp = "";

    for(var i=0;i<msg.length;i++) {
        if(msg[i]!=" "){temp += msg[i]}
        else {
            words.push(temp);
            temp = "";
        }
    }
    words.push(temp);
    temp = "";
    if((message.author != client.user))
     if(data[words[1]][words[words.length-1]] != null) {
            message.channel.send(data[words[words[1]!="are"||words[1]!="is" ? 1 : 2]][words[words.length-1]]);
        } else {
            message.channel.send(data[words[words[1]!="are"||words[1]!="is" ? 1 : 2]][words[words.length-2]]);
        }
    
}

client.on('message', message => {
    console.log(message.content);

    if(message.content.startsWith(`${prefix}hi`)) {
        message.channel.send("Hello World!");
        message.channel.send(`I am ${client.user.tag}`);
        message.react("👍");
    } else
    if(message.content.startsWith(`${prefix}meme`)) {
        sendRandomMeme(message);
        message.react("👍");
    } else
    if(message.content.startsWith(`${prefix}help`)) {
        message.channel.send("¯\\_(ツ)_/¯");
    } else
    if(message.content.startsWith(`${prefix}spam`)) {
        message.react("😱");
        for(i=0;i<9;i++) {
            sendRandomMeme(message);
        }
    } else 
    if(message.content.startsWith("<@!712570630779961374>")) {
        message.channel.send("I'm here!");
    } else 
    answer(message);
    
})

client.login(token);
