const { Telegraf } = require("telegraf");
const TOKEN = '5300559889:AAENLVg0JatV6YggfyzRTbR3-8bfL42iWYo'; 
const websiteLink = `https://tranquil-tanuki-c9569f.netlify.app/`;
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome!!', {reply_markup: {keyboard: [[{text: "Web app", web_app: {url: websiteLink}}]]}}));

bot.launch();

