// dennis dayan
// still need to add colors for div!!
//..somehow
function BMI(){
  var m = document.getElementById("mass").value;
  var h = document.getElementById("height").value;
  var actBMI = 703*m/(h**2)
  if(Number.isNaN(actBMI)){
    console.log("why must you do this")
    actBMI = "Please input a valid number for the field(s)"     
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
    // i know these statements are redundant, it just needs them to work
    // i dont know how this works
    // i dont want to know how this works
    // it just works, and im ok with that
  }
  if(actBMI < 0.00){
    console.log("why must you do this")
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
  }
  else{
    document.getElementById("result").innerHTML = (actBMI.toFixed(2))
  }

  
}

