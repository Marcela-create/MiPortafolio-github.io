"use estrict"

let imagen = document.getElementById("oracle")
const marcas = ["oracle1", "etapa1", "aluracertificadoformal1","etapa2","aluracertificadoformal2","etapa3","aluracertificadoformal3","1certificadohtmlycss","1certificadoformalhtmlycss","2certificadohtmlCss","2certificadoformalhtmlCss","3certificadohtmlcss","3certificadoformalhtmlcss","4certificadohtmlcss","4certificadoformalhtmlcss","diplogit","diploformalgit","felicitacionesporelchallengeencriptador","insigniachallengeencriptador","finprogramacion","felicidades","blandas1","aluracertificadoformalblandas1","FOCO","aluracertificadoformalfoco","diplohabitos","diploformalhabitos","diploproductividad","diploformalproductividad","findesarrollo","COMPLETO1","COMPLETO2","COMPLETO3","imagesone"]
let num = 0
const timer = () =>{
    
    setInterval(()=>{
      if (num<= marcas.length-1){
        imagen.src ="img/oracle/"+marcas[num]+".jpg";
        num++;
        console.log(imagen.src)
      } if (num>marcas.length-1) num=0;
      
    },5000)
}

timer();





    



