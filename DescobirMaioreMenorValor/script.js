let entrada = [5,3,4,1,10,8];
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
