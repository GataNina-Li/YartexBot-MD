/*
     ig : https://www.instagram.com/fg98._/
*/

import hispamemes from 'hispamemes'

let handler = async (m, { conn, usedPrefix, command }) => {
	
const meme = hispamemes.meme()
conn.sendFile(m.chat, meme, '', '', m)
m.react('🤣')

}
handler.help = ['meme']
handler.tags = ['imagene']
handler.command = ['meme', 'memes']

handler.diamond = true
handler.register = true

export default handler
