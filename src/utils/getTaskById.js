/**
 * 根据id拿到任务在数组中的位置
 * @export
 * @param {string} id
 */
export default function getTaskById(id) {
  const localTasks = JSON.parse(localStorage.getItem("tasks"));
  if (localTasks) {
    for (let i = 0; i < localTasks.length; ++i) {
      if (localTasks[i].id === id) {
        return { task: localTasks[i], index: i };
      }
    }
  }
  return { task: { date: "" }, index: -1 };
}
