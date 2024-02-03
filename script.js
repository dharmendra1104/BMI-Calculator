function calcBMI() {
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");
    let resultDiv = document.getElementById("result");
  
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
  
    let bmi = weight / ((height / 100)**2);
    let category = "";
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

  }

  
