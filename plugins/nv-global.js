import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
var handler = m => m

handler.all = async function (m, {conm}) {

const chat = global.db.data.chats[m.chat]

if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned && !m.fromMe) {
const join = `🚩 *Une un bot a tu grupo*\n\n*Hola @${m.sender.split('@')[0]}, si deseas solicitar un Bot para tu grupo usa el comando !join mas el enlace de tu grupo*\n\nEjemplo, !join https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU`.trim()
this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": fs.readFileSync("./storage/logos/Menu1.jpg"), "mediaUrl": fs.readFileSync("./storage/logos/Menu1.jpg"), "sourceUrl": 'https://github.com/AzamiJs/CuriosityBot-MD'}}}, {quoted: m})
}

if (/^hola$/i.test(m.text) && !chat.isBanned) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/HPeS.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (/^que no$/i.test(m.text) && !chat.isBanned) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/queno.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/JocM.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(araara|ara ara)/gi)) { 
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/PPgt.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/insultar.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(baÃ±ate|BaÃ±ate)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Banate.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(baneado|Baneado)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './media/baneado.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(bebito fiu fiu|bff|Bebito Fiu Fiu|Bff)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/bff.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/boanoite.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/boatarde.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Buenos-dias-2.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/chica lgante.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnÃ³stico con gay|diagnÃ³stico gay|te diagnostico con gay|te diagnÃ³stico con gay|te diagnosticÃ³ con gay|te diagnostico con gay)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/DiagnosticadoConGay.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(es puto|eeesss putoo|es putoo|esputoo)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Es putoo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(feliz cumpleaÃ±os|felizcumpleaÃ±os|happy birthday)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Feliz cumple.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/admin.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(fiesta del administrador)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/fiesta.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(fiesta del admin 3|atenciÃ³n grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Fiesta1.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/gemi2.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/hentai.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/maau1.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(laoracion|La biblia|La oraciÃ³n|La biblia|La oraciÃ³n|la biblia|La Biblia)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/ora.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/cancion.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(MuriÃ³ el grupo|Murio el grupo|murio el grupo|muriÃ³ el grupo|Grupo muerto|grupo muerto)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Murio.m4a'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/navidad.m4a'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Noche.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/otaku.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

  if (!chat.isBanned && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/vengo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Onichan.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|PÃ¡same tus fotos desnudas|pÃ¡same tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Elmo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(QuiÃ©n es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|QuiÃ©n es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quiÃ©n es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|quiÃ©n es tu senpai botsito|quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Tu.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/rawr.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/siu.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(te amo|teamo)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Te-amo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(ooo tio|tio que rico)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/oh_tio.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/pato.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/UwU.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/vete a la verga.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}
 
if (!chat.isBanned && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/viernes.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/vivan.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/Yamete-kudasai.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(epico|esto va a ser epico)/gi)) {
if (!db.data.chats[m.chat].audios) return
const vn = './storage/audios/Epico.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(shitpost)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = './storage/audios/shitpost.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(no digas eso papu)/gi)) {
if (!db.data.chats[m.chat].audios) return
const vn = './storage/audios/nopapu.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
} 

return !0
}

export default handler
  
