function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
  
    if (!temperatureInput || isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
    let convertedTemperature;
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    } else {
      convertedTemperature = parseFloat(temperatureInput);
    }
    const resultArea = document.getElementById('resultArea');
    resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit}`;
  }
  