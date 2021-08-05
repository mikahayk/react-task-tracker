import Button from "./Button"

function Header({ title, onAdd, showAddTask }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} text={showAddTask ? 'Close' : 'Add task'} color={showAddTask ? 'red' : 'green'} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
