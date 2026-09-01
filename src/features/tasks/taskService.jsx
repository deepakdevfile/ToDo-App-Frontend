import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL + '/api/tasks/'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const createTask = async (taskData) => {
    const response = await api.post('/api/tasks/', taskData)
    return response.data
}

const getTasks = async() => {
    const response = await api.get('/api/tasks/')
    return response.data
}

const deleteTask = async(id) => {
    const response = await api.delete('/api/tasks/' + id)
    return response.data
}

const taskService = { createTask, getTasks, deleteTask }

export default taskService