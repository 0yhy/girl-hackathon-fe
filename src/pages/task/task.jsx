import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import css from './task.module.scss';

import WEEK from '../../constants/week';
import ICONS from '../../constants/icons';
import transferDate from '../../utils/transferDate';
import getTasksByDate from '../../utils/getTasksByDate';
import calcTimeDifference from '../../utils/calcTimeDifference';
import { COLORS } from '../../constants/colors';
import Back from '../../components/back/back';

import doneIcon from '../../assets/done.svg';

function Task(props) {
  // 当前页面的日期
  const chosenDate = new Date(Number(props.match.params.date));
  // 当天的所有任务
  const [dailyTasks, setDailyTasks] = useState([
    { name: '写项目', note: '备注啊啊啊', icon: 3, start: '20:30', end: '21:30' },
    { name: '写项目1', note: '备注啊啊啊', icon: 2, start: '20:30', end: '21:30' },
    { name: '写项目2', note: '备注啊啊啊', icon: 5, start: '20:30', end: '21:30' },
    { name: '写项目3', note: '备注啊啊啊', icon: 8, start: '20:30', end: '21:30' }
  ]);
  // 一周任务
  const [weeklyTasks, setWeeklyTasks] = useState([]);
  useEffect(() => {
    // 获取当天任务
    setDailyTasks(getIntradayTasks());
    // 获取一周任务
    setWeeklyTasks(getWeeklyTasks());
  }, [])
  const getIntradayTasks = () => {
    return getTasksByDate(transferDate(chosenDate));
  }
  const getWeeklyTasks = () => {
    const res = [];
    const curDay = chosenDate.getDay();
    const curDate = chosenDate.getDate();
    for (let i = curDate - (curDay - 1); i <= curDate + (7 - curDay); ++i) {
      const date = new Date(chosenDate.setDate(i));
      res.push({
        date: i,
        tasks: getTasksByDate(transferDate(date))
      })
    };
    console.log(res);
    return res;
  }
  return (
    <div className={css['index']}>
      <Back onBack={() => props.history.go(-1)} />
      {/* 标题栏 */}
      <div className={css['title']}>
        <div className={css['title-date']}>
          {`${chosenDate.getMonth() + 1}月${chosenDate.getDate()}日 ${WEEK[chosenDate.getDay() - 1].zh}`}
        </div>
        <Link
          to={{
            pathname: `/add`,
            state: {
              date: transferDate(chosenDate),
              start: `${`${new Date().getHours() < 10 ? '0' : ''}${new Date().getHours()}`}:${`${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}`}`,
              end: `${`${new Date().getHours() < 10 ? '0' : ''}${new Date().getHours()}`}:${`${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}`}`,
            }
          }}
          style={{ textDecoration: 'none' }}
        >
          <div className={css['title-add']}>添加新任务</div>
        </Link>
      </div>
      {/* 当天任务 */}
      <div className={css['tasks']}>
        {dailyTasks.map(task => (
          <Link
            key={task.id}
            to={{ pathname: `/detail`, state: task.id }}
            className={css['tasks-item']}
            style={{ textDecoration: 'none' }}
          >
            <img alt="" src={ICONS[task.icon]} />
            <div className={css['tasks-item-text']}>
              <div className={css['tasks-item-text-title']}>{task.name} {task.start}~{task.end}</div>
              <div className={css['tasks-item-text-note']}>{task.note}</div>
            </div>
            <img alt="done" hidden={!task.done} src={doneIcon} />
          </Link>
        ))}
      </div>
      {/* 一周任务 */}
      <div className={css['weeks']}>
        {weeklyTasks.map((daily, index) => (
          <div key={daily.date} className={css['weeks-week']}>
            <div>{WEEK[index].en}</div>
            {daily.tasks.map(task => (
              <Link
                key={task.id}
                className={css['weeks-week-task']}
                style={{
                  minHeight: Math.floor(calcTimeDifference(task.start, task.end) / 10) * 10,
                  backgroundColor: task.done ? '#dadada' : COLORS[Math.floor((Math.random() * (COLORS.length)))],
                  textDecoration: 'none'
                }}
                to={{ pathname: '/detail', state: task.id }}
              >
                <div>{task.name}</div>
                <div>{task.start}{task.end === task.start ? '' : `-${task.end}`}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default withRouter(Task);