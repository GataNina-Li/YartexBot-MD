//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/AzamiJs | @Azami

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {

try {

let name = conn.getName(m.sender)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let links = linkSity.getRandom()

//FAKES
let a = {'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `${name}`, 'jpegThumbnail': await (await fetch(pp)).buffer(), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `${name}!`, orderTitle: `▮Menu ▸`, sellerJid: '0@s.whatsapp.net' }}}
const fload = { key : { message: `CuriosityBot-MD 🍧` + `\nAzami`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' }}

m.react('🍓')
  
let menu2 = `╭━━━〔 ${wm} 〕━━━◉
┃╭──────────────
┃┃  *Hola ${name}*
┃╰──────────────
├━━━━━━━━━━━━━━━◉
┃
├━━━〔 🄼🄴🄽🅄 🄰🅄🄳🄸🄾 〕━━━◉
┃╭──────────────
┃┃ *ᴇsᴄʀɪʙᴇ ʟᴀs sɪɢᴜɪᴇɴᴛᴇs ᴘᴀʟᴀʙʀᴀs ᴏ*
┃┃ *ғʀᴀsᴇs sɪɴ ɴɪɴɢᴜɴ ᴘʀᴇғɪᴊᴏs:* (#, /, *, .)
┃┃━━━━━━━━━━━━━━━
┃┃ 🍓 _Quien es tu sempai botsito 7w7_
┃┃ 🍓 _Te diagnostico con gay_
┃┃ 🍓 _No digas eso papu_
┃┃ 🍓 _A nadie le importa_
┃┃ 🍓 _Fiesta del admin_
┃┃ 🍓 _Fiesta del administrador_ 
┃┃ 🍓 _Vivan los novios_
┃┃ 🍓 _Feliz cumpleaños_
┃┃ 🍓 _Noche de paz_
┃┃ 🍓 _Buenos dias_
┃┃ 🍓 _Buenos tardes_
┃┃ 🍓 _Buenos noches_
┃┃ 🍓 _Audio hentai_
┃┃ 🍓 _Chica lgante_
┃┃ 🍓 _Feliz navidad_
┃┃ 🍓 _Vete a la vrg_
┃┃ 🍓 _Pasa pack Bot_
┃┃ 🍓 _Atencion grupo_
┃┃ 🍓 _Marica quien_
┃┃ 🍓 _Murio el grupo_
┃┃ 🍓 _Oh me vengo_
┃┃ 🍓 _tio que rico_
┃┃ 🍓 _Viernes_
┃┃ 🍓 _Baneado_
┃┃ 🍓 _Sexo_
┃┃ 🍓 _Hola_
┃┃ 🍓 _Un pato_
┃┃ 🍓 _Nyanpasu_
┃┃ 🍓 _Te amo_
┃┃ 🍓 _Yamete_
┃┃ 🍓 _Bañate_
┃┃ 🍓 _Es puto_
┃┃ 🍓 _La biblia_
┃┃ 🍓 _Onichan_
┃┃ 🍓 _Mierda de Bot_
┃┃ 🍓 _Siuuu_
┃┃ 🍓 _Epico_
┃┃ 🍓 _Shitpost_
┃┃ 🍓 _Rawr_
┃┃ 🍓 _UwU_
┃┃ 🍓 _:c_
┃┃ 🍓 _a_
┃╰──────────────
╰━━━━━━━━━━━━━━◉`

await  conn.sendFile(m.chat, pp, 'lp.jpg', menu2, m, false, { contextInfo: { externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: ig, thumbnail: await (await fetch(pp)).buffer() }}})
//conn.reply(m.chat, menu, a, { contextInfo: { externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: ig, thumbnail: await (await fetch(pp)).buffer() }}})
} catch {
conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
console.log(e)
}}
handler.help = ['menu2', 'audios']
handler.tags = ['bot']
handler.command = /^(menu2|menuaudios|audios)$/i
handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
