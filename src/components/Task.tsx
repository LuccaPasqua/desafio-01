import { Trash } from 'phosphor-react';
import { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from 'react';
import styles from './Task.module.css'


interface taskProps{
  content: string;
  id: number;
  onAddOneTotalCompletlyTasks: ()=> void;
  onRemoveOneTotalCompletlyTasks: ()=> void;
  onDeleteTask: (taskToDelete: number)=> void;
}

export function Task({
  content, 
  id, 
  onAddOneTotalCompletlyTasks, 
  onRemoveOneTotalCompletlyTasks,
  onDeleteTask
}: taskProps){

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  function handleChangeCheckbox(event: ChangeEvent){
    const isChecked = event.target.checked;
    
    if(isChecked) {
      onAddOneTotalCompletlyTasks()
      setIsCheckboxChecked(true)
    } else {
      onRemoveOneTotalCompletlyTasks()
      setIsCheckboxChecked(false)
    }
  }

  function handleDeleteTask(){
    if(isCheckboxChecked){
      onRemoveOneTotalCompletlyTasks()
    }
    onDeleteTask(id)
  }

  return(
    <div className={styles.divTask}>
      <div>
        <div className={styles.customCheckbox}>
          <input id={id.toString()} type="checkbox" onChange={handleChangeCheckbox} />
          <label htmlFor={id.toString()}></label>
        </div>
        <p>{content}</p>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
      
    </div>
  )
}