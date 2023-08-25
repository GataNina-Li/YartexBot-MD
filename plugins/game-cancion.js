/* Created By https://github.com/HACHEJOTA */
///*
import fetch from 'node-fetch'
import axios from 'axios'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0])

throw false
} //5LTV57azwaid7dXfz5fzJu
let res = await fetchJson(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tebaklagu.json`)
let json = res[Math.floor(Math.random() * res.length)]    
let caption = `
⚠️ADIVINA EL TITULO DE LA CANCION⚠️
🎈Tiempo ${(timeout / 1000).toFixed(1)} segundos
🧨Escribe *${usedPrefix}pista* Para obtener una pista
🏆Premio: ${poin} XP
RESPONDE A ESTE MENSAJE CON LAS RESPUESTAS!`.trim()
let txt = '';
let count = 0;
for (const c of caption) {
    await new Promise(resolve => setTimeout(resolve, 15));
    txt += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
conn.tebaklagu[id] = [
    await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} ),
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `Se acabó el tiempo!\nLa respuesta es ${json.jawaban}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 2*60*1000})  
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
//*/
/*
import similarity from 'similarity'
import fetch from 'node-fetch'
import axios from 'axios'

const threshold = 0.72
const timeout = 60000
const poin = 1000

let handler = {
async before(m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/ADIVINA EL TITULO DE LA CANCION/i.test(m.quoted.text)) return !0
this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
if (!(id in this.tebaklagu)) return m.reply('El juego ha terminado')
if (m.quoted.id == this.tebaklagu[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebaklagu[id][2]
m.reply(`✅Correcto!\n+${this.tebaklagu[id][2]} XP`)
clearTimeout(this.tebaklagu[id][3])
delete this.tebaklagu[id]
} else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) m.reply(`Casii!`)
else m.reply(`❌Incorrecto!`)
}
return !0
},
exp: 0,
help: ['tebaklagu'],
tags: ['game'],
command: /^cancion|canción$/i
}

let tebaklaguHandler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat

if (id in conn.tebaklagu) {
conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0])
throw false
}

let res = await fetchJson(`https://fatiharridho.github.io/tebaklagu.json`)
let json = res[Math.floor(Math.random() * res.length)]

if (!json.link_song) {
throw new Error('La propiedad link_song no existe en este objeto')
}

let caption = `ADIVINA EL TITULO DE LA CANCION Tiempo ${(timeout / 1000).toFixed(2)} segundos Escribe *${usedPrefix}pista* Para obtener una pista Premio: ${poin} XP RESPONDE A ESTE MENSAJE CON LAS RESPUESTAS!` .trim()

conn.tebaklagu[id] = [
await m.reply(caption),
json,
poin,
setTimeout(() => {
if (conn.tebaklagu[id]) {
conn.reply(m.chat, `Se acabó el tiempo!\nLa respuesta es ${json.jawaban}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}
}, timeout)
]

let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: error.mp3, mimetype: 'audio/mpeg' }, { quoted: m })

if (!aa) {
return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
}

export { handler as default, tebaklaguHandler, fetchJson }
*/
