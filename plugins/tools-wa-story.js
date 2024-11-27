/*const handler = async (m, { conn }) => {
if ("status@broadcast" != m.quoted?.chat) return conn.reply(m.chat, "*Por favor, responde a un estado de WhatsApp para descargar su contenido*", m) 

try {
let buffer = await m.quoted?.download()
await conn.sendFile(m.chat, buffer, "", m.quoted?.text || "", null, false, { quoted: m })
} catch (e) {
console.log(e)
await conn.reply(m.chat, m.quoted?.text, m)
}}

handler.command = /^((sw|status|descargar|historia)(dl|download)|(dl|download)(sw|status|descargar|historia))$/i
export default handler*/

const handler = async (m, { conn, store }) => {
  
  if ("status@broadcast" != m.quoted?.chat) {
    return conn.reply(m.chat, "*Por favor, responde a un estado de WhatsApp para descargar su contenido*", m);
  }

  try {
    
    const stories = store.messages["status@broadcast"] || [];

   
    const userId = m.quoted?.sender || m.chat; // ID del usuario que respondió al estado
    const userStories = stories.filter((msg) => msg.key.participant === userId);

   
    if (userStories.length === 0) {
      return conn.reply(m.chat, "No se encontraron historias para este usuario.", m);
    }

   
    for (let story of userStories) {
      if (story.message.imageMessage || story.message.videoMessage) {
        const buffer = await story.download()

        
        await conn.sendFile(m.chat, buffer, "", "Historia descargada", null, false, {
          quoted: m,
        });
      }
    }

    
    await conn.reply(m.chat, `Se descargaron ${userStories.length} historias del usuario.`, m);
  } catch (e) {
    console.log(e)
    await conn.reply(m.chat, "Hubo un error al descargar las historias.", m);
  }
};


handler.command = /^(allhistorias)$/i;
export default handler;




