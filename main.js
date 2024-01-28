process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './config.js'
import './store.js'
import {createRequire} from 'module'
import path, {join} from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import {platform} from 'process'
import * as ws from 'ws'
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from 'fs'
import yargs from 'yargs'
import {spawn} from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import readline from 'readline'
import NodeCache from 'node-cache'
import syntaxerror from 'syntax-error'
import fs from 'fs'
import { tmpdir } from 'os'
import { format } from 'util'
import P from 'pino'
import pino from 'pino'
import Pino from 'pino'
import {Boom} from '@hapi/boom'
import {makeWASocket, protoType, serialize} from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import {mongoDB, mongoDBV2} from './lib/mongoDB.js';
import store from './lib/store.js'
const { proto} = (await import('@whiskeysockets/baileys')).default;
const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
const {CONNECTING} = ws
const {chain} = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
return createRequire(dir)
}

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')

global.timestamp = {start: new Date}
global.videoList = []
global.videoListXXX = []

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
}
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {}),
}
global.db.chain = chain(global.db.data)
}
loadDatabase()

global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')))
global.loadChatgptDB = async function loadChatgptDB() {
if (global.chatgpt.READ) {
return new Promise((resolve) =>
setInterval(async function() {
if (!global.chatgpt.READ) {
clearInterval(this)
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data )
}
}, 1 * 1000))
}
if (global.chatgpt.data !== null) return
global.chatgpt.READ = true
await global.chatgpt.read().catch(console.error)
global.chatgpt.READ = null
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
}
global.chatgpt.chain = lodash.chain(global.chatgpt.data)
}
loadChatgptDB()

global.authFile = `sessions`
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botNumberCode

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

let opcion
if (!fs.existsSync(`./${authFile}/creds.json`) && !methodCodeQR && !methodCode) {
while (true) {
opcion = await question('Seleccione una opción:\n1. Con código QR\n2. Con código de texto de 8 dígitos\n--> ')
if (opcion === '1' || opcion === '2') {
break
} else {
console.log('Por favor, seleccione solo 1 o 2.')
}}
opcion = opcion
}

const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : false,
mobile: MethodMobile, 
browser: ['Slax', 'Chrome', '20.0.04'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}

// Código adaptado para la compatibilidad de
// ser bot con el código de texto de 8 digitos
// Hecho por: GataNina-Li (Gata Dios) 💞

global.conn = makeWASocket(connectionOptions)
if (opcion === '2' || methodCode) {
if (!conn.authState.creds.registered) {  
if (MethodMobile) throw new Error('No se puede usar un código de emparejamiento con la API móvil')

let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright("Configure el archivo 'config.js' porque su número de WhatsApp no comienza con el código de país, Ejemplo: +593xxxx")))
process.exit(0)
}} else {
while (true) {
addNumber = await question(chalk.bgBlack(chalk.bold.yellowBright('Escriba su número de WhatsApp.\nEjemplo: +593xxx\n')))
addNumber = addNumber.replace(/[^0-9]/g, '')

if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
break 
} else {
console.log(chalk.bgBlack(chalk.bold.redBright("Asegúrese de agregar el código de país.")))
}}
//rl.close()
}

setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.black(chalk.bgGreen(`Código de emparejamiento: `)), chalk.bold.white(chalk.white(codeBot)))
rl.close()
}, 3000)
}}

conn.isInit = false
conn.well = false
conn.logger.info(`🔵 H E C H O\n`)

if (!opts['test']) {
if (global.db) {
setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'jadibts'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
}, 30 * 1000)
}}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT)

function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')]
const filename = []
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))))
return filename.map((file) => {
const stats = statSync(file)
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file); // 3 minutos
return false
})
}

function purgeSession() {
let prekey = []
let directorio = readdirSync("./sessions")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-')
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./sessions/${files}`)
})
}

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-')
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
}) }})
if (SBprekey.length === 0) return
} catch (err) {
console.log(chalk.bold.red(`⚠️ Algo salio mal durante la eliminación, archivos no eliminados`))
}}

function purgeOldFiles() {
const directories = ['./sessions/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {
if (err) throw err
console.log(chalk.bold.green(`Archivo ${file} borrado con éxito`))
})
} else {
console.log(chalk.bold.red(`Archivo ${file} no borrado` + err))
} }) }) }) })
}

async function connectionUpdate(update) {
const {connection, lastDisconnect, isNewLogin} = update
global.stopped = connection
if (isNewLogin) conn.isInit = true;
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error)
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1') {
console.log(chalk.yellow('⚠️ㅤEscanea este codigo QR, el codigo QR expira en 60 segundos.'))
}}
if (connection == 'open') {
console.log(chalk.yellowBright('\n╭───────────────────────────◉\n│\n│Conectado correctamente al WhatsApp.\n│\n╰───────────────────────────◉\n'))
//conn.fakeReply('5217294888993@s.whatsapp.net', '😃', '0@s.whatsapp.net', '😅 Soy CuriosityBot\nRecientemente me e conectado', '0@s.whatsapp.net')
}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
conn.logger.error(`⚠️ Sesión incorrecta, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`)
} else if (reason === DisconnectReason.connectionClosed) {
conn.logger.warn(`⚠️ Conexión cerrada, reconectando...`)
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionLost) {
conn.logger.warn(`⚠️ Conexión perdida con el servidor, reconectando...`)
await global.reloadHandler(true).catch(console.error);
} else if (reason === DisconnectReason.connectionReplaced) {
conn.logger.error(`⚠️ Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.`)
} else if (reason === DisconnectReason.loggedOut) {
conn.logger.error(`⚠️ Conexion cerrada, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`)
} else if (reason === DisconnectReason.restartRequired) {
conn.logger.info(`⚠️ Reinicio necesario, reinicie el servidor si presenta algún problema.`)
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
conn.logger.warn(`⚠️ Tiempo de conexión agotado, reconectando...`)
await global.reloadHandler(true).catch(console.error)
} else {
conn.logger.warn(`⚠️ Razón de desconexión desconocida. ${reason || ''}: ${connection || ''}`)
await global.reloadHandler(true).catch(console.error)
}}}


process.on('uncaughtException', console.error)

let isInit = true
let handler = await import('./handler.js')
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try {
global.conn.ws.close()
} catch { }
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, {chats: oldChats})
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.welcome = '*• Hola, Gracias por unirte!!*\n*━━━━━━━━━━━━━━━━━━━*\n\n🍧 *• Nombre:* @user\n🗓️ *• Fecha:* @date\n⏰ *• Hora:* @time\n\n*⚠️  Recuerda leer la descripción*\n@readMore\n@desc'
conn.bye = '*• Gracias por haber sido parte del grupo*\n*━━━━━━━━━━━━━━━━━━━━━━━━━*\n\n🍧 *• Nombre:* @user\n🗓️ *• Fecha:* @date\n⏰ *• Hora:* @time'
conn.spromote = '*@user* ¡Se suma al grupo de admins¡'
conn.sdemote = '*@user* ¡Abandona el grupo!'
conn.sDesc = '¡Se ha modificado la descripción!\n\n*Nueva descripción:* @desc'
conn.sSubject = '¡Se ha modificado el título del grupo!'
conn.sIcon = '¡Se ha cambiado la foto del grupo!'
conn.sRevoke = '¡Se ha actualizado el enlace del grupo!*\n*Nuevo enlace:* @revoke'
        

conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

//const currentDateTime = new Date()
//const messageDateTime = new Date(conn.ev)
//if (currentDateTime >= messageDateTime) {
//const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0])
//} else {
//const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0])
//}

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {}
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`Se acaba de actualizar el plugin: '${filename}'`)
else {
conn.logger.warn(`Se acaba de eliminar el plugin: '${filename}'`)
return delete global.plugins[filename]
}
} else conn.logger.info(`Nuevo plugin: '${filename}'`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
})
if (err) conn.logger.error(`Error de sintaxis al cargar '${filename}'\n${format(err)}`)
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`Error require plugin '${filename}\n${format(e)}'`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}}}}

Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127)
})}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false))
})])}))
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find}
Object.freeze(global.support)
}
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
const a = await clearTmp()
console.log(chalk.cyanBright(`\nAUTOCLEAR │ BASURA ELIMINADA\n`))
}, 180000)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeSession()
console.log(chalk.cyanBright(`\nAUTOPURGESESSIONS │ BASURA ELIMINADA\n`))
}, 100000)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
await purgeSessionSB()
console.log(chalk.cyanBright(`\nAUTO_PURGE_SESSIONS_SUB-BOTS │ BASURA ELIMINADA\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeOldFiles()
console.log(chalk.cyanBright(`\nAUTO_PURGE_OLDFILES │ BASURA ELIMINADA\n`))
}, 1000 * 60 * 60)

_quickTest().catch(console.error)
