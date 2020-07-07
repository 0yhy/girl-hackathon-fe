import React, { useState, createContext } from 'react';
import { withRouter } from 'react-router-dom';
import css from './index.module.scss';

import TabBar from '../../components/tabbar/tabbar';
import Calendar from '../../components/calendar/calendar';
import { CALENDAR } from '../../constants/pages';

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