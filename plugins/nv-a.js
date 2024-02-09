const handler = async (m, {conn}) => {
  if (!db.data.chats[m.chat].audios) return;
  //const s = seconds: '1934.4'
  const vn = './media/a.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, seconds: '1934.4', mimetype: 'audio/mpeg', fileName: `a.mp3`}, {quoted: fdocs});
};
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler;