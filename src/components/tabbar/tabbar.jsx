import React, { useContext } from 'react';
import css from './tabbar.module.scss';
import { INDEX, PROFILE } from '../../constants/pages';
import { THEME, GREY } from '../../constants/colors';
import { AppContext } from '../../App';

import indexG from '../../assets/index-G.svg';
import indexB from '../../assets/index-B.svg';
import profileG from '../../assets/profile-G.svg';
import profileB from '../../assets/profile-B.svg';

export default function TabBar() {
  const { curPage, setCurPage } = useContext(AppContext);
  return (
    <div className={css['index']}>
      <div className={css['item']} onClick={() => setCurPage(INDEX)}>
        <img alt="index" src={curPage === INDEX ? indexB : indexG} />
        <span style={{ color: curPage === INDEX ? THEME : GREY }}>工作</span>
      </div>
      <div className={css['item']} onClick={() => setCurPage(PROFILE)}>
        <img alt="profile" src={curPage === PROFILE ? profileB : profileG} />
        <span style={{ color: curPage === PROFILE ? THEME : GREY }}>我的</span>
      </div>
    </div>
  )
}