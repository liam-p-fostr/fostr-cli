#! /usr/bin/env node

import { program } from 'commander';

import { getVersion } from './utils/get-version.mjs';

import pong from './commands/pong.mjs'
import version from './commands/version.mjs'

program
  .name('fostr')
  .description('A command line utility for all things Fostr')
  .version(getVersion(), '-v, --version', 'Get the current Fostr CLI version')

program
  .command('version')
  .description('Get the current Fostr CLI version')
  .action(version)

program
  .command('ping')
  .description('Tests responsiveness of Fostr CLI by responding with a "PONG!"')
  .action(pong)

program.parse();
