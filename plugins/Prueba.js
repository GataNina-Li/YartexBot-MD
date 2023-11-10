import fetch from 'node-fetch'

var handler = async (m, { conn, text, usedPrefix, command }) => {
	
let curiosity = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
let ip = (curiosity == 'error' ? 'Fallo' : curiosity.ip)
let cr = (curiosity == 'error' ? 'Fallo' : curiosity.country)
await m.reply(`Ip: ${ip}
País: ${cr}`)
    
}
handler.help = ['agedetect']
handler.tags = ['implementos']
handler.command = /^(agedetect|country)$/i

export default handler
