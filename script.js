// Referência ao display da calculadora
const display = document.getElementById("display");

// Referência a todos os botões
const botoes = document.querySelectorAll(".btn");

// Variável para armazenar a expressão digitada
let expressao = "";

// Adiciona evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        // Limpa tudo
        if (valor === "C") {
            expressao = "";
        }
        // Apaga o último caractere
        else if (valor === "<") {
            expressao = expressao.slice(0, -1);
        }
        // Calcula o resultado
        else if (valor === "=") {
            try {
                expressao = expressao.replace(/x/g, "*");
                expressao = eval(expressao).toString();
            } catch (e) {
                expressao = "Erro";
            }
        }
        // Adiciona número ou operador à expressão
        else {
            expressao += valor;
        }

        // Atualiza o display
        display.textContent = expressao;
    });
});
