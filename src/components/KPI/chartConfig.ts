type ChartConfigProps = {
    data: any[],
    backgroundColor: string[]
}

export const chartConfig = ({ data, backgroundColor }: ChartConfigProps) => ({
    chartData: {
        labels: ['Experimental Group', 'Control Group'],
        datasets: [{
            hoverOffset: 4,
            backgroundColor,
            data
        }]
    },
    chartOptions: {
        layout: {
            padding: 10
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start'
            }
        },
        responsive: true
    },
});