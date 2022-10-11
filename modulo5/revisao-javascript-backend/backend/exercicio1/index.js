const temperatureConverter = (temperature,scale) => {
  let result;
  let authenticate;
  let calculate = 0;
  scale === "F" ? calculate = Number(temperature) * 1.8 + 32 :
  scale === "K" ? calculate = Number(temperature) + 273.15 : {};
  if(typeof temperature !== "number") {
    authenticate = "digite um numero valido"
  } else if ( scale !== "K" && scale !== "F"){
    authenticate = scale
  }
  if(scale === "F" && typeof temperature === "number"){
    result = `${temperature}° Celsius é equivalente a ${calculate.toFixed(2)}° Farenheit.`
  } else if ( scale === "K" && typeof temperature === "number") {
    result = `${temperature}° Celsius é equivalente a ${calculate} Kelvin.`
  } else {
    return  result = `Erro. Parâmetro inválido (${authenticate}).`
  }

  return result
}

console.log(temperatureConverter(22,"F"));

