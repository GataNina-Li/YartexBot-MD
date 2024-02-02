var handler = async (m, { conn, command }) => {
  
let stats = Object.entries(db.data.stats).map(([key, val]) => {
let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key 
    
if (/exec/.test(name)) return
return { name, ...val }
})
 
stats = stats.sort((a, b) => b.total - a.total)
var handlers = stats.slice(0, 10).map(({ name, total, last }) => {
return ` *Comando* : *${name}*\n• *Usos* : ${total}`
}).join`\n\n`

conn.reply(m.chat, handlers, m, fake, )
 
}
handler.help = ['dash', 'dashboard', 'views']
handler.tags = ['info']
handler.command = ['dashboard', 'dash', 'views']

handler.register = true

export default  handler
