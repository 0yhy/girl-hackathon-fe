import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import css from './detail.module.scss';

import Modal from '../../components/modal/modal';
import BKS from '../../constants/bks';
import { GREY } from '../../constants/colors';
import getTaskById from '../../utils/getTaskById';
import Back from '../../components/back/back';

function Detail(props) {
  const id = props.location.state;
  const task = getTaskById(id).task;
  const [modalStyle, setModalStyle] = useState({ display: 'none' });
  const [modalText, setModalText] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [bkIndex] = useState(Math.floor(Math.random() * (BKS.length - 1)));
  /**
   * 点击删除该任务的确认
   */
  const onConfirmDelete = () => {
    hideModal();
    const tasks = [...JSON.parse(localStorage.getItem('tasks'))];
    tasks.splice(getTaskById(id).index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    props.showToast('已删除', 1000);
    setTimeout(() => {
      props.history.go(-1);
    }, 1000);
  }
  const onConfirmDone = () => {
    hideModal();
    const tasks = [...JSON.parse(localStorage.getItem('tasks'))];
    tasks[getTaskById(id).index].done = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    props.showToast('已完成', 1000);
    setTimeout(() => {
      props.history.go(-1);
    }, 1000);
  }
  /**
   * 点击"删除该任务"
   */
  const onClickGiveUp = () => {
    showModal();
    setModalText('删除该任务');
    setModalContent('是否删除该任务？');
  }
  /**
   * 点击"已完成"
   */
  const onClickDone = () => {
    showModal();
    setModalText('完成任务');
    setModalContent(`是否完成${task.name}？`);
  }
  const showModal = () => {
    setModalStyle({ display: 'flex' });
  }
  const hideModal = () => {
    setModalStyle({ display: "none" });
  }
  return (
    <div className={css['index']}>
      <Modal
        title={modalText}
        content={modalContent}
        style={modalStyle}
        onConfirm={modalText === '完成任务' ? onConfirmDone : onConfirmDelete}
        onCancel={hideModal}
      />
      <Back onBack={() => props.history.go(-1)} />
      <div
        className={css['background']}
        style={{ backgroundImage: `url(${BKS[bkIndex]})` }}
      >
        <div className={css['background-title']}>{task.name}</div>
        <div className={css['background-content']}>
          <div className={css['background-content-date']}>{task.date.split('-')[0]}年{task.date.split('-')[1]}月{task.date.split('-')[2]}日</div>
          <div className={css['background-content-time']}>{task.start}-{task.end}</div>
        </div>
      </div>
      <div className={css['note']}>
        <div className={css['note-title']}>备注</div>
        <div>{task.note ? task.note : '无'}</div>
      </div>
      <div className={css['buttons']}>
        <div
          className={css['buttons-done']}
          onClick={onClickDone}
        >
          已完成
        </div>
        <div
          className={css['buttons-del']}
          onClick={onClickGiveUp}
        >
          删除该任务
        </div>
        <div className={css['buttons-edit']}>
          <Link
            to={{ pathname: '/edit', state: task }}
            style={{ textDecoration: 'none', color: GREY }}
          >
            编辑该任务
          </Link>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Detail);