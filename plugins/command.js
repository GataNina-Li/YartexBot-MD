import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} https://vt.tiktok.com/ZS81qJD5v/`
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
		let anu = await res.json()
		if (anu.status != '200') throw Error(anu.message)
		anu = anu.result
		if (anu.length == 0) throw Error('Error : no data')
		let c = 0
		for (let x of anu) {
			if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `Mengirim 1 dari ${anu.length} slide gambar.\n_(Sisanya akan dikirim via chat pribadi.)_` }, { quoted : m })
			else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
			c += 1
		}
	} catch (e) {
		console.log(e)
		throw `invalid slideshow url / media isn't available.`
	}
}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)slide)$/i

handler.premium = true
handler.limit = true

export default handler


/*import fetch from 'node-fetch' 
 let handler = async (m, { args, usedPrefix, command }) => { 
     if (!args[0]) throw `✳️ Ingresa el link de Tiktok qué contenga images` 
     if (!args[0].match(/tiktok/gi)) throw `❎ El enlace debe ser de TikTok` 
  
     m.react(rwait)    
     try { 
         let res = await fetch(global.API('fgmods', '/api/downloader/tiktok2', { url: args[0] }, 'apikey')) 
         let data = await res.json() 
  
         let title = data.result.title 
         let images = data.result.images 
         let music = data.result.music.play_url 
  
         for (let tt of images) { 
             //conn.sendFile(m.chat, tt.url, null, `▢ *Descripción:* ${title}`, m) 
             conn.sendMessage(m.chat, { image: { url: tt.url }, caption: `▢ *Descripción:* ${title}` }, { quoted: m }) 
         } 
         conn.sendFile(m.chat, music, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' }) 
         m.react(done) 
  
         } catch { 
     m.reply(`❎ Error intenta más tarde`) 
 } 
  
 } 
 handler.help = ['tiktokslide'] 
 handler.tags = ['dl'] 
 handler.command = ['tiktokslide', 'tiktokimg', 'ttslide'] 
 handler.diamond = true 
  
 export default handler
*/
