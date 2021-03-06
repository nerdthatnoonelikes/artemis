//Load modules
const npm = require("../modules/NPM.js");
npm.npm();

//load database
dbinit = require("../modules/dbinit.js");
dbinit.dbinit();

//start
module.exports = {
  name: "dog",
  description: "[fun] Random dog picture",
  explain: `This command will show you a random dog picture grabbed from some-random-api.ml`,
  execute(message) {
    //load prefix
    const prefixstart = getGuild.get(message.guild.id);
    const prefix = prefixstart.prefix;

    //update usage
    usage = getUsage.get("dog");
    usage.number++;
    setUsage.run(usage);

    //define stuff
    let baseurl = "https://some-random-api.ml/img/dog";
    let url = baseurl;

    //build request
    request(
      url,
      {
        json: true,
      },
      (err, res, body) => {
        //if error
        if (err) return message.channel.send(err);

        //build embed
        const embed = new Discord.MessageEmbed().setImage(body.link);

        //send embed
        message.channel.send({
          embed: embed,
        });
      }
    );
  },
};
