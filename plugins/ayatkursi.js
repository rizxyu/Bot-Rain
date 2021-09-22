let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/muslim/ayatkursi?apikey=Alphabot`)
json = await res.json()
if (!json.result) throw 'eror'
conn.reply( m.chat, `*———[ AYAT KURSI ]———*\n\n${json.result.data.tafsir}`, m)

}

handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(ayatkursi)$/i

module.exports = handler

