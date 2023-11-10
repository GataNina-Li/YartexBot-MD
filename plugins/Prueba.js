import fetch from 'node-fetch'

var handler = async (m, { conn, text, usedPrefix, command }) => {
	
let cek = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
let ip = (cek == 'error' ? 'Fallo' : cek.ip)
let cr = (cek == 'error' ? 'Fallo' : cek.country)
await m.reply(`${cr}`)
    
}
handler.help = ['agedetect']
handler.tags = ['implementos']
handler.command = /^(agedetect|años)$/i

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
