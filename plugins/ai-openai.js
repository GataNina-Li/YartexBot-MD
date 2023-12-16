import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration)

var handler = async (m, { conn, text, usedPrefix, command }) => {

if (usedPrefix == 'a' || usedPrefix == 'A') return  
if (!text) throw `*⚠️ INGRESE UN TEXTO*\n\n❕ EJEMPLO:\n${usedPrefix + command} Pasos para crear una página`

try {

conn.sendPresenceUpdate('composing', m.chat)  
let syms = `Eres un asistente y tu nombre es CuriosityBot-MD, el nombre de tu dueño es Azami`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)

} catch {
try {

let ia2 = await fetch(`https://aemt.me/openai?text=${text}`) //fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let resu2 = await ia2.json()
m.reply(resu2.result)

} catch {       
try {

let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())

} catch {    
}}}

}
handler.help = ['ia']
handler.tags = ['ai']
handler.command = ['openai', 'chatgpt', 'ia', 'robot']

export default handler
