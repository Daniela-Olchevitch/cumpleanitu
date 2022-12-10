var input = document.querySelector('input[name="casillaNombre"]');
var btnAceptar = document.querySelector('button[name="btnAceptar"]');
var mensaje = document.querySelector('span[name="mensaje"]');
let estasInvitado = false;
let valorInput;
const invitados = [
  "Federico",
  "Nicolas",
  "Cristian",
  "Gabriel",
  "Damian",
  "Roberto",
  "Sebastian",
	"Andres",
	"Ariana"
];

btnAceptar.addEventListener("click", function () {
  // Actualizar el valor de la variable con el valor del elemento <input>
  valorInput = input.value;
  if (!valorInput) {
		mensaje.innerHTML = " ";
    alert("Debe ingresar su nombre");
  } else {
    app();
  }
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    valorInput = input.value;
    if (!valorInput) {
			mensaje.innerHTML = " ";
      alert("Debe ingresar su nombre");
    } else {
      app();
    }
  }
});

const app = () => {
  const nombre = valorInput.toLowerCase().replaceAll(" ","");

  invitados.forEach((name) => {
    if (name.toLowerCase() === nombre ) {
      estasInvitado = true;
    }
  });

  if (estasInvitado === true) {
    mensaje.innerHTML =
      "Estás invitado! Te espero este Sábado 10/12 </br>a partir de las 18:00 en Gambetta 1120 esq. Propios,</br>con la temática <mark><b>DISFRACES! :D</b></mark>";
  } else {
    mensaje.innerHTML = "No estas invitado, pa juera";
  }

	estasInvitado = false;
};

