import React from "react";
import cx from "classnames";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ task, onComplete, onRemove }) => {
  const { id, name, isCompleted } = task;

  const completedStyles = isCompleted ? styles.completed : "";

  return (
    <li key={id} className={styles.container}>
      <div className={cx(styles.name, completedStyles)}> {name} </div>
      <button
        disabled={isCompleted}
        className={styles.button}
        onClick={() => onComplete(id)}
      >
        {"Complete"}
      </button>
      <button className={styles.remove} onClick={() => onRemove(id)}>
        {"x"}
      </button>
    </li>
  );
};

export default TodoItem;
