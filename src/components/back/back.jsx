import React from 'react';
import css from './back.module.scss';

import backIcon from '../../assets/back.svg';

export default function Back(props) {
  return (
    <div className={css['index']} onClick={props.onBack}>
      <div>返回</div>
      <img alt="back" src={backIcon} />
    </div>
  )
}