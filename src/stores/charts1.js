const chartOptions1 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},
	chart: {
		type: 'area',
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'straight',
	},
	title: {
		text: 'Вызовы',
		align: 'left',
	},
	yaxis: {
		opposite: true,
	},
}

const chartOptions2 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},
	chart: {
		type: 'area',
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'straight',
	},
	title: {
		text: 'АНТ',
		align: 'left',
	},
	yaxis: {
		opposite: true,
	},
}

const chartOptions3 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},
	chart: {
		type: 'area',
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'straight',
	},
	title: {
		text: 'Тишина',
		align: 'left',
	},
	yaxis: {
		opposite: true,
	},
}

const chartOptions4 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},
	chart: {
		type: 'area',
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'straight',
	},
	title: {
		text: 'Перебивания',
		align: 'left',
	},
	yaxis: {
		opposite: true,
	},
	colors: ['#21BA45'],
}

const chartOptionsSpark1 = {
	chart: {
		type: 'area',
		height: 130,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'straight',
	},
	fill: {
		opacity: 0.3,
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	yaxis: {
		min: 0,
	},
	title: {
		text: '234',
		offsetX: 0,
		style: {
			fontSize: '24px',
		},
	},
	subtitle: {
		text: 'Вызовы',
		offsetX: 0,
		style: {
			fontSize: '14px',
		},
	},
}

const chartOptionsSpark2 = {
	chart: {
		type: 'area',
		height: 130,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'straight',
	},
	fill: {
		opacity: 0.3,
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	yaxis: {
		min: 0,
	},
	title: {
		text: '3:15',
		offsetX: 0,
		style: {
			fontSize: '24px',
		},
	},
	subtitle: {
		text: 'АНТ',
		offsetX: 0,
		style: {
			fontSize: '14px',
		},
	},
}

const chartOptionsSpark3 = {
	chart: {
		type: 'area',
		height: 130,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'straight',
	},
	fill: {
		opacity: 0.3,
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	yaxis: {
		min: 0,
	},
	title: {
		text: '2:07',
		offsetX: 0,
		style: {
			fontSize: '24px',
		},
	},
	subtitle: {
		text: 'Тишина',
		offsetX: 0,
		style: {
			fontSize: '14px',
		},
	},
}

const chartOptionsSpark4 = {
	chart: {
		type: 'area',
		height: 130,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'straight',
	},
	fill: {
		opacity: 0.3,
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	yaxis: {
		min: 0,
	},
	colors: ['#21BA45'],
	title: {
		text: '21',
		offsetX: 0,
		style: {
			fontSize: '24px',
		},
	},
	subtitle: {
		text: 'Перебивания',
		offsetX: 0,
		style: {
			fontSize: '14px',
		},
	},
}

const seriesTable1 = [
	{
		data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
	},
]

const chartTable1 = {
	chart: {
		type: 'line',
		width: 100,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		width: 3,
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function (seriesName) {
					return ''
				},
			},
		},
		marker: {
			show: false,
		},
	},
}

const seriesTable4 = [43, 32, 12, 9]
const chartTable4 = {
	chart: {
		type: 'donut',
		width: 35,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		width: 1,
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
	},
}

export {
	chartOptions1,
	chartOptions2,
	chartOptions3,
	chartOptions4,
	chartOptionsSpark1,
	chartOptionsSpark2,
	chartOptionsSpark3,
	chartOptionsSpark4,
	chartTable1,
	seriesTable1,
	seriesTable4,
	chartTable4,
}
