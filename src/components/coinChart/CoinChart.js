
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import numeral from 'numeral';

const CoinChart = () => {
	const [chartData, setChartData] = useState([]);

	const fetchTopCoins = () => {
		axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
			headers: {
				'Accept': 'application/json',
			}
		})
		.then(response => {
			setChartData(response.data);
		})
		.catch(error => console.log(error));
	};

	useEffect(() => {
		fetchTopCoins();
	}, []);

	const data = {
        // copy data from the state to a new array,
        // sort it by current_price in descending order,
        // take top 10 results using slice
        // and then map 
        labels: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.name),
        datasets: [{
            data: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.current_price),
            label: `${chartData.length} Most Expensive Cryptocurrencies`,
            backgroundColor: [
                   "red",
				   "blue",
				   "green"
                ],
        }],
    };

	const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                color: "#000",
                anchor: 'end',
                align: 'top',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 13,
                        },
                        padding: 10,
                    },
                },
                formatter: (value) => numeral(value).format('$0,0.00'),
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#000",
                    maxRotation: 45,
                    minRotation: 45,
                },
                title: {
                    display: true,
                    text: 'Cryptocurrencies',
                    color: "#fff",
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
            y: {
                ticks: {
                    color: "#000",
                    padding: 10,
                    callback: (value) => numeral(value).format('$0,0.00')
                },
                display: true,
                borderDash: [5, 5],
                title: {
                    display: true,
                    text: 'Current price',
                    color: "#000",
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
        },
	}


	return (
		<>
	    <div className="bg-[#241F2A] h-fit p-3 px-5 w-full rounded-lg mb-5 text-white">
            <p> Put in the drill</p>
			<Bar
                data={data} 
                options={options} 
                plugins={[ChartDataLabels]} 
            />
		</div>
		</>		
	);
};

export default CoinChart;