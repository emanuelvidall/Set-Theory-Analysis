let ArrayAlunos = [];

async function fetchData(){
    const url = 'alunoss.json';
    const response = await fetch(url);
    //wait request complete
    const datapoints = await response.json();
    ArrayAlunos = [];
    for (let i = 0; i < datapoints.alunos.length; i++) {
        ArrayAlunos.push(datapoints.alunos[i].nome);
    }
    return ArrayAlunos;
}

    console.log(ArrayAlunos);

const data = ChartVenn.extractSets(
    [
        {
            label: 'Alunos',
            // values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
    ]
);
    // config 
    const config = {
    type: 'venn',
    data,
    options: {
    }
};
    // render init block
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );

fetchData();
