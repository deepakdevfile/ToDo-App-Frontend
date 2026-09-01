import { useDispatch, useSelector } from "react-redux"
import Spinner from "./Spinner"
import TaskItem from './TaskItem'
import { useEffect } from "react"
import { getTasks, reset } from '../features/tasks/taskSlice'
import { useNavigate } from "react-router-dom"


const TaskList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { tasks, isLoading, isError, message } = useSelector(state => state.tasks)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            console.log(message)
        }

        dispatch(getTasks())

        return () => dispatch(reset())
    }, [isError, message, dispatch])

    return (
        isLoading? <Spinner /> : (
            <>
                <section className="content">
                    {tasks.length > 0 && (
                        <div className="tasks">
                            {tasks.map(task => (
                                <TaskItem key={task._id} task={task} />
                            ))}
                        </div>
                    )}
                </section>
            </>
        )
    )
}

export default TaskList