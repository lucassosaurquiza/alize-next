import axios from 'axios'

export const getDestinations = (params) => {
    console.log(params)
    const url = new URLSearchParams(params)

    return axios.get(`/api/destinations?${url.toString()}`)
}