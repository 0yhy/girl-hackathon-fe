import React, { useState, createContext } from 'react';
import css from './index.module.scss';

import TabBar from '../../components/tabbar/tabbar';
import { CALENDAR } from '../../constants/pages';
import Calendar from '../../components/calendar/calendar';
import { withRouter } from 'react-router-dom';

export const IndexContext = createContext();

function Index() {
  const [curPage, setCurPage] = useState(CALENDAR);
  return (
    <div>
      <div className={css['main']}>
        {curPage === CALENDAR && <Calendar />}
        {/* {curPage === PROFILE && <Calendar />} */}
      </div>
      <IndexContext.Provider value={{ curPage, setCurPage }}>
        <TabBar />
      </IndexContext.Provider>
    </div>
  )
}
export default withRouter(Index);