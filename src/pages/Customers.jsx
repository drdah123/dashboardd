import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Edit,
   Sort, Page, Inject, Selection, Toolbar, Filter } from '@syncfusion/ej2-react-grids'
   import { customersData, customersGrid } from '../data/dummy'
   import { Header } from '../componenets'
import { useStateContext } from '../contexts/ContextProvider'
const Customers = () => {
  const {currentLanguage} = useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl sm:mt-14'>
      {currentLanguage=== 'Arabic' &&<Header category="صفحة" title='العملاء' />}
      {currentLanguage=== 'English' &&<Header category="page" title='customers' />}
      <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting: true, allowEditing: true}}
      width='auto'
      >
        <ColumnsDirective>
      {customersGrid.map((item, index) =>(
        <ColumnDirective key={index} {...item} />
      ))}
      </ColumnsDirective>
      <Inject services={[ Page,Sort, Edit, Selection, Filter, Toolbar ]} />
      </GridComponent>
      </div>
  )
}

export default Customers