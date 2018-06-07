const puppeteer = require('puppeteer')
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

const takeSpeakerScreenshot = async (page, key) => {
  const path = `screenshots/${key}.jpg`
  await page.goto(`http://localhost:3000/#/${key}`)
  await page.screenshot({ path })
  console.log(`${path} created`)
}
;(async () => {
  const [, , key] = process.argv
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({
    width: 1272,
    height: 1800
  })
  if (key && speakerKeys.includes(key)) {
    await takeSpeakerScreenshot(page, key)
  } else {
    for (let i = 0; i < speakerKeys.length; i++) {
      await takeSpeakerScreenshot(page, speakerKeys[i])
    }
  }

  await browser.close()
})()
