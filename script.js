function convertTemperature() {
    let tempValue = (document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    document.getElementById("Convert").innerHTML = ""; 


    
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        Convert = (tempValue * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        Convert = (tempValue - 32) * 5/9;
    } else {
        Convert= tempValue;  
    }

    document.getElementById("Convert").innerText = `Converted Temperature: ${Convert} ${toUnit}`;
}