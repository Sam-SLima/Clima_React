import './ClimaInfo.css'

function ClimaInfo({clima}) {
   

    return (
        <div className='bloco-clima'>
            <h2>{clima.name}</h2>

            <div className='clima-info'>
                <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} />
                <p className='temperatura'>{Math.round(clima.main.temp)}°C</p>
            </div>
           <p className='descricao'>{clima.weather[0].description}</p>

           <div className='detalhes'>
            <p>Sensação térmica: {Math.round(clima.main.feels_like)}°C</p>
            <p>Umidade: {clima.main.humidity}%</p>
            <p>Presão: {clima.main.pressure} hPa</p>
           </div>
        </div>
    )
}

export default ClimaInfo