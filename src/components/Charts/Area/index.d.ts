import * as React from 'react';

export interface IAxis {
    title: any;
    line: any;
    gridAlign: any;
    labels: any;
    tickLine: any;
    grid: any;
}

export interface IAreaProps {
    color?: string;
    height: number;
    borderColor?: string;
    line?: boolean;
    animate?: boolean;
    xAxis?: IAxis;
    yAxis?: IAxis;
    data: Array<{
        x: number;
        y: number;
    }>;
}

export default class Area extends React.Component<IAreaProps,any>{}