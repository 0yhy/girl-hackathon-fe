/**
 * 根据日期拿到当天的任务并按开始时间排序
 * @export
 * @param {string} date 格式为类'2000-10-27'的字符串
 */
export default function getTasksByDate(date) {
  const localTasks = localStorage.getItem("tasks");
  if (localTasks) {
    return JSON.parse(localTasks)
      .filter((task) => task.date === date)
      .sort((a, b) => a.start.localeCompare(b.start));
  } else {
    return [];
  }
}
