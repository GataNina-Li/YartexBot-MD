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

_Utilice "instalar2" para ver los otros tipos de instalación_`

conn.reply(m.chat, texto, m, fake, )

}
handler.help = ['instalarbot']
handler.tags = ['main']
handler.command = /^(instalarbot)/i

export default handler
