/**
 * 将时间转换为固定格式的时间字符串
 * @export
 * @param {Date} date 时间
 * @param {string} [split='-']
 */
export default function transferDate(date, split = "-") {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}${split}${month}${split}${day}`;
}
