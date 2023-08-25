/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
const toMention = (id) => `@${id.split('@')[0]}`;

async function handler(m, { conn, groupMetadata }) {
  const participants = groupMetadata.participants.map((p) => p.id);

  if (participants.length < 2) {
    return console.log('⚠️ Debe haber al menos 2 participantes en el grupo para jugar a la ruleta ban.');
  }

  const a = participants.getRandom();
  let b;
  do {
    b = participants.getRandom();
  } while (b === a);

  const replyText = `¡Bang! ⚠️ ${toMention(a)} o ${toMention(b)}, uno de ustedes será eliminado del grupo en 30 segundos 🚫.`;

  let txt = '';
  let count = 0;
  for (const c of replyText) {
    await new Promise((resolve) => setTimeout(resolve, 20));
    txt += c;
    count++;

    if (count % 10 === 0) {
      await conn.sendPresenceUpdate('composing', m.chat);
    }
  }

  await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {
    quoted: m,
    ephemeralExpiration: 24*60*100,
    disappearingMessagesInChat: 24*60*100,
  });

  await new Promise((resolve) => setTimeout(resolve, 30000));

  const selectedParticipant = Math.random() < 0.5 ? a : b;
  await conn.groupParticipantsUpdate(m.chat, [selectedParticipant], 'remove');
}

handler.command = ['ruleta'];
handler.group = true
handler.admin = true
handle.owner = true
espadmins = true
export default handler;
