import { GatewayIntentBits, Client, Partials } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
})

// 起動時の処理
client.once("ready", () => {
  console.log("Ready");
  console.log(client.user?.tag);
})

// // コマンド読み込み
// events.forEach(( { event, handler } ) => {
//   client.on( event, handler );
// })

// botにログイン
client.login(process.env.TOKEN);
