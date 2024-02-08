let handler = (m) => m;
handler.all = async function (m) {


  if (/^Azami|azami|Zam|zam$/i.test(m.text)) {
    var GB = `𝙊𝙬𝙣𝙚𝙧 @${azamijs} 𝙏𝙚 𝘼𝙣 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙙𝙤 🎌`;

    m.reply(GB, m.chat, { mentions: conn.parseMention(GB)});
  }
  return !0;
};
export default handler;