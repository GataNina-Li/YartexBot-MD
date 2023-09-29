/*
import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile('./jadibts/stop.json');
const db = new Low(adapter);
await db.read();
db.data = db.data || { stop: {} };
await db.write();

let handler  = async (m, { conn }) => {

    if (global.conn.user.jid == conn.user.jid) {
    let resp = 'Por qué no vas directamente con el numero del Bot?'
    await conn.sendPresenceUpdate('composing' , m.chat);

    let int = '';
    let count = 0;
    for (const c of resp) {
        await new Promise(resolve => setTimeout(resolve, 50));
        int += c;
        count++;
    
        if (count % 10 === 0) {
            conn.sendPresenceUpdate('composing' , m.chat);
        }
    }
    await db.read();
    if (!db.data.stop) {
      db.data.stop = {};
    }
    db.data.stop[m.sender] = true;
    await db.write();
    await conn.sendMessage(m.chat, { text: resp.trim(), mentions: conn.parseMention(resp) }, {quoted: m}, { disappearingMessagesInChat: 1 * 1000} )
    } else {
      let resp = 'Me apagare :\')'
      let int = '';
    for (const c of resp) {
        await new Promise(resolve => setTimeout(resolve, 50));
        int += c;
    }
    await db.read();
    if (!db.data.stop) {
      db.data.stop = {};
    }
db.data.stop[conn.user.jid] = true;
await db.write();
await conn.sendMessage(m.chat, { text: resp.trim(), mentions: conn.parseMention(resp) }, {quoted: m}, { disappearingMessagesInChat: 1 * 1000} )
      conn.ws.close()
      db.set('used', true).write();
}
  }
  handler.help = ['berhenti','stop']
  handler.tags = ['General']
  handler.command = /^(berhenti|stop)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = true
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  export default handler
  */
  let handler  = async (m, { conn }) => {
    if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Por qué no vas directamente con el numero del Bot?', m)
    else {
      await conn.reply(m.chat, 'Me apagare :\')', m)
      conn.isInit = false
      conn.ws.close()
    }
  }
  handler.help = ['berhenti','stop']
  handler.tags = ['jadibot']
  handler.command = /^(berhenti|stop)$/i
  handler.owner = true
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  export default handler