//-------------------------------------------------------------------------------//
//Array, en este caso de numeros del 0 al 9 convertido a string
function digits() {
  let array = []; // crea un array vacio
  for (let i = 0; i < 10; i++) {
    array.push(i); // cada numero (i) es pusheado al array vacio por cada iteracion
  }
  let arrayFinal = array.toString(); // convierte el array a string y lo guarda en una variable
  return arrayFinal;
}

//-------------------------------------------------------------------------------//
//Contador de vocales
function countVowels(cadena) {
  let totalVocales = 0; // contador de vocales guardado en variable

  //el for recorre el string y si alguna letra coincide con las vocales
  //le suma 1 a la variable que cuenta las vocales
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena[i] === "a" ||
      cadena[i] === "A" ||
      cadena[i] === "e" ||
      cadena[i] === "E" ||
      cadena[i] === "i" ||
      cadena[i] === "I" ||
      cadena[i] === "o" ||
      cadena[i] === "O" ||
      cadena[i] === "u" ||
      cadena[i] === "U"
    ) {
      totalVocales++;
    }
  }

  return totalVocales;
}

//-------------------------------------------------------------------------------//
//Removedor de vocales
function removeVowels(str) {
  var vowels = "aeiouAEIOU";
  let output = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      output += str[i];
    }
  }
  return output;
}

//-------------------------------------------------------------------------------//
//Conversor de unidades de distancia

function convert(distancia, unidad) {
  let resultado;
  if (unidad == "km" || unidad == "KM" || unidad == "Km" || unidad == "kM") {
    resultado = Math.round(distancia * 0.621371) + " mi";
  } else if (
    unidad == "mi" ||
    unidad == "MI" ||
    unidad == "Mi" ||
    unidad == "mI"
  ) {
    resultado = Math.round(distancia * 1.60934) + " km";
  }

  return resultado;
}

//Esta función toma como parámetros un número (distancia) y un string (unidad).
//Dependiendo de la unidad ingresada, la función convierte la distancia ingresada a la unidad opuesta.
//Si la unidad ingresada es "km", la distancia se convertirá a millas.Si la unidad ingresada es
//"mi", la distancia se convertirá a kilómetros.El resultado de la conversión se redondeará con
//Math.round()

//-------------------------------------------------------------------------------//
//Suma los numeros multiplos de 3, 5 y de 15 contenidos en el numero pasado por parametro

function sumMultiples(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 15 == 0) {
      // si es multiplo de 3 y 5
      sum += i; // se agrega el número a la suma
    } else if (i % 3 === 0 || i % 5 === 0) {
      // si es multiplo de 3 o 5
      sum += i; // se agrega el número a la suma
    }
  }
  return sum;
}

/* La función comienza declarando una variable sum que se inicializará en 0.
Después, se usa un bucle for para recorrer los números desde 0 hasta el número pasado
 como parámetro.Dentro del bucle for, se comprueba si el número es múltiplo de 3 o de 5 
 con los operadores de módulo %.Si se cumple la condición, se agrega el número a la suma y
  se sigue con el siguiente número.
 */

//-------------------------------------------------------------------------------//
//retorna el número del array que aparezca un número impar de veces.
// Siempre se recibirá un array con un sólo número con esas características.
function findOddNumber(numbers) {
  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return numbers[i];
    } else {
      counter = 0;
    }
  }
}

//-------------------------------------------------------------------------------//

/*Función llamada optimalPath que recibe como
parámetro un array de strings, que pueden ser: "NORTE", "SUR", "ESTE" y
"OESTE". Este array indica el camino que debe seguir un viajero para llegar a
determinado destino. El problema es que el camino propuesto por el array no es
óptimo.

Por ejemplo, si el array de entrada es ["NORTE", "SUR"] el camino no es óptimo, ya
que antes que avanzar y retroceder al mismo lugar, es preferible quedarse quieto.
Por lo tanto, la función en este caso debería retornar un array vacío [].
👉Considerar que "NORTE" y "SUR" son opuestos, al igual que "ESTE" y "OESTE",
y se cancelan si están uno inmediatamente después del otro. Es decir, en el camino
final, estos puntos cardinales no pueden aparecer juntos.


Ejemplos:
InputOutput
optimalPath(["NORTE", "SUR"])[]
optimalPath(["NORTE", "SUR", "SUR"])["SUR"]
optimalPath(["NORTE", "SUR", "SUR", "NORTE"])[]
optimalPath(["NORTE", "SUR", "SUR", "SUR"])["SUR", "SUR"]
optimalPath(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"])["OESTE"]
optimalPath(["NORTE", "OESTE", "SUR", "ESTE"])["NORTE", "OESTE",
"SUR", "ESTE"]*/
//Camino optimo, recibe como parametro puntos cardinales y devuelve el mejor camino a recorrer
function optimalPath(roads) {
  let bestPath = [];
  let bestPath1 = [];

  for (let i = 0; i < roads.length; i++) {
    if (
      (roads[i] === "NORTE" && roads[i + 1] === "SUR") ||
      (roads[i] === "SUR" && roads[i + 1] === "NORTE") ||
      (roads[i] === "ESTE" && roads[i + 1] === "OESTE") ||
      (roads[i] === "OESTE" && roads[i + 1] === "ESTE")
    ) {
      i = i + 1;
    } else {
      bestPath.push(roads[i]);
    }
  }

  for (let i = 0; i < bestPath.length; i++) {
    if (
      (bestPath[i] === "NORTE" && bestPath[i + 1] === "SUR") ||
      (bestPath[i] === "SUR" && bestPath[i + 1] === "NORTE") ||
      (bestPath[i] === "ESTE" && bestPath[i + 1] === "OESTE") ||
      (bestPath[i] === "OESTE" && bestPath[i + 1] === "ESTE")
    ) {
      i = i + 1;
    } else {
      bestPath1.push(bestPath[i]);
    }
  }

  return bestPath1;
}

//-------------------------------------------------------------------------------//

/*Función en JavaScript llamada correctParentheses que reciba como parámetro un string compuesto por paréntesis curvos
"(" y/o ")", y retorna true en caso de que los paréntesis estén ordenados de la
forma correcta (que se abran y cierren de forma consistente). En caso de no estarlo,
la función retorna false.
  
Ejemplos:
Input                   Output
correctParentheses("()")true
correctParentheses(")(")false
correctParentheses(")(()))")false
correctParentheses("(")false
correctParentheses("()(")false
correctParentheses("(())((()())())")true */

function correctParentheses(parentheses) {
  let count = 0;

  if (parentheses.length % 2 !== 0) return false;
  if (parentheses[0] === ")") return false;

  for (const character of parentheses) {
    if (character === "(") count++;
    if (character === ")") count--;
    if (count < 0) return false;
  }

  return count === 0;
}

//-------------------------------------------------------------------------------//

/* Función en JavaScript llamada encrypt13 que recibe
como parámetro un string y retorna como resultado un nuevo string pero
“encriptado”.
El nuevo string tiene las letras “corridas” 13 lugares. Por ejemplo, a la letra
“A” le corresponderá la “N”, así como a la “a” le corresponderá la “n”. A la letra “T” le
corresponderá la “G” y a la letra “t” la “g”. Es decir, las minúsculas se transforman en
otra letra minúscula y las mayúsculas también se transforman en mayúscula.
Sólo se deberán transformar (“correr”) letras del alfabeto inglés. Cualquier otro
carácter deberá quedar incambiado.

Ejemplos:
Input              Output
encrypt13("hola")"ubyn"
encrypt13("CHAU")"PUNH"
encrypt13("Título")"Gíghyb"
encrypt13("HACK academy 2022")"UNPX npnqrzl 2022"
 */

//Encripta un string corriendo cada caractér 13 lugares en el alfabeto
function encrypt13(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Convierte la cadena `word` en un array de caracteres y luego aplica la función `map` a cada uno de ellos
  const encryptedChars = [...word].map((char) => {
    // Busca la posición del caracter en el alfabeto
    const index = alphabet.indexOf(char.toLowerCase());
    // Si el caracter no está en el alfabeto, lo devuelve sin cifrar
    if (index === -1) {
      return char;
    }
    // Aplica la transformación de 13 posiciones en el alfabeto al caracter
    const newIndex = (index + 13) % 26;
    const newChar = alphabet[newIndex];
    // Si el caracter original era una mayúscula, convierte el caracter cifrado a mayúscula
    return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
  });

  // Convierte el array de caracteres cifrados en una cadena
  return encryptedChars.join("");
}

//-------------------------------------------------------------------------------//

/*Versión de “Piedra, Papel o Tijera”, para jugar
contra la computadora.
Se crea una función en JavaScript llamada play que recibe
como parámetro un string que puede ser “Piedra”, “Papel” o “Tijera”.
La función deberá definir qué movimiento hizo la computadora y en base a eso
determinar un ganador.
  Ejemplos:

Input                                     Output
play("Piedra")"La computadora eligió Papel. Perdiste."
play("Piedra")"La computadora eligió Tijeras. Ganaste."
play("Papel")"La computadora eligió Papel. Empataron."
play("Papel")"La computadora eligió Tijeras. Perdiste."
 */
//El juego piedra papel o tijera vs la maquina
function play(str) {
  let player1 = str;
  let possibilities = ["piedra", "papel", "tijeras"];
  let option = Math.floor(Math.random() * possibilities.length);
  let computer = possibilities[option];
  let result = "";

  // -------------casos en que el usuario gana--------------
  if (
    (player1 === "piedra" && computer === "tijeras") ||
    (player1 === "papel" && computer === "piedra") ||
    (player1 === "tijeras" && computer === "papel")
  ) {
    result = `la computadora eligió ${computer}. Ganaste`;
  }

  // ------------casos en que hay empate----------------
  else if (
    (player1 === "piedra" && computer === "piedra") ||
    (player1 === "papel" && computer === "papel") ||
    (player1 === "tijeras" && computer === "tijeras")
  ) {
    result = `la computadora eligió ${computer}. Empataste`;
  }

  // ------------casos en que el usuario pierde----------------
  else if (
    (player1 === "piedra" && computer === "papel") ||
    (player1 === "papel" && computer === "tijeras") ||
    (player1 === "tijeras" && computer === "piedra")
  ) {
    result = `la computadora eligió ${computer}. Perdiste`;
  }
  return result;
}

//-------------------------------------------------------------------------------//
/* 
Función llamada durationForHumans que
recibe como parámetro un número entero (representando una cantidad de
segundos) y retorna un string con un texto que indique la cantidad de tiempo que
transcurrió, pero con un formato fácil de leer por humanos.

Ejemplos:
Input------------------Output
durationForHumans(0)"ahora"
durationForHumans(62)"1 minuto y 2 segundos"
durationForHumans(3662)"1 hora, 1 minuto y 2 segundos"
durationForHumans(43424234)"1 año, 137 días, 14 horas, 17 minutos y 14 segundos"
durationForHumans(4342440)"50 días, 6 horas y 14 minutos"
 */

function durationForHumans(seconds) {
  if (seconds === 0) {
    return "ahora";
  }

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const years = Math.floor(seconds / year);
  seconds %= year;
  const days = Math.floor(seconds / day);
  seconds %= day;
  const hours = Math.floor(seconds / hour);
  seconds %= hour;
  const minutes = Math.floor(seconds / minute);
  seconds %= minute;

  const components = [];

  if (years > 0) {
    const suffix = years === 1 ? "" : "s";
    components.push(`${years} año${suffix}`);
  }

  if (days > 0) {
    const suffix = days === 1 ? "" : "s";
    components.push(`${days} día${suffix}`);
  }

  if (hours > 0) {
    const suffix = hours === 1 ? "" : "s";
    components.push(`${hours} hora${suffix}`);
  }

  if (minutes > 0) {
    const suffix = minutes === 1 ? "" : "s";
    components.push(`${minutes} minuto${suffix}`);
  }

  if (seconds > 0) {
    const suffix = seconds === 1 ? "" : "s";
    components.push(`${seconds} segundo${suffix}`);
  }

  const lastIndex = components.length - 1;
  return components.reduce((text, component, index) => {
    if (index === 0) {
      return component;
    } else if (index === lastIndex) {
      return `${text} y ${component}`;
    } else {
      return `${text}, ${component}`;
    }
  }, "");
}