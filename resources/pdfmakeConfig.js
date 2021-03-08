var dd = {
	content: [
		{text: 'Tables', style: 'header'},
	
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'User Name', style: 'tableHeader'}, {text: 'Number Of Tests', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2'],
					['Sample value 1', 'Sample value 2'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'red';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'red';
				},
			}
		},
	],
	defaultStyle: {
		// alignment: 'justify'
	}
	
}