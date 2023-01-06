"use estrict"
let imagen3 = document.getElementById("utel")
const marcas3 = ["utel1a","utel2a","utel3a","utel4a","utel5a","utel6a","utel7a"]
let num3 = 0
const timer3 = () =>{
    
    setInterval(()=>{
      if (num3<= marcas3.length-1){
        imagen3.src ="img/utel/"+marcas3[num3]+".jpg";
        num3++;
        console.log(imagen3.src)
      } if (num3>marcas3.length-1) num3=0;
      
    },5000)
}

timer3();