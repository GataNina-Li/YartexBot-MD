import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

var flag_list = await(await fetch("https://raw.githubusercontent.com/maisans-maid/country-flags/master/countries.json")).json()

conn.reply(m.chat, flag_list, m)

}
handler.help = ['flags']
handler.command = ['flags']

export default handler
