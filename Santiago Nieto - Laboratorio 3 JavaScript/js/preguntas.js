// Esta función anónima se ejecuta inmediatamente
(function(){
    // Selecciona todos los elementos con la clase 'preguntas__titulo' y los guarda en un array
    const titleQuestions = [...document.querySelectorAll('.preguntas__titulo')];
    console.log(titleQuestions); // Imprime el array de elementos en la consola

    // Itera sobre cada elemento del array
    titleQuestions.forEach(question =>{
        // Agrega un event listener a cada pregunta que se activa al hacer clic
        question.addEventListener('click', ()=>{
            let height = 0; // Variable para almacenar la altura
            let answer = question.nextElementSibling; // Obtiene el siguiente elemento hermano
            let addPadding = question.parentElement.parentElement; // Obtiene el elemento padre y su padre

            // Alterna la clase 'preguntas__padding--add' en el elemento padre y su padre
            addPadding.classList.toggle('preguntas__padding--add');
            
            // Alterna la clase 'preguntas__flecha--rotar' en el primer hijo del elemento de la pregunta
            question.children[0].classList.toggle('preguntas__flecha--rotar');

            // Si la altura de la respuesta es 0, asigna la altura real
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            // Establece la altura de la respuesta en píxeles
            answer.style.height = `${height}px`;
        });
    });
})();