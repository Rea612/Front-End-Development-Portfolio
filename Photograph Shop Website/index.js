/* 
 * Student Info: Name=RuiZou, ID=15234 
 * Subject: CS557A_HW3_Fall_2016 
 * Author: ruizou
 * Filename: index.js 
 * Date and Time: Nov 3, 2016 8:22:31 PM 
 * Project Name: RuiZou_15234_CS557A_HW3 
 */

var quality = 0; 
var type = 0; 
var quantity = 0;
var cost = 0;
var glossy = 0;
var order = {
    numOfQuality: 0,
    types: 0,
    gloss: 0,
    numOfQuantity: 0,
    numOfCost: 0   
};
var saleTypes = '';
var cardTypes = '';
var orderArray = [];
function setType(x){
    types = x;
}
function setSale(x){
    saleTypes = x;
}
function setCard(x){
    cardTypes = x;
}
function calculate(){
    quality = document.getElementById("qualityOption").value;
    var typeOfOrder = document.getElementById("typeInfo").value;
    console.log(typeOfOrder);
    if (document.getElementById("glossyOption").checked){
        glossy = 2;
    }
    quantity = document.getElementById("quantity").value;
    cost = (8.99 + parseInt(quality) + parseInt(glossy)) * parseInt(quantity);
    document.getElementById("cost").innerHTML= "The cost of the selected item is " + cost + " dollars.";
    var date = new Date();
    var index = 0;
    if(parseInt(type) <= 1)
        index = 1;
    else if (parseInt(type) === 2)
        index = 2;
    else 
        index = 3;
    document.getElementById("date").innerHTML = "The expected delivery date is " + (date.getMonth() + 1) + "-" + (date.getDate() + index) + "-" + date.getFullYear() + ".";
    order.numOfQuality = parseInt(quality);
    order.types = parseInt(type);
    order.gloss = parseInt(glossy);
    order.numOfQuantity = parseInt(quantity);
    order.numOfCost = cost;
}
function validateIndex() {
    var div = document.getElementById("quantity"); 
    document.getElementById("quantity").innerHTML = "";
    regex_q = /^[0-9]*$/;
    match_q = regex_q.test(div.value);
    if (!match_q )
    {
        document.getElementById("quantityInput").style.color = "red";
        document.getElementById("quantityInput").innerHTML = "Invalid Quantity!";
        return false;
    } 
}
function addOrder() {
    var list = getOrder();
    list.push(order);
    localStorage.setItem("itemList", JSON.stringify(list));
    return true;
}
function getOrder() {
    var item = [];
    if(localStorage.getItem("itemList") !== null){
        return JSON.parse(localStorage.getItem("itemList"));
    }
    else {
        return item;
    }
}
function removeOrder(){
    var list1 = getOrder();
    var list2 = document.getElementById('itemList').value;
    list1.splice(list2 -1, 1);
    localStorage.setItem("itemList", JSON.stringify(list1));
}

function checkout() {
    window.open("./checkout.html");
}



