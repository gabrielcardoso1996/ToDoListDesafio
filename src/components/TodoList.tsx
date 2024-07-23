import { CountHeader } from "./CountHeader";
import styles from "./TodoList.module.css";
import clipBoard from "../assets/clipboard.svg";
import { Card } from "./Card";

export function TodoList() {
  return (
    <>
      <CountHeader />
      <div className={styles.wrapper}>
        <div className={styles.empty}>
          <img src={clipBoard} alt="Clipboard" />
          <h5>Você ainda não tem tarefas cadastradas</h5>
          <label>Crie tarefas e organize seus itens a fazer</label>
        </div>
      <Card />
      </div>
    </>
  );
}
