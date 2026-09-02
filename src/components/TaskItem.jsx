import { useDispatch } from "react-redux"
import { deleteTask, updateTask } from "../features/tasks/taskSlice"
import { FaPencilAlt, FaTrash } from "react-icons/fa"
import { useState } from "react"

const TaskItem = ({task}) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(task.text)
    
    function handleUpdate(){
        if(text.trim() === "") return
        dispatch(updateTask({id: task._id, taskData: {text}}))
        setIsEditing(false)
    }

    function handleCancel(){
        setText(task.text)
        setIsEditing(false)
    }

    return (
        <> 
            <div className="task">
                <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>

                {isEditing ? (
                    <div className="edit-form">
                        <input 
                            type="text" 
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                            autoFocus
                        />
                        <div>
                            <button
                                onClick={handleUpdate}
                                className="btn btn-sm"
                            >Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="btn btn-sm btn-cancel"
                            >Cancel</button>
                        </div>
                    </ div>
                ): (
                    <>
                        <h2> {task.text} </h2>
                        <button className="close" onClick={() => dispatch(deleteTask(task._id))}>
                            <FaTrash />
                        </button>
                        <button className="edit" onClick={() => { setIsEditing(true) }}>
                            <FaPencilAlt />
                        </button>
                    </>
                )}
            </div>
        </>
    )
}

export default TaskItem