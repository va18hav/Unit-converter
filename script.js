const input = document.getElementById("inp-value")
const convertBtn = document.getElementById("convert-btn")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")



function convert() {
    const metersToFeet = (input.value * 3.281).toFixed(3)
    const feetToMeters = (input.value / 3.281).toFixed(3)
    const litersToGallons = (input.value * 0.264).toFixed(3)
    const gallonsToLiters = (input.value / 0.264).toFixed(3)
    const kilosToPounds = (input.value * 2.204).toFixed(3)
    const poundsToKilos = (input.value / 2.204).toFixed(3)
    lengthConversion.innerHTML = `<p>
    ${input.value} meters = ${metersToFeet} feet | ${input.value} = ${feetToMeters} meters
    </p>`
    volumeConversion.innerHTML = `<p>
    ${input.value} liters = ${litersToGallons} gallons | ${input.value} gallons = ${gallonsToLiters} liters
    </p>`
    massConversion.innerHTML = `<p>
    ${input.value} kilos = ${kilosToPounds} pounds | ${input.value} pounds = ${poundsToKilos} kilos
    </p>`
}