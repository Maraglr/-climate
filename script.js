const apiKey = 'c5ce90648b7aa01c417c1e154a0155fe';

document.getElementById('botonBusqueda').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: ciudad,
                    appid: apiKey,
                    units: 'metric' 
                }
            });
            const weatherData = response.data;
            document.getElementById('datosClima').innerHTML = `
                <h2>Clima en ${weatherData.name}</h2>
                <p>Temperatura: ${weatherData.main.temp}°C</p>
                <p>Clima: ${weatherData.weather[0].description}</p>
                <p>Humedad: ${weatherData.main.humidity}%</p>
                <p>Velocidad del viento: ${weatherData.wind.speed} m/s</p>
            `;
        } catch (error) {
            document.getElementById('datosClima').innerHTML = `
                <p>Error al obtener los datos del clima: ${error.response ? error.response.data.message : error.message}</p>
            `;
        }
    } else {
        document.getElementById('datosClima').innerHTML = '<p>Por favor, ingrese una ciudad.</p>';
    }
});



