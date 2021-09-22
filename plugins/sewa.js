
let handler = async (m, { conn, usedPrefix, DevMode }) => {
 let caption = `
🛒LIST HARGA SEWA BOT
5rb perMinggu
10rb PerBullan

💳Via:
• Ovo
• Dana
• Pulsa [ Telkomsel ]

Contact Owner Jika minat`
m.reply(caption)
}

handler.help = ['Sewa','SewaBot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i
handler.register = false
handler.fail = null

module.exports = handler
