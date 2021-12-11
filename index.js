#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log;
const title = chalk.hex('#000000').bgYellow.bold

// Welcome message
welcome({
  title: pkgJSON.name,
  tagLine: 'My ideas',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: '#9042f5',
  color: '#ffffff',
  bold: true,
  clear: false,
})

log(`
${title(` These are my ideas saved `)}

1. asdsad asdasd
2. asdsad asdasd
`);