
let botonuno = document.querySelector(".botonuno");
let botondos = document.querySelector(".botondos");
let botontres = document.querySelector(".botontres");
let botoncuatro = document.querySelector(".botoncuatro");
let botoncinco = document.querySelector(".botoncinco");

//Funcion a ejecutar cuando presionamos la opcion 1...
botonuno.addEventListener("click", () =>{
    if(botonuno.classList.contains("botouno")){
        botonuno.classList.add('btn');
        botonuno.classList.remove("botonuno");

        botondos.classList.remove('btn');
        botondos.classList.add("botondos");
        
        botontres.classList.remove('btn');
        botontres.classList.add("botontres");
        
        botoncuatro.classList.remove('btn');
        botoncuatro.classList.add("botoncuatro");
        
        botoncinco.classList.remove('btn');
        botoncinco.classList.add("botoncinco");
    } 
    else{
        botonuno.classList.toggle('botonuno');
        botonuno.classList.toggle('btn');
        
        botondos.classList.add("botondos");
        botondos.classList.remove("btn");

        botontres.classList.remove('btn');
        botontres.classList.add("botontres");
        
        botoncuatro.classList.remove('btn');
        botoncuatro.classList.add("botoncuatro");
        
        botoncinco.classList.remove('btn');
        botoncinco.classList.add("botoncinco");
    }
});

   
//Funcion a ejecutar cuando presionamos la opcion 2...
botondos.addEventListener("click", () =>{
    if(botondos.classList.contains("botondos")){
        botondos.classList.add("btn");
        botondos.classList.remove("botondos");
        
        botonuno.classList.remove("btn");
        botonuno.classList.add("botonuno");
        
        botontres.classList.remove("btn");
        botontres.classList.add("botontres");
        
        botoncuatro.classList.remove("btn");
        botoncuatro.classList.add("botoncuatro");
        
        botoncinco.classList.remove("btn");
        botoncinco.classList.add("botoncinco");
    }  
        else {
                botondos.classList.toggle("btn");
                botondos.classList.toggle("botondos");
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
                
                botontres.classList.remove("btn");
                botontres.classList.add("botontres");

                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');

                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');
        }
});
//Funcion a ejecutar cuando presionamos la opcion 3...
botontres.addEventListener("click", () =>{
    if(botontres.classList.contains("botontres")){
        botontres.classList.add("btn");
        botontres.classList.remove("botontres");

                botondos.classList.remove("btn");
                botondos.classList.add("botondos");
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
            
                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');

                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');
    }    
        else {
                botontres.classList.toggle('btn');
                botontres.classList.toggle('botontres');
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
                
                botondos.classList.remove("btn");
                botondos.classList.add("botondos");

                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');

                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');

        }
});
//Funcion a ejecutar cuando presionamos la opcion 4...
botoncuatro.addEventListener("click", () =>{
    if(botoncuatro.classList.contains("botoncuatro")){
        botoncuatro.classList.add("btn");
        botoncuatro.classList.remove("botoncuatro");

                botondos.classList.remove("btn");
                botondos.classList.add("botondos");
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
            
                botontres.classList.remove('btn');
                botontres.classList.add('botontres');

                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');
    }  
        else {
                botoncuatro.classList.toggle('btn');
                botoncuatro.classList.toggle('botoncuatro');
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
                
                botondos.classList.remove("btn");
                botondos.classList.add("botondos");

                botontres.classList.remove('btn');
                botontres.classList.add('botontres');

                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');

        }
});
//Funcion a ejecutar cuando presionamos la opcion 5...
botoncinco.addEventListener("click", () =>{
    if(botoncinco.classList.contains("botoncinco")){
        botoncinco.classList.add("btn");
        botoncinco.classList.remove("botoncinco");

                botondos.classList.remove("btn");
                botondos.classList.add("botondos");
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
            
                botontres.classList.remove('btn');
                botontres.classList.add('botontres');

                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');
    } 
        else {
                botoncinco.classList.toggle('btn');
                botoncinco.classList.toggle('botoncinco');
                
                botonuno.classList.remove("btn");
                botonuno.classList.add("botonuno");
                
                botondos.classList.remove("btn");
                botondos.classList.add("botondos");

                botontres.classList.remove('btn');
                botontres.classList.add('botontres');

                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');

        }
});

//Variables...
let botonsubmit = document.getElementById("boton_submit");
let seccionagradecimiento = document.querySelector(".seccion_agradecimiento");

let seccionpregunta = document.querySelector(".seccion_pregunta");
let botonrating = document.getElementById("boton_rating");
//Funcion que mostrará la opción marcada por el usuario...
botonsubmit.addEventListener("click", function() {
        seccionagradecimiento.style.display="flex";
        seccionpregunta.style.display="none";
        let objeto =1;
                switch(objeto){
                        case 1:
                                if(botonuno.classList.contains('btn')){
                                botonrating.textContent=(`${botonrating.textContent} ${botonuno.textContent} out of 5`);
                                break;        
                                }

                                else if(botondos.classList.contains('btn')) {
                                botonrating.textContent=(`${botonrating.textContent} ${botondos.textContent} out of 5`);
                                break;
                                }

                                else if (botontres.classList.contains('btn')){
                                botonrating.textContent=(`${botonrating.textContent} ${botontres.textContent} out of 5`);
                                break;
                                }

                                else if(botoncuatro.classList.contains('btn')){
                                botonrating.textContent=(`${botonrating.textContent} ${botoncuatro.textContent} out of 5`);
                                break;     
                                }
                                else if(botoncinco.classList.contains('btn')){
                                botonrating.textContent=(`${botonrating.textContent} ${botoncinco.textContent} out of 5`);       
                                break;
                                }
                                
                        default:
                               botonrating.textContent=(`Debe escoger una de las opciones`);
                        break;
                }
        /*Función que retornará a la página inicio y reiniciará cada botón al prsionar el mensaje de la opción que escogió el usuario...*/
        botonrating.addEventListener("click", () => {
         seccionagradecimiento.style.display="none";
        seccionpregunta.style.display="flex";
        
        if(botonuno.classList.contains('btn')){
                botonuno.classList.remove('btn');
                botonuno.classList.add('botonuno');
        } else if(botondos.classList.contains('btn')){
                botondos.classList.remove('btn');
                botondos.classList.add('botondos');
        } else if(botontres.classList.contains('btn')){
                botontres.classList.remove('btn');
                botontres.classList.add('botontres');
        } else if(botoncuatro.classList.contains('btn')){
                botoncuatro.classList.remove('btn');
                botoncuatro.classList.add('botoncuatro');
        } else if(botoncinco.classList.contains('btn')){
                botoncinco.classList.remove('btn');
                botoncinco.classList.add('botoncinco');
        }
        let texto = "You select";
        botonrating.textContent = botonrating.value+texto;
        })
        });
