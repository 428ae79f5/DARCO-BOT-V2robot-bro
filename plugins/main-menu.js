let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = ('./src/img-menu.png')
  let { name } = global.db.data.users[who]
  
let str = `*┏☫─━━─━☾♦️☽━┈━━┈☫┓*

*⧉┆اهــلا  _" ${name} "_*
──── • ◈ • ────
*⧉┆أنـا اسـمـــي "${botname}"*
*⧉┆ قـبــل کــل امــر ضــع ( . )*
*⧉┆هــا لــك الـأوامـــر الـخــاص بــي ☟*

*━┅┄⊣☫﹝📜﹞☫⊢┄┅━*

*⌠☬↜╎.منشن⌡⁦*
*⌠☬↜╎.لمنشن⌡⁦*
*⌠☬↜╎.مخفي⌡⁦*
*⌠☬↜╎.انذار⌡⁦*
*⌠☬↜╎.رفع-انذار⌡⁦*
*⌠☬↜╎.الانذارات⌡⁦*
*⌠☬↜╎.الجروب⌡⁦*
*⌠☬↜╎أية-الكرسي⌡⁦*
*⌠☬↜╎.ايه⌡⁦*
*⌠☬↜╎.ملصق⌡⁦*
*⌠☬↜╎.حقوق⌡⁦*
*⌠☬↜╎.لصوره⌡⁦*
*⌠☬↜╎.لفيديو⌡⁦*
*⌠☬↜╎.لصوت⌡⁦*
*⌠☬↜╎.انطق⌡⁦*
*⌠☬↜╎.نسبه⌡⁦*
*⌠☬↜╎.خط⌡⁦*
*⌠☬↜╎.بوت/ɢᴘᴛ⌡⁦*
*⌠☬↜╎.بروفايل⌡⁦*
─ • ◈ • ─
*⌠☬↜╎.المطور⌡⁦*
*⌠☬↜╎.شرح⌡⁦*

*━┅┄⊣☫﹝📜﹞☫⊢┄┅━*

*⧉┆مـلاحــظــة :* 
*⓵يمنع منعا بتا سب البوت*
*⓶استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء*

*┗☫─━━─━☾♦️☽━┈━━┈☫┛*


*_'DARCO BOT-V2 | dark man'_*`
  conn.sendFile(m.chat, pp, 'darkman.png', str, m, false, { mentions: [who] })
  m.react(done)
}

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الأوامر','الاوامر','اوامر','أوامر','menu','help']

export default handler
