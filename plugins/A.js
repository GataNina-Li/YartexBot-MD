import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

var flag_list = await(await fetch("https://raw.githubusercontent.com/maisans-maid/country-flags/master/countries.json")).json()
var flag_img = Array.from(Object.keys(flag_list).map((v) => v))
var flag_name = Array.from(Object.values(flag_list).map((o) => o))

conn.reply(m.chat, flag_list, fkontak, m)

}
handler.help = ['flags']
handler.command = ['flags']

export default handler
