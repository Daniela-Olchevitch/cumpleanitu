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
];

btnAceptar.addEventListener("click", function () {
  // Actualizar el valor de la variable con el valor del elemento <input>
  valorInput = input.value;
  if (!valorInput) {
    alert("Debe ingresar su nombre");
  } else {
    app();
  }
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    valorInput = input.value;
    if (!valorInput) {
			mensaje.innerHTML = "";
      alert("Debe ingresar su nombre");
    } else {
      app();
    }
  }
});

const app = () => {
  const nombre = valorInput;

  invitados.forEach((name) => {
    if (name.toLowerCase() === nombre.toLowerCase().trim()) {
      estasInvitado = true;
    }
  });

  if (estasInvitado === true) {
    mensaje.innerHTML =
      "Usted está en la lista!,te espero este Sábado 10 a partir de las 18:00, en Gambetta 1120,esq. Propios,con la temática DISFRACES!";
			initMap(true);
			
  } else {
    mensaje.innerHTML = "No estas invitado, pa juera";
		initMap(false);
  }
	estasInvitado = false;
};


function initMap(valor) {
	if(valor === true){
		var mapa = new google.maps.Map(document.getElementById('mapa'), {
			center: {lat: -34.84265403455252, lng: -56.19530370169602},
			zoom: 8
		});
	}else{
		var mapa = null;
	}
}
