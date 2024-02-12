const usuarios = [];
const ListaUsuarios = document.getElementById("lista");
const MatrizBingo = document.getElementById("board");
const listanumerosgenerados = [];
var sizeCardBoard = 0;
var position = 0;
var turn = 1;

function getID(element) {
  if (element.id === "s5x5") {
    sizeCardBoard = 5;
  }
  if (element.id === "s4x4") {
    sizeCardBoard = 4;
  }
  if (element.id === "s3x3") {
    sizeCardBoard = 3;
  }
  // window.alert(element.id);
  // window.alert(sizeCardBoard);

  var elements = document.getElementsByClassName("size_active");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.replace("size_active", "size");
  }

  const elemento = document.querySelector("#" + element.id);
  elemento.classList.replace("size", "size_active");
}

function clearText() {
  document.getElementById("name_input").value = "";
}

function generateBingo() {
  var counter = 0;
  var counter2 = 0;
  for (let index = 0; index < 4; index++) {
    const random_numb_list = [];
    const templateindex = document.getElementById("template_board");
    const elementoindex = templateindex.content.cloneNode(true);
    elementoindex.querySelector(".player").innerText = usuarios[index].nombre;
    MatrizBingo.appendChild(elementoindex);
    document.getElementsByClassName("bingo-matrix")[index].id =
      usuarios[index].nombre;

    for (let i = 0; i < sizeCardBoard; i++) {
      const board = document.getElementById(usuarios[index].nombre);
      const templatei = document.getElementById("template_row");
      const elementoi = templatei.content.cloneNode(true);
      // elementoi.id = "row" + i;
      board.appendChild(elementoi);
      document.getElementsByClassName("row")[counter].id = "row" + index + i;

      for (let j = 0; j < sizeCardBoard; j++) {
        const row = document.getElementById("row" + index + i);
        const templatej = document.getElementById("template_number");
        var elementoj = templatej.content.cloneNode(true);
        elementoj = pushRandomNumberToList(1, 50, random_numb_list, elementoj);
        // elementoj.id="row"+i+"number"+j
        row.appendChild(elementoj);
        document.getElementsByClassName("number")[counter2].id =
          "row" + counter + "number" + counter2;
        counter2++;
      }
      counter++;
    }
    if (index != 0) {
      const varnone = document.getElementsByClassName("all-cardboard")[index];
      varnone.style.display = "none";
    }
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function isNumberRepeated(number, number_list) {
  return number_list.includes(number);
}

function pushRandomNumberToList(min, max, number_list, elemento) {
  var comprobar = false;
  while (comprobar === false) {
    const randomNumber = generateRandomNumber(min, max);
    if (!isNumberRepeated(randomNumber, number_list)) {
      comprobar = true;
      number_list.push(randomNumber);
      elemento.querySelector(".number").innerText = randomNumber + 1;
      return elemento;
    }
  }
}

function checkNumbersInCardBoard(random_number) {
  var counter = 0;
  var counter2 = 0;
  for (let i = 0; i < sizeCardBoard * 4; i++) {
    for (let j = 0; j < sizeCardBoard; j++) {
      const number = document.getElementById(
        "row" + counter + "number" + counter2
      );
      var content = number.textContent;
      if (content == random_number) {
        number.classList.replace("number", "number-marked");
      }
      counter2++;
    }
    counter++;
  }
}

function countingVertical() {
  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;
  for (let i = 0; i < sizeCardBoard * 4; i++) {
    for (let j = 0; j < sizeCardBoard; j++) {
      const number = document.getElementById(
        "row" + counter + "number" + counter2
      );
      var classNumber = number.className;
      if (classNumber === "number") {
        var provcounter = counter;
        var provcounter2 = counter2;
        counter = +sizeCardBoard * (i + 1) - 1;
        counter2 = counter2 + sizeCardBoard * (i + 1) - j;
        counter3 = 0;
        break;
      } else {
        counter3 += 1;
        if (counter3 === sizeCardBoard) {
          if (counter >= 0 && x <= sizeCardBoard - 1) {
            usuarios[0].score += 1;
          }
          if (counter >= sizeCardBoard && x <= sizeCardBoard * 2 - 1) {
            usuarios[1].score += 1;
          }
          if (counter >= sizeCardBoard * 2 && x <= sizeCardBoard * 3 - 1) {
            usuarios[2].score += 1;
          }
          if (counter >= sizeCardBoard * 3 && x <= sizeCardBoard * 4 - 1) {
            usuarios[3].score += 1;
          }
          return (bool = true);
        }
      }
      counter2++;
    }
    counter++;
  }
}

function countingHorizontal() {
  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;
  for (let i = 0; i < sizeCardBoard * 4; i++) {
    for (let j = 0; j < sizeCardBoard; j++) {
      const number = document.getElementById(
        "row" + counter + "number" + counter2
      );
      var classNumber = number.className;
      if (classNumber === "number") {
        var provcounter = counter;
        var provcounter2 = counter2;
        counter = counter + sizeCardBoard * (i + 1) - provcounter - 1;
        counter2 = counter2 + sizeCardBoard * (i + 1) - j;
        counter3 = 0;
        break;
      } else {
        counter3 += 1;
        if (counter3 === sizeCardBoard) {
          if (counter >= 0 && x <= sizeCardBoard - 1) {
            usuarios[0].score += 1;
          }
          if (counter >= sizeCardBoard && x <= sizeCardBoard * 2 - 1) {
            usuarios[1].score += 1;
          }
          if (counter >= sizeCardBoard * 2 && x <= sizeCardBoard * 3 - 1) {
            usuarios[2].score += 1;
          }
          if (counter >= sizeCardBoard * 3 && x <= sizeCardBoard * 4 - 1) {
            usuarios[3].score += 1;
          }
          return (bool = true);
        }
      }
      counter2++;
    }
    counter++;
  }
}

function countingScore() {
  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;
  for (let i = 0; i < sizeCardBoard * 4; i++) {
    for (let j = 0; j < sizeCardBoard; j++) {
      const number = document.getElementById(
        "row" + counter + "number" + counter2
      );
      var classNumber = number.className;
      if (classNumber === "number") {
        var provcounter = counter;
        var provcounter2 = counter2;
        counter = counter + sizeCardBoard * (i + 1) - provcounter - 1;
        counter2 =
          counter2 + sizeCardBoard * sizeCardBoard * (i + 1) - provcounter2;
        counter3 = 0;
        break;
      } else {
        counter3 += 1;
        if (counter3 === sizeCardBoard * sizeCardBoard) {
          if (counter >= 0 && x <= sizeCardBoard - 1) {
            window.alert("El ganador es:" + usuarios[0].nombre);
          }
          if (counter >= sizeCardBoard && x <= sizeCardBoard * 2 - 1) {
            window.alert("El ganador es:" + usuarios[1].nombre);
          }
          if (counter >= sizeCardBoard * 2 && x <= sizeCardBoard * 3 - 1) {
            window.alert("El ganador es:" + usuarios[2].nombre);
          }
          if (counter >= sizeCardBoard * 3 && x <= sizeCardBoard * 4 - 1) {
            window.alert("El ganador es:" + usuarios[3].nombre);
          }
          return (bool = true);
        }
      }
      counter2++;
    }
    counter++;
  }
}

function checkFullCardBoard() {
  var bool = false;
  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;
  for (let i = 0; i < sizeCardBoard * 4; i++) {
    if (counter === sizeCardBoard * 4) {
      return bool;
    }
    for (let j = 0; j < sizeCardBoard; j++) {
      const number = document.getElementById(
        "row" + counter + "number" + counter2
      );
      var classNumber = number.className;
      if (classNumber === "number") {
        var provcounter = counter;
        var provcounter2 = counter2;
        counter = counter + sizeCardBoard * (i + 1) - provcounter - 1;
        counter2 =
          counter2 + sizeCardBoard * sizeCardBoard * (i + 1) - provcounter2;
        counter3 = 0;
        break;
      } else {
        counter3 += 1;
        if (counter3 === sizeCardBoard * sizeCardBoard) {
          if (counter >= 0 && x <= sizeCardBoard - 1) {
            window.alert("El ganador es:" + usuarios[0].nombre);
          }
          if (counter >= sizeCardBoard && x <= sizeCardBoard * 2 - 1) {
            window.alert("El ganador es:" + usuarios[1].nombre);
          }
          if (counter >= sizeCardBoard * 2 && x <= sizeCardBoard * 3 - 1) {
            window.alert("El ganador es:" + usuarios[2].nombre);
          }
          if (counter >= sizeCardBoard * 3 && x <= sizeCardBoard * 4 - 1) {
            window.alert("El ganador es:" + usuarios[3].nombre);
          }
          return (bool = true);
        }
      }
      counter2++;
    }
    counter++;
  }
}

function generateNumber() {
  var circle = document.getElementById("circle");

  var comprobar = false;
  while (comprobar === false) {
    const number = generateRandomNumber(1, 50);
    if (!isNumberRepeated(number, listanumerosgenerados)) {
      circle.textContent = number;
      checkNumbersInCardBoard(number);
      var value = checkFullCardBoard();
      listanumerosgenerados.push(number);
      if (turn === 25 || value) {
        var section = document.getElementById("second-page");

        section.style.display = "none";
      }
      turn++;
      const turn1 = document.getElementById("turn");
      turn1.textContent = "Turno:" + turn;
      comprobar = true;
    }
  }
}

function playBingo() {
  if ((usuarios.length === 4) & (sizeCardBoard !== 0)) {
    // window.location.href = "bingo.html";
    var section1 = document.getElementById("square");
    section1.style.display = "none";
    var section = document.getElementById("second-page");

    section.style.display = "flex";
    generateBingo();
    const turn1 = document.getElementById("turn");
    turn1.textContent = "Turno:" + turn;
  } else {
    window.alert(
      "Deben ser 4 jugadores para empezar y debe seleccionar un tamaño"
    );
  }
}

function changeRight() {
  if (position === 3) {
    const varnone = document.getElementsByClassName("all-cardboard")[position];
    varnone.style.display = "none";

    const varnone2 = document.getElementsByClassName("all-cardboard")[0];
    varnone2.style.display = "flex";
    position = 0;
  } else {
    const varnone = document.getElementsByClassName("all-cardboard")[position];
    varnone.style.display = "none";

    const varnone2 =
      document.getElementsByClassName("all-cardboard")[position + 1];
    varnone2.style.display = "flex";
    position++;
  }
}

function changeLeft() {
  if (position === 0) {
    const varnone = document.getElementsByClassName("all-cardboard")[position];
    varnone.style.display = "none";

    const varnone2 = document.getElementsByClassName("all-cardboard")[3];
    varnone2.style.display = "flex";
    position = 3;
  } else {
    const varnone = document.getElementsByClassName("all-cardboard")[position];
    varnone.style.display = "none";

    const varnone2 =
      document.getElementsByClassName("all-cardboard")[position - 1];
    varnone2.style.display = "flex";
    position--;
  }
}

function savingPlayerName() {
  //Función para guardar los nombres de los jugadores
  const nombre = document.getElementById("name_input").value;
  var score = 0;

  const usuario = {
    nombre,
    score,
  };

  if (usuarios.length === 4) {
    window.alert("Recuerde que el límite es 4 jugadores");
    // const template = document.getElementById("template-mensaje");
    // const elemento = template.content.cloneNode(true);
    // ListaUsuarios.appendChild(elemento);
  }
  if (usuarios.length < 4) {
    var verificate = false;
    for (var i = 0; i < usuarios.length; i++) {
      const variable = usuarios[i];
      if (variable.nombre === nombre) {
        verificate = true;
        break;
      }
    }
    if (verificate === false) {
      usuarios.push(usuario);

      const template = document.getElementById("template-lista");
      const elemento = template.content.cloneNode(true);

      const index = usuarios.findIndex((i) => {
        return i.nombre === nombre;
      });

      elemento.querySelector(".numberPlayer").innerText = index + 1;

      elemento.querySelector(".namePlayer").innerText = usuario.nombre;
      ListaUsuarios.appendChild(elemento);
    } else {
      window.alert("El usuario ya se encuentra");
    }
  }
  clearText();
}

const key_input = name_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    savingPlayerName();
  }
});
