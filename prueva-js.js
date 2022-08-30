//const h1 = document.querySelector("h1");
//const p = document.querySelector("p");
//const parrafito = document.querySelector(".parrafito");
//const pid = document.querySelector("#pid");
//const input = document.querySelector("input");

//console.log({
//    h1,
//    p,
//    parrafito,
//    pid,
 //   input
//});

//h1.innerText = "esto es peligroso se puede agregar cualquier HTML malicioso por este comando mejor usar inner text"
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");

//h1.classList.remove("patito");
//h1.classList.add("gris");
//h1.classList.toggle("gris");
//h1.classList.contains("gris");
//const img = document.createElement("img");
//img.setAttribute("src", "https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif");
//console.log(img);
//pid.innerHTML = "";
//pid.append(img);

const form = document.querySelector("#form"); 
const h1 = document.querySelector("h1");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result')

form.addEventListener('click', sumaInputsValues);
//btn.addEventListener('click', sumaInputsValues)
 
function sumaInputsValues(event){
    console.log({event});
    event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "resultado: " + sumaInputs;
}   