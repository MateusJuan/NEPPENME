function index() {
    window.location.href = "index.html";
};
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
    var htmlContent3 = "<div class='cell'><img src='tv3.PNG' style='height: 90px;'><h2>Projetor Smart Epson EpiqVison</h2><p>R$ 3.149,01</p></div>"
    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3;
};
function ED(){
    var htmlContent1 = "<div class='cell'><img src='ED1.png' style='height: 170px;'><h2><!--Fritadeira Sem Óleo-->Air Fryes 3,5L,Maondial<!--,Preto/Inox,1500W,110V - AF-30 I--></h2><p>R$ 255,99</p></div>";
    var htmlContent2 = "<div class='cell'><img src='ED2.png' style='height: 170px;'><h2>Fogão 4 bocas Braslar Mesa de Inox Preto Sirius New Black</h2><p>R$529,15</p></div>";
    var htmlContent3 = "<div class='cell'><img src='ED3.png' style='height: 170px;'><h2>Micro-ondas Electrolux 23litros</h2><p>R$629,00</p></div>"

    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3;
};
function Info(){
    var htmlContent1 = "<div class='cell'><img src='info1.png' style='height: 130px;'><h2>Notebook XPS 16</h2><p>R$ 30.999,00</p></div>"
    var htmlContent2 = "<div class='cell'><img src='info2.png' style='height: 130px;'><h2>Computador 3green Colors Intel Core I7 16GB SSD 256GB, Windows 10, RGB + Monitor LED 24</h2><p>R$ 1.777,59</p></div>";
    var htmlContent3 = "<div class='cell'><img src='info3.png' style='height: 130px;'><h2>Galaxy Book3 8GB,256 SSD</h2><p>R$ 3.889,99</p></div>";

    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3;
};
function Acess(){
    var htmlContent1 = "<div class='cell' onclick='AC1()'><img src='AC1.png' style='height: 130px;'><h2>Headset Gamer Evolut Thoth</h2><p>R$ 105,16</p></div>"
    var htmlContent2 = "<div class='cell'><img src='AC2.png' style='height: 130px;'><h2>JBL, Fone de Ouvido Sem Fio, Bluetooth, Wave Buds TWS - Branco</h2><p>R$ 236,55</p></div>";
    var htmlContent3 = "<div class='cell'><img src='AC3.png' style='height: 130px;'><h2>Galaxy Book3 8GB,256 SSD</h2><p>R$ 3.889,99</p></div>";
    var htmlContent4 = "<div class='cell'><img src='AC4.png' style='height: 130px;'><h2>Webcam Full HD Logitech C920s com Microfone Embutido ,1080px (HD)</h2><p>R$ 404,00 </p></div>";

    document.getElementById("mobile").innerHTML = htmlContent1 + htmlContent2 + htmlContent3 + htmlContent4;
};
function AC1(){
    window.location.href =("acessoriosVender.html")
};
document.getElementById(acessoriosVender).innerText = "<div class='cell' onclick='AC1()'><img src='AC1.png' style='height: 130px;'><h2>Headset Gamer Evolut Thoth</h2><p>R$ 105,16</p></div>";