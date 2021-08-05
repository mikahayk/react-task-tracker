import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, onToggleReminder }) {
    return (
        <>
            <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
                <h3>{task.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => {onDelete(task.id)}} /></h3>
                <p>{task.day}</p>
            </div>
        </>
    )
}

export default Task

