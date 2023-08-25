import MessageType from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `⚠️ *INGRESE EL NOMBRE DE UN REPOSITORIO DE GITHUB*\n\n❕ EJEMPLO: ${usedPrefix + command} CuriosityBot-MD`
try {
//if (!text) throw `⚠️ *INGRESE EL NOMBRE DE UN REPOSITORIO DE GITHUB*\n\n❕ EJEMPLO: ${usedPrefix + command} CuriosityBot-MD`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
• 🍟 Resultado: ${1 + index}
• 📦 Link: ${repo.html_url}
• 🏵️ Creador: ${repo.owner.login}
• 🐣 Nombre: ${repo.name}
• 📅 Creado: ${formatDate(repo.created_at)}
• ⏰ Actualizado: ${formatDate(repo.updated_at)}
• 👁 Visitas: ${repo.watchers}
• 🍴 Bifurcado: ${repo.forks}
• ⭐ Estrellas: ${repo.stargazers_count}
• 🧩 Issues: ${repo.open_issues}
• 🎐 Descripción: ${repo.description ? `${repo.description}` : 'Sin Descripción'}
• ♻️ Clone: ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n')

let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
await conn.sendUrl(m.chat, str, m, {
  externalAdReply: {
     mediaType: 1,
     renderLargerThumbnail: true,
     thumbnail: img,
     thumbnailUrl: img,
     title: '• Resultados Encontrados🔎',
  }
})
} catch {
    m.reply('⚠️ *RESULTADOS NO ENCONTRADOS.*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['search']

handler.command = /^(githubsearch)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
