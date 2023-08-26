import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = 'Please enter a text to search for'
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	
	m.reply(wait)
        const url = "https://api.urbandictionary.com/v0/define?term=" + text
        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
             throw 'An error occured please try again!'
        }

        const [answer] = response.list
        if (!answer) throw "No results found for " + text
        const { list } = response
        const captiond = list.map((v, index) => { return `*${htki + " " + ++index + " " + htka}*\n*Word:* ${v.word}\n*Definition:* ${v.definition}\n*Permalink:* ${v.permalink}\n*Author:* ${v.author}\n*Example:* ${v.example}\n*Written on:* ${v.written_on}` }).join('\n\n\n')
        await conn.sendFile(m.chat, flaaa.getRandom() + "Urban", "result", captiond, m)
}
handler.help = ["urban"]
handler.tags = ["search"]
handler.command = /^(urban)$/i
export default handler
