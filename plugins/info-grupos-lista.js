var handler = async (m, { conn }) => {
  
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🪪${jid} [${chat?.metadata?.read_only ? 'Salido' : 'Unido'}]\n\n`
    
m.reply(m.chat, `🚩 *Lista De Grupos*:

${txt}`, m, fake, )

}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

handler.register = true

export default handler
