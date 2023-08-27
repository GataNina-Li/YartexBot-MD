import { tiktokIt } from '@bochilteam/scraper'

var handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `*⚠️ ESCRIBA LO QUE QUIERE BUSCAR*\n\n❕ EJEMPLO:\n*${usedPrefix + command} Miracle*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://tiktok.com/search?q=' + encodeURIComponent(text)
let search = await tiktokIt(text)
let msg = search.articles.map(({
title,
url,
description
}) => {
return `*🔰 ${title}*\n\n📎 ${url}\n\n📒 _${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['ttsearch', 'tks'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^tks|tiktoksearch?$/i
handler.register = true
export default handler
