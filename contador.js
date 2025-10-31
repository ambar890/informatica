let contador=10;
let boton=document.getElementById("btnbajar");
let numero=document.getElementById("conteo");

boton.addEventListener("click",function(){
contador--;
numero.textContent=contador;
if(contador<0){
alert("Llegaste al minimo");
}else{
contador--;
numero.textContent=contador;
}
});