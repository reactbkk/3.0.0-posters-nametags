import React from 'react'
import { Speaker } from './Speaker'

export class SpeakerStudio extends React.Component {
  state = {
    name: 'Name',
    position: 'Position',
    title: 'Talk Title Should Fit Inside a Single Line',
    description:
      'Talk description then goes on. Ideally, it should not be longer than three lines.',
    photo: require('./connor2.png'),
    scale: 1,
    descriptionScale: 1
  }
  render() {
    const renderField = k => (
      <div>
        <span style={{ fontSize: '60px' }}>{k}: </span>
        <input
          type="text"
          value={this.state[k]}
          onChange={e => {
            this.setState({ [k]: e.target.value })
          }}
          style={{ fontSize: '60px' }}
        />
      </div>
    )
    return (
      <div style={{ margin: '40px 10px' }}>
        <div style={{ fontSize: 80, marginBottom: 40 }}>
          React Bangkok 3.0.0 - Create your poster
          <br />
          <div style={{ fontSize: 40 }}>Zoom out to use it</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 'none' }}>
            <Speaker
              {...this.state}
              scale={+this.state.scale}
              descriptionScale={+this.state.descriptionScale}
            />
          </div>
          <div style={{ flex: 'none', padding: 40, border: '1px solid #222' }}>
            {renderField('name')}
            {renderField('position')}
            {renderField('title')}
            {renderField('scale')}
            {renderField('photo')}
            <textarea
              value={this.state.description}
              onChange={e => {
                this.setState({ description: e.target.value })
              }}
              style={{ fontSize: '60px', width: '20em', height: '5em' }}
            />
            {renderField('descriptionScale')}
          </div>
        </div>
      </div>
    )
  }
}
