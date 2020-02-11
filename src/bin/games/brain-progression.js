#!/usr/bin/env node
import { hello } from '../hello';
import { runBrainProgressionGame } from '../progression';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainProgressionGame(name));
