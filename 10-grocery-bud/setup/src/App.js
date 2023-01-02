import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [ displayMessage, setDisplayMessage ] = useState(
    {
      display: false,
      type: "error",
      content: "An error occured"
    }
  )

  const [ newTask, setNewTask ] = useState({ title: "" })
  const [ tasksList, setTasksList ] = useState([])
  const [ isEditing, setIsEditing ] = useState(false)

  const handleInputChange = e => {
    setNewTask(prevState => {
      if (newTask.id) return { ...newTask, title: e.target.value }
      if (!newTask.id) return { title: e.target.value, id: Date.now().toString(36) + Math.random().toString(36) }
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const existingTask = tasksList.find(task => {
      return task.id === newTask.id
    })

    if (existingTask) {
      const result = tasksList.map(item => item.id === newTask.id ? { ...item, title: newTask.title } : item)

      setTasksList(result)

      setDisplayMessage({ display: true, type: "success", content: "Task Edited !" })
      setNewTask({ title: "" })
      setIsEditing(false)
    } else {
      setTasksList(tasksList => [ ...tasksList, newTask ])

      setDisplayMessage({ display: true, type: "success", content: "New task added !" })
      setNewTask({ title: "" })
    }
  }

  const handleDelete = id => {
    const filteredList = tasksList.filter(task => task.id !== id)
    setTasksList(filteredList)

    setDisplayMessage({ display: true, type: "error", content: "Task deleted !" })
  }

  const handleDeleteAll = () => {
    setTasksList([])
    setDisplayMessage({ display: true, type: "error", content: "All Tasks deleted !" })
  }

  const handleEdit = id => {
    const foundTask = tasksList.find(task => task.id === id)
    setNewTask(foundTask)
    setIsEditing(true)
  }

  useEffect(() => {
    let timer
    if (displayMessage.display) {
      timer = setTimeout(() => {
        setDisplayMessage({ ...displayMessage, display: false })
      }, 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [ displayMessage ])

  const alert = <Alert type={displayMessage.type === "error" ? "error" : "success"} message={displayMessage.content} />

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleFormSubmit}>
      {displayMessage.display && alert}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" placeholder='e.g. eggs' value={newTask.title} className="grocery" onChange={handleInputChange} />
        <button className="submit-btn" type='submit'>{isEditing ? "edit" : "submit"}</button>
      </div>
    </form>
    <div className="grocery-container">
      <div className="grocery-list">
        {tasksList.map(task => {
          return <List title={task.title} id={task.id} key={task.id} onDelete={handleDelete} onEdit={handleEdit} />
        })
        }
      </div>
      <button className="clear-btn" onClick={handleDeleteAll}>clear items</button>
    </div>
  </section>
}

export default App
