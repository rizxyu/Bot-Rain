let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

if (!text) throw '*Contoh:* /kisahnabi muhammad'

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/kisahnabi?nabi=${text}&apikey=Alphabot`)
json = await res.json()
if (!json.result) throw 'eror'
conn.sendFile( m.chat, json.result.nabi.image, 'kisahnabi.jpg', `*KISAH NABI*\n*${json.result.nabi.nabi}*\n===============\n\n*lahir:* ${json.result.nabi.lahir} \n*Umur:* ${json.result.nabi.umur}\n*Tempat Kelahiran:* ${json.result.nabi.tempat}\n*📑Kisah:* ${json.result.nabi.kisah}\n`, m)

}

handler.help = ['kisahnabi <namanabi>']
handler.tags = ['quran']
handler.command = /^(kisahnabi)$/i

module.exports = handler

