/* Lab:exp_8_Determination of Frictional Co-efficient of Mine Airways
	 File name: addinptotable8.js
   Author:Prakriti Dhang
*/

var vel1, vel2, vel3, avgveladd, pd,fdpk;
var arr=[];

var nofob ;
var rows,x;
var countaddbtnclk;
var countatbtn=0;

function addresult(){
  countatbtn++;
    countaddbtnclk =countatbtn;
  
    if(countaddbtnclk==1){
    document.getElementById('contldevice2').style.display="block";
    document.getElementById('contldevice1').style.display="none";
    document.getElementById('obvtable8').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
      vel3 = document.getElementById('velr3').value;
     avgveladd=document.getElementById('avi').value;
     pd=document.getElementById('pdi').value;
     fpdk=document.getElementById('fpdi').value;


      var tabrowindex=0;
 otable= document.getElementById('obtable8');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=vel3;
 arr[3]=avgveladd;
   arr[4]=pd;
 arr[5]=fpdk;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('velr3').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('qfi').value="";
    document.getElementById('fpdi').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disabled */


   /*  Scroll down and after 3000 ms scroll up  */
   document.body.scrollBy(0,500);
   document.documentElement.scrollBy(0,500);
   setTimeout(function(){
       document.body.scrollTop = 50;
       document.documentElement.scrollTop =50;
   }, 3000);

    }


    if(countaddbtnclk==2){

      document.getElementById('contldevice3').style.display="block";
      document.getElementById('contldevice2').style.display="none";
      document.getElementById('obvtable8').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
      vel3 = document.getElementById('velr3').value;
      avgveladd=document.getElementById('avi').value;
     pd=document.getElementById('pdi').value;
     fpdk=document.getElementById('fpdi').value;

  var tabrowindex=1; 
 otable= document.getElementById('obtable8');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=vel3;
 arr[3]=avgveladd;
 arr[4]=pd;
 arr[5]=fpdk;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('velr3').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('qfi').value="";
    document.getElementById('fpdi').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
   /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
      }


      if(countaddbtnclk==3){
        document.getElementById('contldevice4').style.display="block";
        document.getElementById('contldevice3').style.display="none";

        document.getElementById('obvtable8').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
      vel3 = document.getElementById('velr3').value;
      avgveladd=document.getElementById('avi').value;
      pd=document.getElementById('pdi').value;
      fpdk=document.getElementById('fpdi').value;
     

  var tabrowindex=2; 
 otable= document.getElementById('obtable8');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=vel3;
 arr[3]=avgveladd;
   arr[4]=pd;
 arr[5]=fpdk;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('velr3').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('qfi').value="";
    document.getElementById('fpdi').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
     /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
        }
 
 
  
        if(countaddbtnclk==4){
          document.getElementById('contldevice4').style.display="block";
          //document.getElementById('contldevice3').style.display="none";

          document.getElementById('obvtable8').style.display="block";
      vel1 = document.getElementById('velr1').value;
       
      vel2 = document.getElementById('velr2').value;
       
        vel3 = document.getElementById('velr3').value;
        avgveladd=document.getElementById('avi').value;
        pd=document.getElementById('pdi').value;
        fpdk=document.getElementById('fpdi').value;
       
  
    var tabrowindex=3; 
   otable= document.getElementById('obtable8');
  
   arr[0] =vel1;
   arr[1] =vel2;
   arr[2]=vel3;
   arr[3]=avgveladd;
   arr[4]=pd;
   arr[5]=fpdk;
  
   tabrowindex + 1;
  
  var row = otable.insertRow(++tabrowindex); // Row increment
      for (var q = 0; q < 6; q++) {
  
          var cell = row.insertCell(q);
          cell.innerHTML = arr[q];
          //
      }
   /* clear the input area of all the readings; */
      document.getElementById('velr1').value='';
      document.getElementById('velr2').value='';
      document.getElementById('velr3').value='';
      document.getElementById('avi').value='';
      document.getElementById('pdi').value='';
      document.getElementById('qfi').value="";
      document.getElementById('fpdi').value='';
      
          
     
     document.getElementById('obbtn').disabled=true; /*observation button disabled */
     document.getElementById('graphd').style.display="block";
    document.getElementById('formulashow').style.display="none";

          }
  
  

    /* scroll down */
   /* document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);*/


    
  }

    

       
       
       
      


