
// async fetch json file and populating arrays with names.
async function fetchData(){
    const url = '/src/data/allsetsfixed.json';
    const response = await fetch(url);
    const datapoints = await response.json();
    const nomesAlunos = datapoints.alunos.map((pessoaAluno) => pessoaAluno.nome);
    const nomesDengue = datapoints.dengue.map((pessoaDengue) => pessoaDengue.nome)
    const nomesOnibus = datapoints.onibus.map((pessoaOnibus) => pessoaOnibus.nome);

// creating data for Charts.js ChartVenn plugin, using the arrays populated above.
    const data = ChartVenn.extractSets(
        [
            {
                label: 'Alunos',
                values: nomesAlunos,
            },
                    {
                label: 'Dengue',
                values: nomesDengue,
            },
        ]
    );
// configurating chart.js properties
    const config = {
        type: 'venn',
        data,
        options: {
            layout: {
                padding: {
                    bottom: 16,
                }
            },
            plugins: {
            title: {
                display: true,
                text: '',
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
                values: nomesOnibus,
            },
                    {
                label: 'Dengue',
                values: nomesDengue,
            },
        ]
    );

    const config2 = {
        type: 'venn',
        data: data2,
        options: {
            layout: {
                padding: {
                    bottom: 16,
                }
            },
            plugins: {
            title: {
                display: true,
                text: '',
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
                values: nomesAlunos,
            },
                    {
                label: 'Onibus',
                values: nomesOnibus,
            },
        ]
    );

    const config3 = {
        type: 'venn',
        data: data3,
        options: {
            layout: {
                padding: {
                    bottom: 16,
                }
            },
            plugins: {
            title: {
                display: true,
                text: '',
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
                values: nomesAlunos,
            },
            {
                label: 'Dengue',
                values: nomesDengue,
            },
                    {
                label: 'Onibus',
                values: nomesOnibus,
            },
        ]
    );

    const config4 = {
        type: 'venn',
        data: data4,
        options: {
            layout: {
                padding: {
                    bottom: 16,
                }
            },
            plugins: {
            title: {
                display: true,
                text: '',
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

//intersection function to get the intersection of two arrays
    function intersection() {
    var result = nomesAlunos.filter(function (e) {
        return this.indexOf(e) > -1;
    }, nomesOnibus);
}

intersection();

function differenceSet(){
    var diff = nomesAlunos.filter(function(x) {
    return nomesOnibus.indexOf(x) < 0;
    });
    console.log(diff);
}

differenceSet();

}
// each chart needs its own block of data, config and render.
fetchData();