import axios from 'axios'

let accessToken: string | null
accessToken= ""

if (typeof window !== 'undefined') {
    accessToken = localStorage.getItem('accessToken')
}


export default axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})