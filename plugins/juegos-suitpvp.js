const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `*[❗] @${room.p2.split`@`[0]} 𝚁𝙴𝙲𝙷𝙰𝚉𝙾 𝙴𝙻 𝙿𝚅𝙿, 𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝚂𝙴 𝙲𝙰𝙽𝙲𝙴𝙻𝙰*`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `*🧃 SUIT-CURIOSITY*\n\n⚠️ EL JUEGO COMIENZA, LAS OPCIONES SE ENVIARON AL PRIVADO DE @${room.p.split`@`[0]} Y @${room.p2.split`@`[0]}\n\n- SELECCIONE UNA RESPUESTA\n*• ELIJA SU OPCIÓN EN wa.me/${conn.user.jid.split`@`[0]}*`
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `*🍿 SELECCIONE UNA DE LAS SIGUIENTES OPCIONES*
piedra
papel
tijera\nGANADOR +${room.poin}XP\nPERDEDOR ${room.poin_lose}XP\n*responda al mensaje con la opción que desea*
*ejemplo: papel*`;
      const comienzop2 = `*🍿 SELECCIONE UNA DE LAS SIGUIENTES OPCIONES*
piedra
papel
tijera\nGANADOR +${room.poin}XP\nPERDEDOR ${room.poin_lose}XP\n*responda al mensaje con la opción que desea*
*ejemplo: papel*`;

      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `*⚠️ NINGUN USUARIO TOMO LA INICIATIVA DE EMPEZAR EL JUEGO*`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `*⚠️ @${(room.pilih ? room.p2 : room.p).split`@`[0]} NO ELEGISTE NADA*`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /tijera/i;
    const b = /piedra/i;
    const k = /papel/i;
    const reg = /^(tijera|piedra|papel)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`*✅ HAZ ELEGIDO  ${m.text}, REGRESE AL GRUPO Y ${room.pilih2 ? `REVISA LOS RESULTADOS*` : 'ESPERA LOS RESULTADOS*'}`);
      if (!room.pilih2) this.reply(room.p2, '*⚠️ ES TU TURNO DE ELEGIR!!*', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`*✅ HAZ ELEGIDO ${m.text}, REGRESA AL GRUPO Y ${room.pilih ? `REVISA LOS RESULTADOS*` : 'ESPERA LOS RESULTADOS*'}`);
      if (!room.pilih) this.reply(room.p, '*⚠️ ES TU TURNO DE ELEGIR!!*', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
*📁 RESULTADOS  📁*${tie ? '\n*EMPATE!!*' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *GANO 🥳 +${room.poin}XP*` : ` *PERDIO 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? `*GANO 🥳 +${room.poin}XP*` : ` *PERDIO 🤡 ${room.poin_lose}XP*`}
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
handler.exp = 0;
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
