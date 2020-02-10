#!/usr/bin/env node
import { runBrainEvenGame } from '../even';
import { hello } from '../hello';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainEvenGame(name));
