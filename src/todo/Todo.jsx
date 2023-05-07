import React from "react";
import styles from "./Todo.module.scss";
import useTodo from "./useTodo";
import TodoItem from "./components/TodoItem";

const Todo = () => {
  const {
    taskName,
    taskList,
    disableAddButton,
    onChangeTaskName,
    onAddTask,
    onComplete,
    onRemove,
    onKeyDown,
  } = useTodo();

  const renderInput = () => (
    <input
      placeholder={"Enter task name"}
      className={styles.input}
      value={taskName}
      onChange={onChangeTaskName}
      onKeyDown={onKeyDown}
    />
  );

  const renderButton = () => (
    <button
      className={styles.button}
      disabled={disableAddButton}
      onClick={onAddTask}
    >
      {"Add Task"}
    </button>
  );

  const renderTodoList = () => (
    <ul className={styles.list}>
      {taskList.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {renderInput()}
        {renderButton()}
      </div>
      {renderTodoList()}
    </div>
  );
};

export default Todo;
