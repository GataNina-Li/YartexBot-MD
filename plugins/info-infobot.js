import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'

var handler = async (m, { conn, usedPrefix }) => {

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length

const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}

let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `⬡ *Creador*
GataNina-Li

⬡ *Contacto* 
${ig}

⬡ *Versión actual*
 ${vs}

⬡ *Prefijo*
!

⬡ *Chats privados*
${chats.length - groups.length}

⬡ *Chats grupales*
${groups.length}

⬡ *Todos los chats*
${chats.length}

⬡ *Actividad*
${uptime}

⬡ *Usuarios*
${totalreg}

⬡ *Velocidad*
${speed}

⬡ *Autoread*
${autoread ? 'Habilitado' : 'Deshabilitado'}

⬡ *Restrict*
${restrict ? 'Habilitado' : 'Deshabilitado'}`

 conn.sendMessage(m.chat, { text: info, contextInfo: { externalAdReply: { title: '', body: '🌟 YartexBot Info', thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot|Infobot)$/i

handler.register = true

export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
