/*const fondoRotativo = document.getElementById("fondoRotativo");

const rotarImagen=(entradas, observador)=>{

    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            console.log("rotame")
        }
    });


}
const obsFondoRotativo = new IntersectionObserver(rotarImagen, {
    root:null,
    rootMargin: "100px"

})

obsFondoRotativo.observe(fondoRotativo);




window.onscroll = function(){
		
    var position = window.pageYOffset || document.documentElement.scrollTop;
            
    var elementoAMover = document.getElementById('elementoAMover');
            
    let cantidadDeMovimiento = position * 0.15 ;

    elementoAMover.style.top = 80-cantidadDeMovimiento + 'px';
    
    }
    */