[{"user_name":"ehegazy","number_of_tests":1495},{"user_name":"master_account","number_of_tests":1451},{"user_name":"mohamed_fawzy","number_of_tests":1401},{"user_name":"alhayahlab","number_of_tests":221},{"user_name":"mohamed","number_of_tests":0},{"user_name":"\u0627\u0633\u0644\u0627\u0645\u0639\u0628\u062f\u0627\u0644\u062d\u0644\u064a\u0645\u0635\u0627\u0644\u062d","number_of_tests":0},{"user_name":"abubakr","number_of_tests":0},{"user_name":"Test5","number_of_tests":0},{"user_name":"Mohamed88","number_of_tests":0},{"user_name":"mohammed","number_of_tests":0},{"user_name":"Anwsr","number_of_tests":0},{"user_name":"\u0645\u062d\u0645\u062f\u0635\u0628\u062d\u0649","number_of_tests":0},{"user_name":"FElsayed","number_of_tests":0},{"user_name":"AhmedAbouelwafa","number_of_tests":0},{"user_name":"familylab","number_of_tests":0},{"user_name":"\u0646\u0627\u0638\u0645\u0633\u0627\u0644\u0645\u0627\u062d\u0645\u062f","number_of_tests":0},{"user_name":"Technolab","number_of_tests":0},{"user_name":"prince_bakora","number_of_tests":0},{"user_name":"drhashem","number_of_tests":0},{"user_name":"bakrianoo","number_of_tests":0},{"user_name":"ramyelsaid","number_of_tests":0},{"user_name":"Islam","number_of_tests":0},{"user_name":"Dabashawy","number_of_tests":0},{"user_name":"Amr73","number_of_tests":0},{"user_name":"sayed","number_of_tests":0},{"user_name":"amr_882007","number_of_tests":0},{"user_name":"\u062f.\u0639\u0645\u0627\u062f","number_of_tests":0},{"user_name":"\u0639\u0645\u0627\u062f\u0646\u0648\u062d","number_of_tests":0},{"user_name":"AbdulAzizAli","number_of_tests":0},{"user_name":"Abdullah_Hussein23","number_of_tests":0},{"user_name":"Rabab","number_of_tests":0},{"user_name":"TahaAboSafaa","number_of_tests":0},{"user_name":"\u062f.\u0645\u062d\u0645\u062f","number_of_tests":0},{"user_name":"Eslamabas","number_of_tests":0}]
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