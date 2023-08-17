import React from 'react'
import { SparklineComponent, SparklineTooltip, Inject } from '@syncfusion/ej2-react-charts'


const Sparkline = ({ id, height, width, data, type,
    color, currentColor }) => {
    return (
        <SparklineComponent
            id={id} height={height} width={width}
            lineWidth={1} valueType='Numeric'
            fill={'red'} border={{ color: 'red', width: 2 }}
            dataSource={data}
            tooltipSettings={{
                visible: true,
                // eslint-disable-next-line no-template-curly-in-string
                format: '${x} : data ${yval}',
                trackLineSettings: { visible: true }
            }}
            markerSettings={{ visible: ['All'], size: 2.5, fill: 'red' }}

            xName='x' yName='yval'
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}

export default Sparkline