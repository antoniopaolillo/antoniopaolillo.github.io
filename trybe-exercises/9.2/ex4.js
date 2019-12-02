const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
    const maxTemperature = 58
    return Math.floor(Math.random() * maxTemperature)
}

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32
const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`)

// crie a função sendMarsTemperature abaixoS
const sendMarsTemperature = (callback, error ) => {
    const didOperationSucceed = Math.random() >= 0.5
    if (didOperationSucceed) {
        return callback(getMarsTemperature())
    } else {
        return error("Robot is busy")
    }
    // setTimeout(() => console.log(`Mars temperatures is: ${getMarsTemperature()} degree Celsius`), messageDelay)
}


// sendMarsTemperature(temperatureInFarenheit) // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet) // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
// sendMarsTemperature() // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFarenheit, handleError)

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError)
