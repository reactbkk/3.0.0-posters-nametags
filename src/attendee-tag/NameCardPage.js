import React from 'react'

const data = require('../data/attendees.json')

/** @type {React.SFC<any>} */
export function NameCardPage({ index }) {
  const c = index === undefined ? data : [data[index]].filter(x => x)
  return (
    <div>
      {c.map((t, i) => {
        return (
          <div
            style={{
              display: 'inline-block',
              border: '0.1cm solid #ccc',
              margin: '0.5cm'
            }}
          >
            <div
              className="namecard"
              onClick={() => prompt('ID', t['Order number'])}
              key={i}
              data-id={t['Order number'].replace(/[#\s]/g, '')}
              style={{
                width: '1181px',
                height: '1771px',
                background: `url(${require('./namecard.png')}) center no-repeat`,
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
                      fontSize: '120px',
                      lineHeight: '1.2em',
                      fontWeight: 700
                    }}
                  >
                    {t['ชื่อที่แสดงบนป้ายชื่อ']}
                  </div>
                  {/* <div
                  style={{
                    fontSize: '0.64cm',
                    lineHeight: '0.8cm',
                    fontWeight: '600'
                  }}
                >
                  {t['Firstname']} {t['Lastname']}
                </div> */}
                  <div
                    style={{
                      fontSize: '48px',
                      lineHeight: '1.3em',
                      fontWeight: 700
                    }}
                  >
                    {t['ตำแหน่ง / ชั้นปี']}
                    <br />
                    <div
                      style={{
                        color: '#858585'
                      }}
                    >
                      {t['บริษัท / สถาบันการศึกษา']}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
