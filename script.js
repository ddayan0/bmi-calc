// dennis dayan
function BMI() {
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;
  var actBMI = 703 * w / (h ** 2)
  if (Number.isNaN(actBMI)) {
    console.log("why must you do this")
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
  }
  if (actBMI < 0.00) {
    console.log("why must you do this")
    document.getElementById("result").innerHTML = ("Please input a valid number for the field(s)")
  }
  if (actBMI < 18.5 && actBMI > 0.00) {
    document.getElementById("result").style.color = "red"
    document.getElementById("result").innerHTML = (actBMI.toFixed(2) + ": You are underweight!")
  }
  if (actBMI > 18.5 && actBMI <= 24.9) {
    document.getElementById("result").style.color = "green"
    document.getElementById("result").innerHTML = (actBMI.toFixed(2))
  }
  if (actBMI > 25) {
    document.getElementById("result").style.color = "#b5ae4e"
    document.getElementById("result").innerHTML = (actBMI.toFixed(2) + ": You are overweight!")
  }
  if (actBMI > 30) {
    document.getElementById("result").style.color = "red"
    document.getElementById("result").innerHTML = (actBMI.toFixed(2) + ": You are obese!")
  }
}
