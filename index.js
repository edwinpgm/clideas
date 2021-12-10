#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

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

console.log(`
These are my ideas saved.
1. asdsad asdasd
2. asdsad asdasd
`);