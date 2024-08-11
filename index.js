#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');

program
    .version('0.0.1')
    .argument('[filename', 'Name of a file to execute')
    .action((args) => {
        const start = debounce(()=> {
            console.log('STARTING USERS PROGRAM');
          }, 100);
          
        chokidar.watch('.')
             .on('add', start)
             .on('change', start)
             .on('unlink', start);
    });

program.parse(process.argv);



