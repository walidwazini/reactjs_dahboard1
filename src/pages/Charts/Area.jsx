import React from 'react'
import {
  ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective,
  SplineAreaSeries, DateTime, Legend, 
} from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

const Area = () => {
  const { currentMode } = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className=" mb-10">
        <div>
          <p className="text-lg text-gray-400">Chart</p>
          <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">Area</p>
        </div>
        <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">
          Inflation Rate Percentage
        </p>
      </div>
      <div className="w-full">
        <ChartComponent
          id='charts'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area