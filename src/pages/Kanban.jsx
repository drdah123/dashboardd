import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../componenets';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentLanguage } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 rounded-3xl bg-white md:p-10">
      {currentLanguage === 'Arabic' && (
        <Header category="تطبيق" title="لتقويم" />
      )}
      {currentLanguage === 'English' && (
        <Header category="app" title="kanban" />
      )}
      <KanbanComponent
        id="Kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
