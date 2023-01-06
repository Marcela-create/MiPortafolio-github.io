"use estrict"
let imagen7 = document.getElementById("uba")
const marcas7 = ["bioetica1","bioetica2","bioetica3"]
let num7 = 0
const timer7 = () =>{
    
    setInterval(()=>{
      if (num7<= marcas7.length-1){
        imagen7.src ="img/uba/"+marcas7[num7]+".jpg";
        num7++;
        console.log(imagen7.src)
      } if (num7>marcas7.length-1) num7=0;
      
    },5000)
}

timer7();
