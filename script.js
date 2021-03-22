
function Auto (marca, año, tipo, nombre, apellido, mail){
  this.marca = marca;
  this.año = año;
  this.tipo = tipo;
  this.nombre = nombre;
  this.apellido = apellido;
  this.mail = mail;
}

function getPrecioPorMarca(marca){

  if(marca === 'alfa romeo'){
    return 300;
  }

  if(marca === 'audi'){
    return 320;
  }
  
  if(marca === 'bentley'){
    return 380;
  }

  if(marca === 'bmw'){
    return 330;
  }

  if(marca === 'cadillac'){
    return 330;
  }

  if(marca === 'chevrolet'){
    return 150;
  }

  if(marca === 'citroen'){
    return 120;
  }

  if(marca === 'ferrari'){
    return 520;
  }

  if(marca === 'fiat'){
    return 100;
  }

  if(marca === 'ford'){
    return 170;
  }

  if(marca === 'honda'){
    return 160;
  }

  if(marca === 'isuzu'){
    return 170;
  }

  if(marca === 'iveco'){
    return 250;
  }

  if(marca === 'jaguar'){
    return 460;
  }

  if(marca === 'jeep'){
    return 260;
  }

  if(marca === 'kia'){
    return 200;
  }

  if(marca === 'lamborghini'){
    return 580;
  }

  if(marca === 'land rover'){
    return 390;
  }

  if(marca === 'lexus'){
    return 300;
  }

  if(marca === 'maserati'){
    return 700;
  }

  if(marca === 'mazda'){
    return 380;
  }

  if(marca === 'mercedes-benz'){
    return 370;
  }

  if(marca === 'mini'){
    return 280;
  }

  if(marca === 'mitsubishi'){
    return 250;
  }

  if(marca === 'morgan'){
    return 250;
  }

  if(marca === 'nissan'){
    return 210;
  }

  if(marca === 'peugeot'){
    return 200;
  }

  if(marca === 'piaggio'){
    return 180;
  }

  if(marca === 'porsche'){
    return 570;
  }

  if(marca === 'renault'){
    return 150;
  }

  if(marca === 'rolls-royce'){
    return 800;
  }

  if(marca === 'seat'){
    return 160;
  }

  if(marca === 'smart'){
    return 170;
  }

  if(marca === 'subaru'){
    return 260;
  }

  if(marca === 'tesla'){
    return 650;
  }

  if(marca === 'toyota'){
    return 300;
  }

  if(marca === 'volkswagen'){
    return 230;
  }

  if(marca === 'volvo'){
    return 310;
  }

}

function getPrecioPorAño(año){
  return parseInt(año) * 0.10;
}

function getPrecioPorTipo(tipo){
  return tipo === 'basico' ? 75 : 150;
}


function procesarDatosDelForm(){

const nombre = document.getElementById("nombre").value;

const apellido = document.getElementById("apellido").value;

const mail = document.getElementById("mail").value;

const marca = document.getElementById("marca").value;

const año = document.getElementById("año").value;

const tipo = document.getElementById("radioBasico").checked ? 'basico' : 'completo'; //define si es o no "tipo basico"

const auto = new Auto(marca, año, tipo, nombre, apellido, mail)   //me crea un JSON

const autoAGuardar = JSON.stringify(auto);  //me crea string de JSON como parametro


localStorage.setItem('auto1', autoAGuardar) //guarda en localStorange

const cotizacion = getPrecioPorAño(año) + getPrecioPorMarca(marca) + getPrecioPorTipo(tipo); //formula de cotizacion

document.getElementById('cotizacion').innerHTML = 'Tu seguro es de US$ ' + cotizacion;

}

										 ///////////////////////////////BOTON COTIZAR///////////////////////////

$ ('#scriptBox').mouseover (function(){
	$('#scriptBox').css("color","black")
	$('#scriptBox').css("background","#577691")
	$('#scriptBox').css("font-family","verdana")
});

$('#scriptBox').mouseout (function(){
	$('#scriptBox').css("color","black")
	$('#scriptBox').css("background","rgba(0,0,0,0.3)")
	$('#scriptBox').css("font-family","arial")
});

$('#scriptBox').one("click", function(){
	alert("Aguarde mientras valoramos su seguro")
	
});






										 ///////////////////////////////MENU SCROLL///////////////////////////
$(document).ready(function(){ 
	const altura =$('.menu').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.menu').addClass('menu-fixed');
		}
		else{
			$('.menu').removeClass('menu-fixed');
		}

	});
});

 											//////////////////////////////////TABLA MONEDA/////////////////////////////


function get_data(url)
{
  var result = '';

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.overrideMimeType("application/json");
  xmlhttp.open("GET",url,false);
  xmlhttp.onreadystatechange = function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      result = xmlhttp.responseText;
    }
  }
  xmlhttp.send(null);
  result = JSON.parse(result);
  return result;
}

var url = 'http://ws.geeklab.com.ar/dolar/get-dolar-json.php';

var data_json = get_data(url);




										 ///////////////////////////////////FORMULARIO////////////////////////////////


var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', function(){
		if(this.value.length>=1) {
			this.nextElementSibling.classList.add('fijar');
		} else {
			this.nextElementSibling.classList.remove('fijar');
		}
	});
}





										
										 ///////////////////////////////ANIMACIONES///////////////////////////




										 