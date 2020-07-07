import React from 'react';
import { withRouter } from 'react-router-dom';
import css from './add.module.scss';
import ICONS from '../../constants/icons';

function add(props) {
  return (
    <div className={css['index']}>
      <div className={css['title']}>
        新增任务
      </div>
      <div className={css['icons']}>
        {ICONS.map(icon => (
          <img key={icon} className={css['icons-icon']} src={icon} />
        ))}
      </div>
      <div className={css['main']}>
        <div className={`${css['name']}`}>
          <div className={`${css['name-subtitle']} ${css['subtitle']}`}>
            任务名称
          </div>
          <input className={`${css['name-input']}`} type='text' />
          <div className={`${css['name-note']}`}>
            <div>备注</div>
            <textarea />
          </div>
        </div>
        <div className={`${css['date']}`}>
          <div className={`${css['date-subtitle']} ${css['subtitle']}`}>
            任务日期
          </div>
          <input type='date' />
        </div>
        <div className={`${css['time']}`}>
          <div className={`${css['time-item']}`}>
            <div className={`${css['subtitle']}`}> 起始时间</div>
            <input type='time' />
          </div>
          <div className={`${css['time-item']}`}>
            <div className={`${css['subtitle']}`}>结束时间</div>
            <input type='time' />
          </div>
        </div>
        <div className={css['buttons']}>
          <div className={`${css['buttons-item']} ${css['buttons-confirm']}`}>
            确定
          </div>
          <div
            className={`${css['buttons-item']} ${css['buttons-cancel']}`}
            onClick={() => props.history.go(-1)}
          >
            返回
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(add);