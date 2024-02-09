const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*⚠️ TERMINA TU PARTIDA*'
  const textquien = `*⚠️ ETIQUETA A UNA PERSONA*\n\n❕ EJEMPLO:\n${usedPrefix}suit @${global.suittag}`
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*⚠️ ESPERA A QUE TERMINE DE JUGAR*`
  const id = 'suit_' + new Date() * 1;
  const caption = `🧃 SUIT - CURIOSITY\n\n• @${m.sender.split`@`[0]} DESAFÍA A @${m.mentionedJid[0].split`@`[0]} EN UN PVP\n*🥤 ESCRIBE "aceptar" PARA JUGAR*\n🥤 ESCRIBE "rechazar" PARA NO JUGAR\nrespondiendo al mensaje`
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await conn.sendMessage(m.chat, {text: caption}, {mentions: await conn.parseMention(caption)}),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*⏰ SE TERMINO EL TIEMPO*`, m);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.help = ['pvp', 'suit']
handler.tags = ['juegos']
handler.command = /^pvp|suit(pvp)?$/i;
handler.group = true;
handler.game = true;
export default handler;
    
