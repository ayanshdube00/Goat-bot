/** Don't change Credit...AYAN is real owner...Fb: https://m.me/MR.AYAN.2X**/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN",
  description: "command",
  commandCategory: "prefix reply",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["__🌺༅༎प्रिय༅༎🌺\n🍂इस जीवन में मुझे मिले सैकड़ों उपहारों में से सबसे अच्छा उपहार आप हैं\n❈┇┇┇┇┇🖤\n┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
 "𒊹__༆༄🍁🌺🦋༄༆ღ.∬\n\n●══❥𝄞⋆⃝༎︵།
 "●══❥𝄞⋆⃝༎︵།།यह कहना कि मैं बाहर से ठीक हूं\नऔपचारिकता है, लेकिन अंदर से बुरा होना\नवास्तविकता है। ─༅༎•🌺🌸༅༎•─",
 "🥀🍁,’𝄞⋆⃝ मुझे खुश करने के लिए ज्यादा मेहनत नहीं करनी पड़ती,\n\n❥︎❥︎༄༎ຶ༎ຶ༎ຶआपकी मौजूदगी ही काफी है,✧\n🌺✧🌺꧂┊┊┊⇣❥┊⇣❥┊⇣❥⇣❥⇣💕",
 "🐰✨🐭🐡🐢🐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!-💜💭🐾❥──🦋༄࿐हवा पागल है, इसलिए इन नशे में धुत्त आँखों को अपनी ओर देखने दो और हमेशा के लिए अवाक रहो┇┇┇┇┇┇🖤\n┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
 "ღ5༎🌷💜ღ5༎\n\n_ एक’༎ प्यार ‘༎रिश्ता’’༎’༎ हवा की तरह है ‘༎जिसे’’༎देखा नहीं जा सकता’’༎\n लेकिन ‘༎महसूस’’༎’’༎\n \nहो सकता है ‘༎-!!-🍒🐰🌈",
 "ლ🦋ლ──🐰💚🌺\n\nसही लोग\nआपको कभी नहीं छोड़ते\n\nवे हमेशा करीब रहने की एक वजह ढूंढ लेते हैं\n\n<<-)♥️✨🪄🎋🎈",
 "─༅༎༅💙🌼🩷༅༎༅\n\n─༎बगीचे में फूल, ༎\nआसमान में तारे! ༎\nमैं तुम्हारे बिना कैसे रह सकता हूँ ༎\n.-!!🫂",


 "🍂❥»⑅⃝✺🍂मेरे प्यारे, मैं वास्तव में तुम्हारी गोद में सिर रखकर आकाश देखना चाहता हूं।┇┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
 "🤲\n👀࿐\n\nइतना अहंकारी मत बनो\n-अहंकार-मुझे ओगो कहना बंद करो😁\n-मैं किगो के रूप में जवाब दूंगा❞࿐😼࿐" 
  ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/1tCD3NHR/received-1532455747318813.jpg",
"https://i.postimg.cc/rF8PRhQL/received-1506499159899708.jpg",
"https://i.postimg.cc/mZdQV8T4/received-800686498144546.jpg",
"https://i.postimg.cc/9MQD7HR7/received-1229387115102337.jpg",
"https://i.postimg.cc/sft5t1GH/received-7143358379106394.jpg",
"https://i.postimg.cc/bvJGGj22/received-654761663457016.jpg",
"https://i.postimg.cc/BZxvnvwV/received-1393821892010148.jpg",
"https://i.postimg.cc/B62JbhNK/received-1565814980924378.jpg",
"https://i.postimg.cc/HsXsFWKp/received-709700554482897.jpg",
"https://i.postimg.cc/m2stLF7c/received-893976172476330.jpg",
"https://i.postimg.cc/DypkC9f2/received-318608824583631.jpg",
"https://i.postimg.cc/fTyTTjJR/received-366538589716917.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };