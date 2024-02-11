const usuarios = [];
const ListaUsuarios = document.getElementById("lista");
var sizeCardBoard = 0;

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

  // Add a click event listener to each element
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.replace("size_active", "size");
  }

  const elemento = document.querySelector("#" + element.id);
  elemento.classList.replace("size", "size_active");
}

function clearText() {
  document.getElementById("name_input").value = "";
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
