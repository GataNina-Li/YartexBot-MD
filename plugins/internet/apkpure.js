import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    let res = await sandroid1(text)
    let dapet = res.data
	let row = Object.values(dapet).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ dev: ' + v.dev + '\n⏲️ rating: ' + v.rating + '\n👁️ thumb: ' + v.thumb + '\n📎 link: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ apkpure Search Disini ☂️`,
		description: `⚡ Silakan pilih apkpure Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['apkpure'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(apkpure)$/i
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler
