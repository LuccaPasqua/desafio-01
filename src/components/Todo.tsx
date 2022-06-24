import styles from './Todo.module.css'

import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'


export function Todo(){
  const [tasks, setTasks] = useState([])

  const [totalCompletlyTasks, setTotalCompletlyTasks] = useState(0)

  const [newTaskText, setNewTaskText] = useState('')

  function onAddOneTotalCompletlyTasks(){
    setTotalCompletlyTasks( totalCompletlyTasks + 1)
  }

  function onRemoveOneTotalCompletlyTasks(){
    setTotalCompletlyTasks( totalCompletlyTasks - 1)
  }

  function onDeleteTask(taskToDelete: number){
    const tasksWithoutDetetedOne = tasks.filter(task =>{
      return task.id !== taskToDelete
    })

    setTasks(tasksWithoutDetetedOne)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    setNewTaskText('')
    const newTask = {
      id: Math.random(),
      content: newTaskText,
    }

    setTasks([...tasks, newTask])
  }

  return(
    <div className={styles.todo}>
      <form className={styles.create} onSubmit={handleCreateNewTask}>
        <input 
          type='text' 
          placeholder='Adicionar uma nova tarefa' 
          onChange={handleNewTaskChange}
          value={newTaskText}
          required
        />
        <button>Criar <PlusCircle /></button> 
      </form>

      <div className={styles.list}>
        <div>
          <span className={styles.tarefasCriadas}>Tarefas criadas <div>{tasks.length}</div></span>
          <span className={styles.tarefasConcluidas}>Concluídas <div>{totalCompletlyTasks}</div></span>
        </div>

        <div className={styles.taskList}>
          {tasks.map(task =>{
            return(
              <Task 
                key={task.id}
                content={task.content}
                id={task.id}
                onAddOneTotalCompletlyTasks={onAddOneTotalCompletlyTasks}
                onRemoveOneTotalCompletlyTasks={onRemoveOneTotalCompletlyTasks}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}