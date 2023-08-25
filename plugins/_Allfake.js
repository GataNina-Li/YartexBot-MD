import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {

	global.getBuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
	}
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
	
	//reply link wa
   global.n2 = { contextInfo: { externalAdReply: { mediaUrl: nn, mediaType: 'VIDEO', description: 'CuriosityBot-MD', title: packname, body: 'Grupos ofc', thumbnailUrl: pp, sourceUrl: nn }}} 
   
	//reply
    global.gitHub = { contextInfo: { externalAdReply: { mediaUrl: md, mediaType: 'VIDEO', description: 'GitHub', title: 'GitHub', body: 'ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ᵃᵖᵒʸᵃʳᵐᵉ ᶜᵒⁿ ᵘⁿᵃ 🌟', thumbnailUrl: pp, sourceUrl: md }}}
	
	//reply link yt
    global.youtube = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: 'ˢᵘˢᶜʳᶦᵇᵉᵗᵉ ᵃ ⁿᵘᵉˢᵗʳᵒ ᶜᵃⁿᵃˡ ᵈᵉˡ ʸᵒᵘᵀᵘᵇᵉ : ' + yt, title: 'YouTube', body: 'CuriosityBot-MD', thumbnailUrl: pp, sourceUrl: yt }}}

    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': wm,
                        'jpegThumbnail': fs.readFileSync('./storage/menus/Menu1.jpg')
                               }
                              }
                             }

	global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285736178354-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Curiosity", 
                   "caption": wm2, 
                   'jpegThumbnail': fs.readFileSync('./storage/menus/Menu1.jpg')
               }
           }
	}

	global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           "documentMessage": {
                           "title": wm, 
                           "jpegThumbnail": fs.readFileSync('./storage/menus/Menu1.jpg')
                                 }
                               }
	                     }

	global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./storage/menus/Menu1.jpg') 
                           },
                           "title": wm, 
                           "description": azami, 
                           "currencyCode": "USD",
                           "priceAmount1000": "99999999",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
	}

	global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: ig,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fs.readFileSync('./storage/menus/Menu1.jpg')
				}
			}
	}

	global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":wm,
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./storage/menus/Menu1.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"By: " + global.wm2 ,"h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./storage/menus/Menu1.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "Azami","h": wm, 'jpegThumbnail': fs.readFileSync('./storage/menus/Menu1.jpg')}}		
           }

global.fpoll = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "status@broadcast" }, "message": {"pollCreationMessage": {"name": wm, "selectableOptionsCount": 1}}}

global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${wm}\n   ${azami}`,jpegThumbnail: imagen1}}}

global.fkontak = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}	

global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": imagen1, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }

global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}	
	
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : +2022, status: 1, surface : 1, message: `${wm}\n${azami}`, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}
	
} 
export default handler

