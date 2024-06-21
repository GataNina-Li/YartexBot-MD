var handler  = async (m, { conn }) => {
    
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '🚩 *Por qué no vas directamente con el numero del Bot?*', m, fake, )
else {
await conn.reply(m.chat, '🚩 Me apagare', m, fake, )
conn.isInit = false
conn.ws.close()
}
      
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i

handler.owner = true
  
handler.fail = null
  
export default handler
