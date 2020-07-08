import React from 'react';
import css from './calendar.module.scss';

import { THEME } from '../../constants/colors';
import WEEK from '../../constants/week';
import MONTH from '../../constants/month';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

const dateData = [[], [], [], [], [], []];
const rows = 6, cols = 7;
const firstDate = new Date(new Date().setDate(1));
const firstDay = firstDate.getDay();
const beforeDays = firstDay - 2;
for (let i = -beforeDays, cnt = 0; cnt < rows; i += cols, ++cnt) {
  for (let j = i; j <= i + 6; ++j) {
    dateData[cnt].push(new Date(new Date().setDate(j)));
  }
}

export default function Calendar() {
  return (
    <div className={css['index']}>
      <div className={css['calendar']}>
        <div className={css['calendar-header']}>
          <img alt='left' src={arrowLeft} />
          <div>
            {MONTH[new Date().getMonth()].en}  {new Date().getFullYear()}
          </div>
          <img alt='right' src={arrowRight} />
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
                <div
                  key={day}
                  className={`${css['calendar-week-day']}`}
                >
                  <Link
                    to={`/task/${day.getTime()}`}
                    className={`${day.getMonth() === new Date().getMonth() ? css['curMonth'] : ''} ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? css['curDate'] : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {day.getDate()}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}