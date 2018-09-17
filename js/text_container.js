minimo = 20;
maximo = 230;

function text_to_upper(text){
    return text.toUpperCase ();
}

function text_to_lower(text){
    return text.toLowerCase ();
}

function modificar_minimo(nuevo_minimo){
    minimo=nuevo_minimo;
    console.log("Nuevo Minimo: "+ minimo);
}
function modificar_maximo(nuevo_maximo){
    maximo=nuevo_maximo;
    console.log("Nuevo Maximo: "+ maximo);
}

function text_poster(text,myCase){
    /*minimo = 20;
    maximo = 230;*/
    if(text.length<minimo){
        console.log("No se puede publicar algo de menos de "+minimo+" caracteres");
    }
    else if(text.length>maximo){
        console.log("No se puede publicar algo de más de "+maximo+" caracteres");
    }else{
        switch(myCase.toUpperCase ()){
            case "U":
                text = text.toUpperCase ();
                break;
            case "L":
                text = text.toLowerCase ();
                break;
        }    
        console.log(text);
    }
    
    return "<h3>"+text+"</h3>";
}



texto = new String("texto text");
//console.log(texto.length);
text_poster(texto,"u");
text_poster(texto,"l");
modificar_minimo(10);
text_poster(texto,"h");