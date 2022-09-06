
// async fetch json file and populating arrays with names.
async function fetchData(){
    const url = 'allsetsfixed.json';
    const response = await fetch(url);
    const datapoints = await response.json(); 

    arrayNomesAlunos = [];
    for (let i = 0; i < datapoints.alunos.length; i++) {
    arrayNomesAlunos.push(datapoints.alunos[i].nome);
    }
    arrayNomesDengue = [];
    for (let i = 0; i < datapoints.dengue.length; i++) {
    arrayNomesDengue.push(datapoints.dengue[i].nome);
    }
    arrayNomesOnibus = [];
    for (let i = 0; i < datapoints.onibus.length; i++) {
    arrayNomesOnibus.push(datapoints.onibus[i].nome);
    }
// creating data for Charts.js ChartVenn plugin, using the arrays populated above.
    const data = ChartVenn.extractSets(
        [
            {
                label: 'Alunos',
                values: arrayNomesAlunos,
            },
                    {
                label: 'Dengue',
                values: arrayNomesDengue,
            },
        ]
    );
// configurating chart.js properties
    const config = {
        type: 'venn',
        data,
        options: {
            plugins: {
            title: {
                display: true,
                text: 'Questão 1',
            },
            legend: {
                display: false,
            },
            },
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
        }
    }; 
// rendering chart in div
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );

        const data2 = ChartVenn.extractSets(
        [
            {
                label: 'Onibus',
                values: arrayNomesOnibus,
            },
                    {
                label: 'Dengue',
                values: arrayNomesDengue,
            },
        ]
    );

    const config2 = {
        type: 'venn',
        data: data2,
        options: {
            plugins: {
            title: {
                display: true,
                text: 'Questão 3',
            },
            legend: {
                display: false,
            },
            },
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
        }
    }; 

    const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
    );

            const data3 = ChartVenn.extractSets(
        [
            {
                label: 'Alunos',
                values: arrayNomesAlunos,
            },
                    {
                label: 'Onibus',
                values: arrayNomesOnibus,
            },
        ]
    );

    const config3 = {
        type: 'venn',
        data: data3,
        options: {
            plugins: {
            title: {
                display: true,
                text: 'Questão 3',
            },
            legend: {
                display: false,
            },
            },
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
        }
    }; 

    const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
    );

    const data4 = ChartVenn.extractSets(
        [
            {
                label: 'Alunos',
                values: arrayNomesAlunos,
            },
            {
                label: 'Dengue',
                values: arrayNomesDengue,
            },
                    {
                label: 'Onibus',
                values: arrayNomesOnibus,
            },
        ]
    );

    const config4 = {
        type: 'venn',
        data: data4,
        options: {
            plugins: {
            title: {
                display: true,
                text: 'Questão 3',
            },
            legend: {
                display: false,
            },
            },
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
        }
    }; 

    const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config4
    );

}

fetchData();
