//load modules
npm = require("./NPM.js");
npm.npm();

//load databases
dbinit = require("./dbinit.js");
dbinit.dbinit();

//set
supportGet = new Set();

//start
module.exports = {
  onMessage: async function (message) {
    //init something
    if (message.guild) {
      var bumps = getSettings.get(message.guild.id);
    }

    //if bump
    if (bumps) {
      if (bumps.bumpping !== "1") {
        //Disboard
        //If it's the disboard bot
        if (message.author.id == "302050872383242240") {
          //if this
          if (message.embeds[0]) {
            //if the disboard response is bump done
            if (message.embeds[0].description.includes("Bump done")) {
              //define guild channel
              let guildChannels2 = getGuild.get(message.guild.id);

              //proceed if valid guild
              if (guildChannels2) {
                //fetch latest message that bumped
                message.channel.messages.fetch().then((messages) => {
                  let dbumper = messages
                    .filter((msg) =>
                      msg.content.toLowerCase().startsWith("!d bump")
                    )
                    .map((msg) => msg.author.id);
                  message.channel.send(
                    "You bumped for Disboard!\nIn 2 hours we will ping you.\n<@" +
                      dbumper[0] +
                      ">"
                  );

                  //define database entry
                  let settime = 7200000;
                  let remindtext = "Time for your next `!d bump`";
                  let datefor = moment()
                    .add(settime, "ms")
                    .format("YYYYMMDDHHmmss");
                  timerset = {
                    mid: message.id,
                    cid: message.channel.id,
                    gid: message.guild.id,
                    uid: dbumper[0],
                    time: datefor,
                    reminder: remindtext,
                  };

                  //run db
                  setRemind.run(timerset);
                });
              }
            }
          }
        }

        //DC Servers
        //If it's the Servers bot
        if (message.author.id == "509430136442191873") {
          //if this
          if (message.embeds[0]) {
            //if the Servers response is bump done
            if (
              message.embeds[0].description.includes("Bumped to the top! Whoo!")
            ) {
              //define guild channel
              let guildChannels2 = getGuild.get(message.guild.id);

              //proceed if valid guild
              if (guildChannels2) {
                //fetch latest message that bumped
                message.channel.messages.fetch().then((messages) => {
                  let dbumper = messages
                    .filter((msg) =>
                      msg.content.toLowerCase().startsWith("dc!bump")
                    )
                    .map((msg) => msg.author.id);
                  message.channel.send(
                    "You bumped for D.C Servers!\nIn 2 hours we will ping you.\n<@" +
                      dbumper[0] +
                      ">"
                  );

                  //define database entry
                  let settime = 7200000;
                  let remindtext = "Time for your next `dc!bump`";
                  let datefor = moment()
                    .add(settime, "ms")
                    .format("YYYYMMDDHHmmss");
                  timerset = {
                    mid: message.id,
                    cid: message.channel.id,
                    gid: message.guild.id,
                    uid: dbumper[0],
                    time: datefor,
                    reminder: remindtext,
                  };

                  //run db
                  setRemind.run(timerset);
                });
              }
            }
          }
        }

        //discordlist Servers
        //If it's the Servers bot
        if (message.author.id == "212681528730189824") {
          //if this
          if (message.embeds[0]) {
            //if the Servers response is bump done
            if (message.embeds[0].description.includes("Server bumped!")) {
              //define guild channel
              let guildChannels2 = getGuild.get(message.guild.id);

              //proceed if valid guild
              if (guildChannels2) {
                //fetch latest message that bumped
                message.channel.messages.fetch().then((messages) => {
                  let dbumper = messages
                    .filter((msg) =>
                      msg.content.toLowerCase().startsWith("dlm!bump")
                    )
                    .map((msg) => msg.author.id);
                  message.channel.send(
                    "You bumped for DiscordList.io!\nIn 8 hours we will ping you.\n<@" +
                      dbumper[0] +
                      ">"
                  );

                  //define database entry
                  let settime = 28800000;
                  let remindtext = "Time for your next `dlm!bump`";
                  let datefor = moment()
                    .add(settime, "ms")
                    .format("YYYYMMDDHHmmss");
                  timerset = {
                    mid: message.id,
                    cid: message.channel.id,
                    gid: message.guild.id,
                    uid: dbumper[0],
                    time: datefor,
                    reminder: remindtext,
                  };

                  //run db
                  setRemind.run(timerset);
                });
              }
            }
          }
        }

        //discordserver.info
        if (message.author.id == "575776004233232386") {
          //if this
          if (message.embeds[0]) {
            //if the discordserver response is bump done
            if (message.embeds[0] && message.embeds[0].description) {
              if (
                message.embeds[0].description.includes(
                  "You successfully liked the server."
                )
              ) {
                //define guild channel
                let guildChannels2 = getGuild.get(message.guild.id);

                //proceed if valid guild
                if (guildChannels2) {
                  //fetch latest message that bumped
                  message.channel.messages.fetch().then((messages) => {
                    let dbumper = messages
                      .filter((msg) =>
                        msg.content.toLowerCase().startsWith("!like")
                      )
                      .map((msg) => msg.author.id);
                    message.channel.send(
                      "You bumped for DiscordServer.info!\nIn 4 hours we will ping you.\n<@" +
                        dbumper[0] +
                        ">"
                    );

                    //define database entry
                    let settime = 14400000;
                    let remindtext = "Time for your next `!like`";
                    let datefor = moment()
                      .add(settime, "ms")
                      .format("YYYYMMDDHHmmss");
                    timerset = {
                      mid: message.id,
                      cid: message.channel.id,
                      gid: message.guild.id,
                      uid: dbumper[0],
                      time: datefor,
                      reminder: remindtext,
                    };

                    //run db
                    setRemind.run(timerset);
                  });
                }
              }
            }
          }
        }

        //DiscordServers
        //If it's the DiscordServers bot
        if (message.author.id == "115385224119975941") {
          //if this
          //if the disboard response is bump done
          if (message.content.startsWith("Head over to")) {
            //define guild channel
            let guildChannels2 = getGuild.get(message.guild.id);

            //proceed if valid guild
            if (guildChannels2) {
              //fetch latest message that bumped
              message.channel.messages.fetch().then((messages) => {
                let dbumper = messages
                  .filter((msg) =>
                    msg.content.toLowerCase().startsWith("|bump")
                  )
                  .map((msg) => msg.author.id);
                message.channel.send(
                  "You bumped for DiscordServers!\nIn 12 hours we will ping you.\n<@" +
                    dbumper[0] +
                    ">"
                );

                //define database entry
                let settime = 43200000;
                let remindtext = "Time for your next `|bump`";
                let datefor = moment()
                  .add(settime, "ms")
                  .format("YYYYMMDDHHmmss");
                timerset = {
                  mid: message.id,
                  cid: message.channel.id,
                  gid: message.guild.id,
                  uid: dbumper[0],
                  time: datefor,
                  reminder: remindtext,
                };

                //run db
                setRemind.run(timerset);
              });
            }
          }
        }
      }
    }

    //ignore bots
    if (message.author.bot) return;

    //Direct Message handle
    if (message.channel.type == "dm") {
      console.log(
        moment().format("MMMM Do YYYY, HH:mm:ss") +
          "\n" +
          message.author.username +
          "\n" +
          message.content
      );

      //create embed
      const whoartemis = new Discord.MessageEmbed()
        .setTitle("Invite")
        .setAuthor(
          message.author.username,
          message.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
        )
        .setColor("RANDOM")
        .setDescription("Hello, I am Artemis!")
        .addField("Main discord server: ", "https://discord.gg/EVVtPpw")
        .addField("Bot Website: ", "https://artemisbot.eu")
        .addField("Bot Github: ", "https://github.com/UtopicUnicorns/artemis")
        .addField(
          "Bot Invite: ",
          "https://discordapp.com/api/oauth2/authorize?client_id=440892659264126997&permissions=8&scope=bot"
        )
        .setFooter("Bot owner: <@127708549118689280> | UtopicUnicorn#0383");

      //Send embed
      return message.channel.send({
        embed: whoartemis,
      });
    }

    //setting failsafe
    settingsfailsafe = getSettings.get(message.guild.id);
    if (!settingsfailsafe) {
      settingsfailsafe = {
        guild: message.guild.id,
        leavejoin: `0`,
        deletemsg: `0`,
        editmsg: `0`,
        bumpping: `0`,
      };
      setSettings.run(settingsfailsafe);
    }

    //userfailsafe db
    userfailsafe = getScore.get(message.author.id, message.guild.id);
    if (!userfailsafe) {
      userfailsafe = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        warning: 0,
        muted: 0,
        translate: 0,
        stream: 0,
        notes: 0,
      };
      setScore.run(userfailsafe);
    }

    var defaultRoles = await message.guild.roles.cache.find(
      (r) => r.name === `~/Members`
    );

    //Guild safe db
    guildfailsafe = getGuild.get(message.guild.id);
    if (!guildfailsafe) {
      guildfailsafe = {
        guild: message.guild.id,
        generalChannel: `0`,
        highlightChannel: `0`,
        muteChannel: `0`,
        logsChannel: `0`,
        streamChannel: `0`,
        reactionChannel: `0`,
        streamHere: `0`,
        autoMod: `0`,
        prefix: `!`,
        leveling: `1`,
        wmessage: "",
        defaultrole: "",
      };
      setGuild.run(guildfailsafe);
    } else {
      if (!guildfailsafe.defaultrole) {
        if (defaultRoles) {
          guildfailsafe.defaultrole = defaultRoles.id;

          setGuild.run(guildfailsafe);
        }
      }
    }

    //Level failsafe db
    newLevel = getLevel.get(message.guild.id);
    if (!newLevel) {
      newLevel = {
        guild: message.guild.id,
        lvl5: `0`,
        lvl10: `0`,
        lvl15: `0`,
        lvl20: `0`,
        lvl30: `0`,
        lvl50: `0`,
        lvl85: `0`,
      };
      setLevel.run(newLevel);
    }

    //load channels from database
    const guildChannels = getGuild.get(message.guild.id);
    if (guildChannels) {
      var thisguild = message.client.guilds.cache.get(guildChannels.guild);
    }
    if (thisguild) {
      var generalChannel1 = message.guild.channels.cache.get(
        guildChannels.generalChannel
      );
      if (!generalChannel1) {
        var generalChannel1 = "0";
      }
      var muteChannel1 = message.guild.channels.cache.get(
        guildChannels.muteChannel
      );
      if (!muteChannel1) {
        var muteChannel1 = "0";
      }
      var logsChannel1 = message.guild.channels.cache.get(
        guildChannels.logsChannel
      );
      if (!logsChannel1) {
        var logsChannel1 = "0";
      }
    } else {
      var generalChannel1 = "0";
      var muteChannel1 = "0";
      var logsChannel1 = "0";
    }

    //load prefix
    const prefixstart = getGuild.get(message.guild.id);
    const prefix = prefixstart.prefix;

    //build args
    const args = message.content.slice(prefix.length).split(/ +/);

    //define commands
    const commandName = args.shift().toLowerCase();
    const command = message.client.commands.get(commandName);

    //message includes previous message link
    //redo args for this
    let linkArgs = message.content.toLowerCase().split(" ");

    //if args
    if (linkArgs) {
      //form check url
      let checkUrl = `https://discordapp.com/channels/${message.guild.id}/`;
      let checkUrlSecond = `https://discord.com/channels/${message.guild.id}/`;
      let checkUrlThird = `https://canary.discordapp.com/channels/${message.guild.id}/`;

      //loop trough args
      for (let i of linkArgs) {
        //if starts with check url Second
        if (i.startsWith(checkUrlSecond)) {
          //define current channel
          const curChannel = message.channel.id;

          //split
          let checkUrl2 = i.slice(checkUrlSecond.length).split("/");

          //checker
          if (checkUrl2[0] && checkUrl2[1]) {
            //fetch channel
            let fetchChannel = message.client.channels.cache.get(
              `${checkUrl2[0]}`
            );

            //if fetch channel exists
            if (fetchChannel) {
              //fetch message
              fetchChannel.messages
                .fetch(`${checkUrl2[1]}`)
                .then((message) => {
                  //form embed
                  const embed = new Discord.MessageEmbed()
                    .setTitle("Message link contents")
                    .setAuthor(
                      message.author.username,
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setThumbnail(
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setDescription(`${message.content.slice(0, 1500)}`)
                    .addField("Found in channel: ", message.channel)
                    .setColor("RANDOM")
                    .setFooter(
                      moment
                        .utc(message.createdTimestamp)
                        .format("dddd, MMMM Do YYYY, HH:mm:ss")
                    );

                  if (message.content) {
                    //send embed
                    message.client.channels.cache.get(curChannel).send({
                      embed: embed,
                    });
                  }
                })
                .catch(console.log(""));
            }
          }
        }

        //if args start with checkUrl
        if (i.startsWith(checkUrl)) {
          //define current channel
          const curChannel = message.channel.id;

          //split
          let checkUrl2 = i.slice(checkUrl.length).split("/");

          //checker
          if (checkUrl2[0] && checkUrl2[1]) {
            //fetch channel
            let fetchChannel = message.client.channels.cache.get(
              `${checkUrl2[0]}`
            );

            //if fetch channel exists
            if (fetchChannel) {
              //fetch message
              fetchChannel.messages
                .fetch(`${checkUrl2[1]}`)
                .then((message) => {
                  //form embed
                  const embed = new Discord.MessageEmbed()
                    .setTitle("Message link contents")
                    .setAuthor(
                      message.author.username,
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setThumbnail(
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setDescription(`${message.content.slice(0, 1500)}`)
                    .addField("Found in channel: ", message.channel)
                    .setColor("RANDOM")
                    .setFooter(
                      moment
                        .utc(message.createdTimestamp)
                        .format("dddd, MMMM Do YYYY, HH:mm:ss")
                    );

                  if (message.content) {
                    //send embed
                    message.client.channels.cache.get(curChannel).send({
                      embed: embed,
                    });
                  }
                })
                .catch(console.log(""));
            }
          }
        }

        //if args start with checkUrlThird
        if (i.startsWith(checkUrlThird)) {
          //define current channel
          const curChannel = message.channel.id;

          //split
          let checkUrl2 = i.slice(checkUrlThird.length).split("/");

          //checker
          if (checkUrl2[0] && checkUrl2[1]) {
            //fetch channel
            let fetchChannel = message.client.channels.cache.get(
              `${checkUrl2[0]}`
            );

            //if fetch channel exists
            if (fetchChannel) {
              //fetch message
              fetchChannel.messages
                .fetch(`${checkUrl2[1]}`)
                .then((message) => {
                  //form embed
                  const embed = new Discord.MessageEmbed()
                    .setTitle("Message link contents")
                    .setAuthor(
                      message.author.username,
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setThumbnail(
                      message.author.avatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024,
                      })
                    )
                    .setDescription(`${message.content.slice(0, 1500)}`)
                    .addField("Found in channel: ", message.channel)
                    .setColor("RANDOM")
                    .setFooter(
                      moment
                        .utc(message.createdTimestamp)
                        .format("dddd, MMMM Do YYYY, HH:mm:ss")
                    );

                  if (message.content) {
                    //send embed
                    message.client.channels.cache.get(curChannel).send({
                      embed: embed,
                    });
                  }
                })
                .catch(console.log(""));
            }
          }
        }
      }
    }

    //support channel stuff
    let supportID = getSupport.get(message.channel.id, message.guild.id);

    //if current channel is support channel
    if (supportID) {
      //if channel inuse is 1
      if (supportID.inuse == "1") {
        //if help
        if (message.content.toLowerCase() == "help") {
          return message.reply(
            "This support channel is currently in use, please wait for the current session to end, or use a different channel!"
          );
        }

        //if user says done
        if (message.content.toLowerCase() == prefix + "done") {
          //Write database
          supportID.inuse = `0`;
          setSupport.run(supportID);

          //if mint
          if (supportID.mainchan) {
            message.channel.setParent(supportID.mainchan);
          }

          //notify user
          return message.reply(`
            Wrapping this up, we are done here!\n
            You can resume your session if needed with 
            \`${prefix}resume caseNum\`
            \nTo the person who answered use:
              \`${prefix}support answer ${supportID.casenumber} <Answer>\``);
        }
      } else {
        //if no support session
        if (
          message.content.toLowerCase().startsWith("help") ||
          message.content.toLowerCase().startsWith(prefix + "resume") ||
          message.content.toLowerCase().startsWith(prefix + "support")
        ) {
          supportGet.add(message.guild.id);
        } else {
          //Timeout notification
          if (supportGet.has(message.guild.id)) {
          } else {
            //notify
            message.reply(
              "There is no help session activated, start one by simply writing:\n`help`\nOr resume a case with:\n" +
                prefix +
                "`resume CaseNum`"
            );

            //add user to the set
            supportGet.add(message.guild.id);

            //remove user from the set after 20 minutes
            setTimeout(() => {
              supportGet.delete(message.guild.id);
            }, 1800000);
          }
        }

        //if message is resume
        if (message.content.toLowerCase().startsWith(prefix + "resume")) {
          //create args
          let prevCase = message.content.slice(prefix.length + 7).split(" ");

          //get the case entry
          let prevCaseGet = getSupCase.get(prevCase[0]);

          //If no entry
          if (!prevCaseGet)
            return message.reply(
              "Case not found, check the case number or start a new session with `help`"
            );

          //define user
          var user = message.guild.members.cache.get(prevCaseGet.askby);

          //if no user
          if (!user) {
            var user = message.guild.members.cache.get(message.author.id);
          }

          //reply to user
          const supTic3 = new Discord.MessageEmbed()
            .setTitle("Resuming support case: " + prevCaseGet.scase)
            .setAuthor(
              user.user.username + "#" + user.user.discriminator,
              user.user.displayAvatarURL({
                format: "png",
                dynamic: true,
                size: 1024,
              })
            )
            .setDescription("Case has been resumed")
            .addField("Asked by: ", `${user}`)
            .addField("Context link: ", prevCaseGet.murl)
            .addField("Question: ", prevCaseGet.question.slice(0, 1000) + ".")
            .addField("\u200b", "\u200b")
            .addField("Answer: ", prevCaseGet.answer)
            .setColor("RANDOM")
            .setTimestamp();

          //Write database
          supportID.inuse = `1`;
          supportID.casenumber = prevCaseGet.scase;
          setSupport.run(supportID);

          //change channel topic to subject
          message.client.channels.cache
            .get(message.channel.id)
            .setTopic(prevCaseGet.question.slice(0, 1000));

          //if used category
          if (supportID.inusechan) {
            message.channel.setParent(supportID.inusechan);
          }

          //if mint server
          if (message.guild.id == "628978428019736619") {
            //tag scholar role
            if (prevCase[1]) {
              if (prevCase[1].toLowerCase() == "--silent") {
              }
            } else {
              message.channel.send("Calling the <@&629302830532132864>");
            }
          }

          //if ttc server
          if (message.guild.id == "572855720777744395") {
            //tag scholar role
            if (prevCase[1]) {
              if (prevCase[1].toLowerCase() == "--silent") {
              }
            } else {
              message.channel.send("Calling the <@&685589719022567441>");
            }
          }

          //if Lubuntu server
          if (message.guild.id == "621525140412563496") {
            //tag scholar role
            if (prevCase[1]) {
              if (prevCase[1].toLowerCase() == "--silent") {
              }
            } else {
              message.channel.send("Calling the <@&736466297285771264>");
            }
          }

          //send support embed
          return message.reply({
            embed: supTic3,
          });
        }

        //if message is help
        if (message.content.toLowerCase() == "help") {
          //build collector
          let collector3 = message.channel.createMessageCollector(
            (m) => m.author.id === message.author.id,
            { time: 240000 }
          );

          //create support format embed
          const supTic = new Discord.MessageEmbed()
            .setTitle("Support case opening")
            .setAuthor(
              message.author.username,
              message.author.avatarURL({
                format: "png",
                dynamic: true,
                size: 1024,
              })
            )
            .setDescription(
              "Explain your issue in your next message!\n" +
                "If you already explained your issue in one message earlier, then just copy paste it.\n\n" +
                "If you do not respond in 4 minutes, your session creation will end!"
            )
            .setColor("RANDOM")
            .setTimestamp();

          //send support embed
          message.reply({
            embed: supTic,
          });

          //await message
          collector3.on("collect", async (m) => {
            //check if database is filled
            let c = getSupCase.get("0");
            if (!c) {
              var caseNum = "0";
            } else {
              let t = db.prepare("SELECT count(scase) FROM supcase;");
              let r = JSON.stringify(t.get());
              let e = r.split(":")[1].replace("}", "");
              var caseNum = e;
            }

            //Build the case
            buildCase = {
              scase: caseNum,
              askby: m.author.id,
              question: m.content,
              solveby: "Noone yet",
              answer: "None given",
              murl: m.url,
            };

            //submit the case
            setSupCase.run(buildCase);

            //if mint server
            if (message.guild.id == "628978428019736619") {
              //tag scholar role
              message.channel.send("Calling the <@&629302830532132864>");
            }

            //if ttc server
            if (message.guild.id == "572855720777744395") {
              //tag scholar role
              message.channel.send("Calling the <@&685589719022567441>");
            }

            //if lubuntu server
            if (message.guild.id == "621525140412563496") {
              //tag scholar role
              message.channel.send("Calling the <@&736466297285771264>");
            }

            //reply to user
            const supTic2 = new Discord.MessageEmbed()
              .setTitle("Support case: " + caseNum)
              .setAuthor(
                message.author.username,
                message.author.avatarURL({
                  format: "png",
                  dynamic: true,
                  size: 1024,
                })
              )
              .setDescription("Your case has been submitted!")
              .addField("Your case number is: ", caseNum)
              .setColor("RANDOM")
              .setTimestamp();

            //Write database
            supportID.inuse = `1`;
            supportID.casenumber = caseNum;
            setSupport.run(supportID);

            //change channel topic to subject
            message.client.channels.cache
              .get(message.channel.id)
              .setTopic(message.content.slice(0, 1000));

            //if used category
            if (supportID.inusechan) {
              message.channel.setParent(supportID.inusechan);
            }

            //send support embed
            message.reply({
              embed: supTic2,
            });

            //Stop collecting
            collector3.stop();
          });
        }
      }
    }

    //non-prefix help
    if (
      message.mentions.has(message.client.user) &&
      message.content.toLowerCase().includes("help")
    ) {
      //build embed
      const nonprefix = new Discord.MessageEmbed()
        .setTitle("Non prefix help menu")
        .setAuthor(
          message.author.username,
          message.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
        )
        .setDescription(
          "This message was triggered by mentioning me with the help argument"
        )
        .setColor("RANDOM")
        .addField("My prefix for this server:\n", prefix)
        .addField("Example command usage: \n", prefix + "help")
        .addField(
          "Support my work: ",
          "https://www.paypal.com/paypalme2/UtopicUnicorn\nhttps://artemisbot.eu"
        )
        .setTimestamp();

      //send embed
      message.channel.send({
        embed: nonprefix,
      });
    }

    //autoMod START
    //free pass for members with kick permissions
    if (message.member && message.member.permissions.has("KICK_MEMBERS")) {
    } else {
      if (guildChannels.autoMod == "strict" || guildChannels.autoMod == "2") {
        //call automod module
        const automod = require("./automod.js");

        //word filter
        automod.automod("wordFilter", message);

        //anti spam
        automod.automod("noSpam", message);

        //check links
        automod.automod("noInvites", message);

        //prevent mention spam
        automod.automod("antiMention", message);
      }
    }

    //Verification
    //ignore if no mute channel
    if (muteChannel1 == "0") {
    } else {
      //if channel ID is mute/verification channel
      if (message.channel.id === muteChannel1.id) {
        //Make function
        function verifyHuman(message) {
          //make a new captcha
          let captcha = new Captcha2();

          //create the image
          const attachment = new Discord.MessageAttachment(
            captcha.PNGStream,
            "captcha.png"
          );

          //notify user
          message.reply(
            "**Enter the text shown in the image below:**\nIf you fail the verifications just do " +
              prefix +
              "verify again!\nIf you're blind or visually disabled then ping an admin.",
            attachment
          );

          //wait for user reply
          let collector = message.channel.createMessageCollector(
            (m) => m.author.id === message.author.id
          );

          //if user responds
          collector.on("collect", async (m) => {
            //clean
            message.delete();

            //if message is equal to captcha
            if (m.content.toUpperCase() === captcha.value) {
              //if anti raid is on
              if (guildChannels.autoMod == "strict") {
                return message.reply(
                  "Our sincere apologies, Automod Strict is ON\nWhich means that people have to be manually approved!"
                );

                //else go on
              } else {
                //check for user entry
                let userscore1 = getScore.get(
                  message.author.id,
                  message.guild.id
                );

                //if no userscore, just procees
                if (!userscore1) {
                } else {
                  //if user is muted
                  if (userscore1.muted == "1")
                    return message.reply(
                      "You have been muted by our system due to breaking rules, the verification system is not for you!"
                    );
                }

                //fetch role
                let roleadd = await message.guild.roles.cache.find(
                  (r) => r.id === guildChannels.defaultrole
                );

                //define member
                let member = message.author;

                //check account age
                var cdate = moment.utc(member.createdAt).format("YYYYMMDD");
                let ageS = moment(cdate, "YYYYMMDD").fromNow(true);
                let ageA = ageS.split(" ");

                //if there is the role
                if (roleadd) {
                  await message.member.roles.add(roleadd).catch(console.error);
                }

                //build image
                const canvas = Canvas.createCanvas(700, 250);
                const ctx = canvas.getContext("2d");
                const background = await Canvas.loadImage(
                  "./modules/img/mintwelcome.png"
                );
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                ctx.font = "30px Zelda";
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(
                  member.username,
                  canvas.width / 3.0,
                  canvas.height / 2.0
                );
                ctx.font = "21px sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText(
                  "\nAccount age: " + ageA.join(" ") + "\nID: " + member.id,
                  canvas.width / 3.0,
                  canvas.height / 2.0
                );
                const avatar = await Canvas.loadImage(
                  member.displayAvatarURL({
                    format: "png",
                    dynamic: true,
                    size: 1024,
                  })
                );
                ctx.drawImage(avatar, 600, 25, 50, 50);
                ctx.beginPath();
                ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                const guildlogo = await Canvas.loadImage(
                  message.guild.iconURL({
                    format: "png",
                    dynamic: true,
                    size: 1024,
                  })
                );
                ctx.drawImage(guildlogo, 25, 25, 200, 200);
                const attachment = new Discord.MessageAttachment(
                  canvas.toBuffer(),
                  "welcome-image.png"
                );

                //load wmessage
                const wmessageStart = getGuild.get(message.guild.id);
                const wmessage = wmessageStart.wmessage;

                //If no message set
                if (!wmessage) {
                  //send just a member call
                  var sMessage = `${member}`;
                } else {
                  var sMessage = `${member}, ${wmessage}`;
                }

                //send image
                if (generalChannel1) {
                  await generalChannel1.send(
                    sMessage.slice(0, 2000),
                    attachment
                  );
                }

                //block mute channel
                if (muteChannel1) {
                  let channel = message.guild.channels.cache.find(
                    (channel) => channel.id === muteChannel1.id
                  );
                  if (channel.permissionOverwrites.get(member.id)) {
                    await channel.permissionOverwrites.get(member.id).delete();
                  }
                }

                //clean
                message.delete();

                //clean up
                message.channel.messages.fetch().then((messages) => {
                  let cleanUp = messages.filter((msg) =>
                    msg.content.toLowerCase().startsWith(`<@${member.id}>`)
                  );
                  message.channel.bulkDelete(cleanUp);
                });

                setTimeout(() => {
                  message.channel.messages.fetch().then((messages) => {
                    let cleanUp2 = messages.filter(
                      (m) => m.author.id === member.id
                    );
                    message.channel.bulkDelete(cleanUp2);
                  });
                }, 3000);

                collector.stop();

                //notify user
                return message.channel
                  .send(`${member} has been approved.`)
                  .then((message) => {
                    message.delete({
                      timeout: 5000,
                      reason: "It had to be done.",
                    });
                  });
              }

              //if user failed verification
            } else {
              message.reply(
                `Failed Verification!\nTry again with:\n${prefix}verify`
              );
              collector.stop();
            }
          });
        }

        //start verification is message says so
        if (message.content == prefix + "verify") {
          message.delete();
          verifyHuman(message);
        }
      }
    }

    //UWU channel
    let uwuID = getUwu.get(message.channel.id, message.guild.id);

    //if uwu
    if (uwuID) {
      //function hookSend
      async function hookSend(message) {
        //fetch hooks
        const webhooks = await message.channel.fetchWebhooks();

        //select first hook
        const webhook = webhooks.first();

        //if no hook
        if (!webhook) {
          //create hook
          message.channel
            .createWebhook("ArtemisHook", {
              avatar: "https://artemisbot.eu/static/images/artava.png",
            })
            .then((webhook) => message.reply(`Created webhook ${webhook}`))
            .catch(console.error);
        } else {
          //delete message
          message.delete();

          //UWU
          v = message.content;
          if (!message.content) return;
          if (!message.content.startsWith("http")) {
            v = v.replace(/(?:r|l)/g, "w");
            v = v.replace(/(?:R|L)/g, "W");
            v = v.replace(/n([aeiou])/g, "ny$1");
            v = v.replace(/N([aeiou])/g, "Ny$1");
            v = v.replace(/N([AEIOU])/g, "Ny$1");
            v = v.replace(/ove/g, "uv");
          }
          //send content
          await webhook.send(v, {
            username: message.author.username,
            avatarURL: message.author.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 128,
            }),
          });
        }
      }

      //init the function
      hookSend(message);
    }

    //EVENT
         if (message.guild.id == "628978428019736619") {
      let eventnumber = 5;
      let eventnumber2 = Math.floor(Math.random() * 10);
      if (eventnumber2 == eventnumber) {
        let eventcheck = message.member.roles.cache.find(
          (r) => r.id === `759093444987322368`
        );
        if (!eventcheck) {
          let eventr = message.guild.roles.cache.find(
            (r) => r.id === `759093444987322368`
          );
          if (!eventr) return;
          message.member.roles.add(eventr);
          const eventembed = new Discord.MessageEmbed()
            .setTitle("EVENT")
            .setColor("RANDOM")
            .setDescription(
              `
              ${message.author}
                \n earned the event title:\n1 Year User\n\nThanks for your continued support for this server.`
            )
            .setTimestamp();
          message.client.channels.cache.get(`695182849476657223`).send({
            embed: eventembed,
          });
        }
      }
    } 

    //Artemis Talk
    //if sentient channel
    if (message.channel.id === "642882039372185609") {
      //failsafe ignore self
      if (message.author.id !== "440892659264126997") {
        // if set
        if (!message.content.startsWith(prefix + "set")) {
          //define arguments
          let cargs = message.content.slice(5);

          //check validity channel
          let channelcheck = fs
            .readFileSync("channelset.txt")
            .toString()
            .split("\n");

          //If not a channel
          if (!message.client.channels.cache.get(`${channelcheck}`))
            return message.reply("Invalid channel!");

          //Send message
          return message.client.channels.cache
            .get(`${channelcheck}`)
            .send(message.content);
        }
      }
    }

    //Artemis stuff
    if (message.content.toLowerCase() == "artemis?") {
      //check if me
      if (message.author.id !== "127708549118689280") return;

      //Responses
      let picker = [
        "What is it, baldy?",
        "What do you want now?",
        "Go away please!",
        "Leave me alone!",
        "What is it, dragons?",
      ];

      //pick random response
      let picked = picker[~~(Math.random() * picker.length)];

      //reply
      message.reply(picked);

      //build collector
      let collector2 = message.channel.createMessageCollector(
        (m) => m.author.id === message.author.id
      );

      //await message
      collector2.on("collect", async (m) => {
        //restart bot
        if (
          m.content.toLowerCase() == "kill yourself" ||
          m.content.toLowerCase() == "hang yourself" ||
          m.content.toLowerCase() == "die" ||
          m.content.toLowerCase() == "restart"
        ) {
          //notify me
          m.reply(
            "\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80"
          );

          //set a small delay
          setTimeout(() => {
            //Quit the app and restart if system daddy
            process.exit();
          }, 2000);
        }
        collector2.stop();
      });
    }

    //Simulate guild member join
    if (message.content === prefix + "guildmemberadd") {
      //If user is me or guild owner
      if (
        message.author.id === "127708549118689280" ||
        message.author.id == message.guild.owner.id
      ) {
        //simulate event
        message.client.emit(
          "guildMemberAdd",
          message.member || (await message.guild.members.fetch(message.author))
        );
      }
    }

    //Simulate guild member leave
    if (message.content === prefix + "guildmemberremove") {
      //if user is me or guild owner
      if (
        message.author.id === "127708549118689280" ||
        message.author.id == message.guild.owner.id
      ) {
        //simulate event
        message.client.emit(
          "guildMemberRemove",
          message.member || (await message.guild.members.fetch(message.author))
        );
      }
    }

    //translate
    //Start db for opt
    translateopt = getScore.get(message.author.id, message.guild.id);

    //if translation for user is on, or prefix is used
    if (
      translateopt.translate == `2` ||
      message.content.startsWith(prefix + "tr")
    ) {
      //Define proper message to translate
      if (message.content.startsWith(prefix + "tr")) {
        var text = message.content.slice(prefix.length + 3);
      } else {
        var text = message.content;
      }

      //actual translation
      translate(text, {
        to: "en",
      }).then((res) => {
        //if shrug
        if (message.content.includes("Ã£Æ’â€ž")) return;

        //if message is equal to translation
        if (res == message.content) return;

        //send translation
        try {
          //form embed
          const translationtext = new Discord.MessageEmbed()
            .setAuthor(
              message.author.username,
              message.author.avatarURL({
                format: "png",
                dynamic: true,
                size: 1024,
              })
            )
            .setColor("RANDOM")
            .setDescription(res)
            .setTimestamp();

          //send embed
          message.channel.send({
            embed: translationtext,
          });
        } catch {
          console.log(
            `${moment().format(
              "MMMM Do YYYY, HH:mm:ss"
            )}\n${__filename}: ${ln()}`
          );
        }
      });
    }

    //Add user points
    let score;

    //if this is a guild
    if (message.guild) {
      //pull data
      score = getScore.get(message.author.id, message.guild.id);

      //if user leveling is off
      if (
        guildChannels.leveling == "2" ||
        message.author.id == "121723489014120448"
      ) {
        //if user leveling is on
      } else {
        //add a point
        score.points++;

        //calc level
        const curLevel = Math.floor(0.5 * Math.sqrt(score.points));

        //if level does not match
        if (score.level < curLevel) {
          //update level
          score.level++;
        }

        //save to db
        setScore.run(score);
      }
    }

    //start level rewards
    //pull data
    const levelups = getLevel.get(message.guild.id);

    //define levels
    let levelers = [
      levelups.lvl5,
      levelups.lvl10,
      levelups.lvl15,
      levelups.lvl20,
      levelups.lvl30,
      levelups.lvl50,
      levelups.lvl85,
    ];
    let levelerstxt = ["5", "10", "15", "20", "30", "50", "85", "1000"];
    let count = -1;

    //loop trough the levels
    for (let i of levelers) {
      //update count
      count++;

      //if level is equal or bigger than
      if (
        score.level >= levelerstxt[count] &&
        score.level < levelerstxt[count + 1]
      ) {
        //find role
        const level = message.guild.roles.cache.find((r) => r.id === i);

        //if role exist
        if (level) {
          //check if user has role
          let checking = message.member.roles.cache.find((r) => r.id === i);

          //if user does not have role
          if (!checking) {
            //small array
            let remove = [
              levelups.lvl5,
              levelups.lvl10,
              levelups.lvl15,
              levelups.lvl20,
              levelups.lvl30,
              levelups.lvl50,
              levelups.lvl85,
            ];

            //loop trough array
            for (let n of remove) {
              //check for role again
              const level2 = message.guild.roles.cache.find((r) => r.id === n);

              //if role exists
              if (level2) {
                //if user has role
                if (message.member.roles.cache.find((r) => r.id === n)) {
                  //remove role
                  message.member.roles.remove(level2).catch((error) => {
                    console.log(
                      moment().format("MMMM Do YYYY, HH:mm:ss") +
                        "\n" +
                        __filename +
                        ":" +
                        ln()
                    );
                  });
                }
              }
            }

            //add new level role
            message.member.roles.add(level).catch((error) => {
              console.log(
                moment().format("MMMM Do YYYY, HH:mm:ss") +
                  "\n" +
                  __filename +
                  ":" +
                  ln()
              );
            });

            //form embed
            const embed = new Discord.MessageEmbed()
              .setTitle("Level Role get!")
              .setAuthor(
                message.author.username,
                message.author.avatarURL({
                  format: "png",
                  dynamic: true,
                  size: 1024,
                })
              )
              .setColor("RANDOM")
              .addField("Gained the title: ", level, true)
              .setTimestamp();

            //send embed
            message.channel.send(embed);
          }
        }
      }
    }

    //Check if leveling for the guild is on
    if (guildChannels.leveling == "2") {
    } else {
      //if message is thanks
      if (message.content.toLowerCase().includes("thank")) {
        //define user
        const user =
          message.mentions.users.first() ||
          message.client.users.cache.get(args[0]);

        //if no user
        if (!user) return;

        //if user is self
        if (user == message.author) return;

        //if user already did this in the past 20 minutes
        if (congratulationsRecently.has(message.author.id + message.guild.id)) {
          return;
        } else {
          //add user to the set
          congratulationsRecently.add(message.author.id) + message.guild.id;

          //remove user from the set after 20 minutes
          setTimeout(() => {
            congratulationsRecently.delete(
              message.author.id + message.guild.id
            );
          }, 600000);

          //add points
          const pointsToAdd = parseInt(20, 10);

          //pull data
          let userscore = getScore.get(user.id, message.guild.id);

          //if user is not in db
          if (!userscore) return;

          //add the points
          userscore.points += pointsToAdd;

          //calc level
          let userLevel = Math.floor(0.5 * Math.sqrt(userscore.points));

          //define level
          userscore.level = userLevel;

          //run db
          setScore.run(userscore);

          //norify user
          return message.reply(
            "thanked " +
              user.username +
              "\n" +
              user.username +
              " has gotten \u20B920 for their effort!"
          );
        }
      }

      //if message is congrat
      if (message.content.toLowerCase().includes("congrat")) {
        //define user
        const user =
          message.mentions.users.first() ||
          message.client.users.cache.get(args[0]);

        //if no user
        if (!user) return;

        //if user is self
        if (user == message.author) return;

        //if user already did this in the past 20 minutes
        if (congratulationsRecently.has(message.author.id + message.guild.id)) {
          return;
        } else {
          //add user to the set
          congratulationsRecently.add(message.author.id) + message.guild.id;

          //remove user from the set after 20 minutes
          setTimeout(() => {
            congratulationsRecently.delete(
              message.author.id + message.guild.id
            );
          }, 600000);

          //add points
          const pointsToAdd = parseInt(20, 10);

          //pull data
          let userscore = getScore.get(user.id, message.guild.id);

          //if user is not in db
          if (!userscore) return;

          //add the points
          userscore.points += pointsToAdd;

          //calc level
          let userLevel = Math.floor(0.5 * Math.sqrt(userscore.points));

          //define level
          userscore.level = userLevel;

          //run db
          setScore.run(userscore);

          //norify user
          return message.reply(
            "congratulated " +
              user.username +
              "\n" +
              user.username +
              " got \u20B920!"
          );
        }
      }
    }

    //require prefix
    if (!message.content.startsWith(prefix)) return;

    //try command
    try {
      command.execute(message);
    } catch (error) {
      //console.error(error);
    }
  },
};
