#!/usr/bin/env node
import { hello } from '../hello';
import { runBrainPrimeGame } from '../prime';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainPrimeGame(name));
