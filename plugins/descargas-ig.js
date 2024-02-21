import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram, instagramdl } from '@xct007/frieren-scraper'; // Ajusté la importación de instagramdl
const lolkeysapi = 'tu_api_key_aqui'; // Asegúrate de reemplazar 'tu_api_key_aqui' con tu API key

var handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) return conn.reply(m.chat, `🎌 *Ingrese un enlace de Instagram*\n\nEjemplo: ${usedPrefix + command} https://www.instagram.com/reel/CuqAzGRAbZa/?igshid=MzRlODBiNWFlZA==`, m);

    conn.reply(m.chat, `⏰ Espere un momento...`, m);

    try {
        let apiUrl = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
        let response = await axios.get(apiUrl);
        let result = response.data;

        for (const item of result.message) {
            let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
            let text = `🍧 *Url:* ${shortUrl}`.trim();
            conn.sendFile(m.chat, item._url, null, text, null, m);
            await new Promise((resolve) => setTimeout(resolve, 10000));
        }
    } catch {
        try {
            let data = await instagram.v1(args[0]);
            for (const url of data) {
                let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
                let text = `🍧 *Url:* ${shortUrl}`.trim();
                conn.sendFile(m.chat, url.url, 'error.mp4', text, null, m);
                await new Promise((resolve) => setTimeout(resolve, 10000));
            }
        } catch {
            try {
                let result = await instagramGetUrl(args[0]);
                let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
                let text = `🍧 *Url:* ${shortUrl}`.trim();
                await conn.sendFile(m.chat, result.url_list[0], 'error.mp4', text, null, m);
            } catch {
                try {
                    let results = await instagramdl(args[0]);
                    let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
                    let text = `🍧 *Url:* ${shortUrl}`.trim();
                    for (const { url } of results) {
                        await conn.sendFile(m.chat, url, 'error.mp4', text, null, m);
                        await new Promise((resolve) => setTimeout(resolve, 10000));
                    }
                } catch {
                    try {
                        let response = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
                        let json = await response.json();
                        let videoUrl = json.result;
                        let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
                        let text = `🍧 *Url:* ${shortUrl}`.trim();
                        await conn.sendFile(m.chat, videoUrl, 'error.mp4', text, null, m);
                    } catch {
                        return conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m);
                    }
                }
            }
        }
    }
};

handler.help = ['ig'];
handler.tags = ['descargas'];
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;

handler.register = true;
handler.limit = true;

export default handler;
