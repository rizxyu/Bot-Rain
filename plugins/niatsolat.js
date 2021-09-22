
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/muslim/niatshalat?apikey=Alphabot`)

let json = await res.json()

if (!json.result) throw 'eror keknya!'
m.reply(`*ID:* ${json.result.id}\n*Nama:* ${json.result.name}\n*Arab:* ${json.result.arabic}\n*Indonesia:* ${json.result.latin}`)
}

handler.help = ['niatsolat','niatsholat']
handler.tags = ['quran']
handler.command = /^(niatsolat|niatsholat)$/i

module.exports = handler