import fetch from 'node-fetch'

var handler = (m) => m
handler.before = async (m) => {

let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
let textodem = m.text

try {

await conn.sendPresenceUpdate('composing', m.chat)
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=es`)
let data = await ressimi.json();
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return conn.reply(m.chat, `${lol}`, m, fake, ) /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
await m.reply(data.success)
} catch {
      /* SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA */
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello');
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello');
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO');
let reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem)
let resu = await reis.json()
let nama = m.pushName || '1'
let api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt)
let resu2 = await reis2.json()
await conn.reply(m.chat, resu2[0][0][0], m, fake, )

}
return !0
}
return true

}
export default handler
