/**
 * 根据时间字符串计算出时间差
 * @export
 * @param {string} start 形如'12:05'的字符串
 * @param {string} end 形如'12:05'的字符串
 */
export default function calcTimeDifference(start, end) {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");
  return endMinute - startMinute + 60 + (endHour - startHour - 1) * 60;
}
