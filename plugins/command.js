 import axios from "axios"
import { search } from "aptoide-scraper"
import { sizeFormatter } from "human-readable"
let format = sizeFormatter({
  std: "JEDEC", // "SI" (default) | "IEC" | "JEDEC"
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, text, command, usedPrefix }) => {
	if (!text) throw "Input Query"
	try {
	await m.reply(wait)
	let aptoide = await axios.get("http://ws75.aptoide.com/api/7/apps/search?query=" + encodeURIComponent(text) + "&trusted=true")
    if (aptoide.data.datalist.total == 0) throw `Query "${text}" not found :/`
    let data = aptoide.data.datalist.list
    let list = data.map((item, index) => `*Aptoide Search*
*ID:* ${item.id}
*Package:* ${item.package}
*Version:* ${item.file.vername}
*Link:* ${item.file.path}
*Size:* ${format(item.file.filesize)}
*Downloads:* ${item.stats.downloads}
`).join("\n")
    await m.reply(list)
    } catch (e) {
    try {
    await m.reply(wait)
    let data = await search(text)
    let list = data.map((item, index) => `*Aptoide Search*
*Name:* ${item.name}
*ID:* ${item.id}
`).join("\n")
    await m.reply(list)
    } catch (e) {
    await m.reply(eror)
    }
    }
}
handler.help = ["aptoide"]
handler.tags = ["tools"]
handler.command = /^ap(ptoide(search)?|toide(search)?)$/i

export default handler
