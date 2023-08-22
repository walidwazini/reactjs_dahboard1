import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, DateTime, Legend, Tooltip, LineSeries
} from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

const LineChart = () => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent
      id='line-chart'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      background={currentMode === 'dark' ? '#33373e' : 'white'}
      border={{ color: 'white', width: 2 }}
      tooltip={{ enable: true }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart