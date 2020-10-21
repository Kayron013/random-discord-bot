import { Message, User } from 'discord.js';
import { Handler } from '.';
import { getUserFromMention } from '../utils/mention';

export const CMD = 'avatar';

export const handler: Handler = (args, msg) => {
  const mention = args[0];
  if (mention) {
    const user = getUserFromMention(mention);
    if (!user) {
      msg.reply('please use a proper mention.');
    } else {
      sendMsg(msg, user);
    }
  } else {
    const user = msg.author;
    sendMsg(msg, user);
  }
};

const sendMsg = (msg: Message, user: User) => {
  msg.channel.send(`${user.username}'s avatar`, { files: [user.displayAvatarURL({ dynamic: true })] });
};
