let handler = m => m
let levelling = require('../lib/levelling')
let fs = require('fs')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    let img = fs.readFileSync('./lib/puplevel.jpg')
    if (before !== user.level) {
        let str = `*EN:* congrats @${m.sender.split`@`[0]}, you have 🧬leveled up
*${before}* --> *${user.level}
*ID:* Selamat @${m.sender.split`@`[0]} Anda Naik 🧬level 
*${before}* --> *${user.level}*
`.trim()
        conn.sendFile(m.chat, img, 'img.jpg', str, false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler
