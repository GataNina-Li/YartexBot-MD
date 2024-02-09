import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]
const links = linkSity.getRandom()

if (chat.detect2 && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './sessions/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`⚠️ Eliminacion session (PreKey) que provocan el undefined el chat`)}}}

if (chat.detect2 && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `🚩 ${usuario} *HA CAMBIADO EL NOMBRE DEL GRUPO*\n\n🔰 *NUEVO NOMBRE ES:*\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `🚩 ${usuario} ha cambiado la imágen de grupo : *${groupMetadata.subject}*`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `🚩 ${usuario} ¡ha modificado la descripción!\n\n*Nueva descripción:*\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝙰𝙷𝙾𝚁𝙰 *${m.messageStubParameters[0] == 'on' ? '𝚂𝙾𝙻𝙾 𝙰𝙳𝙼𝙸𝙽𝚂' : '𝚃𝙾𝙳𝙾𝚂'}* 𝙿𝚄𝙴𝙳𝙴 𝙴𝙳𝙸𝚃𝙰𝚁 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `${groupMetadata.subject} HA SIDO *${m.messageStubParameters[0] == 'on' ? 'CERRADO 🔒' : 'ABIERTO 🔓'}*\n${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDEN ENVIAR MENSAJES*`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 29) {
let txt1 = `🚩 *Nuevo admin*\n\n`
txt1 += `Nombre: @${m.messageStubParameters[0].split`@`[0]}\n`
txt1 += `Le otorgó admin: @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})

} else if (chat.detect2 && m.messageStubType == 30) {
let txt2 = `🚩 *Un admin menos*\n\n`
txt2 += `Nombre: @${m.messageStubParameters[0].split`@`[0]}\n`
txt2 += `Le quitó admin: @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})

} else if (chat.detect2 && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `🚩 ${usuario} 𝙲𝙰𝙼𝙱𝙸𝙾 𝙻𝙰 𝙳𝚄𝚁𝙰𝙽𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙴𝚂 𝙰 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `🚩 ${usuario} *𝙳𝙴𝚂𝚂𝙲𝚃𝙸𝚅́* 𝙻𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙴𝚂.`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
