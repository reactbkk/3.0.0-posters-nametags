import React from 'react'

/** @type React.SFC<any> */
export function Speaker({
  name,
  position,
  title,
  description,
  photo,
  logo,
  scale = 1,
  descriptionScale = 1,
  offsetDescription = 0
}) {
  return (
    <div
      style={{
        background: `url(${require('./speaker_blank.png')})`,
        width: 1272,
        height: 1800,
        position: 'relative'
      }}
    >
      <div
        key={photo || 'default'}
        style={{
          position: 'absolute',
          width: 376,
          height: 376,
          top: 300,
          borderRadius: '50%',
          background: `url(${photo ||
            require('./connor2.png')}) center no-repeat`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          left: '50%',
          marginLeft: 376 / -2
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 45,
          right: 45,
          top: 710,
          textAlign: 'center',
          color: 'white',
          fontFamily: `Metropolis`,
          fontSize: 60 * scale,
          lineHeight: `${90 * scale}px`
        }}
      >
        <div style={{ height: 270 - offsetDescription }}>
          <div style={{ color: '#00d8ff', fontWeight: 600 }}>{name}</div>
          <div style={{}}>{position}</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 180
          }}
        >
          <div style={{ fontWeight: 700, flex: 1 }}>{title}</div>
        </div>
        <div
          style={{
            fontFamily: `Noto Sans Thai UI, Noto Sans`,
            fontSize: `${descriptionScale * 0.9}em`,
            lineHeight: `${90 * scale * descriptionScale}px`,
            fontWeight: 300
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}
