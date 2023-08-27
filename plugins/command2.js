import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async(m, { conn, text, usedPrefix, command }) => {
let name = conn.getName(m.sender)
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `Hola! ${name}`, orderTitle: `▮Menu ▸`, thumbnail: imagen1, sellerJid: '0@s.whatsapp' }}}

await conn.reply(m.chat, '*Enviando el menu . . .*', ftrol, m)
let str = `*🍧 CuriosityBot-MD*`.trim()
await conn.sendMessage(m.chat, { image: imagen4, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak })
 
}
handler.command = /^((a|a)a)$/i
handler.owner = true

export default handler
