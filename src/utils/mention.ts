import { client } from '../discord';

export const getUserFromMention = (str: string) => {
  const match = str.match(/^<@!?(\d+)>$/);
  if (!match) return null;

  const id = match[1];
  return client.users.cache.get(id);
};
