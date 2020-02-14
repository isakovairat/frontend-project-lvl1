#!/usr/bin/env node
import runBrainEvenGame from '../../modules/even';
import hello from '../../modules/hello';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainEvenGame(name));
