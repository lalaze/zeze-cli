#! /usr/bin/env node

const inquirer = require('inquirer')
const program = require('commander')
const create = require('./create')

program
.version('0.1.0')
.command('create <name>')
.description('create a new project with vite vue3')
.action(name => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'project name',
      default: 'vite-template'
    },
    {
      type: 'confirm',
      name: 'isTailwind', // key 名
      message: 'use tailwind?',
      default: false
    },

  ]).then(config => {
    config.name = name
    console.log(config)
    create(config)
  })
})

program.parse()

