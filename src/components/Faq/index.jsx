import React, { useState } from 'react'
import { GoPlusSmall } from 'react-icons/go'
import { BiMinus } from 'react-icons/bi'

import style from './style.module.scss'

export default function Faq({ id, question, answer }) {
  const [isFaqOpen, setIsFaqOpen] = useState(false)

  function handleToggleFaq() {
    setIsFaqOpen(!isFaqOpen)
  }

  return (
    <section key={id}>
      <div className={style.question}>
        <header>
          <h2>{question}</h2>

          <button type='type' onClick={() => handleToggleFaq()}>
            {isFaqOpen ? (
              <BiMinus color='#B4345C' />
            ) : (
              <GoPlusSmall color='#B4345C' />
            )}
          </button>
        </header>

        {isFaqOpen && (
          <div className={style.content}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </section>
  )
}
