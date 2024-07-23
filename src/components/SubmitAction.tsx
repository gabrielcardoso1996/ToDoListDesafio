import styles from "./SubmitAction.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function SubmitAction() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="button" className={styles.button}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
