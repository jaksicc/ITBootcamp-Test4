import axios from 'axios'

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v4/launches')
}

export const getRocketById = (id) => {
    return axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
}