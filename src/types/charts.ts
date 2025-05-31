
interface ChartDataItem {
    [key: string]: string | number;
}

interface LineChartType {
    name?: string;
    data?: ChartDataItem[];
}

interface PieChartType {
    name?: string;
    data?: { name: string; total: number }[];
}

interface BarChartType {
    name?: string;
    data?: ChartDataItem[];
}

export interface ChartDataProps {
    data?: {
        line_chart?: LineChartType;
        pie_chart?: PieChartType;
        bar_chart?: BarChartType;
    };
}
