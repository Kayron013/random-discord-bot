import { Message } from 'discord.js';
import * as avatar from './avatar';
import * as maths from './maths';
import * as mock from './mock';
import * as affirm from './affirmation';

const _handlers = [avatar, maths, mock, affirm];

export const handlers = _handlers.reduce((acc, h) => {
  return { ...acc, [h.CMD]: h.handler };
}, {} as Handlers);

export type Command = typeof _handlers[number]['CMD'];
export type Handler = (args: string[], msg: Message) => void | Promise<void>;
type Handlers = Record<Command, Handler>;
