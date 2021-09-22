let ft = require('node-fetch')

let handler = async ( m, { conn }) => {
let dan = 'Donasi'
let caption = `
╭─「 Donasi • Pulsa 」
│ • Telkomsel [ 082328303332 ]
│ • OVO [ 082328303332 ]
│   • Dana [ 082328303332 ]
│   • Paypal [ 6282328303332 ]
╰────

DONASI SEIKLASNYA SAJA YA!
`.trim()
conn.sendButtonLoc( m.chat, await ( await ft(fla + dan)).buffer(), caption,
`© Rizyu`, `Pemilik bot`, `.creator`, m) 
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
