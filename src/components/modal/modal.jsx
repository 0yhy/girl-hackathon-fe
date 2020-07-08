import React from 'react';
import css from './modal.module.scss';

export default function Modal(props) {
  return (
    <div className={css['index']} style={props.style}>
      <div className={css['mask']}></div>
      <div className={css['wrapper']}>
        <div className={css['title']}>{props.title}</div>
        <div className={css['content']}>{props.content}</div>
        <div className={css['buttons']}>
          <div className={css['buttons-cancel']} onClick={props.onCancel}>
            {props.cancelText || '取消'}
          </div>
          <div className={css['buttons-confirm']} onClick={props.onConfirm}>
            {props.confirmText || '确定'}
          </div>
        </div>
      </div>
    </div>
  )
}