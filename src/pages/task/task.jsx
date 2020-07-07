import React from 'react';
import css from './task.module.scss';
import { withRouter, Link } from 'react-router-dom';

import WEEK from '../../constants/week';

function Task(props) {
  const date = new Date(Number(props.match.params.date));
  return (
    <div className={css['index']}>
      <div className={css['title']}>
        <div className={css['title-date']}>
          {`${date.getMonth() + 1}月${date.getDate()}日 ${WEEK[date.getDay() - 1].zh}`}
        </div>
        <Link to='/add'>
          <div className={css['title-add']}>添加新任务</div>
        </Link>
      </div>
    </div>
  )
}
export default withRouter(Task);