#!/usr/bin/env node
const {program} = require('commander')
const chalk = require('chalk')
const clip = require('clipboardy')
const {createPwd,savePwd} = require('./utils/createpwd')

program.version('1.0.0').description('Pass generator')

program
.option('-l, --length <number>','length of password',12)
.option('-nn, --no-numbers','no numbers',)
.option('-s, --symbols', 'include symbols', )
.parse()



const {length,numbers,symbols} = program.opts()

const generatedPwd = createPwd(length,numbers,symbols)

console.log(chalk.blue('Generated Pwd: ') + chalk.bold(generatedPwd));

clip.writeSync(generatedPwd)

console.log(chalk.yellowBright('Password copied to clipboard'))

savePwd(generatedPwd)
