/*function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), estilo, m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler*/


import fetch from 'node-fetch' 
 let handler = async (m, { conn, usedPrefix, text, args, command }) => { 
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
 let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom()) 
 let name = await conn.getName(who) 
  
   const sentMsg = await conn.sendContactArray(m.chat, [
     [`${dev}`, `${await conn.getName(dev+'@s.whatsapp.net')}`, `💌 Developer Bot`, `No famoso`, `alexismaldonado90700@gmail.com`, `🇲🇽 México`, `📍 https://github.com/AzamiJs`, `👤 Creador de CuriosityBot-MD`], 
     [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 No hagas spam`, `Nada`, `🇨🇦 Canadá`, `📍 https://github.com/CuriosityBot-MD`, `🍧 Soy Curiosity Bot` ]], fkontak) 
  await m.reply(`Hola @${m.sender.split(`@`)[0]}`) 
   }  
  
 handler.help = ['owner', 'creator'] 
 handler.tags = ['main', 'info'] 
 handler.command = /^(owner|creator)/i 
 export default handler
