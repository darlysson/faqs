import React, { useEffect, useState } from 'react'
import Faq from './components/Faq'
import style from './styles/global.module.scss'

function App() {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/faqs').then((response) => {
      response.json().then((faq) => setFaqs(faq))
    })
  }, [])

  return (
    <main>
      <h1>questions and answers about login</h1>

      <div className={style.faqsGroup}>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </div>
    </main>
  )
}

export default App
