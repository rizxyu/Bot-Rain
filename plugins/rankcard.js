
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {

    let pp = await conn.getProfilePicture(m.sender)

    let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
 
    let res = `http://hardianto-chan.herokuapp.com/api/rankcard?profile=https://i.ibb.co/y4S494f/wallpaper.jpg&name=${name}&bg=https://i.ibb.co/y4S494f/wallpaper.jpg&needxp=${max}&curxp=${exp}&level=${level}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
    let caption = `*👾Your Profile!:*
*👤Name:* ${name}
*🎏Role :* ${role}
*🏮Level:* ${level}
*🎋Exp :* ${exp} --> ${max}


`
conn.sendButtonImg(m.chat, caption, res, `yntkts`, `Menu`, `.menu`, m, false)

 }

handler.help = ['rank']
handler.tags = ['info']
handler.command = /^(rank|profile)$/i

handler.fail = null

module.exports = handler
