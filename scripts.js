document.querySelector(".hamburguer").addEventListener('click', () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#amount").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const deadline = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = `Deadline: ${deadline} weeks`;
    atualizarPreco();
})


function atualizarPreco(){
    const amount = document.querySelector("#amount").value;
    const haveJS = document.querySelector("#js").checked;
    const includeLayout = document.querySelector("#layout-sim").checked;
    const deadline = document.querySelector("#prazo").value;

    let preco = amount * 70;
    if (haveJS) preco *= 1.1
    if (includeLayout) preco += 300
    let taxaUrgencia = 1 - deadline*0.1;
    preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `Price: € ${preco.toFixed(2)}`
}