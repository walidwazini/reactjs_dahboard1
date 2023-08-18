import React, { useState } from 'react';
import {
  ScheduleComponent, Agenda, Inject, Resize, DragAndDrop,
  Day, Week, WorkWeek, Month,
} from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-2xl' >
      <Header category={'App'} title={'Calendar'} />
      <ScheduleComponent
        height={'640px'}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar