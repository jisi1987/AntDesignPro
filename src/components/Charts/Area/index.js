import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';
import styles from '../index.less';

@autoHeight()
export default class Area extends React.Component {
    render() {
        const {
            height,
            data = [],
            forceFit = true,
            scale = {},
            color = '',
            borderColor = '',
            borderWidth = 2,
            line,
            xAxis,
            yAxis,
            animate = true,
        } = this.props;

        const chartHeight = height + 54;
        const tooltip = [
            'x*y',
            (x, y) => ({
                name: x,
                value: y,
            }),
        ];

        return (
            <div className={styles.Chart} style={{ height }}>
                <div className={styles.chartContent}>
                    <Chart
                        animate={animate}
                        height={chartHeight}
                        data={data}
                        scale={scale}
                        forceFit={forceFit}
                    >
                        <Axis
                            name="x"
                        />
                        <Axis
                            name="y"
                        />
                        <Tooltip crosshairs={{ type: 'line' }} />
                        <Geom
                            type="area"
                            position="x*y"
                            color={color}

                        />
                        <Geom type="line" position="x*y" color={borderColor} size={borderWidth} tooltip={false}/>
                    </Chart>
                </div>
            </div>
        );
    }
}
