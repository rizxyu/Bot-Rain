let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    let user = global.DATABASE._data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.send2Button(m.chat, `
Hai  ${ucapan()}

ada yg bisa Saya Bantu?
`.trim(), 'Rain Bot', 'Menu', '#menu', 'Pemilik Bot', '#creator', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat Dinihari🌄"
    if (time >= 4) {
        res = "Selamat Pagi🌄"
    }
    if (time >= 10) {
        res = "Selamat Siang☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore🌅"
    }
    if (time >= 18) {
        res = "Selamat Malam🌙"
    }
    return res
}
