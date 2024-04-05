const axios = require('axios');

// URL de la API
const url = process.env.CONSUMER

// Parámetro a enviar en el cuerpo de la petición
const data = {
  solicitud: 'dia'
};

// Realizar la petición POST
axios.post(url, data)
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error al realizar la petición:', error);
  });
