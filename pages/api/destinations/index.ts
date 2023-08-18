import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'
import axios from 'axios'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  switch (req.method) {
    case 'GET':
      return getDestinations(req, res)
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}



const getDestinations = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const query = req.query

  console.log(query)

  const currentDate = moment(); // Fecha actual
  const futureDate = currentDate.add(4, 'days'); // Sumar 3 días
  const formattedDate = futureDate.format('YYYY-MM-DD')

  const {
    destino,
    origen,
    id_des,
    id_origen,
    fecha
  } = req.query

  // Nos conectamos a la api de plataforma 10 para traer todos los datos

  try {
    const response = await axios.get('https://www.plataforma10.com.ar/ApiBusesBusqueda/Buscar', {
      headers: {
        'authority': 'www.plataforma10.com.ar',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'es-ES,es;q=0.9',
        'cookie': 'SesionUsuario=925ded70a331416183f71cc0bedf8bbf; p10_user_visitor=63726d15-0080-4888-88f1-4d4f2099d9c7&03/08/2024 23:21:13; COUNTRY_CODE=ar; urlReturn=/; moneda={"codigo":"ARS","cotizacion":1,"codigoAMostrar":"ARS"}; Cultura=es-AR',
        'referer': `https://www.plataforma10.com.ar/servicios/buscar-pasajes/${destino}/${origen}/${id_des}/${id_origen}/${fecha}/_/1/0/0`,
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      },
      params: {
        IdPv: 5720,
        IdPais: 2,
        pais: 'ar',
        Adultos: 1,
        Menores: 0,
        Infantes: 0,
        Lang: 'es-AR',
        IdPadOrigen: 369,
        IdPadDestino: 1471,
        FechaIda: fecha ? fecha : formattedDate,
      }
    });

    return res.json(response.data);
  } catch (error) {
    console.log(error)
    return res.status(500).send('Error en la solicitud');
  }
}