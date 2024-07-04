import { generateWAMessageFromContent } from "@whiskeysockets/baileys"
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
 
const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this)
resolve()
}, ms))
 
export async function handler(chatUpdate) {

this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate)
return
this.pushMessage(chatUpdate.messages).catch(console.error)
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m)
return
if (global.db.data == null)
await global.loadDatabase()
try {
m = smsg(this, m) || m
if (!m)
return
m.exp = 0
m.diamond = false
try {

// TODO: Usa un bucle para insertar datos en lugar de esto.
let user = global.db.data.users[m.sender]
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.money)) user.money = 10
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 5
if (!isNumber(user.diamond)) user.diamond = 20
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.coal)) user.coal = 0
if (!isNumber(user.stone)) user.stone = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 100
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.dog)) user.dog = 0
if (!isNumber(user.fox)) user.fox = 0
if (!('registered' in user)) user.registered = false
 
//--Usuario registrado
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}

//--Usuario número
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('banned' in user)) user.banned = false
if (!isNumber(user.warn)) user.warn = 0
if (!isNumber(user.level)) user.level = 0
if (!('role' in user)) user.role = 'Novato'
if (!('autolevelup' in user)) user.autolevelup = true
if (!('simi' in user)) user.simi = false
if (!('muto' in user)) user.muto = false
if (!('premium' in user)) user.premium = false

} else

global.db.data.users[m.sender] = {
exp: 0,
money: 10,
lastclaim: 0,
health: 100,
potion: 5,
diamond: 20,
emerald: 0,
gold: 0,
iron: 0,
coal: 0,
stone: 0,
pickaxe: 1,
pickaxedurability: 100,
cat: 0,
dog: 0,
fox: 0,
common: 0,
uncommon: 0,
registered: false,
name: m.name,
age: -1,
regTime: -1,
afk: -1,
afkReason: '',
banned: false,
warn: 0,
level: 0,
role: 'Novato',
autolevelup: true,
simi: false,
muto: false,
premium: false,
}

const akinator = global.db.data.users[m.sender].akinator;
		    if (typeof akinator !== 'object') {
        global.db.data.users[m.sender].akinator = {};
      }
		    if (akinator) {
        if (!('sesi' in akinator)) akinator.sesi = false;
        if (!('server' in akinator)) akinator.server = null;
        if (!('frontaddr' in akinator)) akinator.frontaddr = null;
        if (!('session' in akinator)) akinator.session = null;
        if (!('signature' in akinator)) akinator.signature = null;
        if (!('question' in akinator)) akinator.question = null;
        if (!('progression' in akinator)) akinator.progression = null;
        if (!('step' in akinator)) akinator.step = null;
        if (!('soal' in akinator)) akinator.soal = null;
	            } else {
        global.db.data.users[m.sender].akinator = {
          sesi: false,
          server: null,
          frontaddr: null,
          session: null,
          signature: null,
          question: null,
          progression: null,
          step: null,
          soal: null,
        };
      } 
	
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}
if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = false
if (!('detect2' in chat)) chat.detect2 = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('delete' in chat)) chat.delete = true
if (!('antiLink' in chat)) chat.antiLink = false
if (!('antiTraba' in chat)) chat.antiTraba = true
if (!('antiToxic' in chat)) chat.antiToxic = true
if (!('viewonce' in chat)) chat.viewonce = true
if (!('onlyLatinos' in chat)) chat.onlyLatinos = false
if (!('modoadmin' in chat)) chat.modoadmin = false   
if (!('nsfw' in chat)) chat.nsfw = true
if (!('reaction' in chat)) chat.reaction = true    
if (!('antiSticker' in chat)) chat.antiSticker = false 
if (!('antibule' in chat)) chat.antibule = false 
if (!('audios' in chat)) chat.audios = true
if (!('game' in chat)) chat.game = true
if (!isNumber(chat.expired))
chat.expired = 0
} else
            
global.db.data.chats[m.chat] = {
isBanned: false,
welcome: true,
detect: false,
detect2: true, 
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
editMenu: { emoji: true, imagen: false, video: false, mencion: true, dinamico: true, simple: false, dividir: false, verificado: true, personalizado: false },
delete: true,
antiTraba: true,
antiToxic: false,
antiLink: true,
viewonce: true,
useDocument: true,
onlyLatinos: false,
modoadmin: false,
nsfw: true,
reaction: true, 
antiSticker: false,
antibule: false,
audios: true, 
game: true, 
expired: 0
}

let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('antiCall' in settings)) settings.antiCall = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('modejadibot' in settings)) settings.modejadibot = true
if (!('status' in settings)) settings.status = 0
} else global.db.data.settings[this.user.jid] = {
self: false,
autoread: false,
autoread2: false,
restrict: false, 
antiCall: false,
antiPrivate: false,
modejadibot: true,
status: 0

}
} catch (e) {
console.error(e)
}
//const dataown = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)
//let JIS of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)
const isROOwner = [conn.decodeJid(global.conn.user.id), ...global.isdev.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = isROwner || m.fromMe
const isDev = isROOwner || m.fromMe
const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

if (opts['nyimak'])
return
if (!isROwner && opts['self'])
return
if (opts['pconly'] && m.chat.endsWith('g.us'))
return
if (opts['gconly'] && !m.chat.endsWith('g.us'))
return
if (opts['swonly'] && m.chat !== 'status@broadcast')
return
if (typeof m.text !== 'string')
m.text = ''

if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque, time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (m.isBaileys)
return
m.exp += Math.ceil(Math.random() * 10)

let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
const isRAdmin = user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
const isBotAdmin = bot?.admin || false // Are you Admin?

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, { chatUpdate, __dirname: ___dirname, __filename })
} catch (e) {

console.error(e)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`*⚠️ COMANDO FALLANDO ⚠️*\n\n*📑 PLUGIN :* ${name}\n*👤 USUARIO :* ${m.sender}\n*🚀 COMANDO :* ${m.text}\n\n\`\`\`${format(e)}\`\`\`\n`.trim(), data.jid)                               
}}
}

if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ?
_prefix.map(p => {
let re = p instanceof RegExp ?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, { match, conn: this, participants, groupMetadata, user, bot, isROwner, isOwner, isRAdmin, isAdmin, isBotAdmin, isPrems, chatUpdate, __dirname: ___dirname, __filename }))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail
let isAccept = plugin.command instanceof RegExp ?
plugin.command.test(command) :
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ?
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ?
plugin.command === command :
false

if (!isAccept)
continue
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (name != 'own-unbanchat.js' && chat?.isBanned)
return
if (name != 'own-unbanuser.js' && user?.banned)
return
}
let adminMode = global.db.data.chats[m.chat].modoadmin
let curiosity = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && curiosity) return 
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
fail('owner', m, this)
continue
}
if (plugin.rowner && !isDev) { // Desarollador del bot
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { // Numero de propietario
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderador
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { // Premium
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) { // Solo Grupos
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { // Bot Admin
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) { // Usuario admin
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { // Solo privado
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) {
fail('unreg', m, this)
continue
}
m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
if (xp > 200)
m.reply('Chirrido -_-')
else
m.exp += xp
if (!isPrems && plugin.limit && plugin.diamond && global.db.data.users[m.sender].diamond < plugin.diamond * 1) {
this.reply(m.chat, `Tus diamantes de hoy se han agotado ⚠️\n\nPor favor compre diamantes escribiendo ${usedPrefix}buy o ${usedPrefix}buyall`, m)
continue
}
if (plugin.level > _user.level) {
this.reply(m.chat, `Requiere el nivel *${plugin.level}*`, m)
continue
}
let extra = {match, usedPrefix, noPrefix, _args, args, command, text, conn: this, participants, groupMetadata, user, bot, isROwner, isOwner, isRAdmin, isAdmin, isBotAdmin, isPrems, chatUpdate, __dirname: ___dirname, __filename }
try {
await plugin.call(this, m, extra)
if (!isPrems)
m.diamond = m.diamond || plugin.diamond || false
} catch (e) {

m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
let res = await conn.groupAcceptInvite(global.nna2)
if (data.exists) //Reporte enviado al grupo
await conn.reply(res, `*⚠️ COMANDO FALLANDO ⚠️*\n\n*📑 PLUGIN :* ${m.plugin}\n*👤 USUARIO :* ${m.sender}\n*🚀 COMANDO :* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n`)
 
 m.reply(`*⚠️ COMANDO FALLANDO ⚠️*\n\n*📑 PLUGIN :* ${m.plugin}\n*👤 USUARIO :* ${m.sender}\n*🚀 COMANDO :* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n`.trim(), data.jid)
}
m.reply(text)
}
} finally {

if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}
}
if (m.diamond)
m.reply(`💎 Se a utilizado un *${+m.diamond}* diamante`)
}
break
}
}
} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}

let user, stats = global.db.data.stats
if (m) { let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: cancellazzione }})
}

if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.diamond -= m.diamond * 1
}

let stat
if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
	    
if (db.data.chats[m.chat].reaction && m.text.match(/(ción|dad|aje|oso|izar|mente|pero|tion|age|ous|ate|and|but|ify|curiosity|bot|curio|bug|syntax)/gi)) {
let emot = pickRandom(["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶‍🌫️", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "🫨", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮‍💨", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👺", "🤡", "💩", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "👍", "✌️", "🙏", "🫵", "🤏", "🤌", "☝️", "🖕", "🙏", "🫵", "🫂", "🐱", "🤹‍♀️", "🤹‍♂️", "🗿", "✨", "⚡", "🔥", "🌈", "🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🏳️‍🌈", "👊", "👀", "💋", "🫰", "💅", "👑", "🐣", "🐤", "🐈"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

export async function participantsUpdate({ id, participants, action }) {

if (opts['self'])
return
if (this.isInit)
return
if (global.db.data == null)
await loadDatabase()
let chat = global.db.data.chats[id] || {}
let text = ''
switch (action) {
case 'add':
case 'remove':
if (chat.welcome) {
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
for (let user of participants) {
let pp = './src/avatar_contact.png'
try {
pp = await this.profilePictureUrl(user, 'image')
} catch (e) {
} finally {
let apii = await this.getFile(pp)
text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@date', global.fecha).replace('@time', global.tiempo).replace('@readMore', global.readMore).replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || '*⚠️ ESTE GRUPO NO TIENE DESCRIPCIÓN ⚠️*') :
(chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0]).replace('@date', global.fecha).replace('@time', global.tiempo)
let links = linkSity.getRandom()

this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": apii.data, 
"title": `${action === 'add' ? '乂 𝖶 𝖤 𝖫 𝖢 𝖮 𝖬 𝖤 乂' : '乂 𝖠 𝖣 𝖨 𝖮 𝖲 乂'}`,
"body": packname,
"containsAutoReply": true,
"mediaType": 1, 
sourceUrl: links }}}, { quoted: fkontak })
apii.data = ''
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak })
}}}

break
case 'promote':
case 'promover':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ahora es administrador')
case 'demote':
case 'degradar':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ya no es administrador')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}}

export async function groupsUpdate(groupsUpdate) {

if (opts['self'])
return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data.chats[id], text = ''
if (!chats?.detect) continue
if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || 'Descripción cambiada a \n@desc').replace('@desc', groupUpdate.desc)
if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || 'El nombre del grupo cambió a \n@group').replace('@subject', groupUpdate.subject)
if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || 'El icono del grupo cambió a').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || 'El enlace del grupo cambia a\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
await this.sendMessage(id, { text, mentions: this.parseMention(text) })
}}

export async function callUpdate(callUpdate) {

let isAnticall = global.db.data.settings[this.user.jid].antiCall
if (!isAnticall) return
for (let cs of callUpdate) {
if (cs.isGroup == false) {
if (cs.status == "offer") {
let callmsg = await this.reply(nk.from, `Hola *@${cs.from.split('@')[0]}*, Las ${cs.isVideo ? 'videollamadas' : 'llamadas'} están prohibidas, seras bloqueado`, false, { mentions: [cs.from] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Azami 👑;;;\nFN:Azami\nORG:Azami 👑\nTITLE:\nitem1.TEL;waid=18134039996:+598 9999\nitem1.X-ABLabel:Azami 👑\nX-WA-BIZ-DESCRIPTION:Solo cosas del bot.\nX-WA-BIZ-NAME:Azami 👑\nEND:VCARD`
await this.sendMessage(cs.from, { contacts: { displayName: 'Azami 👑', contacts: [{ vcard }] }}, {quoted: callmsg})
await this.updateBlockStatus(cs.from, 'block')
}}}
}

export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message
if (fromMe) return 
let msg = this.serializeM(this.loadMessage(id))
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return 
if (!msg) return 
if (!msg?.isGroup) return 
await this.sendMessage(msg.chat, {text: `🔎 BORRO UN MENSAJE
🧃 *NOMBRE:* @${participant.split`@`[0]}\n
𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝚂𝚃𝙰 𝙾𝙿𝙲𝙸𝙾́𝙽 𝚄𝚂𝙰𝚁: #disable delete`, mentions: [participant]}, {quoted: msg})
this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
} catch (e) {
console.error(e)
}}

//let fotos = ImgAll.getRandom()

global.dfail = (type, m, conn) => {

let msg = {
rowner: '*¡Este comando es exclusivo para mi desarrollador!*',
owner: '*¡Esta función solo puede ser usada por mis propietarios!*',
mods: '*¡Solo mis moderadores pueden hacer uso de este comando!*',
premium: '*¡Solo usuarios premium pueden usar esta función!*',
group: '*¡Este comando solo se puede usar en grupos!*',
private: '*¡Esta función solo se puede utilizar en chat privado!*',
admin: '*¡Este comando solo puede ser utilizado por admins!*',
botAdmin: '*¡Para realizar la función debo ser admin!*',
unreg: '> *¡Debe registrarse!*\n\n#verificar nombre.edad\n\n*Uso correcto:* #verificar GataNina.20',
restrict: '*¡Esta característica esta desactivada!*'
}[type]
if (msg) return conn.reply(m.chat, msg, m, { contextInfo:{ externalAdReply: {title: '📖'  + saludo + ' ' + nombre, body: dev, sourceUrl: global.channel, thumbnailUrl: random1() }}})

}
const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());
  
  if (global.conns && global.conns.length > 0 ) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }
  
});
