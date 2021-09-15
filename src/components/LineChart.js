import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({data, labels}) => {
    return (
        <Line
            data={{
                labels: labels,
                datasets: [{
                    label: 'Price of Bitcoin in USD',
                    data: data,
                    backgroundColor: 'rgba(99, 169, 255, 0.2)',
                    borderColor: 'rgba(99, 169, 255, 1)',
                    borderWidth: 2
                }],
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }   
            }}
            options= {{
                maintainAspectRatio: false
            }}
            height={400}
         />
    )
}

export default LineChart;