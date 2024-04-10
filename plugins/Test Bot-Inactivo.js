/*var activeGroups = [];

var handler = async (m, { conn, isOwner }) => {
    if (!isOwner) return; // Solo el owner puede ejecutar esta acción

    try {
        const groupId = m.chat;
        if (activeGroups.includes(groupId)) {
            const index = activeGroups.indexOf(groupId);
            activeGroups.splice(index, 1); // Elimina el grupo de la lista de grupos activos
            await conn.reply(m.chat, '✅ *El grupo ha sido desbloqueado y el bot está activo de nuevo* 🚀', m);
        } else {
            activeGroups.push(groupId); // Agrega el grupo a la lista de grupos activos
            await conn.reply(m.chat, '🚧 *Este grupo ha sido bloqueado y el bot está inactivo* 🛑', m);
        }
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, '🪛 *Ocurrió un error al realizar la acción* ⚙️', m);
    }
}

handler.help = ['bloqueargrupo'];
handler.tags = ['owner'];
handler.command = /^bloqueargrupo$/i;

handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;*/

import fetch from 'fetch'

var handler = async (m, { conn, text } ) => {

if (!text) throw 'su número'
    
const url = `https://informacion-de-cualquier-numero-fijo-y-movil-de-mexico.p.rapidapi.com/api/v11/telefono/${text}`
const options = {
method: 'GET',
headers: {
Authorization: 'a950074d08eab7d5de00fc38e0eb15bd7ed8ca54',
'X-RapidAPI-Key': 'e0d3640cdemsh781a83286e8a7dbp1c32e9jsn6a1b74abd4f8',
'X-RapidAPI-Host': 'informacion-de-cualquier-numero-fijo-y-movil-de-mexico.p.rapidapi.com'
}
}

try {
const response = await fetch(url, options)
const result = await response.text()
m.reply(result)
} catch (error) {
m.reply('🚩')
}

}
handler.command = ['lada']

export default handler
