let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users[m.sender]

  let tiempoEspera = 10

  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nYa has iniciado una apuesta recientemente, espera *${tiempoRestante}* para apostar nuevamente`)
    return
  }

  cooldowns[m.sender] = Date.now()

  if (!text) {
    return m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nDebes ingresar una cantidad de *🪙 Coins* y apostar a un color, por ejemplo: *${usedPrefix + command} 20 black*`)
  }

  let args = text.trim().split(" ")
  if (args.length !== 2) {
    return m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nFormato incorrecto. Debes ingresar una cantidad de *🪙 Coins* y apostar a un color, por ejemplo: *${usedPrefix + command} 20 black*`)
  }

  let limit = parseInt(args[0])
  let color = args[1].toLowerCase()

  if (isNaN(limit) || limit <= 0) {
    return m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nPor favor, ingresa una cantidad válida para la apuesta.`)
  }

  if (limit > 10) {
    return m.reply("*Yartex Bot - MD* | 「 *RULETA* 」\n\nLa cantidad máxima de apuesta es de 10 *🪙 Coins*.");
  }

  if (!(color === 'black' || color === 'red')) {
    return m.reply("*Yartex Bot - MD* | 「 *RULETA* 」\n\nDebes apostar a un color válido: *black* o *red*.")
  }

  if (limit > users.limit) {
    return m.reply("*Yartex Bot - MD* | 「 *RULETA* 」\n\nNo tienes suficientes *🪙 Coins* para realizar esa apuesta.")
  }

  await m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nApostaste ${limit} *🪙 Coins* al color ${color}. Espera 10 segundos para conocer el resultado.`)

  setTimeout(() => {
    let result = Math.random();
    let win = false;

    if (result < 0.5) {
      win = color === 'black'
    } else {
      win = color === 'red'
    }

    if (win) {
      users.limit += limit
      m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\n¡Ganaste! Obtuviste ${limit} *🪙 Coins*. Total: ${users.limit} *🪙 Coins*.`)
    } else {
      users.limit -= limit
      m.reply(`*Yartex Bot - MD* | 「 *RULETA* 」\n\nPerdiste. Se restaron ${limit} *🪙 Coins*. Total: ${users.limit} *🪙 Coins*.`);
    }


  }, 10000)
}
handler.tags = ['game']
handler.help =['ruleta *<cantidad> <color>*']
handler.command = ['ruleta', 'roulette']
handler.register = true
handler.group = true 
export default handler

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}

//CÓDIGO CREADO POR elrebelde21 : /*https://github.com/elrebelde21
const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `𝙀𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤 𝙨𝙞 𝙩𝙪 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙮 𝙦𝙪𝙞𝙚𝙧𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤 𝙪𝙨𝙖𝙧: #on juegos` 
const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `『⏰』𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧 `
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(`[ ⚠️ ] 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 🐈`)
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000) 
const exp = Math.floor(Math.random() * 8500)
const diamond = Math.floor(Math.random() * 130)
const money = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`😺 𝙌𝙐𝙀 𝘽𝙐𝙀𝙉𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 🐞🍀\n*𝙊𝙗𝙩𝙞𝙚𝙣𝙚 :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`😿 𝙉𝙊𝙊 𝙀𝙎𝙏𝘼𝙎 𝘿𝙀 𝙈𝘼𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙋𝙀𝙍𝘿𝙀𝙍 : ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`😹 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀 𝙈𝘼𝙇𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙏𝙊 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘼𝙃𝙊𝙍𝘼 𝙔𝘼 𝙉𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙅𝙊𝘿𝙀𝙍𝙏𝙀 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`😼 𝙀𝙎𝙏𝘼 𝙍𝙀 𝘽𝙐𝙀𝙉𝘼 😉, 𝘼𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧, 𝙚𝙡 𝙦𝙪𝙚 𝙦𝙪𝙞𝙩𝙖𝙧 𝙖𝙙𝙢𝙞𝙣𝙨 𝙚𝙨 𝙛𝙖𝙣 𝙙𝙚 𝙠𝙪𝙣𝙤 😂`)) 
if (ruleta === 'text5') return m.reply(`𝙒𝙐𝙐𝙐 𝙎𝙀𝙉̃𝙊𝙍 𝙀𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝙀𝙍𝙏𝙀, 𝙑𝘼𝙔𝘼𝙍 𝘼 𝙅𝙐𝙂𝘼𝙍 𝘼𝙇 𝘾𝘼𝙎𝙄𝙉𝙊 🎰\n*𝙂𝘼𝙉𝘼𝙍𝙏𝙀 :* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`👑 𝙂𝙐𝘼𝘼 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀 𝘽𝙐𝙀𝙉𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝙂𝘼𝙉𝘼𝙍𝙏𝙀 𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙋𝙊𝙍 : 1 𝙃𝙤𝙧𝙖 ⏰`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['suerte', 'ruleta', 'ruletas']
handler.tags = ['juegos']
handler.command = /^(ruletas|ruleta|suerte)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}*/