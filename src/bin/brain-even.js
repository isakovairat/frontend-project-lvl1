#!/usr/bin/env node
import { hello, runBrainEvenGame } from '..';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainEvenGame(name));
