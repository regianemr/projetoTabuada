// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")


// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""  // colocando uma string vazia no html interno para zerar o texto nele para liberar espaço

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        
        const parser = new DOMParser()  // permite transferir tudo para o html

        const htmlTemplate = parser.parseFromString(template, "text/html")  // transforma uma string em html

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {   //e = argumento de evento para usar o preventDefault (para enviar o formulário e regarregar a página)
    e.preventDefault();

    const multiplicationNumber = +numberInput.value; // o "+"" é para fazer com que se torne um inteiro para fazer as multiplicações

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return; // se não tiver o multiplicando OU o multiplicador, retorne (não imprimindo a linha )

    createTable(multiplicationNumber, multiplicatorNumber);
});