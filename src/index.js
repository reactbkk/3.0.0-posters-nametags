import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './design'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

function Text({ children, tight, weight }) {
  return (
    <span style={{ letterSpacing: tight ? '-0.05em' : 0, fontWeight: weight }}>
      {children}
    </span>
  )
}
function At() {
  return <span style={{ opacity: 0.5, margin: '0' }}> @ </span>
}

export const speakers = {
  gucode: (
    <Speaker
      name={
        <Text tight>
          Jirat Kijlerdpornpailoj &<br />Suwitcha Sugthana (Gucode)
        </Text>
      }
      position=""
      title={
        <Text>
          Build Awesome Static Website<br /> with Gatsby.js
        </Text>
      }
      description={
        <Text>
          <Text weight={400}>เราจะพาทุกท่านรับชมการสร้างเว็บไซต์ Gucode</Text>
          <br />
          <span style={{ letterSpacing: '-0.025em' }}>
            ด้วยสิ่งที่เรียกว่า Gatsby.js ซึ่งเป็น static site generator for
            React แล้ว deploy ไปยัง GitHub Pages
          </span>
        </Text>
      }
      photo={require('./photo/gucode.png')}
    />
  ),
  keya_desai: (
    <Speaker
      name="Keya Desai"
      position={
        <Text>
          Lead Consultant Developer<br />ThoughtWorks
        </Text>
      }
      title="Animating in React"
      descriptionScale={7 / 8}
      description="Join in the fun as I will demonstrate how animations can be applied to add style and substance to any page and how to develop simple animated micro interactions with ease using react"
      photo={require('./photo/keya.jpg')}
    />
  ),
  manatsawin_hanmongkolchai: (
    <Speaker
      name="Manatsawin Hanmongkolchai"
      position={
        <div>
          Junior Architect<At />Wongnai
        </div>
      }
      title="State Management with MobX"
      description={
        <div style={{ fontWeight: 300 }}>
          <div style={{ fontWeight: 400 }}>ใครว่า React มีแค่ Redux?</div>
          มารู้จักกับ MobX ที่จะทำให้ state management<br />
          ในแอพของคุณเป็นเรื่องง่ายยย
        </div>
      }
      photo={require('./photo/manatsawin.png')}
    />
  ),
  phoomparin_mano: (
    <Speaker
      name="Phoomparin Mano"
      position={
        <div>
          Developer<At />iTAX
        </div>
      }
      title="Fast and Furious Development with React Design Patterns 🔥"
      description="How you can use a set of Design Patterns to make your codebase easier to reason about and more concise to write, so you can express your ideas and ship to production in record time."
      descriptionScale={9 / 10}
      photo={require('./photo/phoom.jpg')}
    />
  ),
  jessada_trirongkit: (
    <Speaker
      name="Jessada Trirongkit"
      position={
        <div>
          Software Engineer<At />Oozou
        </div>
      }
      title="It's Next.js but it's static and it's fast"
      description={
        <Text>
          How I optimized, configured, and accelerated my Next.js
          static-exported site with data splitting and prefetching.
        </Text>
      }
      photo={require('./photo/aun.jpg')}
    />
  ),
  veha_suwatphisankij: (
    <Speaker
      name="Veha Suwatphisankij"
      position={
        <div>
          Full Stack Engineer <At /> Appsmith Thailand
        </div>
      }
      title={
        <Text tight>
          {/* React and Redux in Another Perspective: */}
          How Writing Web Apps in ClojureScript Can Help You Shape Idea of React
          Better
        </Text>
      }
      description={
        <Text tight>
          React fundamental idea is data-driven, functional view, view result
          based only on data (prop and state). and redux is functional data flow
          with immutable data store framework. but when Implement that idea on
          language that does not fit the idea, the result can be cumbersome. in
          the parallel world, the Clojurescript fundamental idea is immutable,
          functional programming and data-driven. In this talk, I will show you
          how each piece of the idea fit together in Cljs, "reagent" and
          "re-frame" (react and redux in Cjls world). and hopefully, you can
          pick some idea from Cljs to your current react project
        </Text>
      }
      descriptionScale={4 / 5}
      photo={require('./photo/veha.jpg')}
    />
  ),
  christopher_ng: (
    <Speaker
      name="Christopher Ng"
      position={
        <div>
          Mobile developer<At />Event Pop
        </div>
      }
      title="Kotlin ❤️  React"
      description={
        <div>
          Kotlin เป็นภาษาที่ดี และทุกคนก็รัก React <br />
          มาดูกันว่าเราจะผสมของสองสิ่งนี้ขึ้นมาได้อย่างไร
        </div>
      }
      photo={require('./photo/babe.jpg')}
    />
  ),
  cal_komkanit: (
    <Speaker
      name="Cal Komkanit"
      position={
        <div>
          Intern<At />Jitta
        </div>
      }
      title={
        <div>
          My First Time with GraphQL<br /> on Production
        </div>
      }
      description={
        <div>
          <Text weight={400} tight>
            ประสบการณ์การใช้ GraphQL ขึ้น Production ครั้งแรก
          </Text>
          <br />
          รวบรวมเทคนิค และ ปัญหาต่างๆที่เจอ <br />เพื่อเตรียมพร้อมใช้งานจริง
        </div>
      }
      photo={require('./photo/cal.jpg')}
    />
  ),
  rujira_aksornsin: (
    <Speaker
      name="Rujira Aksornsin"
      position={
        <div>
          Frontend Web Lead<At />AppMan
        </div>
      }
      title="React Performance Tuning"
      descriptionScale={7 / 8}
      description={
        <div>
          <Text weight={400}>
            เมื่อ React app ที่เราทำ ไม่ได้รู้สึกเร็วอีกต่อไปแล้ว
          </Text>
          <br />
          มารีวิวจุดผิดพลาด และข้อแก้ไขวิธีต่างๆ ที่ช่วยให้ app ของเรา smooth
          แบบ 60fps ถึงแม้ว่าจะเป็น mobile web<br /> ก็นึกว่าเล่น native app
          อยู่
        </div>
      }
      photo={require('./photo/holly.jpg')}
    />
  ),
  chakrit_likitkhajorn: (
    <Speaker
      name="Chakrit Likitkhajorn"
      position={
        <div>
          VP Engineering<At />Taskworld
        </div>
      }
      title="State Management in React Apps"
      descriptionScale={4 / 5}
      description={
        <div>
          <Text weight={400}>Redux, MobX, Flux pattern หรือ pure React?</Text>
          <br />
          เรามีเครื่องมือจัดการ state ใน app มากมายให้เลือก ใน talk นี้ <br />เราจะมาเจาะลึกกันว่าทำไมบางคนชอบ
          Redux ทำไมบางคนชอบ MobX ทำไม Dan ถึงบอกว่าอย่ารีบใช้อะไรมากกว่า pure
          React​<br /> ตกลงการใช้มันเป็นเรื่องความชอบส่วนบุคคล
          หรือเรื่องเลือกของให้เหมาะกับงานกันแน่นะ เราจะเจาะประเด็นนี้กัน
        </div>
      }
      offsetDescription={70}
      photo={require('./photo/chrisza.jpg')}
    />
  ),

  pallop_chaoputhipuchong: (
    <Speaker
      name="Pallop Chaoputhipuchong"
      position={<div>Software Engineer</div>}
      title="Testing React Applications"
      description={
        <Text>
          <Text weight={400}>
            Test สามารถช่วยให้เรา ship software ได้อย่างมั่นใจ
          </Text>
          <br />
          แต่หาก test ด้วยแนวคิดที่ไม่ดี มันอาจนำไปสู่เส้นทางแห่งความยากลำบาก
          เราจะพาไปดูว่า ด้วยแนวคิดที่ดีและเครื่องมือที่ใช่ การเขียน test
          จะไม่ใช่เรื่องยากอีกต่อไป
        </Text>
      }
      photo={require('./photo/ham.jpg')}
    />
  ),
  tananan_tangthanachaikul: (
    <Speaker
      name="Tananan Tangthanachaikul"
      position={
        <div>
          Full-stack Developer<At />TakeMeTour
        </div>
      }
      title={
        <div>Experience from building a mobile app using Expo & GraphQL</div>
      }
      // descriptionScale={4 / 5}
      description={
        <div>
          <Text weight={400}>หากใครกำลังตัดสินใจที่จะใช้ Expo โปรดฟัง!</Text>
          <br />
          จะมาเล่าเรื่องราวความสนุก (และความหัวร้อน) ของการทำ Mobile App ด้วย
          Expo รวมถึงเรื่องที่ต้องคิด <br /> เมื่อจะใช้ Expo
        </div>
      }
      photo={require('./photo/benz.jpg')}
    />
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
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
          )}
        />
        <Route
          path="/:key"
          render={({ match }) => {
            const speaker = speakers[match.params.key]
            if (!speaker) {
              return <Redirect to="/" />
            }
            return speaker
          }}
        />
      </Switch>
    </Router>
  )
}

class SpeakerStudio extends React.Component {
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

function Speaker({
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

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'))
  if (module.hot) {
    module.hot.accept(() => {})
  }
}
