const path = require('path')
const ejs = require('ejs')
const fs = require('fs-extra')
const chalk = require('chalk')

module.exports = async function (config) {
  const { name, projectName, isTailwind} = config

  // 当前命令行选择的目录
  const cwd  = process.cwd();
  // 需要创建的目录地址
  const targetAir  = path.join(cwd, name)

  // 目录已经存在，停止
  if (fs.existsSync(targetAir)) {
    console.log(chalk.bgRed('folder Already exists'))
    return 
  }

//   // 创建项目
//   const generator = new Generator(name, targetAir);

//   // 开始创建项目
//   generator.create()
}