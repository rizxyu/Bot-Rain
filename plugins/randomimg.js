//OOM MAU NGAPAIN OMMM
//BAGUS APA GK NYA YA HARGAI GW LAH
//By Rizxyu
//> w <
const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {

let apikey = 'HIRO'//apakah maksud cuy
let caption = `[ ❗ ] Sudah Jadi Nih we`
let wait = `await`

//APIKEY WEB
let res = `https://api.lolhuman.xyz/api/random/cecan?apikey=${apikey}`
let lov = `https://api.lolhuman.xyz/api/random/cogan?apikey=${apikey}`
let bt = `https://api.lolhuman.xyz/api/random/bts?apikey=${apikey}`

let wud = `https://api.lolhuman.xyz/api/random/estetic?apikey=${apikey}`
let cu = `https://api.lolhuman.xyz/api/random/elf?apikey=${apikey}`
let cu2 = `https://api.lolhuman.xyz/api/random/husbu?apikey=${apikey}`
let kopi = `https://api.lolhuman.xyz/api/random/kanna?apikey=${apikey}`
let nf = `https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${apikey}`
let hf = `https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${apikey}`
let bj = `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${apikey}`
let hp = `https://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${apikey}`
let ahe = `https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${apikey}`
let futa = `https://api.lolhuman.xyz/api/random/nsfw/futanari?apikey=${apikey}`

 //FUNCTION SEND FILENYA CUK
try {
conn.reply( m.chat, wait, m)
      if (/cecan/.test(command)) return conn.sendFile( m.chat, res, 'p.jpg', caption, m)
      if (/cogan/.test(command)) return conn.sendFile( m.chat, lov, 'p.jpg', caption, m)
      if (/bts/.test(command)) return conn.sendFile( m.chat, bt, 'p.jpg', caption, m)
     if (/aestetik/.test(command))  return conn.sendFile( m.chat, wud, 'p.jpg', caption, m)
     if (/elf/.test(command)) return  conn.sendFile( m.chat, cu, 'p.jpg', caption, m)
     if (/husbu/.test(command))  return conn.sendFile( m.chat, cu2, 'p.jpg', caption, m)
     if (/kanna/.test(command)) return conn.sendFile( m.chat, kopi, 'p.jpg', caption, m)
     if (/nsfww/.test(command)) return conn.sendFile( m.chat, nf, 'p.jpg', caption, m)
     if (/blowjob/.test(command)) return conn.sendFile( m.chat, bj, 'p.jpg', caption, m)
     if (/hfe/.test(command)) return conn.sendFile( m.chat, hf, 'p.jpg', caption, m)
     if (/hparadise/.test(command)) return conn.sendFile( m.chat, hp, 'p.jpg', caption, m)
    if (/ahegao/.test(command)) return conn.sendFile( m.chat, ahe, 'p.jpg', caption, m)
    if (/futanari/.test(command)) return conn.sendFile( m.chat, futa, 'p.jpg', caption, m)
} catch (e) {
   throw e
    }
}

handler.help = ['cogan','cecan','bts','aesthetic','elf','husbu','kanna','hentai','blowjob','NsfwW','hfe','Hparadise','ahegao','futanari']
handler.tags = ['randomimage']
handler.command = /^(cecan|cogan|bts|aestetik|elf|husbu|kanna|blowjob|nsfww|hfe|hparadise|ahegao|futanari)$/i

handler.limit = true //or false

module.exports = handler
