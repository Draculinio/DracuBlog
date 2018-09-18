minimo = 20;
maximo = 80000;

var post = {
    "texto":"",
    "fecha_de_publicacion":"",
    "tags": [],
    "vistas": 0,
    "categoria":"",
    "titulo":"",
    "autor":"",
}

var blog_config = {
    "color_fondo" : "green",
}

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

function text_poster(myCase){
    /*minimo = 20;
    maximo = 230;*/
    if(post.texto.length<minimo){
        console.log("No se puede publicar algo de menos de "+minimo+" caracteres");
    }
    else if(post.texto.length>maximo){
        console.log("No se puede publicar algo de más de "+maximo+" caracteres");
    }else{
        switch(myCase.toUpperCase ()){
            case "U":
                post.texto = post.texto.toUpperCase ();
                break;
            case "L":
                post.texto = post.texto.toLowerCase ();
                break;
        }    
        console.log("texto publicado");
        post_preconfiguracion = "<body bgcolor='"+blog_config.color_fondo+"'>";
        post_postconfiguracion = "</body>"
        post_publicacion = "<h5>"+post.fecha_de_publicacion+"</h5>";
        post_titulo = "<div align = 'center'> <h3>"+post.titulo+"</div></h3>";
        post_autor = "<p>Autor:<b>"+post.autor+"</b></p>";
        post_texto = "<p>"+post.texto+"</p>";
        post_categoria = "<p>CATEGORIA: <b>"+post.categoria+"</b></p>";
        post_tags = "<p><b>Tags:</b><i>";
        post.tags.forEach(tag_element => {
            post_tags = post_tags + tag_element+"//";
        });
        post_tags = post_tags + "</i></p>";
        
        post_visitas = "<p><font size = '2'><u>Visitas:</u>"+post.vistas+"</font></p>";
        post_final  = post_preconfiguracion+
        post_publicacion+
        post_titulo+post_autor+
        post_texto+
        post_categoria+
        post_tags+
        post_visitas+
        post_postconfiguracion;
        
        document.body.innerHTML=post_final;
        
        
        /*
        
        document.body.innerHTML="<br><br><p>Tags: <i>";
        */
    }
}


//Hago mi posteo
post.texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dolor, interdum quis erat sed, rutrum molestie orci. Proin tristique tellus rutrum purus pulvinar sagittis. Mauris et mauris commodo, imperdiet augue vel, efficitur erat. Integer eleifend eleifend augue in pretium. Duis pretium justo posuere erat aliquam ullamcorper. Donec maximus ultricies posuere. Donec quis sem massa. Curabitur laoreet libero magna, in blandit libero tincidunt vitae. <br> Sed velit neque, blandit et vehicula sed, sodales at est. Nullam ut quam id eros tristique vestibulum quis nec mauris. Donec non laoreet ex. Nam est nulla, ultricies vel risus eu, fringilla commodo lacus. Proin consequat efficitur turpis, eget varius urna posuere vel. Aliquam rutrum imperdiet ex, ut vestibulum dolor sodales vitae. Suspendisse potenti. Integer interdum bibendum ullamcorper. Mauris sit amet hendrerit nisl, quis volutpat elit. Fusce tristique, libero sed elementum accumsan, urna urna consectetur turpis, eget vestibulum orci quam ut nisi. Ut blandit aliquet lectus eget tristique.<br>Nullam varius augue in egestas lobortis. Curabitur sollicitudin ligula eu lorem tempus lobortis. Vivamus ac mi a ante ultrices molestie. Cras ut ex ullamcorper, tempus tortor id, fermentum tellus. Ut pellentesque ullamcorper imperdiet. Pellentesque accumsan pulvinar gravida. Aliquam tortor ante, laoreet quis tempus pulvinar, tincidunt nec sapien. Vestibulum purus lectus, hendrerit vehicula mollis a, bibendum et risus.<br>Praesent at nibh at turpis consequat egestas a a libero. Maecenas feugiat feugiat nibh at scelerisque. Nam lacinia sollicitudin elit, ut laoreet orci vulputate eu. Curabitur lorem sem, convallis eget vulputate id, tincidunt non velit. Pellentesque interdum iaculis odio, at maximus ligula accumsan in. Aliquam felis turpis, porta at tincidunt quis, mattis in velit. Cras eget ullamcorper metus. Morbi fringilla gravida elit.<br>Nulla facilisi. Pellentesque porta dapibus laoreet. Donec vel finibus eros, eget venenatis nunc. Nunc molestie ornare arcu, nec posuere mi ultrices ut. Nunc luctus pulvinar leo scelerisque commodo. Mauris id hendrerit tortor, in tincidunt mi. Duis sed justo sit amet ligula sagittis auctor sit amet at odio. Nunc condimentum gravida augue, tempus feugiat ante vehicula consequat. Suspendisse et nibh tempus, vulputate nisl nec, feugiat velit. Mauris porttitor eget ante vel tincidunt. Nunc eget lorem sit amet tortor luctus pulvinar eget ac nisi. Vestibulum vehicula ex in tellus tempor, eu tristique ligula dictum. Mauris venenatis lacus leo, quis porta urna finibus sed.";
post.fecha_de_publicacion="18/09/2018";
post.vistas=666;
post.categoria = "Lorem Ipsum";
post.tags = ["lorem", "ipsum", "prueba","gatitos"];
post.titulo="Lorem Ipsum";
post.autor ="Pablo Soifer";

text_poster("a");