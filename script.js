const number = document.getElementById("phone")
const emailInput = document.getElementById("email")
const nome = document.getElementById("nome")

// Adiciona um ouvinte de evento de tecla pressionada
number.addEventListener('keydown', function(e) {
    // Permite apenas números e algumas teclas especiais
    if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete')) {
        e.preventDefault()
    }
})


document.addEventListener("DOMContentLoaded", function(){
    nomeInput.addEventListener("input",function(){
        const inputValue = nomeInput.value
        const aceitaveis = ""

        if (!aceitaveis.test(inputValue)){
            nome.value = inputValue.replace("")
        }
    })
})
