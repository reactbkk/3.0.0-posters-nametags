import React from 'react'

const data = require('./namecard.json')
export function NameCardPage() {
  return (
    <div>
      {data.map((t, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'inline-block',
              width: '10cm',
              height: '10cm',
              border: '0.1cm solid #ccc',
              margin: '0.5cm',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                fontFamily: 'Metropolis, Noto Sans Thai UI',
                padding: '1cm',
                textAlign: 'right',
                wordWrap: 'break-word'
              }}
            >
              <div
                style={{
                  fontSize: '1.25cm',
                  lineHeight: '1.75cm',
                  fontWeight: '700'
                }}
              >
                {t['ชื่อที่แสดงบนป้ายชื่อ']}
              </div>
              <div
                style={{
                  fontSize: '0.64cm',
                  lineHeight: '0.8cm',
                  fontWeight: '600'
                }}
              >
                {t['Firstname']} {t['Lastname']}
              </div>
              <div
                style={{
                  fontSize: '0.48cm',
                  lineHeight: '0.64cm',
                  fontWeight: '300'
                }}
              >
                {t['ตำแหน่ง / ชั้นปี']}
                <br />
                {t['บริษัท / สถาบันการศึกษา']}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
