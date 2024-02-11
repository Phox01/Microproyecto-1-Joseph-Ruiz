const usuarios = [];
const ListaUsuarios = document.getElementById("lista");

function clearText() {
  document.getElementById("name_input").value = "";
}

function savingPlayerName() {
  //Función para guardar los nombres de los jugadores
  const nombre = document.getElementById("name_input").value;

  const usuario = {
    nombre,
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
