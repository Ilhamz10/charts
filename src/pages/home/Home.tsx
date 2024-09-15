import ReactApexChart from 'react-apexcharts';
import AccordionCard from '../../shared/UI/AccordionCard';

const Home = () => {
	return (
		<main className='wrapper'>
			<div className='grid gap-2'>
				<AccordionCard
					title='28 190,34 ₽'
					text='Доход'
					info='+8.23%'
					type='good'
					content={
						<ReactApexChart
							series={[
								{
									name: 'Data Series',
									data: [
										{ x: 1, y: 10 },
										{ x: 2, y: 15 },
										{ x: 3, y: 12 },
										{ x: 4, y: 17 },
										{ x: 5, y: 14 },
										{ x: 6, y: 18 },
										{ x: 7, y: 22 },
										{ x: 8, y: 27 },
										{ x: 9, y: 29 },
										{ x: 10, y: 30 },
									],
								},
							]}
							options={{
								chart: {
									type: 'line',
									height: 200,
									zoom: {
										enabled: true,
									},
									toolbar: {
										show: false,
									},
									events: {
										mouseMove: function (event, chartContext, config) {
											// Check if the user hovers over a new data point
											if (config.dataPointIndex !== -1) {
												// Vibrate the device for 200ms when mouse moves over a data point
												if (navigator.vibrate) {
													navigator.vibrate(200); // Vibration duration in milliseconds
												}
											}
										},
									},
								},
								colors: ['#34C759'],
								xaxis: {
									type: 'numeric', // Use a numeric x-axis
									title: {
										text: 'X-Axis',
									},
								},
								yaxis: {
									title: {
										text: 'Y-Axis',
									},
								},
								dataLabels: {
									enabled: false,
								},
								stroke: {
									curve: 'smooth',
								},
							}}
						/>
					}
				/>
				<AccordionCard
					title='17 596 пдп'
					text='Пользователи'
					info='-1.45%'
					type='bad'
					content={
						<ReactApexChart
							series={[
								{
									name: 'Data Series',
									data: [
										{ x: 1, y: 10 },
										{ x: 2, y: 15 },
										{ x: 3, y: 12 },
										{ x: 4, y: 17 },
										{ x: 5, y: 14 },
										{ x: 6, y: 18 },
										{ x: 7, y: 22 },
										{ x: 8, y: 27 },
										{ x: 9, y: 29 },
										{ x: 10, y: 30 },
									],
								},
							]}
							options={{
								chart: {
									type: 'line',
									height: 200,
									zoom: {
										enabled: true,
									},
									toolbar: {
										show: false,
									},
								},
								colors: ['#FF3B30'],
								xaxis: {
									type: 'numeric', // Use a numeric x-axis
									title: {
										text: 'X-Axis',
									},
								},
								yaxis: {
									title: {
										text: 'Y-Axis',
									},
								},
								dataLabels: {
									enabled: false,
								},
								stroke: {
									curve: 'smooth',
								},
							}}
						/>
					}
				/>
			</div>
		</main>
	);
};

export default Home;
