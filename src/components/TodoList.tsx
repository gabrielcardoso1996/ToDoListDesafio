import { CountHeader } from "./CountHeader";
import styles from "./TodoList.module.css";
import clipBoard from "../assets/clipboard.svg";
import { Card } from "./Card";
import { SubmitAction } from "./SubmitAction";
import { useState } from "react";

interface ITask {
  id: number;
  task: string;
  completed: boolean;
}

export function TodoList() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const completedTasks = tasks.filter((task) => task.completed).length;

  const addTask = (task: string) => {
    const newTask = {
      id: Math.random(),
      task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: number) => {
    //reduce to remove value in array
    const updatedTasks = tasks.reduce((acc, task) => {
      if (task.id !== id) {
        acc.push(task);
      }
      return acc;
    }, [] as ITask[]);
    setTasks(updatedTasks);
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    // order finishied tasks to the end of the list
    updatedTasks.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <SubmitAction addTask={addTask} />
      <CountHeader totalTasks={tasks.length} completedTasks={completedTasks} />
      <div className={styles.wrapper}>
        {tasks.length === 0 && (
          <div className={styles.empty}>
            <img src={clipBoard} alt="Clipboard" />
            <h5>Você ainda não tem tarefas cadastradas</h5>
            <label>Crie tarefas e organize seus itens a fazer</label>
          </div>
        )}
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}
