const fs = require("fs");
module.exports.config = {
  name: "Sorry",
    version: "1.0.1",
  hasPermssion: 1,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("betaa")==0 || event.body.indexOf("meri billi mujhe hi meow")==0 || event.body.indexOf("Apne Malik se bakchodi")==0 || event.body.indexOf("bataun Abhi")==0) {
    var msg = {
        body: "🤐😥",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }