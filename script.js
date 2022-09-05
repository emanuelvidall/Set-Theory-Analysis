
async function fetchData(){
    const url = 'alunosformated.json';
    const response = await fetch(url);
    //wait request complete
    const datapoints = await response.json();
    ArrayAlunos = [];
    for (let i = 0; i < datapoints.alunos.length; i++) {
        ArrayAlunos.push(datapoints.alunos[i].nome);
    }

    const url2 = 'dengueformated.json';
    const response2 = await fetch(url2);
    //wait request complete
    const datapoints2 = await response2.json();
    DengueArray = [];
        for (let i = 0; i < datapoints2.dengue.length; i++) {
        DengueArray.push(datapoints2.dengue[i].nome);
    }

    console.log(DengueArray);

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
