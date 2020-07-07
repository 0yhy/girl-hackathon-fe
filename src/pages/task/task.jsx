import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import css from './task.module.scss';

import WEEK from '../../constants/week';
import ICONS from '../../constants/icons';

function Task(props) {
  const date = new Date(Number(props.match.params.date));
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks) {
      console.log(localTasks);
      setTasks(localTasks);
    }
  }, [])
  const [tasks, setTasks] = useState([
    { name: '写项目', note: '备注啊啊啊', icon: 3, start: '20:30', end: '21:30' },
    { name: '写项目1', note: '备注啊啊啊', icon: 2, start: '20:30', end: '21:30' },
    { name: '写项目2', note: '备注啊啊啊', icon: 5, start: '20:30', end: '21:30' },
    { name: '写项目3', note: '备注啊啊啊', icon: 8, start: '20:30', end: '21:30' }
  ])
  return (
    <div className={css['index']}>
      {/* 标题栏 */}
      <div className={css['title']}>
        <div className={css['title-date']}>
          {`${date.getMonth() + 1}月${date.getDate()}日 ${WEEK[date.getDay() - 1].zh}`}
        </div>
        <Link to='/add' style={{ textDecoration: 'none' }}>
          <div className={css['title-add']}>添加新任务</div>
        </Link>
      </div>
      {/* 当天任务 */}
      <div className={css['tasks']}>
        {tasks.map(task => (
          <div key={task.name} className={css['tasks-item']}>
            <img alt="" src={ICONS[task.icon]} />
            <div className={css['tasks-item-text']}>
              <div className={css['tasks-item-text-title']}>{task.name} {task.start}~{task.end}</div>
              <div className={css['tasks-item-text-note']}>{task.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default withRouter(Task);