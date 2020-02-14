#!/usr/bin/env node
import hello from '../../modules/hello';
import runBrainProgressionGame from '../../modules/progression';

console.log('Welcome to the Brain Games!\n');
const name = hello();
console.log(runBrainProgressionGame(name));
