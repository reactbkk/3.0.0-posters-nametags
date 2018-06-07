const speakerKeys = [
  'gucode',
  'keya_desai',
  'manatsawin_hanmongkolchai',
  'phoomparin_mano',
  'jessada_trirongkit',
  'veha_suwatphisankij',
  'christopher_ng',
  'cal_komkanit',
  'rujira_aksornsin',
  'chakrit_likitkhajorn',
  'pallop_chaoputhipuchong',
  'tananan_tangthanachaikul'
]
const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({
    width: 1272,
    height: 1800
  })
  for (let i = 0; i < speakerKeys.length; i++) {
    const path = `screenshots/${speakerKeys[i]}.jpg`
    await page.goto(`http://localhost:3000/#/${speakerKeys[i]}`)
    await page.screenshot({ path })
    console.log(`${path} created`)
  }

  await browser.close()
})()
