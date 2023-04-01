let entrada = [3000,250];
let i  = 0;
 function gets() {
   let valor = entrada[i];
   i++;
   return valor;
 }

function print(text) {
  console.log(text);
}

module.exports = {gets,print};


