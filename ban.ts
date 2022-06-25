import { baneval } from './lib/ban.ts';

const fileName = Deno.args[0];
const source = await Deno.readTextFile(fileName);
baneval(source);
