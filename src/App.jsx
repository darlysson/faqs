import React, { useEffect, useState } from 'react'
import Faq from './components/Faq'
import style from './styles/global.module.scss'
import { VscLoading } from 'react-icons/vsc'

function App() {
  const [faqs, setFaqs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/darlysson/faqs/faqs').then(
      (response) => {
        response.json().then((faq) => {
          setFaqs(faq)
          setIsLoading(false)
        })
      }
    )
  }, [])

  return (
    <main>
      <h1>questions and answers about login</h1>

      <div className={style.faqsGroup}>
        {isLoading ? (
          <VscLoading className={style.loading} />
        ) : (
          faqs.map((faq) => <Faq key={faq.id} {...faq} />)
        )}
      </div>
    </main>
  )
}

export default App
