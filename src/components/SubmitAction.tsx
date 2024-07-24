import { useState } from "react";
import styles from "./SubmitAction.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface ISubmitActionProps {
  addTask: (task: string) => void;
}

export function SubmitAction({ addTask }: ISubmitActionProps) {
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    addTask(description);
    setDescription("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" className={styles.button} onClick={handleAddTask}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
