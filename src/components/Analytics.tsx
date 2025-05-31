import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'
import type { ChartDataProps } from '../types/charts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics: React.FC<ChartDataProps> = ({ data }) => {
    const line_chart = data?.line_chart ?? { name: '', data: [] };
    const pie_chart = data?.pie_chart ?? { name: '', data: [] };
    const bar_chart = data?.bar_chart ?? { name: '', data: [] };
    const lineChartData = line_chart.data;
    const pieChartData = pie_chart.data;
    const barChartData = bar_chart.data;
    const barChartDataKeys = (barChartData && barChartData.length > 0)
        ? Object.keys(barChartData[0]).filter(key => key !== 'name' && !key.includes('id'))
        : [];
    const lineChartDataKeys = (lineChartData && lineChartData.length > 0)
        ? Object.keys(lineChartData[0]).filter(key => key !== 'name' && !key.includes('id'))
        : [];
    return (
        <>
            <div className='grid grid-cols-12 grid-rows-2 gap-2'>
                <div className='col-span-12 md:col-span-7'>
                    <div className='flex flex-col justify-center items-center bg-base-100 shadow-xl shadow-slate-400 dark:shadow-slate-800 p-4 m-4 rounded-lg'>
                        <h2 className='text-2xl font-bold text-gray-400 dark:text-gray-800'>{line_chart.name}</h2>
                        <div className='container my-2 overflow-auto'>
                            <LineChart
                                width={600}
                                height={300}
                                data={lineChartData}
                                syncId="anyId"
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {lineChartDataKeys.map((key, index) => (
                                    <Line
                                        key={index}
                                        type="monotone"
                                        dataKey={key}
                                        stroke={COLORS[index % COLORS.length]}
                                        activeDot={{ r: 8 }}
                                    />
                                ))}
                                {/* <Line type="monotone" dataKey="engineering" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                            </LineChart>

                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-5'>
                    <div className='flex flex-col justify-center items-center bg-base-100 shadow-xl shadow-slate-400 dark:shadow-slate-800 p-4 m-4 rounded-lg'>
                        <h2 className='text-2xl font-bold text-gray-400 dark:text-gray-800'>{pie_chart.name}</h2>
                        <div className='container my-2 overflow-auto'>
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={pieChartData}
                                    cx={200}
                                    cy={150}
                                    labelLine={false}
                                    label={({ name, percent }) => (
                                        `${name} ${(percent * 100).toFixed(0)}%`
                                    )}
                                    outerRadius={80}
                                    dataKey="total"
                                >
                                    {(pieChartData ?? []).map((_entry: any, index: number) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>
                </div>
                <div className='col-span-12'>
                    <div className='flex flex-col justify-center items-center bg-base-100 shadow-xl shadow-slate-400 dark:shadow-slate-800 p-4 m-4 rounded-lg'>
                        <h2 className='text-2xl font-bold text-gray-400 dark:text-gray-800'>{bar_chart.name}</h2>
                        <div className='container my-2 flex justify-center items-center overflow-auto'>
                            <BarChart
                                width={600}
                                height={300}
                                data={barChartData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {barChartDataKeys.map((key, index) => (
                                    <Bar
                                        key={index}
                                        dataKey={key}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                                {/* Example static bars, replace with dynamic data */}
                                {/* <Bar dataKey="activity" fill="#8884d8" />
                                <Bar dataKey="activity" fill="#82ca9d" />
                                <Bar dataKey="activity" fill="#ffc658" />
                                <Bar dataKey="activity" fill="#ff8042" /> */}
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics