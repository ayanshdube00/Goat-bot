const fs = require("fs");
module.exports.config = {
  name: "gdha gdhy",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "gdhy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("chivam")==0 || event.body.indexOf("@Dwivedi Shivam")==0 || event.body.indexOf("@Alex Rajput")==0 || event.body.indexOf("@Abhi")==0) {
    var msg = {
        body: "👇🏻yaha hai niche dekho👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/3334.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
