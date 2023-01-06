"use estrict"
let imagen2 = document.getElementById("codo")
const marcas2 = ["agosto2022","acceture","back","front","complementario","final2","ESPERANDOCERTIFICADO","codoacodo"]
let num2 = 0
const timer2 = () =>{
    
    setInterval(()=>{
      if (num2<= marcas2.length-1){
        imagen2.src ="img/codo/"+marcas2[num2]+".jpg";
        num2++;
        console.log(imagen2.src)
      } if (num2>marcas2.length-1) num2=0;
      
    },4000)
}

timer2();
