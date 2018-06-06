import { injectGlobal } from 'emotion'

function injectGlobalStyles() {
  function fontFace(src, family, weight) {
    return `@font-face {
      font-family: "${family}";
      font-weight: ${weight};
      src: url(${src}) format('woff2');
    }`
  }

  injectGlobal`
    ${fontFace(
      require('./vendor/fonts/Metropolis-Light.woff2'),
      'Metropolis',
      300
    )}
    ${fontFace(
      require('./vendor/fonts/Metropolis-Regular.woff2'),
      'Metropolis',
      400
    )}
    ${fontFace(
      require('./vendor/fonts/Metropolis-Medium.woff2'),
      'Metropolis',
      500
    )}
    ${fontFace(
      require('./vendor/fonts/Metropolis-SemiBold.woff2'),
      'Metropolis',
      600
    )}
    ${fontFace(
      require('./vendor/fonts/Metropolis-Bold.woff2'),
      'Metropolis',
      700
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSans-Light-Latin.woff2'),
      'Noto Sans',
      300
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSans-Regular-Latin.woff2'),
      'Noto Sans',
      400
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSans-SemiBold-Latin.woff2'),
      'Noto Sans',
      600
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSansThaiUI-Light.woff2'),
      'Noto Sans Thai UI',
      300
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSansThaiUI-Regular.woff2'),
      'Noto Sans Thai UI',
      400
    )}
    ${fontFace(
      require('./vendor/fonts/NotoSansThaiUI-SemiBold.woff2'),
      'Noto Sans Thai UI',
      600
    )}
  `
}

injectGlobalStyles()
