const axios = require('axios');

const url = process.env.CONSUMER1
const sl1 = process.env.SOL1

const dataD = {
  solicitud: sl1
};

axios.post(url, dataD)
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error al realizar la petición:', error);
  });

