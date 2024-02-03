import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

var handler  = async (m, { conn }) => {

let texto = `╭─────────────┈⊷
│ *INSTALACIÓN DE CURIOSITYBOT-MD*
╰┬────────────┈⊷
┌┤ *REQUISITOS PARA LAS INSTALACION*
┌┤➳ _Dudas: wa.me/5217294888993_
┌┤➳ _Tutoríal: https://youtu.be/qRb9ElGT8mM_
┌┤➳ _1 GB de almacenamiento_
┌┤➳ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤➳ _GitHub: https://github.com/AzamiJs/CuriosityBot-MD_
┌┤➳ _un whatsapp inmune (secundario)_
┌┤➳ _un número victual_
┌┤➳ _2 dispositivo o una PC para escanear_
╰┬────────────┈⊷
  │ *COMANDOS DE INSTALACION TERMUX*
  │> termux-setup-storage
  │> apt-get update -y && apt-get upgrade -y
  │> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
  │> git clone https://github.com/AzamiJs/CuriosityBot-MD && cd CuriosityBot-MD && yarn install && npm install 
  │> ls 
  │> npm start 
  ╰────────────┈⊷`

conn.reply(m.chat, texto, m, fake, )

}
handler.help = ['instalarbot']
handler.tags = ['main']
handler.command = /^(instalarbot)/i

export default handler
