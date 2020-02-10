#!/usr/bin/env node
import { runBrainCalcGame } from '../calc';
import { hello } from '../hello';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainCalcGame(name));