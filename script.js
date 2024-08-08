//Formulario par o impar
document.addEventListener("DOMContentLoaded", () => {
  //Variables referneciales a form par o impar
  const form = document.getElementById("par-impar");
  const formMessage = document.getElementById("resultado-1");

  //Variables referneciales a form mayor a:
  const form_2 = document.getElementById("es-mayor");
  const formMessage2 = document.getElementById("resultado-2");

  //Variables referneciales a form múltiple de 5:
  const form_3 = document.getElementById("multiplo-5");
  const formMessage3 = document.getElementById("resultado-3");

  //Variables referneciales a form contador:
  const form_4 = document.getElementById("contador");
  const formMessage4 = document.getElementById("resultado-4");

  //Variables referneciales a form repeat:
  const form_5 = document.getElementById("repeat-words");
  const formMessage5 = document.getElementById("resultado-5");

  //Variables referneciales a form array:
  const button_6 = document.getElementById("arrayfunction");
  const formMessage6 = document.getElementById("resultado-6");

  //Variables referneciales a form array 2:
  const button_7 = document.getElementById("arrayDos");
  const formMessage7 = document.getElementById("resultado-7");

  //Variables referneciales a form array 3:
  const form_8 = document.getElementById("coloqueNumero");
  const formMessage8 = document.getElementById("resultado-8");

  /* -------- evento form --------- */

  //Evento relacionado al primer Formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores del formulario
    const number1 = document.getElementById("number1").value;

    const result = esParOimpar(number1);

    console.log(result);
    formMessage.innerHTML = `${result}`;
  });
  //Evento relacionado al segundo Formulario
  form_2.addEventListener("submit", (event) => {
    event.preventDefault();

    const a = document.getElementById("numberA").value;
    const b = document.getElementById("numberB").value;

    const result = mayorQue(a, b);
    console.log(result);
    formMessage2.innerHTML = `${result}`;
  });

  //Evento relacionado al tercer Formulario
  form_3.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores del formulario
    const number = document.getElementById("number").value;

    const result = esMultiplo5(number);

    console.log(result);
    formMessage3.innerHTML = `${result}`;
  });

  //Evento relacionado al cuarto Formulario
  form_4.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores del formulario
    const number = document.getElementById("last-number").value;

    const result = contador(number);

    formMessage4.innerHTML = `${result}`;
  });

  //Evento relacionado al quinto Formulario
  form_5.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores del formulario
    const number = document.getElementById("repeat-number").value;
    const words = document.getElementById("repeat-word").value;

    const result = repeatWords(number, words);

    formMessage5.innerHTML = `${result}`;
  });

  //Evento relacionado al sexto Formulario

  button_6.addEventListener("click", () => {
    let printArray = [1, 2, 3, 4, 5];

    const result = imprimeArray(printArray);
    formMessage6.innerHTML = `${result}`;
  });

  //Evento relacionado al septimo Formulario

  button_7.addEventListener("click", () => {
    let printArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = arrayDos(printArray);
    formMessage7.innerHTML = `${result}`;
  });

  //Evento relacionado al último Formulario

  form_8.addEventListener("submit", (event) => {
    event.preventDefault();

    let printArray = [1, 2, 3, 4, 5, 6, 7, 8];

    const number = document.getElementById("multiplo").value;
    const result = arrayTres(printArray, number);

    formMessage8.innerHTML = `${result}`;
  });

  /* -------- Todas las Funciones --------- */

  //función par-impar
  const esParOimpar = (number) => {
    if (number % 2 === 0) {
      return "El número es Par";
    }

    return "El número es Impar";
  };

  //función es-mayor
  function mayorQue(numero1, numero2) {
    const a = parseInt(numero1);
    const b = parseInt(numero2);

    if (a > b) {
      return `El número A:${a} es mayor que B:${b}`;
    }
    if (b > a) {
      return `El número B:${b} es mayor que A:${a}`;
    }
    return "Ambos numeros son iguales";
  }

  //Función es múltiplo de 5

  const esMultiplo5 = (number) => {
    if (number % 5 === 0) {
      return "El número si es múltiplo de 5";
    }
    return "El número no es múltiplo de 5";
  };

  //Función contador
  const contador = (number) => {
    const a = parseInt(number);
    let cont = 0;
    let arrRes = [];

    for (var i = 0; i <= a; i++) {
      cont = +i;
      console.log(cont);
      arrRes.push(cont);
    }

    return arrRes;
  };

  //Función repeat-words
  const repeatWords = (n, w) => {
    let num = parseInt(n);
    let arrayWord = [];

    for (var i = 0; i < num; i++) {
      console.log(w);
      arrayWord.push(` ${w}`);
    }

    return arrayWord;
  };

  //Función array

  const imprimeArray = (arr) => {
    let resultadoArray = [];
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      resultadoArray.push(arr[i]);
    }
    return resultadoArray;
  };

  //Función array dos
  const arrayDos = (arr) => {
    let resultadoArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (i != 5) {
        console.log(arr[i]);
        resultadoArray.push(arr[i]);
      }
    }
    return resultadoArray;
  };

  //Función array tres
  const arrayTres = (arr, n) => {
    let result = 0;
    let resultadoArray = [];
    for (var i = 0; i < arr.length; i++) {
      result = arr[i] * n;
      console.log(result);
      resultadoArray.push(result);
    }

    return resultadoArray;
  };
});
