let handler = async (m) => {

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

conn.reply(m.chat, `${saludo}

*📁 Según los datos de la database, tengo ${totalreg} usuarios registrados*

*🗂️ ${rtotalreg} no estan registrados*`, fkontak, m)

}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i

export default handler
