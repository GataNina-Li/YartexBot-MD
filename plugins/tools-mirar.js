var handler = async (m, { conn }) => {

if (!/viewOnce/.test(m.quoted?.mtype)) return conn.reply(m.chat, '🚩 *Responda a un archivo multimedia con ver una vez*', m, fake, )
let mtype = Object.keys(m.quoted.message)[0]
let buffer = await m.quoted.download()
let caption = m.quoted.message[mtype].caption || ''
conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
	
}
handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^retrieve|readviewonce|mirar/i

handler.limit = true
handler.register = true

export default handler
