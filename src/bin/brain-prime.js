#!/usr/bin/env node
import hello from '../../modules/hello';
import runBrainPrimeGame from '../../modules/prime';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainPrimeGame(name));
