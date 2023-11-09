let handler = async (m, { conn, usedPrefix, text }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let old = performance.now()
let neww = performance.now()
let speed =  (neww - old).toFixed(4)
  let { key } = await conn.sendMessage(m.chat, { text: "Ora sego" }, { quoted: m });
  const array = [
    "8==👊==D", "8===👊=D", "8=👊===D", "8=👊===D", "8==👊==D", "8===👊=D", "8=👊===D", "8==👊==D", "8===👊=D", "8=👊===D","8==👊==D","8===👊=D","8===👊=D💦"
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"contactMessage": { displayName: '𝐁𝐢𝐱𝐛𝐲 𝐏𝐢𝐧𝐠 𖣘',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
  return conn.sendMessage(m.chat, { text: `Oh ${text} se corrió!😋💦`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['infobot', 'speed'];
handler.tags = ['info', 'tools'];
handler.command = /^(sega)$/i;

export default handler;


function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
