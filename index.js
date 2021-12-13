#!/usr/bin/env node
import welcome from 'cli-welcome';
import chalk from 'chalk';
import sym from 'log-symbols';
import minimist from 'minimist';
import fs from 'node:fs/promises';
import short from 'short-uuid';

const pkgJSON = JSON.parse(await fs.readFile('package.json'));

// Utils
const log = console.log;
const dir = console.dir;
const title = chalk.hex('#000000').bgYellow.bold;

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.yellowBright;
const error = chalk.red.bold;

// ${sym.success} ${success(`Success`)}
// ${sym.info} ${info(`Info`)}
// ${sym.warning} ${warning(`Warning`)}
// ${sym.error} ${error(`Error`)}

// Args
const args = minimist(process.argv.slice(2));

const clideas = async () => {
  // Welcome message
  welcome({
    title: pkgJSON.name,
    tagLine: 'My ideas',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: '#9042f5',
    color: '#ffffff',
    bold: true,
    clear: true
  });

  // dir(args);

  const ideas = JSON.parse(await fs.readFile('ideas.json'));
  const newIdea = args.a;

  if (newIdea) {
    log(`${sym.success} ${success(`Added`)}: ${newIdea}`);
    const uuid = short.generate();
    const data = {
      ...ideas,
      [uuid]: newIdea
    };
    const dataString = JSON.stringify(data);
    fs.writeFile('ideas.json', dataString);
  } else {
    log(`${title(` These are my ideas saved `)}`);
    log(ideas);
  }
};

clideas();

export default clideas;
