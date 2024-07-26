const list = [];
const anotherList = list.concat(157);

const persona = {
  name: "Orlando",
  twitter: "@lando95",
  age: 28,
  isDeveloper: true,
  links: ["https://x.com/iamlando24", "https://x.com/iamlando2422"],
};

//Esto es una funcion que recibe dos parametros y devuelve el resultado de sumar los dos valores
//Esta es un función por expresión
const sumar = (a, b) => {
  console.log(a);
  console.log(b);

  return a + b;
};

//Esto es una funcion que recibe dos parametros y devuelve el resultado de restar los dos valores
//ESta es un funcion por declaracion
function restar(a, b) {
  return a - b;
}
const op1 = 8;
const op2 = 2;

console.log(sumar(2, "dos"));
