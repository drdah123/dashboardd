import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,
  Page,Search, Inject, Toolbar  } from '@syncfusion/ej2-react-grids'
  import { employeesData, employeesGrid } from '../data/dummy'
  import { Header } from '../componenets'
import { useStateContext } from '../contexts/ContextProvider'


  const Employees = () => {
    const {currentLanguage}= useStateContext()
    return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl sm:mt-14'>
      {currentLanguage=== 'Arbic' &&<Header category="صفحة" title='الموظفين' />}
      {currentLanguage=== 'English' &&<Header category="page" title='employees' />}
      <GridComponent
      id='gridcomp'
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
      >
        <ColumnsDirective>
      {employeesGrid.map((item, index) =>(
        <ColumnDirective key={index} {...item} />
      ))}
      </ColumnsDirective>
      <Inject services={[ Page, Search, Toolbar ]} />
      </GridComponent>
      </div>
  )
}

export default Employees