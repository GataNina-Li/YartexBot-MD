// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

 /*Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0
  const groupName = (await conn.groupMetadata(m.chat)).subject
  const groupAdmins = participants.filter((p) => p.admin)
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/sinfoto.jpg'
  const img = await (await fetch(pp)).buffer()
  const chat = global.db.data.chats[m.chat]
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
  const mentionsContentM = [m.sender, m.messageStubParameters[0]]
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `╔═══[ ${groupName} ]═══╗\n║╭──────────────\n║├⫹⫺ *NUEVO ADMINS*\n`
    txt1 += `║├⫹⫺ *AHORA ERES ADMINS:* @${m.messageStubParameters[0].split`@`[0]}\n`
    txt1 += `║├⫹⫺ *EJECUTADO POR:* @${m.sender.split`@`[0]}\n║├⫹⫺ Felicidades te uner al grupo del admins\n║╰──────────────\n╚══════════════════⋆`
    await delay(3000 * 3);
    await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `╔═══[ ${groupName} ]═══╗\n║╭──────────────\n║├⫹⫺ *UN ADMINS MENOR*\n`
    txt2 += `║├⫹⫺ *SE QUITO ADMINS A:* @${m.messageStubParameters[0].split`@`[0]}\n`
    txt2 += `║├⫹⫺ *EJECUTADO POR:* @${m.sender.split`@`[0]}\n║├⫹⫺ Ya no eres admins 🚮 vete a llorar maldita puta\n║╰──────────────\n╚══════════════════⋆`
    await delay(3000 * 3);
    await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}});
   // await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fliveLoc})
  }
   
  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `┏━━━━━━━━━━━━\n┃──〘`
    txt3 += ` 💛 *WELCOME* 💛〙──\n┃━━━━━━━━━━━━\n┃ *_👀 @${m.messageStubParameters[0].split`@`[0]} bienvenid@ a_* `
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `\n┃ _*${groupName} ✨*_\n┃\n┃`
      txt3 += ` *Fue aprobado por:* @${m.sender.split`@`[0]}\n┃ *_Puedes solicitar mi lista de_*\n┃ *_comandos con:_*\n┠⊷ *#menu*\n┃\n┃=> *_Aquí tienes la descripción_* \n┃ *_del grupo, léela!!_*\n┃\n\n${groupMetadata.desc?.toString() || '⚠️ No hay descripción!!'}\n\n┗━━━━━━━━━━━`
    } else {
      txt3 += `\n┃*_Puedes solicitar mi lista de_*\n┃ *_comandos con:_*\n┠⊷ *#menu*\n┃\n┃=> *_Aquí tienes la descripción_* \n┃ *_del grupo, léela!!_*\n┃\n\n${groupMetadata.desc?.toString() || '⚠️ No hay descripción!!'}\n\n┗━━━━━━━━━━━`
    }
    await conn.sendMessage(m.chat, {image: pp, caption: txt3, mentions: mentionsContentM}, {quoted: fliveLoc})
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `┏━━━━━━━━━━━━\n┃──〘   ${groupName} 〙───\n┃━━━━━━━━━━━━\n┃`
    if (!m.sender.endsWith('@g.us')) {
      txt4 += ` *⚠️ Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n┃`
      txt4 += ` *⚠️ Ejecutado por:* @${m.sender.split`@`[0]}\n┃No vuelva a agrega a esa sucia rata 🐁\n┗━━━━━━━━━━`
    } else {
      txt4 += ` *⚠️ Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n┃No vuelva a agrega a esa sucia rata 🐁\n┗━━━━━━━━━━`
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fliveLoc})
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido'
    } else {
      ax = 'eliminado'
    }
    let txt5 = `┏━━━━━━━━━━━━\n┃──〘  ${groupName} 〙───\n┃━━━━━━━━━━━━\n┃`
    if (ax === 'eliminado') {
      txt5 += ` *⚠️ Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n┃`
      txt5 += ` *⚠️ Ejecutado por:* @${m.sender.split`@`[0]}\n┃No vuelva a agrega a esa sucia rata 🐁\n┗━━━━━━━━━━`;
    } else {
      txt5 += ` *😿 Se fue:* @${m.messageStubParameters[0].split`@`[0]}\n┃ *_Que dios lo bendiga️_*\n┃ *_Y lo atropelle un tren 😇_*\n┗━━━━━━━━━━`
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fliveLoc})
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado'
    } else {
      accion = 'abierto'
    }
    
    let txt6 = `╔═══[ ${groupName} ]═══╗\n║╭──────────────\n║├⫹⫺ *Recientemente se han modificado los ajustes del grupo.*\n`
    txt6 += `║├⫹⫺ *El grupo se ha:* ${'```' + accion + '```'}\n`
    txt6 += `║├⫹⫺ *Ejecutado por:* @${m.sender.split`@`[0]}\n║╰──────────────\n╚══════════════════⋆`
   // await conn.sendMessage(m.chat, {text: txt6, mentions: [...txt6.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt6.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}});
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fliveLoc})
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `╔═══[ ${groupName} ]═══╗\n║╭──────────────\n║├⫹⫺ *Recientemente se ha cambiado el nombre del grupo.*\n`
    txt7 += `*║├⫹⫺ Nuevo nombre:* ${'```' + groupName + '```'}\n`
    txt7 += `*║├⫹⫺ Ejecutado por:* @${m.sender.split`@`[0]}\n║╰──────────────\n╚══════════════════⋆`
  //  await conn.sendMessage(m.chat, {text: txt7, mentions: [...txt7.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt7.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}});
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fliveLoc})
  }
}
