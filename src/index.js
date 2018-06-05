import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div>
      <SpeakerItem
        name="Manatsawin Hanmongkolchai"
        position="Junior Architect / Wongnai"
        title="State Management with MobX"
        description="ใครว่า React มีแค่ Redux? มารู้จักกับ MobX ที่จะทำให้ state management ในแอพของคุณเป็นเรื่องง่ายยย"
        photo={require('./photo/manatsawin.png')}
      />
      <SpeakerItem
        name="Chakrit Likitkhajorn"
        position="Vice President / Taskworld"
        title="State Management in React Apps"
        description="Redux, MobX, Flux pattern หรือ Pure React เรามีเครื่องมือในจัดการ state ใน App มากมายให้เลือก Talk นี้เราจะมาเจาะลึกกันว่าทำไมบางคนชอบ Redux ทำไมบางคนชอบ MobX ทำไม Dan ถึงบอกว่าอย่ารีบใช้อะไรมากกว่า Pure React ตกลงการใช้ มันเป็นเรื่องความชอบส่วนบุคคล หรือเรื่องเลือกของให้เหมาะกับงานกันแน่นะ เราจะเจาะประเด็นนี้กัน"
        photo={require('./photo/chrisza.jpg')}
      />
    </div>
  )
}

function SpeakerItem(props) {
  return (
    <div style={{ display: 'inline-block', margin: 10 }}>
      <Speaker {...props} />
    </div>
  )
}

function Speaker({ name, position, title, description, photo, logo }) {
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
        style={{
          position: 'absolute',
          width: 376,
          height: 376,
          top: 300,
          borderRadius: '50%',
          background: `url(${photo ||
            require('./connor.png')}) center no-repeat`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          left: '50%',
          marginLeft: 376 / -2
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 720,
          textAlign: 'center',
          color: '#00d8ff',
          font: 'bold 60px/90px Metropolis'
        }}
      >
        {name}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 810,
          textAlign: 'center',
          color: '#fff',
          font: '60px/90px Metropolis'
        }}
      >
        {position}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 900,
          textAlign: 'center',
          color: '#fff',
          font: 'bold 60px/90px Metropolis'
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 50,
          right: 50,
          top: 1080,
          textAlign: 'center',
          color: '#fff',
          font: '300 60px/90px Noto Sans Thai UI, Noto Sans'
        }}
      >
        {description}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
module.hot.accept(() => {})
