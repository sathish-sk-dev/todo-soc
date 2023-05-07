import { useState } from "react";
import { completeTask, getTask, removeTask } from "./TodoUtils";

const useTodo = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const onChangeTaskName = (event) => setTaskName(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTask();
    }
  };

  const onAddTask = () => {
    const task = getTask(taskName);
    setTaskList((tasks) => [...tasks, task]);
    setTaskName("");
  };

  const onComplete = (id) => {
    const tasks = completeTask(id, taskList);
    setTaskList(tasks);
  };

  const onRemove = (id) => {
    const tasks = removeTask(id, taskList);
    setTaskList(tasks);
  };

  const disableAddButton = taskName.trim() === "";

  return {
    taskName,
    taskList,
    disableAddButton,
    onAddTask,
    onChangeTaskName,
    onComplete,
    onRemove,
    onKeyDown,
  };
};

export default useTodo;
