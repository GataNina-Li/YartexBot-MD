let handler = async (m, { conn, participants }) => { 
  
         let now = new Date() * 1 
         let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]) 
     let txt = '' 
     // let tolgp = `${participants.lenght}` 
  
     for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats))  
     txt += `${await conn.getName(jid)}\n${jid} [${chat?.metadata?.read_only ? 'izquierda' : 'Unido'}]\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = { 
      // isantiLink2: false, 
       welcome: false, 
       antiLink: false, 
       delete: true, 
     } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : 'Grupo Vencido No Regulado'} 
 ${db.data.chats[jid].welcome ? '✅' : '❌'} *Bienvenida automática*
 ${db.data.chats[jid].antiLink ? '✅' : '❌'} *Anti Enlaces*\n\n` 
     m.reply(`*📑 Lista grupos:*
*🚀 Grupos totales:* ${groups.length} 
  
 ${txt} 
  
 `.trim()) 
  
 } 
  
 handler.help = ['grouplist'] 
 handler.tags = ['group'] 
  
 handler.command = /^(group(s|list)|(s|list)group)$/i 
  
  
 export default handler
  
 function msToDate(ms) { 
   temp = ms 
   days = Math.floor(ms / (24 * 60 * 60 * 1000)); 
   daysms = ms % (24 * 60 * 60 * 1000); 
   hours = Math.floor((daysms) / (60 * 60 * 1000)); 
   hoursms = ms % (60 * 60 * 1000); 
   minutes = Math.floor((hoursms) / (60 * 1000)); 
   minutesms = ms % (60 * 1000); 
   sec = Math.floor((minutesms) / (1000)); 
   return days + " hari " + hours + " jam " + minutes + " menit"; 
   // +minutes+":"+sec; 
 }

/*let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n🔮 ${await conn.getName(jid)}\n✦ ${jid} \n${chat?.metadata?.read_only ? '❌ *SIN ESTAR AQUÍ | NO*' : '✅ *SIGO AQUÍ | YES*'}\n\n`
m.reply(`*${cb} ESTÁ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/Sofiaperez18/NEKOBOT-MD.git', '𝗡𝗘𝗞𝗢𝗕𝗢𝗧-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '.menu'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '/cuentasgb']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler*/
