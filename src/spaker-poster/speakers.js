import React from 'react'
import { Speaker } from './Speaker'

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
      // photo={require('./photo/keya.jpg')}
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
        <Text tight>
          Clojure​ Developer<At />Appsmiths (th)
        </Text>
      }
      title={
        <Text>
          React, Redux’ s core idea <br />with Clojurescript
        </Text>
      }
      description={
        <Text tight>
          เราจะนำ React, Redux ไปเทียบกับสิ่งที่คล้ายกันบนภาษา Clojurescript
          ศึกษา, เรียนรู้, ลองใช้และนำแนวคิดต่าง ๆ กลับไปใช้บน js
          หรือคุณอาจไม่อยากกลับไปอีกเลย
        </Text>
      }
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
  ),
  suphareuk_theamparn: (
    <Speaker
      name="Suphareuk Theamparn"
      position={
        <Text>
          <Text>Frontend Developer</Text>
          <br />
          <span style={{ fontSize: 60 }}>Telenor Digital Asia</span>
        </Text>
      }
      title={
        <div>
          <br />React for a 5 million user app
        </div>
      }
      // descriptionScale={4 / 5}
      description={
        <div style={{ fontSize: 48 }}>
          How we use React and other <br />
          React tools/technologies with Wowbox <br />
          <Text>in the present and in the future.</Text>
        </div>
      }
      photo={require('./photo/toon.jpg')}
    />
  ),
  ranatchai_chernbamrung: (
    <Speaker
      name="Ranatchai Chernbamrung"
      position={
        <Text>
          Co-founder & CTO<At />Cleverse
        </Text>
      }
      title={<div>A Brief Summary of React in 2018</div>}
      descriptionScale={6 / 5}
      description={
        <Text>
          React เปลี่ยนอะไรไปบ้างในปีนี้<br />
          มาฟังสรุปฟีเจอร์<br />และผลกระทบต่อเรากันครับ
        </Text>
      }
      photo={require('./photo/ranatchai.jpg')}
    />
  )
}

/** @type React.SFC<any> */
function Text({ children, tight, weight }) {
  return (
    <span style={{ letterSpacing: tight ? '-0.05em' : 0, fontWeight: weight }}>
      {children}
    </span>
  )
}

/** @type React.SFC<any> */
function At() {
  return <span style={{ opacity: 0.5, margin: '0' }}> @ </span>
}
