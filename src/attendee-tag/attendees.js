import { overrides, sponsoredTickets, SPEAKERS } from './overrides'

const data = require('../data/attendees.json')

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

for (const t of data) {
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
