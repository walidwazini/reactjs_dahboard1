import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Selection, Inject, Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl ' >
      <Header title={'Customers'} category={'Page'} />
      <GridComponent
        dataSource={customersData}
        width={'auto'}
        toolbar={['Search', 'Delete']}
        editSettings={{ allowAdding: true, allowEditing: true }}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit, Filter, Toolbar, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers