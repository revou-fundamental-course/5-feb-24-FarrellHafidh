function validateInput(event, inputType) {
        if (!(event.key.match(/[0-9]|\.|Backspace|Delete|ArrowLeft|ArrowRight|Home|End/) || 
        (event.key === '-' && event.target.sectionStart === 0 && event.target.value.IndexOf('-') === -1))) {
        event.preventDefault();
        }
    }

    function toggleMinus(inputId) {
        var inputField = document.getElementById(inputId);
        var inputValue = inputField.value;

        if (inputValue.indexOf('-') === -1) {

        inputField.value = '-' + inputValue;

        } else {

        inputField.value = inputValue.replace('-', '');

        }
    }
function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById('temperature').value);
    var fromScale = document.getElementById('fromScale').value;
    var toScale = document.getElementById('toScale').value;
    var result;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    switch (fromScale) {
        case 'celsius':
            result = convertCelsius(temperatureInput, toScale);
            break;
        case 'fahrenheit':
            result = convertFahrenheit(temperatureInput, toScale);
            break;
        case 'reaumur':
            result = convertReaumur(temperatureInput, toScale);
            break;
        case 'kelvin':
            result = convertKelvin(temperatureInput, toScale);
            break;
        default:
            alert("Invalid input scale.");
            return;
    }

    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)} ${toScale}`;
}

function convertCelsius(temperature, toScale) {
    switch (toScale) {
        case 'celsius':
            return temperature;
        case 'fahrenheit':
            return (temperature * 9 / 5) + 32;
        case 'reaumur':
            return temperature * 4 / 5;
        case 'kelvin':
            return temperature + 273.15;
        default:
            return NaN;
    }
}

function convertFahrenheit(temperature, toScale) {
    switch (toScale) {
        case 'celsius':
            return (temperature - 32) * 5 / 9;
        case 'fahrenheit':
            return temperature;
        case 'reaumur':
            return (temperature - 32) * 4 / 9;
        case 'kelvin':
            return (temperature - 32) * 5 / 9 + 273.15;
        default:
            return NaN;
    }
}

function convertReaumur(temperature, toScale) {
    switch (toScale) {
        case 'celsius':
            return temperature * 5 / 4;
        case 'fahrenheit':
            return temperature * 9 / 4 + 32;
        case 'reaumur':
            return temperature;
        case 'kelvin':
            return temperature * 5 / 4 + 273.15;
        default:
            return NaN;
    }
}

function convertKelvin(temperature, toScale) {
    switch (toScale) {
        case 'celsius':
            return temperature - 273.15;
        case 'fahrenheit':
            return (temperature - 273.15) * 9 / 5 + 32;
        case 'reaumur':
            return (temperature - 273.15) * 4 / 5;
        case 'kelvin':
            return temperature;
        default:
            return NaN;
    }
}