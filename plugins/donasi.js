let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [ 082328303332 ]
│ • OVO [ 082328303332 ]
    • Dana [ 082328303332 ]
    • Paypal [ 6282328303332 ]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282328303332
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
