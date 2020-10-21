import { client } from '../discord';

export const getUserFromMention = (str: string) => {
  if (str.startsWith('<@') && str.endsWith('>')) {
    const start = str[2] === '!' ? 3 : 2;
    const mention = str.slice(start, -1);
    return client.users.cache.get(mention);
  }
};
