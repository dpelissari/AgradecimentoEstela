const tempo = 1000;

const nomes = ['Ana', 'Darliana', 'Eduardo', 'Fernanda', 'Gabi', 'Gustavo', 'Juliana Torres', 'Laura', 'Lucas', 'Malu', 'Mariana', 'Mathias', 'Núbia', 'Stephanie', 'Thais', 'Valter', 'Vinicius'];

function iniciarAnimacao() {
    const elementoNome = document.getElementById('nomes');
    let indice = 0;

    function exibirProximoNome() {
        elementoNome.textContent = nomes[indice];
        indice = (indice + 1) % nomes.length;
    };

    exibirProximoNome();
    setInterval(exibirProximoNome, tempo);
}

iniciarAnimacao();