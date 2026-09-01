import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL + '/api/users/'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const register = async(userData) => {
    const response = await api.post('/api/users/', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await api.post('/api/users/login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async () => {
    await api.post('/api/users/logout')
    localStorage.removeItem('user')
}

const authService = { register, logout, login }

export default authService