var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de CuriosityBot*

*Requisitos para la instalación*
⬡ Dudas: wa.me/5217294888993
⬡ Tutoríal: https://youtu.be/qRb9ElGT8mM
⬡ 1 GB de almacenamiento
⬡ Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file
⬡ GitHub: https://github.com/AzamiJs/CuriosityBot-MD
⬡ Un whatsapp inmune (secundario)
⬡ Un número 
⬡ Dispositivo o una PC para escanear

*Comandos de instalación via Termux*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/AzamiJs/CuriosityBot-MD && cd CuriosityBot-MD && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno_

_Utilice "instalar2" para ver los otros tipos de instalación_

_Utilice "vortexus" para instalar el bot mediante el hosting vortexus_`

conn.reply(m.chat, texto, m, fake, )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/AzamiJs/CuriosityBot-MD && cd CuriosityBot-MD && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}
if (/^instalar2$/i.test(m.text) ) {
conn.reply(m.chat, `🚩 *Instalación automática*\n\nTutoríal: https://youtu.be/smoWgg28wPk?si=1J9cm-QCCcZLHiQM\n\nEn breve se remitirán los comandos para la instalación automática por Termux`, m, fake, )
await delay(2000 * 1)
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/AzamiJs/CuriosityBot-MD/master/curiosity.sh | bash')
}

if (/^vortexus$/i.test(m.text) ) {
conn.reply(m.chat, '🚩 *Instalación por vortexus*\n\nTutoríal: https://youtu.be/Xp2jRbG_v8o?si=vmkcNpjQ9kgzCkUy\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Pagina oficial :\nhttps://vortexuscloud.com\n\n• Dashboard:\nhttps://dash.vortexuscloud.com\n\n• Panel:\nhttps://cloud.vortexuscloud.com', m, fake )
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/41b8b3e0f536bb8ec1d6c.jpg'}, caption: ''}, {quoted: m})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/d9ead76219f879bb1e66a.jpg'}, caption: ''}, {quoted: m})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^(instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
