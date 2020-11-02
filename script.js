// dennis dayan
// still need to add colors for div!!
//..somehow
function BMI(){
  var m = document.getElementById("mass").value;
  var h = document.getElementById("height").value;
  var actBMI = 703*m/(h**2)
  if(Number.isNaN(actBMI)){
    console.log("why must you do this")
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
  }
  if(actBMI < 0.00){
    console.log("why must you do this")
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
  }
  else{
    document.getElementById("result").innerHTML = (actBMI.toFixed(2))
  }

  
}

