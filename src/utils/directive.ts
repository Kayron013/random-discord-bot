import { Message } from 'discord.js';
import { Command } from '../command-handlers';

export const isDirective = (str: Message) => {
  return str.content[0] === '!';
};

export const parseDirective = (msg: Message) => {
  const parts = msg.content.split(/ +/);
  return {
    cmd: parts[0].slice(1) as Command,
    args: parts.slice(1),
  };
};
