const form = document.getElementById('form');
const startdate = document.getElementById('startdate');
const enddate = document.getElementById('enddate');

function getDataFromApi(event) {
	let url = 'https://66d3c33e-6d00-4771-a3c0-64a11edd376d.mock.pstmn.io';

	var settings = {
		url: `${url}/crytotransactions?startdate=${startdate}&enddate=${enddate}`,
		method: 'GET',
		timeout: 0,
		headers: {
			Accept: 'application/json',
		},
	};

	var myArray = [];
	console.log('calling API');

	$.ajax(settings).done(function (response) {
		myArray = response;
		buildTable(myArray);
		console.log(myArray);
	});
	event.preventDefault();
}

function buildTable(data) {
	var table = document.getElementById('myTable');

	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                    <td>${data[i].date}</td>
                    <td>${data[i].currenncypair}</td>
                    <td>${data[i].side}</td>
                    <td>${data[i].order}</td>
					<td>SGD$ ${data[i].cryptoprice}</td>
					<td>${data[i].quantity}</td>
					<td>${data[i].status}</td>
                </tr>`;
		table.innerHTML += row;
	}
}

form.addEventListener('submit', getDataFromApi);
