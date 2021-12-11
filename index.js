#!/usr/bin/env node
import welcome from 'cli-welcome';
// import pkgJSON from './package.json';
import chalk from 'chalk';

const log = console.log;
const title = chalk.hex('#000000').bgYellow.bold
// Alerts
import sym from 'log-symbols'
const success = chalk.green
const info = chalk.blue
const warning = chalk.keyword('orange')
const error = chalk.red.bold

// Welcome message
welcome({
  title: `pkgJSON.name`,
  tagLine: 'My ideas',
  description: `pkgJSON.description`,
  version: `pkgJSON.version`,
  bgColor: '#9042f5',
  color: '#ffffff',
  bold: true,
  clear: false,
})

log(`
${title(` These are my ideas saved `)}

1. asdsad asdasd
2. asdsad asdasd

${sym.success} ${success(`Success`)}
${sym.info} ${info(`Info`)}
${sym.warning} ${warning(`Warning`)}
${sym.error} ${error(`Error`)}
`);