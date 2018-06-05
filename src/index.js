import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './design'

function Tight({ children }) {
  return <span style={{ letterSpacing: '-0.04em' }}>{children}</span>
}

function App() {
  return (
    <div>
      <SpeakerItem
        name={<Tight>Jirat Kijlerdpornpailoj & Suwitcha Sugthana</Tight>}
        position="GuCode"
        title="Build Awesome Static Website (Gucode) with Gatsby.js"
        description={
          <Tight>
            เราจะพาทุกท่านรับชมการสร้างเว็บไซต์ Gucode แล้ว Deploy ไปยัง Github
            Pages ด้วยสิ่งที่เรียก Gatsby.js ซึ่งเป็น Static Site Generator for
            React
          </Tight>
        }
      />
      <SpeakerItem
        name="Keya Desai"
        position={<Tight>Lead Consultant Developer / ThoughtWorks</Tight>}
        title="Animation"
        description=""
      />
      <SpeakerItem
        name="Manatsawin Hanmongkolchai"
        position="Junior Architect / Wongnai"
        title="State Management with MobX"
        description="ใครว่า React มีแค่ Redux? มารู้จักกับ MobX ที่จะทำให้ state management ในแอพของคุณเป็นเรื่องง่ายยย"
        photo={require('./photo/manatsawin.png')}
      />
      <SpeakerItem
        name="Phoomparin Mano"
        position="Developer / iTAX"
        title="Fast and Furious Development with React Design Patterns 🔥"
        description="How you can use a set of Design Patterns to make your codebase easier to reason about and more concise to write, so you can express your ideas and ship to production in record time."
      />
      <SpeakerItem
        name="Jessada Trirongkit"
        position="Software Engineer / Oozou"
        title="Super fast static site with Next.js"
        description={
          <Tight>
            How I optimized my Next.js static-exported sites with data spitting
            and prefetching (which Next.js doesn’t provide out of the box).
          </Tight>
        }
        photo={require('./photo/aun.jpg')}
      />
      <SpeakerItem
        name="Veha Suwatphisankij"
        position="Full Stack Engineer / Appsmith Thailand"
        title={
          <Tight>
            <div>React and Redux in Another Perspective:</div>
            <div>
              How Writing Web Apps in ClojureScript Can Help You Shape Idea of
              React Better
            </div>
          </Tight>
        }
        description={
          <div>
            React fundamental idea is data-driven, functional view, view result
            based only on data (prop and state). and redux is functional data
            flow with immutable data store framework. but when Implement that
            idea on language that does not fit the idea, the result can be
            cumbersome. in the parallel world, the Clojurescript fundamental
            idea is immutable, functional programming and data-driven. In this
            talk, I will show you how each piece of the idea fit together in
            Cljs, "reagent" and "re-frame" (react and redux in Cjls world). and
            hopefully, you can pick some idea from Cljs to your current react
            project
          </div>
        }
      />
      <SpeakerItem
        name="Christopher Ng"
        position="Mobile developer / Event Pop"
        title="KotlinJS + React"
        description="Demonstrate combination of KotlinJS and React"
      />
      <SpeakerItem
        name="Komkanit Sujautra"
        position="Intern / Jitta"
        title="My First Time with GraphQL on Production"
        description="พูดถึงประสบการณ์ในการตัดสินใจทดลองใช้ GraphQL ขึ้น Production ครั้งแรกในงานสเกลใหญ่ จะเจ็บปวดแค่ไหน ข้อดีข้อเสียอะไรบ้าง ควรใช้หรือควรหนีไป (พูดถึง NextJS, Apollo, GraphQL)"
        photo={require('./photo/cal.jpg')}
      />
      <SpeakerItem
        name="Rujira Aksornsin"
        position="Lead Frontend Developer / AppMan"
        title="React Performance Tuning"
        description="แชร์ประสบการณ์และวิธีการ ทำยังไงให้ React web ลื่นไหล จนดูเหมือน Native app บน mobile."
        photo={require('./photo/holly.jpg')}
      />
      <SpeakerItem
        name="Chakrit Likitkhajorn"
        position="Vice President / Taskworld"
        title="State Management in React Apps"
        scale={1}
        descriptionScale={4 / 5}
        description={
          <div>
            Redux, MobX, Flux pattern หรือ Pure React เรามีเครื่องมือในจัดการ
            state ใน App มากมายให้เลือก Talk นี้เราจะมาเจาะลึกกันว่าทำไมบางคนชอบ
            Redux ทำไมบางคนชอบ MobX ทำไม Dan ถึงบอกว่าอย่ารีบใช้อะไรมากกว่า Pure
            React ตกลงการใช้ มันเป็นเรื่องความชอบส่วนบุคคล
            หรือเรื่องเลือกของให้เหมาะกับงานกันแน่นะ เราจะเจาะประเด็นนี้กัน
          </div>
        }
        photo={require('./photo/chrisza.jpg')}
      />
      <SpeakerItem
        name="Pallop Chaoputhipuchong"
        position="Software Engineer / Jitta"
        title="Testing React Applications"
        description="Go through between the various forms of testing. Showcase tools and libraries that can help people test their applications for individual cases."
      />
      <SpeakerItem
        name="Tananan Tangthanachaikul"
        position="Full-stack Web Developer / TakeMeTour"
        title={
          <div>
            Experience from building an app<br />in a month using Expo & GraphQL
          </div>
        }
        descriptionScale={3 / 4}
        description={
          <div>
            เล่าประสบการณ์ + สิ่งที่ได้เรียนรู้ + ความปวดหัว จากการพัฒนา Mobile
            Apps 2 แพลทฟอร์ม โดยใช้ Expo คู่กับ GraphQL Agenda คร่าวๆ
            {/* <li>- React-Native คืออะไร และ Expo คืออะไร?</li>
            <li>- ทำไมถึงเลือกใช้ Expo ทำไมไม่ใช้ React-Native</li>
            <li>- ข้อดีของการใช้ Expo</li>
            <li>- GraphQL Subscription อีก 1 ฟีเจอร์ที่ไม่ค่อยมีคนรู้</li>
            <li>- เรื่องน่าปวดหัวที่ต้องเจอเมื่อใช้ Expo</li> */}
          </div>
        }
      />
      <SpeakerStudio />
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

class SpeakerStudio extends React.Component {
  state = {
    name: 'Name',
    position: 'Position',
    title: 'Talk Title Should Fit Inside a Single Line',
    description:
      'Talk description then goes on. Ideally, it should not be longer than three lines.'
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
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'none' }}>
          <Speaker {...this.state} />
        </div>
        <div style={{ flex: 'none' }}>
          {renderField('name')}
          {renderField('position')}
          {renderField('title')}
          <textarea
            value={this.state.description}
            onChange={e => {
              this.setState({ description: e.target.value })
            }}
            style={{ fontSize: '60px', width: '20em', height: '5em' }}
          />
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
  descriptionScale = 1
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
          left: 45,
          right: 45,
          top: 720,
          textAlign: 'center',
          color: 'white',
          fontFamily: `Metropolis`,
          fontSize: 60 * scale,
          lineHeight: `${90 * scale}px`
        }}
      >
        <div style={{ color: '#00d8ff', fontWeight: 600 }}>{name}</div>
        <div style={{}}>{position}</div>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div>&nbsp;</div>
        <div
          style={{
            fontFamily: `Noto Sans Thai UI, Noto Sans`,
            fontSize: `${descriptionScale * 0.9}em`,
            lineHeight: `${90 * scale * descriptionScale}px`
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept(() => {})
}
