const puppeteer = require('puppeteer')

// const takeSpeakerScreenshot = async (page, key) => {
//   const path = `screenshots/${key}.jpg`
//   await page.goto(`http://localhost:3000/#/${key}`)
//   await page.screenshot({ path })
//   console.log(`${path} created`)
// }
;(async () => {
  // const [, , key] = process.argv
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({
    width: 1181,
    height: 1771
  })
  for (let i = 0; i <= 292; i++) {
    await page.goto(`http://localhost:3000/#/a${i}`)
    const namecards = await page.$$('.namecard')
    for (const card of namecards) {
      const id = await page.evaluate(f => f.getAttribute('data-id'), card)
      console.log(`(${i + 1}) ${id}`)
      const path = `namecards/${id}.png`
      await card.screenshot({
        path
      })
    }
  }
  await browser.close()
})()
