import React from 'react'
import { SpeakerStudio } from './SpeakerStudio'
import { speakers } from './speakers'
import { Link, Redirect } from 'react-router-dom'

/** @type {React.SFC<any>} */
export function renderAllSpeakersPoster() {
  return (
    <div>
      <SpeakerStudio />
      <hr />
      <div style={{ fontSize: 80, margin: '40px 0' }}>Example</div>
      {Object.keys(speakers).map(key => {
        const url = '/' + key
        return (
          <Link to={url}>
            <div style={{ display: 'inline-block', margin: 10 }}>
              {speakers[key]}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export function renderSpeakerPoster({ match }) {
  const speaker = speakers[match.params.key]
  if (!speaker) {
    return <Redirect to="/" />
  }
  return speaker
}
