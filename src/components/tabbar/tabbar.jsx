import React, { useContext } from 'react';
import css from './tabbar.module.scss';
import { CALENDAR, PROFILE } from '../../constants/pages';
import { THEME, GREY } from '../../constants/colors';
import { IndexContext } from '../../pages/index';

import indexG from '../../assets/index-G.svg';
import indexB from '../../assets/index-B.svg';
import profileG from '../../assets/profile-G.svg';
import profileB from '../../assets/profile-B.svg';

export default function TabBar() {
  const { curPage, setCurPage } = useContext(IndexContext);
  return (
    <div className={css['index']}>
      <div className={css['item']} onClick={() => setCurPage(CALENDAR)}>
        <img alt="index" src={curPage === CALENDAR ? indexB : indexG} />
        <span style={{ color: curPage === CALENDAR ? THEME : GREY }}>工作</span>
      </div>
      <div className={css['item']} onClick={() => setCurPage(PROFILE)}>
        <img alt="profile" src={curPage === PROFILE ? profileB : profileG} />
        <span style={{ color: curPage === PROFILE ? THEME : GREY }}>我的</span>
      </div>
    </div>
  )
}