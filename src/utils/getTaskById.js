/**
 * 根据id拿到任务
 * @export
 * @param {string} id
 */
export default function getTasksByDate(id) {
  const localTasks = localStorage.getItem("tasks");
  if (localTasks) {
    localTasks.forEach((task) => {
      if (task.id === id) {
        return task;
      }
    });
  }
  return null;
}
