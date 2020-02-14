import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-c0efd.firebaseio.com/'
})

export default instance
