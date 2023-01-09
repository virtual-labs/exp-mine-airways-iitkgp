/* Lab:exp_8_Determination of Frictional Co-efficient of Mine Airways
	 File name: checkob8.js
   Author:Prakriti Dhang
*/
var checkwd,checkhd, checkld, checkrd;

function checkmd(){
 checkwd = document.getElementById('wd').value; /* 0.34 and 0.36*/
 checkhd = document.getElementById('hd').value; /* 0.4 and 0.6 */
 checkld = document.getElementById('ld').value; /* 5.41 and 5.5 */
 checkrd = document.getElementById('rd').value; /* 0.25 */
 
 if ( (0.34 >= checkwd || checkwd <= 0.36) && (0.4 >= checkhd || checkhd <= 0.6 ) && ( 5.41 >=checkld || checkld <= 5.5) && (checkrd ==0.25 )){
  //  measurepts();
   
     document.getElementById('measure').style.display='none';
     
     document.getElementById('obokbtn').disabled=true;
     document.getElementById('user').style.display="block";
     document.getElementById('anemometerr').style.display="block";

     document.getElementById('contldevice1').style.display="block";
     document.getElementById('obsanem').style.display="block";
     document.getElementById('anmbtn').disabled=true;
     document.getElementById('wd').readOnly= true;
     document.getElementById('hd').readOnly= true;
     document.getElementById('ld').readOnly= true;
     document.getElementById('rd').readOnly= true;
     document.getElementById('msbtn').disabled=true;
     document.getElementById('anmbtn').disabled=true;
     document.getElementById('obbtn').disabled=true;
    
 } 
 //if (   (0.34 <= checkwd && checkwd<=0.36) && (0.4 <= checkhd && checkhd<=0.6) && (   5.41 <= checkld && checkld<=5.5)&& (checkrd ==0.25 ))


 /*if ( (0.35 == checkwd) && (0.5 == checkhd ) && ( 5.42 ==checkld )&& (checkrd ==0.25 )){
    measurepts();
     document.getElementById('measure').style.display='none';
     
     document.getElementById('obokbtn').disabled=true;
     document.getElementById('user').style.display="block";
     document.getElementById('anemometerr').style.display="block";

     document.getElementById('contldevice1').style.display="block";
     document.getElementById('obsanem').style.display="block";
     document.getElementById('anmbtn').disabled=true;
     document.getElementById('wd').readOnly= true;
     document.getElementById('hd').readOnly= true;
     document.getElementById('ld').readOnly= true;
     document.getElementById('rd').readOnly= true;
     document.getElementById('msbtn').disabled=true;
     document.getElementById('anmbtn').disabled=true;
     document.getElementById('obbtn').disabled=true;
    
 } */

 else if((checkwd == '') && (checkhd == '')&& (checkld == '')&&(checkrd == '')){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="You cannot keep width, height, length, and radius of the duct empty.";

   }

 else if(checkwd == ''){
  
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="You cannot keep width of the duct empty. Enter value between 0.34 and 0.36";

    
 } 
 else if(checkhd == ''){
    
      document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML="You cannot keep height of the duct empty. Enter value between 0.4 and 0.6";
  
      
   } 

   else if(checkld == ''){
    
      document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML="You cannot keep length of the duct empty. Enter value between 5.41 and 5.5";
  
      
   } 
   else if(checkrd == ''){
   
      document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML="You cannot radius of the duct  keep empty. Enter duct radius 0.25";
  
      
   } 
   

else if(checkwd<0.34){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct width should be greater than 0.33";
}
else if(checkwd>0.36){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct width should be lesser than 0.37";
} 
else if(checkhd<0.4){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct height should be greater than 0.3";
}
else if(checkhd>0.6){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct height should be lesser than 0.7";
} 
else if(checkld<5.41){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct length should be greater than 5.40";
}
else if(checkld>5.5){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct length should be lesser than 5.6";
} 
else if(checkrd!=0.25)
{
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Duct radius should be 0.25";
}

else{
   // alert("Take any value between 4 and 20");
    document.getElementById("checkobsn").style.display = "block";
    //document.getElementById("checkobsn").classList.add("show");
    //document.getElementById("alertmsg").innerHTML="Enter duct width between 0.34 and 0.36";
    //document.getElementById('measure').style.display='none';
}

}

function alertmsg(){
    document.getElementById('measure').style.display='none';
    document.getElementById("checkobsn").style.display = "none";
    document.getElementById("checkobsn").classList.remove("show");
    document.getElementById('obbtn').disabled=false;
    
}