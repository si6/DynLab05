var myInp = document.getElementById("num")
var numDisp = document.getElementById("numDisplay")
var answer = Math.round(Math.random()*100);
document.getElementById("guess").addEventListener("click", function() {
  
        var realNum = parseInt(myInp.value);  
    
         if(myInp.value == "9"){
         numDisp.innerHTML ="OPA! ITS RIGHT :) YAY WIN NOTHING YAY! Score: "+score;
         } else { 
             //numDisp.innerHTML = "DUDE THAT AIN'T RIGHT!";
             if(realNum > answer){ 
             numDisp.innerHTML = "Dude Too BIG!!!";
             }else if(realNum < answer){ 
             numDisp.innerHTML = "YO TOO small";
             }
             score = score - 1;
         }
});