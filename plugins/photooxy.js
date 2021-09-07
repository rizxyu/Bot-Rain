//OOM MAU NGAPAIN OMMM
//BAGUS APA GK NYA YA HARGAI GW LAH
//By Rizxyu
//> w <
const fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {


let apikey = 'HIRO'//apakah maksud cuy
let caption = `[ ❗ ] Sudah Jadi Nih we`
let wait = `await`
let { a1, a2 } = text.split`|`

if (!text) throw `Salah Seharusnya ${usedPrefix + command} tot`

//APIKEY WEB
let res = `https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=${apikey}&text=${text}`
let lov = `https://api.lolhuman.xyz/api/photooxy1/love?apikey=${apikey}&text=${text}`
let wud = `https://api.lolhuman.xyz/api/photooxy1/woodheart?apikey=${apikey}&text=${text}`
let cu = `https://api.lolhuman.xyz/api/photooxy1/cup?apikey=${apikey}&text=${text}`
let cu2 = `https://api.lolhuman.xyz/api/photooxy1/cup2?apikey=${apikey}&text=${text}`
let kopi = `https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=${apikey}&text=${text}`
let smk = `https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=${apikey}&text=${text}`
let ug = `https://api.lolhuman.xyz/api/photooxy1/undergrass?apikey=${apikey}&text=${text}`
let btlf = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${apikey}&text1=${a1}&text2=${a2}`
let tok = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${apikey}&text1=${a1}&text2=${a2}`
 //FUNCTION SEND FILENYA CUK
try {
conn.reply( m.chat, wait, m)
      if (/shadow/.test(command)) return conn.sendFile( m.chat, res, 'p.jpg', caption, m)
      if (/love/.test(command)) return conn.sendFile( m.chat, lov, 'p.jpg', caption, m)
     if (/woodheart/.test(command))  return conn.sendFile( m.chat, wud, 'p.jpg', caption, m)
     if (/cup/.test(command)) return  conn.sendFile( m.chat, cu, 'p.jpg', caption, m)
     if (/cup2/.test(command))  return conn.sendFile( m.chat, cu2, 'p.jpg', caption, m)
     if (/coffe/.test(command)) return conn.sendFile( m.chat, kopi, 'p.jpg', caption, m)
     if (/smoke/.test(command)) return conn.sendFile( m.chat, smk, 'p.jpg', caption, m)
     if (/undergrass/.test(command)) return conn.sendFile( m.chat, ug, 'p.jpg', caption, m)
     if (/battlefield/.test(command)) return conn.sendFile( m.chat, btlf, 'p.jpg', caption, m)
     if (/tiktok/.test(command)) return conn.sendFile( m.chat, kopi, 'p.jpg', caption, m)

} catch (e) {
   throw e
    }
}

handler.help = ['shadow','love','woodheart','cup','cup2','coffe','smoke','undergrass','battlefield','tiktok'].map(v => v + ' [teks]')
handler.tags = ['photooxy']
handler.command = /^(shadow|love|woodheart|cup|cup2|coffe|smoke|undergrass|battlefield|tiktok)$/i

handler.limit = true //or false

module.exports = handler
