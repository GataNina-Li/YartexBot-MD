import fetch from 'node-fetch'
import axios from 'axios'

var handler = async (m, { conn, text, usedPrefix, command }) => {
	
let curiosity = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
let ip = (curiosity == 'error' ? 'Fallo' : curiosity.ip)
let cr = (curiosity == 'error' ? 'Fallo' : curiosity.country)
let cc = (curiosity == 'error' ? 'Fallo' : curiosity.cc)
let bot = await(await fetch("https://whatismyipaddress.com/ip/${ip}")
await m.reply(`Ip: ${ip}
País: ${cr}
Model: ${cc}

${bot}`)
    
}
handler.help = ['agedetect']
handler.tags = ['implementos']
handler.command = /^(agedetect|country)$/i

export default handler
