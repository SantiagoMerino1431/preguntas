const R11 = document.querySelector('#R11');
const R12 = document.querySelector('#R12');
const R13 = document.querySelector('#R13');

const R21 = document.querySelector('#R21');
const R22 = document.querySelector('#R22');
const R23 = document.querySelector('#R23');

const R31 = document.querySelector('#R31');
const R32 = document.querySelector('#R32');

const R41 = document.querySelector('#R41');
const R42 = document.querySelector('#R42');

const R51 = document.querySelector('#R51');
const R52 = document.querySelector('#R52');

const responder = document.querySelector('#responder');
let respuesta = [];


R11.addEventListener('change', (event) => {
    console.log(R11.value);
    respuesta[1]=R11.value;
    ckChange(R11);


});

R12.addEventListener('change', (event) => {
    console.log(R12.value);
    respuesta[1]=R12.value;
    ckChange(R12);
});

R13.addEventListener('change', (event) => {
    console.log(R12.value);
    respuesta[1]=R13.value;
    ckChange(R13);
});


R21.addEventListener('change', (event) => {
    console.log(R21.value);
    respuesta[2]=R21.value;
    ckChange(this);
});

R22.addEventListener('change', (event) => {
    console.log(R22.value);
    respuesta[2]=R22.value;
});

R23.addEventListener('change', (event) => {
    console.log(R23.value);
    respuesta[2]=R23.value;
});

R31.addEventListener('change', (event) => {
    console.log(R31.value);
    respuesta[3]=R31.value;
});


R32.addEventListener('change', (event) => {
    console.log(R32.value);
    respuesta[3]=R32.value;
});


R41.addEventListener('change', (event) => {
    console.log(R41.value);
    respuesta[4]=R41.value;
});


R42.addEventListener('change', (event) => {
    console.log(R42.value);
    respuesta[4]=R42.value;
});

R51.addEventListener('change', (event) => {
    console.log(R51.value);
    respuesta[5]=R51.value;
});

R52.addEventListener('change', (event) => {
    console.log(R52.value);
    respuesta[5]=R52.value;
});
/////---------------------------------------///


function ckChange(ckType) {
  var ckName = document.getElementsByName(ckType.name);

  for (var i = 0; i < ckName.length; i++) {
    if (!ckType.checked) {
      ckName[i].disabled = false;
    } else {
      if (!ckName[i].checked) {
        ckName[i].disabled = true;
      } else {
        ckName[i].disabled = false;
      }
    }
  }

}

responder.onclick = () => pintar(document.querySelector('#result'));

function pintar(id) {
	id.innerHTML='';
	count=0;
	respuesta.forEach(function(resp) {
		count++;
    id.innerHTML+="<br><p>pregunta "+count+": "+resp+"</p>";
  });
	respuesta = [];
}