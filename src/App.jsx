import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import ClimaInfo from './components/ClimaInfo/ClimaInfo'
import ClimaInfo5dias from './components/ClimaInfo5dias/ClimaInfo5dias'

function App() {
  const [clima, setClima] = useState()
  const [clima5dias, setClima5dias] = useState()
  const inputRef = useRef()

  async function buscarCidade() {
    const cidade = inputRef.current.value
    const chave = "861310b1ce57322d5bbad9c50a8c869b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
    const url5dias = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
    
    
    const apiInfo = await axios.get(url)
    const apiInfo5dias = await axios.get(url5dias)

    
    setClima(apiInfo.data)
    setClima5dias(apiInfo5dias.data)

  }

  return (
    <div className='bloco'>
      <h1>previsao</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={buscarCidade}>Buscar</button>

      {clima && <ClimaInfo clima={clima}/>}
      {clima5dias && <ClimaInfo5dias clima5dias={clima5dias}/>}
    </div>
  )
}

export default App
