#!/usr/bin/env node
import hello from '../../modules/hello';
import runBrainGcdGame from '../../modules/gcd';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainGcdGame(name));
