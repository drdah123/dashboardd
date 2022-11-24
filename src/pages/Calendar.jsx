import React from 'react'
import { ScheduleComponent,  Day, Week,  Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../componenets'
import { useStateContext } from '../contexts/ContextProvider'

const Calendar = () => {
  const {currentLanguage} = useStateContext()
  return (
    <div className='m-2 md:m-10 mt-24 p-2 bg-white rounded-3xl '>
      {currentLanguage=== 'Arabic' &&<Header category="تطبيق" title='التقويم' />}
      {currentLanguage=== 'English' &&<Header category="app" title='calendar' />}
      <ScheduleComponent
      height='650px'
      eventSettings={{dataSource:scheduleData }}
      selectedDate={new Date(2021,0,10)}
      >
        <Inject services={[Day, Week, Month, Resize, Agenda, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar