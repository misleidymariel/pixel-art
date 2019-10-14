var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById("indicador-de-color");
var guardarPixelButton = document.getElementById("guardar");
var clickDibujar = false;
var borrarLienzoButton = document.getElementById("borrar");

function eventSeleccionPaleta(event) {
  selecionarColor(event.target.style.backgroundColor);
}

function eventDibujarClick(event){
  event.target.style.background = indicadorColor.style.backgroundColor;
  clickDibujar = !clickDibujar
}

function eventMouseOver(event) {
  if( clickDibujar ) {
    event.target.style.background = indicadorColor.style.backgroundColor;
  }
  
}

function colores (nombreColores){
  for( var i = 0; i < nombreColores.length; i++){
    var crearElemento = document.createElement("div");
    crearElemento.onclick = eventSeleccionPaleta
    crearElemento.style.backgroundColor =  nombreColores[i];
    document.getElementById("paleta").appendChild(crearElemento);
  }
}
 function grilla (grillaPixeles){
   for(var i =0; i < 1750; i++){
    var crearGrilla = document.createElement("div");
    crearGrilla.onclick = eventDibujarClick
    crearGrilla.onmouseover = eventMouseOver
    crearGrilla.style.background = grillaPixeles[i];
    document.getElementById("grilla-pixeles").appendChild(crearGrilla);
   }
 }


grilla(grillaPixeles);

function borrarLienzo (){
  //background:
  $("#grilla-pixeles div").animate({backgroundColor: "white"}, 2000);
}

function selecionarColor(nuevoColor) {
  indicadorColor.style.backgroundColor = nuevoColor;
}

/**
 * Agregar eventos
 */
colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual;
  })
)

borrarLienzoButton.onclick = borrarLienzo;
guardarPixelButton.onclick = guardarPixelArt;

colores(nombreColores);

