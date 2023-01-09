//Your JavaScript goes in here

/* Lab:exp_8_Determination of Frictional Co-efficient of Mine Airways
	 File name: main.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;
//var canvasc=7; /* inclned canvas count  */
var countanbtnclk; /* count stopanemometer button click */

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
/*function pgload(){
    
}*/

function showpanel(){
    document.getElementById('btninst').disabled=false;
    document.getElementById('mduct').style.display="block";
    document.getElementById('yesbtn').disabled=true;
    document.getElementById('wd').readOnly= false;
     document.getElementById('hd').readOnly= false;
     document.getElementById('ld').readOnly= false;
     document.getElementById('rd').readOnly= false;
    /* document.getElementById('wd').readOnly= true;
     document.getElementById('hd').readOnly= true;
     document.getElementById('ld').readOnly= true;
     document.getElementById('rd').readOnly= true;*/
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
   
}



function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 350; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 0) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
    } else {
      orgtop--; 
      iplate1.style.top = orgtop + '%'; 
       
    }
  }

  
  
  
}


function moveplate2(){  /* move 1st  throtling plate to the required position*/

  var iplate2 = document.getElementById("contldevice2");   
  var orgtop2 = 350; /* initial position */
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop2 == 0) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
    } else {
      orgtop2--; 
      iplate2.style.top = orgtop2 + '%'; 
       
    }
  }

  
  
  
}

function moveplate3(){  /* move 1st  throtling plate to the required position*/

var iplate3 = document.getElementById("contldevice3");   
var orgtop3 = 350 /* initial position */
clearInterval(imgobj3);
imgobj3 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop3 == 0) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop3--; 
    iplate3.style.top = orgtop3 + '%'; 
     
  }
}




}
function moveplate4(){  /* move 1st  throtling plate to the required position*/

var iplate4 = document.getElementById("contldevice4");   
var orgtop4 = 350; /* initial position */
clearInterval(imgobj4);
imgobj4 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop4 == 0) { /* moves to 100 top positon*/
    clearInterval(imgobj4); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop4--; 
    iplate4.style.top = orgtop4 + '%'; 
     
  }
}




}

function anmeasure(){  /* anemometer traversing button*/
   document.getElementById('measure').style.display="block";
   document.getElementById('yesbtn').disabled=true;
   document.getElementById('user').style.display="block";
   document.getElementById('anemometerr').style.display="block";
   document.getElementById('anmbtn').disabled=true;
   document.getElementById('msbtn').disabled=false;
   document.getElementById('obbtn').disabled=true;
  
   

    moveanemometer();
   

   
}
/* moves the anemometer to left- right and top-bottom direction */

var bottom = -100; /* initial positon */
var left = 114; /*initial position */
var temp = bottom;
var temp1 = left;
var goUp = true;
var goDown = false;
var goLeft = true;
var goRight = false;
var moveanemometerstick;

function moveanemometer(){
  document.getElementById('measure').style.display='block';
    moveanemometerstick= setInterval(moveanmetr, 60); /* setInterval (function, frames) */
       
 }
       
       
       function moveanmetr(){ 
        

        if(goUp) {
          temp++;
          if(temp == -25) {
              goUp =false;
              goDown = true;
              
          }
      } else if(goDown) {
          temp--;
          if(temp == -100) {
              goDown =false;
              goUp = true;
              
          }
      }
      $("#anemometerr").css("bottom",temp);
         
        // if(goRight) {
           //  temp1++;
           //  if(temp1 == 597) { /* move right*/
            //     goRight = false;
            //     goLeft = true;
            // }
        // } else if(goLeft) {
          //   temp1--;
           //  if(temp1 == 593) { /* move left */
            //     goLeft = false;
             //    goRight = true;
            // }
       //  }
       //  $("#anemometerr").css("left",temp1);
 
       
 
     }



     var avgvel, prdiff, qflow, frictprd;
     //function measurepts(){
    //  clckstopanm();
   //  }
function clckstopanm() {
    
    document.getElementById('obbtn').disabled=false; /* add observation btn */
    count++;
    countanbtnclk =count;

    if(countanbtnclk ==1){
    velread1 = (2 + ((2.15 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (2 + ((2.55 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (2 + ((2.75 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 185;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 175);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 190);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true; /* stop anemometer button disables */
    prdiff=4.21;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.12;
    document.getElementById('qfi').value=qflow;
    frictprd=0.09;
    document.getElementById('fpdi').value=frictprd;
   }

   if(countanbtnclk ==2){
    velread1 = (5 + ((5.15 - 5) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (5 + ((5.55 -5) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (5 + ((5.75 - 5) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 190;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 170);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 190);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    prdiff=15.31;
    document.getElementById('pdi').value=prdiff;
    qflow=0.27;
    document.getElementById('qfi').value=qflow;
    frictprd=0.07;
    document.getElementById('fpdi').value=frictprd;
   }
   if(countanbtnclk ==3){
    velread1 = (7 + ((7.15 - 7) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (7 + ((7.55 -7) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (7 + ((7.75 - 7) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 185;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 160);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 190);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=28.25;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.35;
    document.getElementById('qfi').value=qflow;
    frictprd=0.07;
    document.getElementById('fpdi').value=frictprd;
   }


   if(countanbtnclk ==4){
    velread1 = (9 + ((9.15 -9) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (9 + ((9.55 - 9) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (9 + ((9.75 - 9) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 185;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 155);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 190);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=39;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.456;
    document.getElementById('qfi').value=qflow;
    frictprd=0.059;
    document.getElementById('fpdi').value=frictprd;
   }
   
  }
     
 

  /*function showformula(){
   
    document.getElementById("formulacard").style.display="block";
    document.getElementById("exitinfo").style.display="block";
    document.getElementById("info").style.display="none"; 
   
 }
 
 function hideformula(){
    document.getElementById("formulacard").style.display="none";
    document.getElementById("info").style.display="block";
    document.getElementById("exitinfo").style.display="none";
 }*/
