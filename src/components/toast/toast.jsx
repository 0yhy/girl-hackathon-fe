import React from 'react';
import css from './toast.module.scss';

export default function Toast(props) {
  return (
    <div className={css['index']} style={props.style}>
      <div className={css['index-text']}>{props.text}</div>
    </div>
  )
}