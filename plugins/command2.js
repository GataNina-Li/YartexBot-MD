let handler = async(m, { conn, text, usedPrefix, command }) => {

const messageWithButtons = {
    content: `
      <div class="baileys-buttons-container">
        <button class="baileys-button" data-id="1">Botón 1</button>
        <button class="baileys-button" data-id="2">Botón 2</button>
      </div>
    `
  };

    conn.sendMessage(m.chat, messageWithButtons)
    
let str = '*🍧 CuriosityBot-MD*'
// await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }}})
}
handler.command = /^((a|a)a)$/i
handler.owner = true


export default handler
