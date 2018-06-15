export const sponsors = {
  TELENOR: [
    1823554,
    1823588,
    1823590,
    1823591,
    1823600,
    1823601,
    1823607,
    1823623,
    1824509,
    1824586,
    1824711,
    1827124,
    1840434,
    1841110,
    1841188
  ],
  EVENT_POP: [1823704, 1828094, 1828101, 1841112],
  TENCENT: [1826689, 1828091, 1841550],
  PRONTO_TOOLS: [1827162, 1827163, 1827201],
  TASKWORLD: [1827505, 1841165],
  THOUGHTWORKS: [1828167, 1828220, 1828244, 1832149, 1841253, 1841184],
  METROMERCE: [1836647, 1836649, 1841193, 1840491],
  RIVERPARK: [1841111],
  PTT_DIGIRAL: [1840454],
  IBM: [1841128],
  PANTIP: [1841310],
  TDA: [1841384],
  NEXTZY: [1841455, 1841462, 1841464],
  SIX: [1841536, 1841537, 1841540, 1841195]
}

export const SPEAKERS = new Set([
  // P’ Net
  1841073,
  // TODO P’ Pond
  // Keya
  1836833,
  // Manatsawin
  1812594,
  // Phoom
  1817193,
  // TODO AunAun
  // Veha
  1830724,
  // Babedev
  1812840,
  // Cal
  1822013,
  // Holly
  1820488,
  // TODO Chris
  // Ham
  1830722,
  // Benz
  1841157
])

export const sponsoredTickets = {
  PLATINUM: new Set([...sponsors.TELENOR]),
  GOLD: new Set([
    ...sponsors.TASKWORLD,
    ...sponsors.THOUGHTWORKS,
    ...sponsors.PTT_DIGIRAL
  ]),
  SILVER: new Set([
    ...sponsors.EVENT_POP,
    ...sponsors.SIX,
    ...sponsors.TENCENT,
    ...sponsors.NEXTZY,
    ...sponsors.PRONTO_TOOLS,
    ...sponsors.METROMERCE
  ])
}

export const overrides = {
  '1816859': {
    year: true
  },
  '1816864': {
    tight: true
  },
  '1816875': {
    nameScale: 0.8,
    company: 'บริษัท เซ็นด์อิท (ประเทศไทย) จำกัด'
  },
  '1816891': {
    year: true
  },
  '1816902': {
    year: true
  },
  '1816917': {
    year: true
  },
  '1816927': {
    position: 'Frontend developer'
  },
  '1816930': {
    company: 'บริษัท เซ็นด์อิท (ประเทศไทย) จำกัด'
  },
  '1816938': { year: true },
  '1816942': { year: true },
  '1816952': { year: true },
  '1816954': { year: true },
  '1816974': { year: true },
  '1817336': {
    position: 'Developer',
    nameScale: 0.8
  },
  '1822013': { year: true },
  '1829980': { year: true },
  '1829995': { year: true },
  '1830011': { year: true },
  '1830012': { year: true },
  '1830040': { year: true },
  '1830044': { year: true },
  '1830046': { year: true },
  '1830048': { year: true },
  '1830085': { year: true },
  '1830091': { year: true },
  '1830094': { year: true },
  '1830104': { year: true },
  '1830106': { year: true },
  '1830109': { year: true },
  '1830124': { year: true },
  '1830127': { year: true },
  '1830146': { year: true },
  '1830452': { nameScale: 0.8 },
  '1830462': { nameScale: 0.8 },
  '1837976': { nameScale: 0.8 },
  '1839126': { company: 'Pronto Tools' },
  '1839127': { year: true },
  '1839192': { name: 'Shane\n@ Gummy Bear' },
  '1839202': { name: 'Kevin\n@ Gummy Bear' },
  '1840728': { year: true },
  '1841426': { year: true },
  '1841501': { position: 'frontend' },
  '1841502': { position: 'frontend' },
  '1841503': { position: 'frontend' },
  '1841536': { name: 'MAN\nChanamueng' }
}
