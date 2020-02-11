#!/usr/bin/env node
import { hello } from '../hello';
import { runBrainGcdGame } from '../gcd';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainGcdGame(name));
