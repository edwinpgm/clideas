#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');

// Clear console
clearConsole();

console.log(`
NAME: ${pkgJSON.name}
DESCRIPTION: ${pkgJSON.description}
VERSION: ${pkgJSON.version}
`)

console.log(`
These are my ideas saved.
1. asdsad asdasd
2. asdsad asdasd
`);