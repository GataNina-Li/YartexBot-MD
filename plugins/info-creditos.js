var handler = async (m) => {

let tqto = `👑 *Desarrolladora*
⬡ *GataNina*
https://github.com/GataNina-Li

🎌 *Colaboradores*
⬡ *AzamiJs* 
⬡ *Diego*

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🌟 *GitHub - Colaboradores*

⬡ https://github.com/Diego-YL-177
⬡ https://github.com/AzamiJs

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🌟 *Contacto - Colaboradores* 

⬡ *Azami*
@5214434703586

⬡ *Diego*
@573012482597`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
