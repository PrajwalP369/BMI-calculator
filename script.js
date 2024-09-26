document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
  
    let bmi = (weight / (height * height)).toFixed(2);
  
    let resultText = `Your BMI is ${bmi}`;
    let category = '';
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
  
    document.getElementById("bmiResult").textContent = resultText;
    document.getElementById("bmiCategory").textContent = `Category: ${category}`;
  });
  