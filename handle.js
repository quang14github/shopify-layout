var orders = document.getElementsByClassName("orders-ctn")[0];
var middle = document.getElementsByClassName("middle-ctn")[0];
var outmostCard = document.getElementsByClassName("outmost-card")[0];
function showhome() {
    orders.style.display = "none";
    middle.style.display = "flex";
    outmostCard.style.display = "flex";
}
function dropdown() {
    document.getElementsByClassName("dropdown-content")[0].style.display = "flex";
}
function showorders() {
    orders.style.display = "flex";
    middle.style.display = "none";
    outmostCard.style.display = "none";
}
