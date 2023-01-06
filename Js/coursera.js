"use estrict"
let imagen5 = document.getElementById("coursera")
const marcas5 = ["certificadocoursera","examen","Pythonlosandes"]
let num5 = 0
const timer5 = () =>{
    
    setInterval(()=>{
      if (num5<= marcas5.length-1){
        imagen5.src ="img/coursera/"+marcas5[num5]+".jpg";
        num5++;
        console.log(imagen5.src)
      } if (num5>marcas5.length-1) num5=0;
      
    },4000)
}

timer5();