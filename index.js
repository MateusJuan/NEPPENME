function index() {
    window.location.href = "index.html";
}
function pesquisar(){
    alert("Você clicou no ícone de pesquisar!");
};
function mobile() {
    var htmlContent1 = "<div class='cell'><img src='cell1.PNG' style='height: 200px;'><h2>Xiaomi Redmi 12</h2><p>R$ 1.251,15</p> </div>";
    var htmlContent2 = "<div class='cell'><img src='cell2.PNG' style='height: 200px;'><h2>Moto G84</h2><p>R$ 1.349,99</p></div> ";
    var htmlContent3 = "<div class='cell'><img src='cell3.PNG' style='height: 200px;'><h2>Motorola Razr 40</h2><p>R$ 3.499,00</p></div>";
    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3;
};
function TVAV() {
    var htmlContent1 = "<div class='cell'><img src='tv1.png' style='height: 170px;'><h2>Smart TV QLED 65'' Sasung 4K</h2><p>R$ 7.299,90</p></div>";
    var htmlContent2 = "<div class='cell'><img src='tv2.png' style='height: 200px;'><h2>Samsung The Freestyle 2nd Gen Projetor Smart</h2><p>R$4.529,00</p></div>";
    var htmlContent3 = "<div class='cell'><img src='cell3.PNG' style='height: 200px;'><h2>Motorola Razr 40</h2><p>R$ 3.499,00</p></div>"
    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3;
};