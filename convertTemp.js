function convertTemp(degree) {
  const celsiusexists = degree.toUpperCase().includes("C");
  const farenheitExists = degree.toUpperCase().includes("F");

  // exceção de erro
  if (!celsiusexists && !farenheitExists) {
    throw new Error("degree invalid");
  }
  // farenheit -> celsius
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (farenheit) => (((farenheit - 32) * 5) / 9).toFixed(1);
  let degreeSign = "C";

  // celsius -> farenheit
  if(celsiusexists){
    updateDegree = Number(degree.toUpperCase().replace("C",""));
    formula = (celsius) => ( celsius * 9/5 + 32).toFixed(1);
    degreeSign = "F"

  }
  //retornar calculo da formula 
  return formula(updateDegree) + degreeSign;
}

try {
  console.log(convertTemp("60F"));
  console.log(convertTemp("15.6C"));
  console.log(convertTemp("80E"));

} catch (error) {
  console.error(error.message);
}
