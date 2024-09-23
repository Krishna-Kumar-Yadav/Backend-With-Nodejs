const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  else {
    message.reply({
      content: "hi from Bot",
    });
  }
});

client.login(
  "MTI4NDUzMjE0MzY2MTI1MjcwMA.GQfq_B.e2b2eBAX2J-lj2PMMH75EKg5Ig9D6t_KqPwAY8"
);
