/*const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
import qrcode from 'qrcode'
import fs from 'fs'
import path from 'path'

if (global.conns instanceof Array) console.log()
else global.conns = []

var handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {

let parentw = conn
let parent = args[0] && args[0] == 'plz' ? conn : global.conn

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = true
if (qr) parentw.sendMessage(m.chat, {image: await qrcode.toBuffer(qr, { scale: 8 }) , caption : wm}, { quoted: m })
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
let i = global.conns.indexOf(conn)
if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed){ parentw.sendMessage(m.chat, {text : "La conexión se cerró"}, { quoted: m })}}}
 
conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''
conn.handler = global.conn.handler.bind(conn)
conn.onDelete = global.conn.onDelete.bind(conn)
conn.onParticipantsUpdate = global.conn.onParticipantsUpdate.bind(conn)
conn.onGroupUpdate = global.conn.onGroupUpdate.bind(conn)
conn.onCall = global.conn.onCall.bind(conn)
conn.on('chat-update', conn.handler)
conn.on('message-delete', conn.onDelete)
conn.on('group-participants-update', conn.onParticipantsUpdate)
conn.on('group-update', conn.onGroupUpdate)
conn.on('CB:action,,call', conn.onCall)
conn.regenerateQRIntervalMs = null
 
m.reply(wm)

}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadi$/i

handler.premium = true

export default handler*/

const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
import {makeWASocket, protoType, serialize} from './lib/simple.js'
import qrcode from "qrcode"
import fs from "fs"
import P from 'pino';
import * as ws from 'ws';
const {child , spawn, exec} = await import('child_process');
const { CONNECTING } = ws
let check1 = "NjBhZGVmZWI4N2M2"
let check2 = "ZThkMmNkOGVlMDFmZD"
let check3 = "UzYTI1MTQgIGluZ"
let check4 = "m8tZG9uYXIuanMK"
let check5 = "NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO"
let check6 = "DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz"
let check8 = "NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo"
//
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx= `*Ser sub bot*\n\n*Con otro telefono que tengas o en la PC escanea este QR para convertirte en un sub bot*`
if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  let parentw = conn
  if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, 'Este comando solo puede ser usado en el bot principal! wa.me/' + global.conn.user.jid.split`@`[0], m)
  const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
 // exec(comb.toString("utf-8"), async (err, stdout, stderr) =
    const buffdr = Buffer.from(check1 + check2 + check3 + check4 + check5 + check6 + check8 + "=", 'base64')
    const drmer = Buffer.from(drm1 + drm2, 'base64')


  async function jddt() {
  function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
    let uniqid = randomString(10)
    if (!fs.existsSync("./jadibts/"+ uniqid)){
        fs.mkdirSync("./jadibts/"+ uniqid, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./jadibts/" + uniqid + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
  const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + uniqid)


const connectionOptions = {
printQRInTerminal: true,
auth: state,
logger: P({ level: 'silent'}),
browser: ["Test", "Edge", "2.0.0"],
}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    if (qr) parentw.sendMessage(m.chat, {image: await qrcode.toBuffer(qr, { scale: 8 }) , caption : rtx}, { quoted: m })
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    console.log(code)
    if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)
      if (code !== DisconnectReason.connectionClosed){ parentw.sendMessage(m.chat, {text : "⚠️ La conexión se cerró, se intentara reconectar automáticamente..."}, { quoted: m })
    console.log(await creloadHandler(true).catch(console.error))}
    else {
        parentw.sendMessage(m.chat, {text : "⚠️ Conexión perdida.. envie el mensaje que se envio al numero donde escaneo el codigo qr..."}, { quoted: m })
    }

    }
    if (global.db.data == null) loadDatabase()
    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parentw.sendMessage(m.chat, {text : args[0] ? "Conectado  con  éxito!" : "Conectado exitosamente con WhatsApp\n\n*Nota:* Esto es temporal\nSi el Bot principal se reinicia o se desactiva, todos los sub bots tambien lo haran\n\nPuede iniciar sesión sin el codigo qr con el siguiente mensaje, envialo cuando no funcione el bot..."}, { quoted: m })
    await sleep(5000)
    if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })

    }
  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
      conn.ev.removeAllListeners()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }}, 60000)
    

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
}

}
handler.command = /^(jadi|bo|getcode)/i

handler.limit = false

export default handler

function sleep(ms) {

return new Promise(resolve => setTimeout(resolve, ms));
   }
                                       
