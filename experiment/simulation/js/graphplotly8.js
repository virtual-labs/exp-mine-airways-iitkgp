/* Lab:exp_8_Determination of Frictional Co-efficient of Mine Airways
	 File name: graphplotly8.js
   Author:Prakriti Dhang
*/



var dataPointai =[];

var xArray = [];
var yArray = [];
var xValues = [];
var yValues = [];


 function showplot(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
        var rwe1 = otable.rows[tabrowindex].cells;
         
        //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
        xArray.push(parseFloat(rwe1[3].innerHTML));
        yArray.push(parseFloat(rwe1[4].innerHTML));
        //alert(rwe1[2].innerHTML);
        //alert(rwe1[1].innerHTML);
    }
   
    var data = [
        {x:xArray, y:yArray, mode:"markers"}
        
      ];
      
      var layout = {
        xaxis: {range: [0, 10],dtick: 1, title: "Velocity"},
        yaxis: {range: [0, 40],dtick: 5, title: "Pressure Difference"},  
        title: "Velocity Vs Pressure Difference"
      };
      
      Plotly.newPlot("myPlot", data, layout);
     document.getElementById('measure').style.display="none";

 }




function showbestfitg(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray.push(parseFloat(rwe1[3].innerHTML));
      yArray.push(parseFloat(rwe1[4].innerHTML));
  }
  var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues = [];
  var yValues = [];
  for (var x = 0; x <= 47; x += 1) {
    xValues.push(x);
    yValues.push(x * slope);
  }

var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    
    xaxis: {range: [0, 10], dtick: 1, title: "Velocity"},
    yaxis: {range: [0, 40],  dtick: 5,  title: "Pressure Difference"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myPlot", data, layout);
}