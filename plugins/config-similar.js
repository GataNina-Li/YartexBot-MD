import didyoumean from 'didyoumean'
import similarity from 'similarity'
//import { plugins } from '../lib/plugins.js'

export async function before(m, { conn, match, usedPrefix, command }) {
	
	  if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	       if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `*🍧  Hola* @${who.split('@')[0]}

Según mi sistema esa función no existe pero se parece a las siguientes funciones

 🌲 *${usedPrefix + mean}*
 ❄️ *Similitud:* _${parseInt(som)}%_`
	    if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
	    }
}
export const disabled = true
      
