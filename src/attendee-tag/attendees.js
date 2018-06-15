import { overrides, sponsoredTickets, SPEAKERS } from './overrides'

// @ts-ignore
const dataContext = require.context('../data/', false, /\.json$/)
const data = (() => {
  if (dataContext.keys().includes('./attendees.json')) {
    return dataContext('./attendees.json')
  }
})()

/**
 * @typedef {Object} Attendee
 * @prop {string} name
 * @prop {string} ticketType
 * @prop {string} position
 * @prop {string} company
 * @prop {number} ticket
 * @prop {string} refCode
 */

/** @type {Attendee[]} */
export const attendees = []

const sth = s =>
  String(s || '')
    .replace(/^[ืิ]*/, '')
    .replace(/^\s*-\s*$/, '')

for (const t of data || []) {
  const override = overrides[t['Ticket']] || {}

  let position = t['ตำแหน่ง / ชั้นปี']
  if (override.year) {
    position = `นักศึกษาปี ${position}`
  }

  attendees.push({
    name:
      sth(override.name || t['ชื่อที่แสดงบนป้ายชื่อ']) ||
      `${t['Firstname']} ${t['Lastname']}`,
    position: sth(override.position || position),
    company: sth(
      override.company ||
        t['บริษัท / สถาบันการศึกษา'] ||
        t['ชื่อของสื่อ/สำนักข่าว'] ||
        t['บริษัท']
    ),
    ticket: t['Ticket'],
    refCode: t['Reference code'],
    ticketType: SPEAKERS.has(t['Ticket'])
      ? 'speaker'
      : /General/.test(t['Ticket type'])
        ? 'general'
        : /Exclusive - Call for Speakers/.test(t['Ticket type'])
          ? 'general'
          : /Complimentary - Code Mania/.test(t['Ticket type'])
            ? 'codeManiac'
            : /Complimentary - Diversity Support/.test(t['Ticket type'])
              ? 'general'
              : /Complimentary - Community Influencer/.test(t['Ticket type'])
                ? 'communityInfluencer'
                : /Complimentary - Media/.test(t['Ticket type'])
                  ? 'media'
                  : /Complimentary - Pull/.test(t['Ticket type'])
                    ? 'contributor'
                    : /Booth Staff/.test(t['Ticket type'])
                      ? 'boothStaff'
                      : /^Staff$/.test(t['Ticket type'])
                        ? 'eventStaff'
                        : /Individual Sponsor/.test(t['Ticket type'])
                          ? 'individualSponsor'
                          : sponsoredTickets.PLATINUM.has(t['Ticket'])
                            ? 'platinumSponsor'
                            : sponsoredTickets.GOLD.has(t['Ticket'])
                              ? 'goldSponsor'
                              : sponsoredTickets.SILVER.has(t['Ticket'])
                                ? 'silverSponsor'
                                : /Sponsors/.test(t['Ticket type'])
                                  ? 'general'
                                  : 'unknown'
  })
}

if (!attendees.length) {
  let x = 0
  const example = type => ({
    name: 'Test data',
    position: `${type.substr(0, 1).toUpperCase() + type.substr(1)}`,
    company: 'React Bangkok',
    ticket: ++x,
    refCode: '000000',
    ticketType: type
  })
  attendees.push(
    example('speaker'),
    example('general'),
    example('codeManiac'),
    example('communityInfluencer'),
    example('media'),
    example('contributor'),
    example('boothStaff'),
    example('eventStaff'),
    example('individualSponsor'),
    example('platinumSponsor'),
    example('goldSponsor'),
    example('silverSponsor')
  )
}

Object.assign(window, { attendees })
