import React, {JSX} from "react";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskPropsType>
}

export type TaskPropsType = {
    id: number,
    isDone: boolean,
    title: string
}
export const Todolist = ({title, tasks}:TodolistPropsType) => {

    const tasksElements: Array<JSX.Element> | JSX.Element =

        tasks.length > 0 ? tasks.map(task=>{
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    }) :
            <span>No tasks to complete</span>

    return (
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksElements}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )
}