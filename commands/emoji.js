//Load modules
const npm = require("../modules/NPM.js");
npm.npm();

//load database
dbinit = require("../modules/dbinit.js");
dbinit.dbinit();

//start
module.exports = {
  name: "emoji",
  description: "[fun] Show an emoji",
  explain: `This command will show you a big version of the emoji you put in, make sure it's a custom emoji and that you actually have access to the emoji itself.
  Mods and up can use the steal feature of this command to add an emote right to your server.
  
  Example usage:
  \`emoji steal https://someURL.com/emote.gif EmoteName\``,
  execute(message) {
    //build prefix
    const prefixstart = getGuild.get(message.guild.id);
    const prefix = prefixstart.prefix;

    //update usage
    usage = getUsage.get("emoji");
    usage.number++;
    setUsage.run(usage);

    //build args
    let args = message.content.slice(prefix.length + 6).split(" ");

    //if no args
    if (!args[0]) return message.reply("Provide a custom Emoji!");

    //if steal
    if (args[0].toLowerCase() == "steal") {
      //if user has no perms
      if (!message.member.permissions.has("KICK_MEMBERS")) return;

      if (!args[1])
        return message.reply(
          "Add the link to the image of which emote you want to steal"
        );
      if (!args[2]) return message.reply("Provide the emoji name");

      message.guild.emojis
        .create(`${args[1]}`, `${args[2]}`)
        .then((emoji) => message.reply(`Done added ${emoji}`))
        .catch((err) => message.reply("An error occured!"));
    }

    //build x
    let x = args[0];

    //Split by :
    let y = x.split(":");

    //replace last character with nothing
    let EId = y[2].replace(">", "");

    //start request
    request(
      "https://cdn.discordapp.com/emojis/" + EId + ".gif",
      {
        json: true,
      },
      (err, res, body) => {
        if (res) {
          //if valid response for gif
          if (res.statusCode == "200") {
            //define EXt
            var EXt = ".gif";

            //make embed
            const embed = new Discord.MessageEmbed().setImage(
              "https://cdn.discordapp.com/emojis/" + EId + EXt
            );

            //send embed
            message.channel.send({
              embed: embed,
            });
          } else {
            //define EXt
            var EXt = ".png";

            //build embed
            const embed = new Discord.MessageEmbed().setImage(
              "https://cdn.discordapp.com/emojis/" + EId + EXt
            );

            //send embed
            message.channel.send({
              embed: embed,
            });
          }
        } else {
          return message.reply("Invalid Emoji!");
        }
      }
    );
  },
};
