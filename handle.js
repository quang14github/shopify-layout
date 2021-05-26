var orders = document.getElementsByClassName("orders-ctn")[0];
var middle = document.getElementsByClassName("middle-ctn")[0];
var outmostCard = document.getElementsByClassName("outmost-card")[0];
var button = document.getElementsByTagName("button");
var buttonLi = document.getElementsByClassName("magic");
var homeButton = document.getElementById("home-button");
var ordersButton = document.getElementById("orders-button");
var i,newval=["26px","26px","71px"],preval=["30px","30px","75px"];
function supermagic(num) {
    for(i=0; i<buttonLi.length; i++) {
        buttonLi[i].style.color = "black";
        if(i===num) buttonLi[i].style.paddingLeft = newval[i];
        else buttonLi[i].style.paddingLeft = preval[i]; 
    }
    buttonLi[num].style.color = "#008060";
}
function showhome() {
    orders.style.display = "none";
    middle.style.display = "flex";
    outmostCard.style.display = "flex";
    document.getElementsByClassName("dropdown-content")[0].style.display = "none";
    homeButton.src="svg/home/nav/home-green.svg";
    ordersButton.src="svg/home/nav/orders.svg"
}
function dropdown() {
    document.getElementsByClassName("dropdown-content")[0].style.display = "flex";
    homeButton.src="svg/home/nav/home.svg";
    ordersButton.src="svg/home/nav/orders-green.svg"
}
function showorders() {
    orders.style.display = "flex";
    middle.style.display = "none";
    outmostCard.style.display = "none";
}
function clicked(id){
    for(i=0; i<button.length; i++) {
        button[i].style.background = "#F6F6F7";
        button[i].style.border = "none";
    }
    id.style.background ="#EDEEEF";
    id.style.borderLeft = "4px solid #008060";
}