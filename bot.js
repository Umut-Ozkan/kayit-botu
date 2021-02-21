const Discord = require("discord.js");
let client = new Discord.Client()
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;
    const args = message.content.slice('!'.length).trim().split(/ +/g);
    switch (args.shift().toLowerCase()) {
		case 'k':
    if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT SORUMLUSU")[0]) {
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
      if(!message.mentions.users.first() || client.users.cache.get(args.join(' '))) return message.channel.send("Bir kullanıcı girin.")
      if(!args[1]) return message.channel.send("Bir isim girin.")
      if(!args[2]) return message.channel.send("Bir yaş girin.")
    message.guild.member(message.mentions.users.first() || client.users.get(args.join(' '))).roles.add("KAYITLI ROLU")
    message.guild.member(message.mentions.users.first() || client.users.get(args.join(' '))).roles.remove("KAYITSIZ ROLU")
    message.guild.member(message.mentions.users.first() || client.users.get(args.join(' '))).setNickname(`${args[1]} ${args[2]}`)
  }
    break;
    }
});
client.login("TOKEN")