import { tokenize } from './tokenizer.ts';
import { parse } from './parser.ts';
import { compile } from './compiler.ts';

export function baneval(source: string) {
  const tokens = tokenize(source);
  const program = parse(tokens);
  const compiledProgram = compile(program);
  eval(compiledProgram);
}
