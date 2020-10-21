import { Handler } from '.';
import { Parser } from 'expr-eval';

export const CMD = 'maths';

export const handler: Handler = (args, msg) => {
  try {
    const answer = Parser.evaluate(args.join(''));
    msg.reply(answer);
  } catch {
    msg.reply('Invalid expression');
  }
};
