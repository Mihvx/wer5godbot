const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = "%";
var nazwabota = "bot";

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  bot.user.setActivity("THE BEST CHEATS FOR FIVEM!", { type: "WATCHING" });
  console.log(`${nazwabota} jest online`);
});

bot.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(prefix) !== 0) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (command == "say") {
    message.delete();
    if (message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(message.content.slice(prefix.length + 3));
    else return message.channel.send("You don't have permission to that!");
  }

  if (command == "kick") {
    if (message.mentions.members.first()) {
      message.mentions.members.first().kick()
        .then((member) => {
          message.channel.send(
          
              member.displayName +
              " has been successfully kicked! "
          );
        })
        .catch(() => {
          message.channel.send("You don't have permission to that!");
        });
    }
  } else if (command == "ban") {
    if (message.mentions.members.first()) {
      message.mentions.members.first().ban()
        .then((member) => {
          message.channel.send(
            
              member.displayName +
              " has been successfully banned! "
          );
        })
        .catch(() => {
          message.channel.send("You don't have permission to that!");
        });
    }
  }
});


bot.on('guildMemberAdd', member => {
  member.guild.channels.resolve("714095781136695308").send(`<@${member.id}> welcome to **WER5 GOD!** Thank you for joining, we hope you like it and stay with us for longer!`)

} 
)

  bot.login(botconfig.token);
