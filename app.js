const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    //add loading feature//

    convertBtn.innerHTML="<span><i class='fa fa-spinner fa-spin'></i>converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML="<span>convert</span>"
    },500)

});

function convertToCelsius() {
    let inputValue = degree.value;

   setTimeout(()=>{
    if (tempType.value === "Fahrenheit") {
        const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
    } else if (tempType.value === "Kelvin") {
        const kelvinToCelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;C`;
    }
   },700)
}
