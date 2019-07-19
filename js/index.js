function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    // Validate Input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
  
    // Check input isnt less than 1 or empty
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    // Calculate Tip
    var total = (billAmt * serviceQual) / numOfPeople;
    // rounds to 2 decimal places
    total = Math.round(total * 100) / 100;
    // keeps total with digits after decimal point
    //total = total.toFixed(2);
   
    var maxTotal = total + (Math.round(billAmt*100)/100);
    maxTotal = maxTotal.toFixed(2);
    
  
  
    if (isNaN(total)) {
      alert("Please enter a valid Bill Amount")
    } else {
      // Show the tip
      document.getElementById("totalTip").style.display = "block";
      document.getElementById("tip").innerHTML = total;
      document.getElementById("max").style.display = "block";
      document.getElementById("maxTotal").innerHTML = maxTotal;
    }
    // End of Function
  }
  
  //Hide tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  document.getElementById("max").style.display = "none";
  
  //Click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  }
  