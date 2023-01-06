"use estrict"
let imagen6 = document.getElementById("axon")
const marcas6 = ["educativo","ontologico"]
let num6 = 0
const timer6 = () =>{
    
    setInterval(()=>{
      if (num6<= marcas6.length-1){
        imagen6.src ="img/axon/"+marcas6[num6]+".jpg";
        num6++;
        console.log(imagen6.src)
      } if (num6>marcas6.length-1) num6=0;
      
    },5000)
}

timer6();