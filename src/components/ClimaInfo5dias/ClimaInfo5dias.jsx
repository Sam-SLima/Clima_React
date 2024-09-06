import './ClimaInfo5dias.css'

function ClimaInfo5dias({clima5dias}) {
    console.log(clima5dias)

    let previsaoDosDias = {
    
    }

    for( let previsao of clima5dias.list){
        const dia = new Date(previsao.dt * 1000).toLocaleDateString()
        
        if(!previsaoDosDias[dia]){
            previsaoDosDias[dia] = previsao
        }
    }

    const proximosdias = Object.values(previsaoDosDias).slice(1,6)

    function converterdia(date){
        const novaData = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit' })
        
        return novaData
    }

    return (
        <div className="bloco-clima">
            <h3>Previsão Próximos 5 dias</h3>
            <div className='lista-clima'>
            {proximosdias.map(previsao => (
                <div key={previsao.dt} className='Clima-item'>
                    <p className='dia-previsao'>{converterdia(previsao)}</p>
                    <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} />
                    <p>{previsao.weather[0].description}</p>
                    <p>{Math.round(previsao.main.temp_min)}°C min / {Math.round(previsao.main.temp_max)}°C max</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ClimaInfo5dias