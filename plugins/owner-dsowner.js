/*import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*⚠️ UTILIZA ESTE COMANDO DIRECTAMENTE EN EL NÚMERO PRINCIPAL DEL BOT.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*⚠️ INICIANDO PROCESO DE ELIMINACIÓN DE TODOS LOS ARCHIVOS DE SESIÓN, EXCEPTO EL ARCHIVO creds.json...*'}, {quoted: m});
  const sessionPath = './sessions/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*⚠️ LA CARPETA sessions NO EXISTE O ESTÁ VACÍA.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*⚠️ NO SE ENCONTRÓ NINGÚN ARCHIVO PARA ELIMINAR EN LA CARPETA sessions.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*⚠️ SE ELIMINARON ${filesDeleted} ARCHIVOS DE SESIÓN, EXCEPTO EL ARCHIVO creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('ERROR AL LEER LA CARPETA O LOS ARCHIVOS DE SESIÓN:', err);
    await conn.sendMessage(m.chat, {text: '*⚠️ OCURRIÓ UN ERROR AL ELIMINAR LOS ARCHIVOS DE SESIÓN.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 ¡Hola! Ahora me ves?*\n\n*⚠️ Si el Bot no le responde a sus comandos por favor haga un pequeño spam*\n\n*❕ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|delsity|clearallsession)$/i;
handler.rowner = true
export default handler;*/
    
