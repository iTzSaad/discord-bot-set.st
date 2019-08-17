const settings = require("./config.json"); 
const Discord = require('discord.js');
const initcmd = settings.initcmd;
const id = settings.id;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi ${client.user.tag} , This Code by : NooName_e#3864 `);
  console.log('')
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

client.on("message", message => {
  if (message.content === adminprefix + "helpme") {
   message.channel.send(`
__Pre. (Prefix) is set. 
* Pre. + ply    ==> For Playing Statu     | set.ply
* Pre. + wat    ==> For Watching Statu    | set.wat
* Pre. + lis    ==> For Listening Statu   | set.lis
* Pre. + st     ==> For Streaming Statu   | set.st
* Pre. + name   ==> To Change your name   | set.name
* Pre. + avatar ==> To change your avatar | set.avatar __  
`)
 
 

}
});
const developers = id
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "http://twitch.tv/S-F");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.login(settings.token);