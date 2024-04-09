const axios = require('axios');

// URL de la API
const url = process.env.CONSUMER1
const url2 = process.env.CONSUMER2
const sl1 = process.env.SOL1
const sl2 = process.env.SOL2

// Parámetro a enviar en el cuerpo de la petición
const dataD = {
  solicitud: sl1
};

// Realizar la petición POST
axios.post(url, dataD)
  .then(response => {
    console.log('Respuesta:', response.data);
    obtenerValorUF();
  })
  .catch(error => {
    console.error('Error al realizar la petición:', error);
  });

  async function obtenerValorUF() {
    try {
        const response = await axios.get(url2);
        
        if (response.status !== 200) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = response.data;
        let valorUF = Math.round(data.uf.valor);
        console.log(valorUF)
        const dataU = {
          solicitud: sl2,
          valor: valorUF
        };

        axios.post(url, dataU)
        .then(response => {
          console.log('Respuesta:', response.data);
        })
        .catch(error => {
          console.error('Error al realizar la petición:', error);
        });
        
        return 
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}
