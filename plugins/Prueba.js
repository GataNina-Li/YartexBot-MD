import fetch from 'node-fetch'

var handler = async (m, { conn, text, usedPrefix, command }) => {
	
let cek = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
let ip = (cek == 'error' ? 'Fallo' : cek.ip)
let cr = (cek == 'error' ? 'Fallo' : cek.country)
await m.reply(`${cr}`)
    
}
handler.help = ['agedetect']
handler.tags = ['implementos']
handler.command = /^(agedetect|country)$/i

export default handler
