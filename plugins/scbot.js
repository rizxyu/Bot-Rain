let handler = async function (m, { text, conn}) {

let tks = `
_*>>[ 🇮🇩 SCRIPT BOT WHATSAPP 🇮🇩 ]<<*_
_🎋Sc Bot↓_
www.github.com/nurutomo/wabot-aq

🏮Follow me On Github:
github.com/Rizxyu

_🎃This SC is under development_
`
conn.sendButton( m.chat, tks, `🎏Script Bot`, 'Go back', '.menu')
}
handler.help = ['scbot']
handler.tags = ['main']

handler.command = /^scbot$/i

module.exports = handler