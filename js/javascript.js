//TRỢ GIÚP
var countF1 = 0;
function myFunctionF1(){
    countF1++;
    console.log(countF1);
    if(countF1 % 2 == 0){
        $("#manualBtn").css("display","none");
        $("#space").css("display","block");
        $(this).css("border","2px solid black");
    }
    else{
        $("#manualBtn").css("display","block");
        $("#space").css("display","none");
        $(this).css("border","2px solid limegreen");
    }
}


//MODE TỰ DO
function myFunctionF2(){
//btn-left
//Stab
var countStab = 0;
$("#stab").on("click", function () {
    countStab++;
    if (countStab % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#desig").css("filter", "brightness(100%)");
        $("#serv").css("filter", "brightness(100%)");
        countDesig = 0;
        countServ = 0;
    }
});
//Desig
var countDesig = 0;
$("#desig").on("click", function () {
    countDesig++;
    if (countDesig % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#stab").css("filter", "brightness(100%)");
        $("#serv").css("filter", "brightness(100%)");
        countStab = 0;
        countServ = 0;
    }
});
//Serv
var countServ = 0;
$("#serv").on("click", function () {
    countServ++;
    if (countServ % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#desig").css("filter", "brightness(100%)");
        $("#stab").css("filter", "brightness(100%)");
        countDesig = 0;
        countStab = 0;
    }
});
//btn-right
//SCTR
var countSctr = 0;
$("#sctr").on("click", function () {
    countSctr++;
    if (countSctr % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//Sinc
var countSinc = 0;
$("#sinc").on("click", function () {
    countSinc++;
    if (countSinc % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//Aimtrgt
var countAimtrgt = 0;
$("#aimtrgt").on("click", function () {
    countAimtrgt++;
    if (countAimtrgt % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//btn auto-focus
var countAFOCUS = 0;
$("#autofocus-btn").on("click", function () {
    countAFOCUS++;
    if (countAFOCUS % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});

//Fire-mode
$("#SNLG").on("click", function () {
    $("#fire-mode__btn").css("rotate", "-45deg");
});

$("#CONT").on("click", function () {
    $("#fire-mode__btn").css("rotate", "45deg");
});

$("#BRST").on("click", function () {
    $("#fire-mode__btn").css("rotate", "0deg");
});

//LRF
var countLRF = 0;
$(".on-off__LRF img").on("click", function () {
    countLRF++;
    if (countLRF % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-LRF").css("background-color", "gray");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-LRF").css("background-color", "#0DFF0B");
    }
});

//OVER
var countOVER = 0;
$(".on-off__OVER img").on("click", function () {
    countOVER++;
    if (countOVER % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-OVER").css("background-color", "gray");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-OVER").css("background-color", "#0DFF0B");
    }
});

//MOVE
var countMOVE = 0;
$(".on-off__MOVE img").on("click", function () {
    countMOVE++;
    if (countMOVE % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-MOVE").css("background-color", "gray");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-MOVE").css("background-color", "#0DFF0B");
    }
});

//FIRE
var countFIRE = 0;
$(".on-off__FIRE img").on("click", function () {
    countFIRE++;
    if (countFIRE % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-FIRE").css("background-color", "gray");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-FIRE").css("background-color", "#FF562F");
    }
});

//CHRG
var countCHRG = 0;
$(".on-off__CHRG img").on("click", function () {
    countCHRG++;
    if (countCHRG % 2 == 0) {
        $(this).css("rotate", "0deg");
    }
    else {
        $(this).css("rotate", "180deg");
    }
});

//FOC   
$("#plusFOC span").on("click", function () {
    $("#plusFOC span").css("filter", "brightness(150%)");
    setTimeout(function(){
        $("#plusFOC span").css("filter", "brightness(100%)");
        }, 200);
});
$("#minusFOC span").on("click", function () {
    $("#minusFOC span").css("filter", "brightness(150%)");
    setTimeout(function(){
        $("#minusFOC span").css("filter", "brightness(100%)");
        }, 200);
});

//CCD&ID 
var countplusCCD = 0;
$("#plusCCD span").on("click", function () {
    countplusCCD++;
    if(countplusCCD % 2 == 0){
        $("#plusCCD span").css("filter", "brightness(100%)");
        
    }
    else{
        $("#plusCCD span").css("filter", "brightness(150%)");
        $("#minusCCD span").css("filter", "brightness(100%)");
        countminusCCD = 0;
    }
    
});
var countminusCCD = 0;
$("#minusCCD span").on("click", function () {
    countminusCCD++;
    if(countminusCCD % 2 == 0){
        $("#minusCCD span").css("filter", "brightness(100%)");
        
    }
    else{
        $("#minusCCD span").css("filter", "brightness(150%)");
        $("#plusCCD span").css("filter", "brightness(100%)");
        countplusCCD = 0;
    }

});

//ZOOM  
$("#plusZOOM span").on("click", function () {
    $("#plusZOOM span").css("filter", "brightness(150%)");
    setTimeout(function(){
        $("#plusZOOM span").css("filter", "brightness(100%)");
        }, 200);
});
$("#minusZOOM span").on("click", function () {
    $("#minusZOOM span").css("filter", "brightness(150%)");
    setTimeout(function(){
        $("#minusZOOM span").css("filter", "brightness(100%)");
        }, 200);
});

//LEDTEST
var countLEDTEST = 0;
$(".on-off__LEDTEST img").on("click", function () {
    countLEDTEST++;
    if (countLEDTEST % 2 == 0) {
        $(this).css("rotate", "0deg");
    }
    else {
        $(this).css("rotate", "180deg");
    }
});

// RIGHT JOYSTICK
//click pluss/minus

//minus
$("#btnRJ__l").on("click", function () {
    $("#btnRJ__l").css("filter", "brightness(0.6)");
        setTimeout(function () {
            $("#btnRJ__l").css("filter", "brightness(0.15)");
        }, 200);
});

var current_rotation = 0;
document.getElementById("btnRJ__l").addEventListener('click', function(){
    current_rotation -= 10;
document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});

//plus
$("#btnRJ__r").on("click", function () {
    $("#btnRJ__r").css("filter", "brightness(0.6)");
        setTimeout(function () {
            $("#btnRJ__r").css("filter", "brightness(0.15)");
        }, 200);
});

document.getElementById("btnRJ__r").addEventListener('click', function(){
    current_rotation += 10;
document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});

//Khai hoả
$("#btnFire").on("click", function () {
    $(this).css("margin-top","26px");
    $(this).css("margin-left","175px");
    setTimeout(function () {
        $("#btnFire").css("margin-top","22px");
        $("#btnFire").css("margin-left","177px");
    }, 200);
});
}
