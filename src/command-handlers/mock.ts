import { Message } from 'discord.js';
import { Handler } from '.';
import { getUserFromMention } from '../utils/mention';

export const CMD = 'mock';

export const handler: Handler = (args, msg) => {
  const mention = args[0];
  if (mention) {
    const user = getUserFromMention(mention);

    if (!user) {
      msg.reply('please use a proper mention.');
    } else {
      const [lastMessage] = msg.channel.messages.cache.reduce(
        (acc, m) => {
          if (m.author.id === user.id) {
            if (m.createdTimestamp > acc[1]) {
              return [m.content, m.createdTimestamp];
            }
          }
          return acc;
        },
        ['', 0]
      );

      if (lastMessage) {
        msg.channel.send(mockery(lastMessage));
      } else {
        msg.reply(`${mention} has said nothing to mock.`);
      }
    }
  } else {
    msg.reply("Don't forget to mention who you'd like to mock.");
  }
};

const mockery = (msg: string) => {
  let upper = true;
  return [...msg].reduce((acc, char) => {
    upper = !upper;
    return acc + String(upper ? char.toUpperCase() : char.toLowerCase());
  }, '');
};
