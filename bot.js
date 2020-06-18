const Telegraf = require("telegraf");
const bot = new Telegraf("1232982698:AAFCC1Y63ZtmZGzokFSznH1WlJvBgqhL8Ao");

bot.command("test", (ctx) => {
  // bot.telegram.sendPhoto(ctx.chat.id, "https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_960_720.jpg")
  //   bot.telegram.sendPhoto(ctx.chat.id, { source: "res/dubai.jpg" });
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "AgACAgQAAxkBAAMKXut_thWyQHSTdzU1C2LLo-iXJB4AAnqyMRsuW2FTurFoDSQFTHCj_W8jXQADAQADAgADeQADDRIBAAEaBA"
  );
});

bot.command("newyork", (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "Upload_photo");
  bot.telegram.sendPhoto(
    ctx.chat.id,
    { source: "res/newyork.jpg" },
    { reply_to_message_id: ctx.message.message_id }
  );
});

bot.command("dubai", (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "Upload_video");
  bot.telegram.sendAnimation(
    ctx.chat.id,
    "https://media3.giphy.com/media/26uf0GidrPIo7hppC/giphy.gif?cid=ecf05e4786002ae6cc0ea8141638fa931ca05bf84ca9ea73&rid=giphy.gif",
    { reply_to_message_id: ctx.message.message_id }
  );
});
bot.command("cities", (ctx) => {
  let cities = [
    "res/dubai.jpg",
    "res/hongkong.jpg",
    "res/london.jpg",
    "res/newyork.jpg",
    "res/singapore.jpg",
  ];
  let result = cities.map((city) => {
    return {
      type: "photo",
      media: {
        source: city,
      },
    };
  });
  bot.telegram.sendMediaGroup(ctx.chat.id, result);
});
bot.command("citieslist", (ctx) => {
  bot.telegram.sendDocument(ctx.chat.id, { source: "res/citieslist.txt" }),
    { thumb: { source: "res/dubai.jpg" } };
});

bot.command("home", ctx=>{
  bot.telegram.sendLocation(ctx.chat.id, -1.326995,36.848509
    )
})

bot.on("message" , async(ctx)=>{
  if(ctx.updateSubTypes[0]=="document"){
    try{let link = await bot.telegram.getFileLink(ctx.message.document.file_id)
      ctx.reply("yor download link is ready: " + link)

    }catch(error){
      console.log(error)
      ctx.reply(error.description)
    }
    
  }
})

bot.launch();
