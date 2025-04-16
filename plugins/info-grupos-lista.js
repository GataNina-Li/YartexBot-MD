const handler = async (m, { conn }) => {
  let txt = '';
try {    
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '🪪 Unido' : '❌ Salido';
    const totalParticipants = participants.length;
    txt += `*🚩 Grupo ${i + 1}*
    *🍓 Nombre:* ${await conn.getName(jid)}
    *🍓 ID:* ${jid}
    *🍓 Admin:* ${isBotAdmin ? '✔ Sí' : '❌ No'}
    *🍓 Estado:* ${participantStatus}
    *🍓 Total de Participantes:* ${totalParticipants}
    *🍓 Link:* ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || '❗ Error'}` : '✿ No soy admins'}\n\n`;
  }
  conn.reply(m.chat, `🚩 *Lista De Grupos*\n\n🍓 *Total de grupo :* ${totalGroups}

${txt}`, m, fake, )
} catch {
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '🪪 Unido' : '❌ Salido';
    const totalParticipants = participants.length;    
    txt += `*🚩 Grupo ${i + 1}*
    *🍓 Nombre:* ${await conn.getName(jid)}
    *🍓 ID:* ${jid}
    *🍓 Admin:* ${isBotAdmin ? '✔ Sí' : '❌ No'}
    *🍓 Estado:* ${participantStatus}
    *🍓 Total de Participantes:* ${totalParticipants}
    *🍓 Link:* ${isBotAdmin ? '❗ Error' : '✾ No soy admins'}\n\n`;
  }
 conn.reply(m.chat, `🚩 *Lista De Grupos*\n\n🍓 *Total de grupo :* ${totalGroups}

${txt}`, m, fake, )
 }    
};
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

handler.register = true
export default handler;
