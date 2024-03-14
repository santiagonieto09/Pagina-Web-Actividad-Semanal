// Esta función anónima se ejecuta inmediatamente
(function(){
    
    // Selecciona todos los elementos con la clase 'curiosidad__body' y los guarda en un array
    const sliders = [...document.querySelectorAll('.curiosidad__body')]; 
    
    // Selecciona el botón con el id 'next'
    const buttonNext = document.querySelector('#next'); 
    
    // Selecciona el botón con el id 'before'
    const buttonBefore = document.querySelector('#before');
    
    let value;   // Variable para almacenar el valor actual

    // Agrega un event listener al botón 'next' que llama a la función changePosition con 1 como argumento
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    // Agrega un event listener al botón 'before' que llama a la función changePosition con -1 como argumento
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    // Definición de la función changePosition
    const changePosition = (add)=>{
        // Obtiene el id del elemento con la clase 'curiosidad__body--show' y lo convierte a número
        const currentTestimony = document.querySelector('.curiosidad__body--show').dataset.id;
        value = Number(currentTestimony); // Asigna el valor actual

        // Incrementa el valor actual según el argumento add
        value += add;

        // Quita la clase 'curiosidad__body--show' del elemento actual
        sliders[Number(currentTestimony)-1].classList.remove('curiosidad__body--show');
        
        // Verifica si se ha llegado al final o al inicio y ajusta el valor en consecuencia
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        // Agrega la clase 'curiosidad__body--show' al nuevo elemento
        sliders[value-1].classList.add('curiosidad__body--show');
    }

})();