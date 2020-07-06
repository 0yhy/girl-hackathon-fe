import React, { useState, useEffect } from 'react';
import css from './index.module.scss';
import { THEME } from '../../constants/colors';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

const dateData = [[], [], [], [], [], [], []];
const rows = 6, cols = 7;
const firstDate = new Date(new Date().setDate(1));
const firstDay = firstDate.getDay();
console.log(firstDay);
const beforeDays = firstDay - 2;
for (let i = -beforeDays, cnt = 0; i <= -beforeDays + rows * cols - 1; i += 7, ++cnt) {
  for (let j = i; j <= i + 6; ++j) {
    dateData[cnt].push(new Date(new Date().setDate(j)));
  }
}
console.log(dateData);

export default function Index() {
  return (
    <div className={css['index']}>
      <div className={css['calendar']}>
        <div className={css['calendar-header']}>
          <img alt='left' src={arrowLeft} />
          <div>
            {new Date().getMonth()}  {new Date().getFullYear()}
          </div>
          <img alt='right' src={arrowRight} />
        </div>
        <div className={css['calendar-week']} style={{ color: THEME }}>
          <div className={css['calendar-week-day']}>MON</div>
          <div className={css['calendar-week-day']}>TUE</div>
          <div className={css['calendar-week-day']}>WED</div>
          <div className={css['calendar-week-day']}>THU</div>
          <div className={css['calendar-week-day']}>FRI</div>
          <div className={css['calendar-week-day']}>SAT</div>
          <div className={css['calendar-week-day']}>SUN</div>
        </div>
        {dateData.map(week => (
          <div className={css['calendar-week']}>
            {week.map(day => (
              <div
                className={`${css['calendar-week-day']} ${day.getMonth() === new Date().getMonth() ? css['curMonth'] : ''} ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? css['curDate'] : ''}`}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div >
  )
}