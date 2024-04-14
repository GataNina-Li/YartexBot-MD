/*var handler = async (m, { conn, isROwner, text }) => {

let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
if(!pesan) return conn.reply(m.chat, '🚩 *Ingresé el texto que quiere que trámite*', m, fake, )

for (let i of anu) {
await delay(9000 * 1)
conn.relayMessage(i, { liveLocationMessage: { degreesLatitude: 35.685506276233525, degreesLongitude: 139.75270667105852, accuracyInMeters: 0, degreesClockwiseFromMagneticNorth: 2, caption: '🚩 *Broadcast*\n\n' + pesan + ' ', sequenceNumber: 2, timeOffset: 3, contextInfo: m, }}, {}).catch(_ => _)
}
conn.reply(m.chat, `📑 *Mensaje enviado a ${anu.length} grupo/s*`, m, fake, )

}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['own']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))*/

// codigo adaptado por: https://github.com/GataNina-Li & https://github.com/elrebelde21

import {randomBytes} from 'crypto';

const handler = async (m, {conn, command, participants, usedPrefix, text}) => {
  if (!text) return '*Y EL TEXTO?*';
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks4 = text ? text : cc4.text;
  const groups2 = Object.keys(await conn.groupFetchAllParticipating());
  const chats2 = Object.keys(global.db.data.users).filter((user) => user.endsWith('@s.whatsapp.net'));
  await conn.reply(m.chat, '*🚩 Enviando A Todos Los Chats*', m);
  const start2 = new Date().getTime();
  const usersTag2 = participants.map((u) => conn.decodeJid(u.id));
  let totalPri2 = 0;
  for (let i = 0; i < groups2.length; i++) {
    const group = groups2[i];
    const delay = i * 4000; // 4 seg
    setTimeout(async () => {
      await conn.reply(group, `*Comunicado*\n\n` + teks4, {mentions: usersTag2}, {quoted: fkontak});
    }, delay);
  }
  for (const user of chats2) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos
    await conn.reply(user, `*Comunicado*\n\n` + teks4, fkontak, null);
    totalPri2++;
    if (totalPri2 >= 500000) {
      break;
    }
  }
  const end2 = new Date().getTime();
  const totalPrivate2 = chats2.length;
  const totalGroups2 = groups2.length;
  const total2 = totalPrivate2 + totalGroups2;
  let time2 = Math.floor((end2 - start2) / 1000);
  if (time2 >= 60) {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    time2 = `${minutes} minutos y ${seconds} segundos`;
  } else {
    time2 = `${time2} segundos`;
  }
  await m.reply(`𝖬𝖾𝗇𝗌𝖺𝗃𝖾 𝖤𝗇𝗏𝗂𝖺𝖽𝗈 𝖠:
\`\`\`𝗖𝗵𝗮𝘁 𝗣𝗿𝗶𝘃𝗮𝗱𝗼𝘀 >> ${totalPrivate2}\`\`\`
\`\`\`𝗖𝗵𝗮𝘁 𝗚𝗿𝘂𝗽𝗼𝘀  >>   ${totalGroups2}\`\`\`
\`\`\`𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂  >>   ${total2}\`\`\`\n\n*𝖳𝗂𝖾𝗆𝗉𝗈 𝖳𝗈𝗍𝖺𝗅 𝖣𝖾 𝖤𝗇𝗏𝗂𝗈 ${time2}*\n${totalPri2 >= 500000 ? `\n*📱 𝘉𝘰𝘵 - CuriosityBot-MD*` : ''}`);
};
handler.help = ['broadcast', 'bc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(bc|comunicado)$/i;

handler.owner = true;

export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);
