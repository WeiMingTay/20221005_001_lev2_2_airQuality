const ausgabe = document.getElementById("ausgabeAqi");
const healthConcern = document.getElementById("healthConcern");
const healthEffect = document.getElementById("healthEffect");
const background = document.getElementById("background");

function checkAirQuality() {
    let aqi = document.getElementById("aqi").value;
    ausgabe.innerHTML=aqi;

    if (aqi<=50) {
        healthConcern.innerHTML="Good",
        healthEffect.innerHTML="Little or no risk";
        background.style.backgroundColor="var(--thirdColour)"
    } else if (aqi>50 && aqi<=100) {
        healthConcern.innerHTML="Moderate"
        healthEffect.innerHTML="Acceptable quality"
        background.style.backgroundColor="var(--secondaryColour)"
    } else if (aqi > 100 && aqi <= 150) {
        healthConcern.innerHTML="Unhealthy for sensitive groups"
        healthEffect.innerHTML="Generable publics not likely affected"
        background.style.backgroundColor="var(--primaryColour)"
    }
}
