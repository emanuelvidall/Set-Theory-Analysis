
async function fetchData(){
    const url = 'alunosformated.json';
    const response = await fetch(url);
    const datapoints = await response.json();
    ArrayAlunos = [];
    for (let i = 0; i < datapoints.alunos.length; i++) {
        ArrayAlunos.push(datapoints.alunos[i].nome);
    }

    const url2 = 'dengueformated.json';
    const response2 = await fetch(url2);
    const datapoints2 = await response2.json();
    DengueArray = [];
        for (let i = 0; i < datapoints2.dengue.length; i++) {
        DengueArray.push(datapoints2.dengue[i].nome);
    }

    const url3 = 'onibusformated.json';
    const response3 = await fetch(url3);
    const datapoints3 = await response3.json();
    OnibusArray = [];
        for (let i = 0; i < datapoints3.onibus.length; i++) {
        OnibusArray.push(datapoints3.onibus[i].nome);
    }

    console.log(DengueArray);
    console.log(ArrayAlunos);
    console.log(OnibusArray);

    const data = ChartVenn.extractSets(
        [
            {
                label: 'Alunos',
                values: ArrayAlunos,
            },
                    {
                label: 'Dengue',
                values: DengueArray,
            },
        ]
    );

    // config 
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
    // render init block
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );

        const data2 = ChartVenn.extractSets(
        [
            {
                label: 'Onibus',
                values: OnibusArray,
            },
                    {
                label: 'Dengue',
                values: DengueArray,
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
                values: ArrayAlunos,
            },
                    {
                label: 'Onibus',
                values: OnibusArray,
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
                values: ArrayAlunos,
            },
            {
                label: 'Dengue',
                values: DengueArray,
            },
                    {
                label: 'Onibus',
                values: OnibusArray,
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

    let x = [];
    for (var i = 0; i <=ArrayAlunos.length; i++) {
        x.push(ArrayAlunos[i] - DengueArray[i]);
    }
    console.log(x);
}

// function interval() {
//     while (true) {
//         setInterval(showImage, 1);
//     }
// }
// function showImage() {

//     var x = clientX;
//     var y = clientY;
//     var image = document.getElementById("headshot");
//     image.style.left = x;
//     image.style.top = y;
// }

// interval();
// showImage();





fetchData();
