var random1 = Math.floor(Math.random()*6) + 1;
var imagename1 = "dice"+random1+".png" ;
var dicenumber1 = "images/"+imagename1;

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src" , dicenumber1);




var random2 = Math.floor(Math.random()*6)+1 ;
var imagename2 = "dice"+random2+".png";
var dicenumber2 = "images/"+imagename2 ;

var img2 = document.querySelectorAll("img")[1] ;
img2.setAttribute("src", dicenumber2);


if (random1 > random2 ){ 

 document.querySelector("h1").innerHTML=" ⛳Player 1 won " ;
 }

 else if (random2 > random1 ){ 

    document.querySelector("h1").innerHTML=" ⛳Player 2 won " ;
 }

 else{ document.querySelector("h1").innerHTML=" DRAW " ; }