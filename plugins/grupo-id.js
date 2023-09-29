var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `${await groupMetadata.id}`, fkontak)

}
handler.help = ['idgc']
handler.tags = ['grupo']
handler.command = /^(cekid|idgc|gcid)$/i
handler.group = true

export default handler  