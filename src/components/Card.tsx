import styles from "./Card.module.css";
import { Trash } from "@phosphor-icons/react";
export function Card() {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" className={styles.checkbox} />
      <label className={styles.label}>Card</label>
      <button className={styles.button}>
        <Trash size={20}/>
      </button>
    </div>
  );
}
