import fetch from 'node-fetch';
import { Handler } from '.';

export const CMD = 'im-sad';

const url = 'https://www.affirmations.dev/';

export const handler: Handler = async (args, msg) => {
  try {
    const { affirmation } = await fetch(url).then(res => res.json());
    if (affirmation) msg.reply(affirmation);
  } catch (e) {
    console.error(e);
  }
};
