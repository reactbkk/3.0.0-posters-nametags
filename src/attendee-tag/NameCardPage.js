import React, { Fragment } from 'react'
import { FIRST_BATCH_PRINTED } from './printed'
import { overrides } from './overrides'
import { attendees } from './attendees'

/** @type {React.SFC<any>} */
export function NameCardPage({ index }) {
  const c = index === undefined ? attendees : [attendees[index]].filter(x => x)
  return (
    <div>
      {c.map((t, i) => {
        return <NameCard entry={t} key={t['Ticket']} />
      })}
    </div>
  )
}

const backgrounds = {
  boothStaff: `url(${require('./backgrounds/booth-staff.png')})`,
  codeManiac: `url(${require('./backgrounds/code-maniac.png')})`,
  communityInfluencer: `url(${require('./backgrounds/community-influencer.png')})`,
  contributor: `url(${require('./backgrounds/contributor.png')})`,
  general: `url(${require('./backgrounds/general-ticket.png')})`,
  individualSponsor: `url(${require('./backgrounds/individual-sponsor.png')})`,
  media: `url(${require('./backgrounds/media.png')})`,
  speaker: `url(${require('./backgrounds/speaker.png')})`,
  goldSponsor: `url(${require('./backgrounds/sponsor-gold.png')})`,
  platinumSponsor: `url(${require('./backgrounds/sponsor-platinum.png')})`,
  silverSponsor: `url(${require('./backgrounds/sponsor-silver.png')})`,
  eventStaff: `url(${require('./backgrounds/staff.png')})`
}

/** @type {React.SFC<{ entry: import('./attendees').Attendee }>} */
function NameCard({ entry: t }) {
  const background = backgrounds[t.ticketType] || 'red'

  const override = overrides[t.ticket] || {}
  const speaker = t.ticketType === 'speaker'
  const staff = t.ticketType === 'eventStaff'
  const boxed = speaker || staff

  return (
    <div
      style={{
        display: 'inline-block',
        border: '0.1cm solid #ccc',
        margin: '0.5cm',
        opacity: FIRST_BATCH_PRINTED.has(t['Ticket']) ? 0.25 : 1
      }}
    >
      <div
        className="namecard"
        onClick={() => prompt(`${t.refCode}`, String(t.ticket))}
        data-id={t.ticket}
        style={{
          width: '1301px',
          height: '1891px',
          background: `${background} center no-repeat`,
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            fontFamily: 'Metropolis, Noto Sans Thai UI',
            padding: '64px',
            paddingTop: boxed ? '1047px' : '1121px', //'1050px',
            height: boxed ? '512px' : '480px', //'480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            wordWrap: 'break-word',
            color: staff ? '#343334' : '#fff'
          }}
        >
          <div>
            <div
              style={{
                fontSize: `${120 * 1.1 * (override.nameScale || 1)}px`,
                letterSpacing: `${(override.tight || 0) * -0.04}em`,
                lineHeight: '1.2em',
                fontWeight: 700
              }}
            >
              {t.name.split('\n').map((x, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {x}
                </Fragment>
              ))}
            </div>
            <div
              style={{
                fontSize: `${48 * 1.1}px`,
                lineHeight: '1.3em',
                fontWeight: 700
              }}
            >
              <div>{t.position}</div>
              <div
                style={{
                  color: speaker ? '#fff' : '#858585'
                }}
              >
                {t.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
