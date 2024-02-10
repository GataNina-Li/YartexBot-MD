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

m.react('🚩')
  
let menu2 = `╭━━━〔 ${wm} 〕━━━◉
┃╭──────────────
┃┃  *Hola ${name}*
┃╰──────────────
├━━━━━━━━━━━━━━━◉
┃
├━━━〔 Menu Audios 〕━━━◉
┃╭──────────────
┃┃ _Escriba las palabras sin prefijo: (#, /, *, .)_
┃┃━━━━━━━━━━━━━━━
┃┃ Quien es tu sempai botsito 7w7
┃┃ Te diagnostico con gay
┃┃ No digas eso papu
┃┃ A nadie le importa
┃┃ Fiesta del admin
┃┃ Fiesta del administrador
┃┃ Vivan los novios
┃┃ Feliz cumpleaños
┃┃ Noche de paz
┃┃ Buenos dias
┃┃ Buenos tardes
┃┃ Buenos noches
┃┃ Audio hentai
┃┃ Chica lgante
┃┃ Feliz navidad
┃┃ Vete a la vrg
┃┃ Pasa pack Bot
┃┃ Atencion grupo
┃┃ Marica quien
┃┃ Murio el grupo
┃┃ Oh me vengo
┃┃ tio que rico
┃┃ Viernes
┃┃ Baneado
┃┃ Sexo
┃┃ Hola
┃┃ Un pato
┃┃ Nyanpasu
┃┃ Te amo
┃┃ Yamete
┃┃ Bañate
┃┃ Es puto
┃┃ La biblia
┃┃ Onichan
┃┃ Mierda de Bot
┃┃ Siuuu
┃┃ Epico
┃┃ Shitpost
┃┃ Rawr
┃┃ UwU
┃┃ :c
┃┃ a
┃╰──────────────
╰━━━━━━━━━━━━━━◉`

await  conn.sendMessage(m.chat, {image: imagen1, caption: menu2, mentions: [...menu2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...menu2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen2, "mediaUrl": group, "sourceUrl": group}}}, {quoted: fproducto})
} catch {
conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
console.log(e)
}

}
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
