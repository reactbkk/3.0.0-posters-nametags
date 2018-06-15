import React, { Fragment } from 'react'
import { FIRST_BATCH_PRINTED } from './printed'
import { overrides } from './overrides'

const data = require('../data/attendees.json')

console.log(data)

/** @type {React.SFC<any>} */
export function NameCardPage({ index }) {
  const c = index === undefined ? data : [data[index]].filter(x => x)
  return (
    <div>
      {c.map((t, i) => {
        return <NameCard entry={t} key={t['Ticket']} />
      })}
    </div>
  )
}

/** @type {React.SFC<any>} */
function NameCard({ entry: t }) {
  const background = /General/.test(t['Ticket type'])
    ? `url(${require('./namecard-general.png')})`
    : '#000'

  const override = overrides[t['Ticket']] || {}

  let position = t['ตำแหน่ง / ชั้นปี']
  if (override.year) {
    position = `นักศึกษาปี ${position}`
  }

  const sth = s =>
    String(s || '')
      .replace(/^[ืิ]*/, '')
      .replace(/^\s*-\s*$/, '')

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
        onClick={() => prompt(`${t['Reference code']}`, t['Ticket'])}
        data-id={t['Order number'].replace(/[#\s]/g, '')}
        style={{
          width: '1181px',
          height: '1771px',
          background: `${background} center no-repeat`,
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            fontFamily: 'Metropolis, Noto Sans Thai UI',
            padding: '64px',
            paddingTop: '1050px',
            height: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            wordWrap: 'break-word',
            color: '#fff'
          }}
        >
          <div>
            <div
              style={{
                fontSize: `${120 * (override.nameScale || 1)}px`,
                letterSpacing: `${(override.tight || 0) * -0.04}em`,
                lineHeight: '1.2em',
                fontWeight: 700
              }}
            >
              {sth(override.name || t['ชื่อที่แสดงบนป้ายชื่อ'])
                .split('\n')
                .map((x, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {x}
                  </Fragment>
                ))}
            </div>
            <div
              style={{
                fontSize: '48px',
                lineHeight: '1.3em',
                fontWeight: 700
              }}
            >
              <div>{sth(override.position || position)}</div>
              <div
                style={{
                  color: '#858585'
                }}
              >
                {sth(override.company || t['บริษัท / สถาบันการศึกษา'])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
