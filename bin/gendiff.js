#!/usr/bin/env node

import { program } from 'commander';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1.0');

program.configureHelp({
    sortSubcommands: true,
    subcommandTerm: (cmd) => cmd.name()
});

program
  .option('-f, --format [type]', 'output format')
//   .argument('<type>', 'output format')
  .action((type => console.log(type)));

program.parse();