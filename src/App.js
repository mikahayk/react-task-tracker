import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks();
  }, []);

  const fetchTasks = async function() {
    const response = await fetch(`http://localhost:5000/tasks`);
    const data = await response.json();
    return data;
  }

  const fetchTask = async function(id) {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  }


  const addTask = async (task) => {
    
    const response = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    
    const data = await response.json();

    // Update UI
    setTasks([...tasks,  data]);
    console.log(`Add new task with id ${data.id}`);
  }


  // Delete task
  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      'method': 'DELETE'
    });

    // Update UI
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(`Delete task with id ${id}`);
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder }    

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    const data = await response.json();
    
    // Update UI
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder } : task));
    console.log(`Toggle task reminder with id ${id}`);
  }


  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask ? <AddTask toggleAddTaskForm={ () => setShowAddTask(false)} onAdd={addTask} /> : ''} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
