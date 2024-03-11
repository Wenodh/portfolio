import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
      <section>
          <div className='flex items-center justify-center'>
              <div>
                  <Image src="https://images.app.goo.gl/RP4nPsixrzFm8Vsm8" alt="Wenodh" width="192" height="192" quality="95" priority={true} />
              </div>
          </div>
    </section>
  )
}
