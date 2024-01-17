import fetch from 'node-fetch'

var handler = async (m, { command, usedPrefix, conn, args }) => {

if (!args[0]) return conn.reply(m.chat, '🎌 *Ingrese el enlace a acortar*\n\nEjemplo, !short https://github.com/AzamiJs/CuriosityBot-MD 1pt', m, fake, )
if (!args[0].startsWith('https://')) return conn.reply(m.chat, '🚩 *El enlace debe ser https://*', m, fake, )

let urllist = [ 'tinyurl', 'linkpoi', 'bitly', 'ouo', '1pt', 'cleanuri', 'gotiny', 'isgd', 'vgd', 'tnyim', 'kutt', 'rebrandly', 'multishort', 'shrtco']

if (!urllist.includes(args[1])) return conn.reply(m.chat, '🚩 *Ejemplo*\n.short https://vortexuscloud.com 1pt\n\n*Seleccione un tipo existente*\n' + urllist.map((v, index) => '  ○ ' + v).join('\n'), m, fake, )
let reslink = '🚀 *Enlace:*\n'
let conver = '⏰ Espere un momento'
if (args[1] == 'tinyurl') {
try {
let tiny = await (await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)).json()
await conn.reply(m.chat, conver, m, fake, )
await conn.reply(m.chat, `${reslink}${tiny.result}`, m)
} catch (e) {
await conn.reply(m.chat, conver, m, fake, )
await conn.reply(m.chat, `${reslink}${await shortUrl(args[0])}`, m, fake, )
}
}

if (args[1] == '1pt') {
let pt = await (await fetch(`https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=${encodeURIComponent(args[0])}`)).json()
await conn.reply(m.chat, conver, m, fake, )
await conn.reply(m.chat, `${reslink}https://1pt.co/${pt.short}`, m, fake)
}

if (args[1] == 'cleanuri') {
let clu = await (await fetch(`https://cleanuri.com/api/v1/shorten`, {
method: 'POST',
body: new URLSearchParams({
'url': args[0]
})
})).json()
await conn.reply(m.chat, conver, m, fake, )
await conn.reply(m.chat, `${reslink}${clu.result_url}`, m, fake, )
}

if (args[1] == 'tnyim') {
let tny = await fetch(`https://tny.im/yourls-api.php?format=json&action=shorturl&url=` + args[0])
let tnyi = tny.json()
await conn.reply(m.chat, conver, m, fake, )
await conn.reply(m.chat, `${reslink}${tnyi.shorturl}`, m, fake, )
}

if (args[1] == 'kutt') {
let config = {
headers: {
'X-API-KEY': 'VcMiC4tZGdD1Lgu1KTiYfSNrs3Q_K3TMdVuSnStl',
'Content-Type': 'application/json',
},
}
let jsonBody = {
target: args[0]
}       
let body = JSON.stringify(jsonBody)

let ktt = await (await fetch('https://kutt.it/api/v2/links', {
method: 'POST',
headers: config.headers,
body: body,
})).json()
await conn.reply(m.chat, conver, m)
await conn.reply(m.chat, `${reslink}${ktt.link}`, m)
}

if (args[1] == 'rebrandly') {
let encoded = encodeURIComponent(args[0])
let reb = await (await fetch(`https://api.rebrandly.com/v1/links/new?destination=${encoded}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json; charset=utf-8',
'apikey': 'c95033066865402eb6d1dc40a4c4547f',
'Host': 'api.rebrandly.com'
}
})).json()
await conn.reply(m.chat, conver, m)
await conn.reply(m.chat, `${reslink}${reb.shortUrl}`, m)
}

if (args[1] == 'multishort') {
let sl = await (await fetch('https://short-link-api.vercel.app/?query=' + args[0])).json()
await conn.reply(m.chat, conver, m)
let linkList = Object.entries(sl).map(([name, link]) => ({
nama: name,
link
}))
let Liks = linkList.map((v, index) => '  ○ ' + v.link).join('\n')
await conn.reply(m.chat, `${reslink + '\n' + Liks}`, m)
}

if (args[1] == 'shrtco') {
let shr = await (await fetch('https://api.shrtco.de/v2/shorten?url=' + args[0])).json()
await conn.reply(m.chat, conver, m)
let linkArray = []
Object.values(shr.result).forEach(value => {
if (!value.startsWith('https')) {
linkArray.push(value)
}
})
let ShrArr = linkArray.map((v, index) => '  ○ ' + v).join('\n')
await conn.reply(m.chat, `${reslink + "\n" + ShrArr}`, m)
}

}
handler.help = ['acortar']
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i

handler.register = true
handler.limit = 1

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
