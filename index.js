import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import boxen from 'boxen'
import yargs from 'yargs'
import chalk from 'chalk'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Incorpora la capacidad de crear el método 'require'
const { name, author, version, description, collaborators } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
console.log(chalk.bold('✨ Iniciando...'))

const subtitleStyle = chalk.white.bold
const responseStyle = chalk.gray.bold

let activeCollaborators = subtitleStyle('Colaboradores activos: ')
for (const key in collaborators) {
if (collaborators.hasOwnProperty(key)) {
activeCollaborators += collaborators[key] + ', '
}}
activeCollaborators = activeCollaborators.slice(0, -2)

cfonts.say('yartex\nbot md', {
align: 'center',           
gradient: ['red', 'blue'] 
})
cfonts.say(description, {
font: 'console',
align: 'center',
gradient: ['blue', 'magenta']
})
const message = `${subtitleStyle('Desarrollado por:')} ${responseStyle(author.name)}
${subtitleStyle('Código basado por:')} ${responseStyle(collaborators.col1)}
${responseStyle(activeCollaborators)}
${subtitleStyle('Versión:')} ${responseStyle(version)}`
console.log(boxen(message, { padding: 1, margin: 1, borderStyle: 'double', borderColor: 'blue', float: 'center', }))

var isRunning = false
async function start(file) {
if (isRunning) return
isRunning = true
const currentFilePath = new URL(import.meta.url).pathname
let args = [join(__dirname, file), ...process.argv.slice(2)]
setupMaster({exec: args[0], args: args.slice(1),
})
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}})

p.on('exit', (_, code) => {
isRunning = false
console.log('⚠️ ERROR >> ', code)
start('main.js')

if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})})

let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})}

start('main.js')
