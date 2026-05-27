const btn = document.getElementById("btn-atualizar"); //pegando botão atualizar pelo id

btn.addEventListener('click', ()=>{

    //pegando os valores dos inputs
    const nome = document.getElementById("nome").value;
    const itemAlterado = document.getElementById("status").value;
    const novoValor = document.getElementById("novo-valor").value;

    //fazendo verificação se os valores nome e novoValor foram preenchidos
    if(nome === "" || novoValor === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const textoAtualizadoPor = document.getElementById('texto-atualiza-por');
    textoAtualizadoPor.style.display = "block"; //mostrar o texto 
    textoAtualizadoPor.innerText = `Atualizado por: ${nome}`; // atualizar o texto com o nome do usuário

    //if para verificar qual item será alterado
    if(itemAlterado === "temperatura"){
        document.getElementById("temperatura").innerText = `${novoValor}ºC`;
    }
    if(itemAlterado === "pressao"){
        document.getElementById("pressao").innerText = `${novoValor} atm`;
    }
    if(itemAlterado === "radiacao"){
        document.getElementById("radiacao").innerText = `${novoValor} mSv/h`;
    }
    if(itemAlterado === "nivel-combustivel"){
        document.getElementById("nivel-combustivel").innerText = `${novoValor}%`;
    }
    if(itemAlterado === "tempo-missao"){
        document.getElementById("quantidade-dias").innerText = `${novoValor} dias`;
    }

    //limpando todos os campos
    document.getElementById("nome").value = "";
    document.getElementById("novo-valor").value = "";
})