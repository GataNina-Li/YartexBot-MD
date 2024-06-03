import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let handler = async (m, { usedPrefix, command }) => {
  try {
    let res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error('Error');
    
    let json = await res.json();
    if (json.setup && json.punchline) {
      let setup = await translate(json.setup, { to: 'es' });
      let random = await translate(json.punchline, { to: 'es' });
      
      m.reply(`${setup}\n` + `${random}`);
    } else {
      throw new Error('Invalid');
    }
  } catch (e) {
    console.error(e);
    m.reply('Ocurrió un error.');
  }
};

handler.help = ["chiste"];
handler.tags = ["fun"];
handler.command = ["chiste", "joke"];

export default handler;
