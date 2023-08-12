/*import {googleIt} from '@bochilteam/scraper'
var handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
const text = args.join` `
if (!text) return conn.reply(m.chat, '*⚠️ ESCRIBA LO QUE QUIERE BUSCAR*\n\n❕ EJEMPLO:\n*${usedPrefix}google* Curiosity', m)
const url = 'https://google.com/search?q=' + encodeURIComponent(text)
google({'query': text}).then(res => {
let teks = `*RESULTADOS DE : _${text}_*\n\n${url}\n\n`
for (let g of res) {
teks += `_🔍 *${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
//m.reply(teks)
})
} 
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.register = true
export default handler*/

import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` ` 
if (!text) return conn.reply(m.chat, `*⚠️ ESCRIBA LO QUE QUIERE BUSCAR*\n\n❕ EJEMPLO:\n*${usedPrefix + command} Curiosity*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*🔍 ${title}*\n\n💻 ${url}\n\n📡 _${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')


try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.exp = 40
handler.exp = 3
handler.register = false
export default handler

