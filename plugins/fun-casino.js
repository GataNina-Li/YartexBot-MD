import db from '../lib/database.js'

let buatall = 1
let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
        let user = global.db.data.users[m.sender]
        let randoyartex = `${Math.floor(Math.random() * 101)}`.trim()
        let randomgata = `${Math.floor(Math.random() * 55)}`.trim()
        let yartex = (randomyartex * 1)
        let gata = (randomgata * 1)
        let count = args[0]
                let who = m.fromMe ? conn.user.jid : m.sender
            let username = conn.getName(who)

            let tiempoEspera = 5

            if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`𝙔𝙖𝙧𝙩𝙚𝙭 𝘽𝙤𝙩 - 𝙈𝘿 🌟\n\n𝚈𝙰 𝙷𝙰𝚂 𝙸𝙽𝙸𝙲𝙸𝙰𝙳𝙾 𝚄𝙽𝙰 𝙰𝙿𝚄𝙴𝚂𝚃𝙰 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴𝙼𝙴𝙽𝚃𝙴, 𝚃𝙸𝙽𝙴𝙽𝚂 𝚀𝚄𝙴 𝙴𝚂𝙿𝙴𝚁𝙰𝚁 *${tiempoRestante}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁!`)
    return
  }

  cooldowns[m.sender] = Date.now()

        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, `💫 𝙲𝚄𝙰𝙽𝙳𝙾 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙰𝙿𝙾𝚂𝚃𝙰𝚁?\n\n👑 𝙴𝚓𝚎𝚖𝚙𝚕𝚘: !apostar 1000`, m)
        if (count > 1000) return conn.reply(m.chat, 'Maximo *1000 𝚇𝙿*', m)

        if (user.exp >= count * 1) {
            user.exp -= count * 1
            if (yartex > gata) {
                conn.reply(m.chat, `𝙔𝙖𝙧𝙩𝙚𝙭 𝘽𝙤𝙩 - 𝙈𝘿 🌟\n\n𝚅𝙴𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚃𝙸𝙴𝙽𝙴𝙽!\n*𝙴𝙻 𝙱𝙾𝚃* : ${yartex}\n*${username}* : ${gata}\n\n ${username}, *¡𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄𝐒!* ${count} 𝚇𝙿`.trim(), m)
            } else if (yartex < gata) {
                user.exp += count * 2
                conn.reply(m.chat, `𝙔𝙖𝙧𝙩𝙚𝙭 𝘽𝙤𝙩 - 𝙈𝘿 🌟\n\n𝚅𝙴𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚃𝙸𝙴𝙽𝙴𝙽!\n*𝙴𝙻 𝙱𝙾𝚃* : ${yartex}\n*${username}* : ${gata}\n\n𝙱𝙸𝙴𝙽! ${username}, *¡𝐆𝐀𝐍𝐀𝐒𝐓𝐄𝐒!* ${count * 2} 𝚇𝙿`.trim(), m)
            } else {
                user.exp += count * 1
                conn.reply(m.chat, `𝙔𝙖𝙧𝙩𝙚𝙭 𝘽𝙤𝙩 - 𝙈𝘿 🌟\n\n𝚅𝙴𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚃𝙸𝙴𝙽𝙴𝙽!\n*𝙴𝙻 𝙱𝙾𝚃* : ${yartex}\n*${username}* : ${gata}\n\n *¡𝐄𝐌𝐏𝐀𝐓𝐄!*, ${username} 𝙾𝚋𝚝𝚒𝚎𝚗𝚎𝚜 ${count * 1} 𝚇𝙿`.trim(), m)
            }
        } else conn.reply(m.chat, `𝙔𝙖𝙧𝙩𝙚𝙭 𝘽𝙤𝙩 - 𝙈𝘿 🌟\n\n${username}, 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 ${count} 𝚇𝙿 𝙿𝙰𝚁𝙰 𝙹𝚄𝙶𝙰𝚁!`.trim(), m)

}

handler.help = ['apostar *<cantidad>*']
handler.tags = ['game']
handler.command = /^(apostar|casino)$/i
//handler.register = true

//handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}