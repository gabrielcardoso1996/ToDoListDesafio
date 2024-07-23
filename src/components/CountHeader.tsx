import styles from "./CountHeader.module.css";

export function CountHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>
        <h5 className={styles.toDo}>Tarefas Criadas</h5>
        <div>
          <span>0</span>
        </div>
      </div>

      <div className={styles.count}>
        <h5 className={styles.finishddddd}>Concluídas</h5>
        <div>
          <span>2 de 5</span>
        </div>
      </div>
    </div>
  );
}
