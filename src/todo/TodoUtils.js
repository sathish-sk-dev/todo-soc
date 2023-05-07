const generateId = () => Date.now();

const getTask = (taskName) => ({
  id: generateId(),
  name: taskName,
  isCompleted: false,
});

const completeTask = (id, taskList) => {
  return taskList.map((task) => {
    if (task.id === id) {
      task.isCompleted = true;
    }
    return task;
  });
};

const removeTask = (id, taskList) => {
  return taskList.filter((task) => task.id !== id);
};

export { getTask, completeTask, removeTask };
