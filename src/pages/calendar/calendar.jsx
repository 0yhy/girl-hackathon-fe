import React, { useEffect, useState } from 'react';
import css from './calendar.module.scss';

import { THEME, GREY } from '../../constants/colors';
import WEEK from '../../constants/week';
import MONTH from '../../constants/month';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { Link } from 'react-router-dom';
import getTasksByDate from '../../utils/getTasksByDate';
import transferDate from '../../utils/transferDate';
import calcTimeDifference from '../../utils/calcTimeDifference';
import ICONS from '../../constants/icons';

const rows = 6, cols = 7;

export default function Calendar() {
  const [dateData, setDateData] = useState([], [], [], [], [], []);
  const [curMonth, setCurMonth] = useState(10);
  const [curYear, setCurYear] = useState(2020);
  const [nextTask, setNextTask] = useState(null);
  const pageUp = () => {
    if (curMonth !== 1) {
      getDateDataByYearAndMonth(`${curYear}-${curMonth - 1}`);
      setCurMonth(curMonth - 1);
    }
    else {
      getDateDataByYearAndMonth(`${curYear - 1}-${12}`);
      setCurMonth(12);
      setCurYear(curYear - 1);
    }
  }
  const pageDown = () => {
    if (curMonth !== 12) {
      getDateDataByYearAndMonth(`${curYear}-${curMonth + 1}`);
      setCurMonth(curMonth + 1);
    }
    else {
      getDateDataByYearAndMonth(`${curYear + 1}-${1}`);
      setCurMonth(1);
      setCurYear(curYear + 1);
    }
  }
  /**
   * 根据传入日期的年月计算出日历显示的范围
   * @param {string} date 形如'2000-05'的字符串
   */
  const getDateDataByYearAndMonth = (date) => {
    const firstDate = new Date(new Date(date).setDate(1));
    const firstDay = firstDate.getDay();
    const beforeDays = firstDay - 2;
    const data = [[], [], [], [], [], []];
    for (let i = -beforeDays, cnt = 0; cnt < rows; i += cols, ++cnt) {
      for (let j = i; j <= i + 6; ++j) {
        data[cnt].push(new Date(new Date(date).setDate(j)));
      }
    }
    setDateData(data);
  }
  const getNextTask = () => {
    const tasks = getTasksByDate(transferDate(new Date()));
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
    for (let i = 0; i < tasks.length; ++i) {
      if (calcTimeDifference(time, `${tasks[i].start}:${tasks[i].end}`) > 0) {
        setNextTask(tasks[i]);
        return;
      }
    }
  }
  useEffect(() => {
    const [year, month] = transferDate(new Date()).split('-');
    getDateDataByYearAndMonth(`${year}-${month}`);
    setCurMonth(new Date().getMonth() + 1);
    setCurYear(year);
    getNextTask();
  }, [])
  return (
    <div className={css['index']}>
      <div className={css['calendar']}>
        <div className={css['calendar-header']}>
          <img alt='left' src={arrowLeft} onClick={pageUp} />
          <div>
            {MONTH[curMonth - 1].en}  {curYear}
          </div>
          <img alt='right' src={arrowRight} onClick={pageDown} />
        </div>
        <div className={css['calendar-body']}>
          <div className={css['calendar-week']} style={{ color: THEME }}>
            {WEEK.map(day => (
              <div key={day.zh} className={css['calendar-week-day']}>{day.en}</div>
            ))}
          </div>
          {dateData.map((week, index) => (
            <div key={index} className={css['calendar-week']}>
              {week.map(day => (
                <Link
                  key={day}
                  to={`/task/${day.getTime()}`}
                  className={`${css['calendar-week-day']}`}
                  style={{ textDecoration: 'none', color: GREY }}
                >
                  <div
                    className={`${day.getMonth() === new Date().getMonth() ? css['curMonth'] : css['notCurMonth']} ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? css['curDate'] : ''} `}
                  >
                    {day.getDate()}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={css['next']}>
        <div className={css['next-title']}>下个任务</div>
        {nextTask && <div className={css['next-content']}>
          <img alt="" src={ICONS[nextTask.icon]} />
          <div className={css['next-content-text']}>
            <div className={css['next-content-text-title']}>{nextTask.name} {nextTask.start}~{nextTask.end}</div>
            <div className={css['next-content-text-note']}>{nextTask.note ? nextTask.note : '无'}</div>
          </div>
        </div>}
      </div>
    </div >
  )
}