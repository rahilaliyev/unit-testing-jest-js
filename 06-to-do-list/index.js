let allTasks = [];
let markingTasksAsDone = [];

function addTask(task, isBool) {
  allTasks.push({ task, isBool });
  return allTasks;
}

function deleteTask(id) {
  if (allTasks.length === 0) {
    throw new Error("There is no task for deleting");
  }
  allTasks = allTasks.filter(el => el.id !== id);
  return allTasks;
}

function markTaskAsDone(id) {
  markingTasksAsDone.push(allTasks[id]);
  return markingTasksAsDone;
}

module.exports = { addTask, deleteTask, markTaskAsDone, allTasks, markingTasksAsDone };
