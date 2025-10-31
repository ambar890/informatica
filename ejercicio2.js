const btnVioleta= document.getElementById('btnVioleta');
const btnOscuro=document.getElementById('btnOscuro');
const btnRosa=document.getElementById('btnRosa');
btnVerde.addEventListener('click',function() {
    document.body.style.backgroundColor='lightgreen';
    document.body.style.color='black';

});
btnOscuro.addEventListener('click',function(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
});
btnRosa.addEventListener('click',function(){
    document.body.style.backgroundColor='pink';
    document.body.style.color='black'
});