import { useState } from "react";

function AddTask({ onAdd, toggleAddTaskForm }) {

    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        console.log(`Add task form submitted`);
        e.preventDefault();


        // Validate inputs
        if(name === '') {
            alert('Please add a task name');
            return;
        }
        if(day === '') {
            alert('Please add task day and time');
            return;
        }


        onAdd({name, day, reminder});
        toggleAddTaskForm();


        // Clear inputs after submission
        setName('');
        setDay('');
        setReminder(false)
    }



    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="name">Task name</label>
                <input type="text" name="name" placeholder="Task name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day and Time</label>
                <input type="text" name="day" placeholder="Day and Time" onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="name">Set reminder</label>
                <input type="checkbox" name="reminder" onChange={(e) => setReminder(e.target.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
