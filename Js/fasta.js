"use estrict"
let imagen8 = document.getElementById("fasta")
const marcas8 = ["diplohumanidadesdigitales","diplopsi","analiticopsi","diplotomista","analiticotomista","diploformacionreligiosa","analiticoformacionreligiosa","analiticoantropologia","diploantropologia"]
let num8 = 0
const timer8 = () =>{
    
    setInterval(()=>{
      if (num8<= marcas8.length-1){
        imagen8.src ="img/fasta/"+marcas8[num8]+".jpg";
        num8++;
        console.log(imagen8.src)
      } if (num8>marcas8.length-1) num8=0;
      
    },5000)
}

timer8();