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
		enabled: false,
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
		enabled: false,
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
		enabled: false,
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
		enabled: false,
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

export {
	chartOptions1,
	chartOptions2,
	chartOptions3,
	chartOptions4,
	chartOptionsSpark1,
	chartOptionsSpark2,
	chartOptionsSpark3,
	chartOptionsSpark4,
}
