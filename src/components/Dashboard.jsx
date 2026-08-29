import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import TaskForm from './TaskForm'

export default function Dashboard(){
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.name}</h1>
                <p>Tasks Dashboard</p>
            </section>
            <TaskForm />
        </>
    )
}