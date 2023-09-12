const { addTask, deleteTask, markTaskAsDone, allTasks, markingTasksAsDone } = require("./index");

describe("Task Management:", () => {
  beforeEach(() => {
    allTasks.length = 0;
    markingTasksAsDone.length = 0;
  });

  test("should add task to allTasks", () => {
    const taskCount = addTask("Do homework", false).length;
    expect(taskCount).toBe(1);
  });

  test("should delete task from allTasks", () => {
    const addedTask = addTask("Study JavaScript", false)[0];
    const remainingTasks = deleteTask(addedTask.id);
    expect(remainingTasks).toHaveLength(0);
  });

  test("should throw an error when deleting from an empty list", () => {
    expect(() => deleteTask(1)).toThrow("There is no task for deleting");
  });

  test("should mark task as done", () => {
    const addedTask = addTask("Do Elchin's homeworks", false);
    const doneTasks = markTaskAsDone(addedTask.id);
    expect(doneTasks).toHaveLength(1);
  });
});
