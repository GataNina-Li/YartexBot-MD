var handler = async (m, { conn }) => {

if (!/viewOnce/.test(m.quoted?.mtype)) throw '*⚠️ RESPONDE A UN VÍDEO O FOTO QUE ESTÁ PARA VER SOLO UNA VES*'
let mtype = Object.keys(m.quoted.message)[0]
let buffer = await m.quoted.download()
let caption = m.quoted.message[mtype].caption || ''
conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
	
}
handler.help = ['readviewonce']
handler.tags = ['implementos']
handler.command = /^retrieve|readviewonce|ver/i

export default handler