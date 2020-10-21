require('source-map-support').install();
import { handlers } from './command-handlers';
import { client } from './discord';
import { isDirective, parseDirective } from './utils/directive';

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on('message', async msg => {
  console.log('**Incomming Message:', msg.content);
  if (!isDirective(msg)) return;

  const { cmd, args } = parseDirective(msg);
  const handler = handlers[cmd];

  if (!handler) return;

  await handler(args, msg);
});

client.login(process.env.TOKEN);
