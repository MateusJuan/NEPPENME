function index() {
    window.location.href = "index.html";
}
function pesquisar(){
    alert("Você clicou no ícone de pesquisar!");
};
function mobile() {
    var htmlContent = "<div class='cell'><img src='cell1.PNG' style='height: 200px;'><h2>Xiaomi Redmi 12</h2><p>R$ 1.251,15</p> </div><div class='cell'><img src='cell2.PNG' style='height: 200px;'><h2>Moto G84</h2><p>R$ 1.349,99</p></div> <div class='cell'><img src='cell3.PNG' style='height: 200px;'><h2>Motorola Razr 40</h2><p>R$ 3.499,00</p></div>";
    document.getElementById("mobile").innerHTML = htmlContent;
}