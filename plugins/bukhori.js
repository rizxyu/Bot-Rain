let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

if (!text) throw '*Contoh:* /bukhari 10'

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/hadits?kitab=bukhari&nomor=${text}&apikey=Alphabot`)
json = await res.json()
if (!json.result) throw 'eror'
conn.reply( m.chat, `
*📛Nama:* ${json.result.data.name}
*#️⃣Nomor:* ${json.result.data.contents.number}
*🇸🇦Arab:* ${json.result.data.contents.arab}
*🇮🇩Indo:* ${json.result.data.contents.id}`,
m)

}

handler.help = ['bukhori <nomor>']
handler.tags = ['quran']
handler.command = /^(bukhori)$/i

module.exports = handler

