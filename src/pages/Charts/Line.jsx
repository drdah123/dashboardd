import React from 'react'
import { LineChart, Header } from '../../componenets'
import { useStateContext } from '../../contexts/ContextProvider'

const Line = () => {
  const {currentLanguage} = useStateContext()
  return (
    <div className="m-4 mt-24 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {currentLanguage=== 'Arbic' &&<Header category="الرسومات" title='الخط' />}
      {currentLanguage=== 'English' &&<Header category="charts" title='line' />}
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line