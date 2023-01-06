"use estrict"
let imagen4 = document.getElementById("eddis")
const marcas4 = ["ESPERANDOCERTIFICADO","EDDIS"]
let num4 = 0
const timer4 = () =>{
    
    setInterval(()=>{
      if (num4<= marcas4.length-1){
        imagen4.src ="img/eddis/"+marcas4[num4]+".jpg";
        num4++;
        console.log(imagen4.src)
      } if (num4>marcas4.length-1) num4=0;
      
    },4000)
}

timer4();