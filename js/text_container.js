//import posts_collection from 'post_object.js';

minimo = 1;
maximo = 80000;

var posts_collection = {
    
}

var post = {

}

function text_to_upper(text){
    return text.toUpperCase ();
}

function text_to_lower(text){
    return text.toLowerCase ();
}

function modify_minimum(nuevo_minimo){
    minimo=nuevo_minimo;
    console.log("Nuevo Minimo: "+ minimo);
}
function modify_maximum(nuevo_maximo){
    maximo=nuevo_maximo;
    console.log("Nuevo Maximo: "+ maximo);
}


/**
 * Verifies that the text is between minimum and maximum variable
 * @param {*} text The text that will be verified (generally posts text)
 */
function verify_length_of_post(text){
    if(text.length<minimo){
        console.log("I can't publish a post with less than  "+minimo+" characters");
        return false;
    }
    if(text.length>maximo){
        console.log("I can't publish a post more less than "+maximo+" characters");
        return false;
    }
    return true;
}

function post_poster(){
    if(verify_length_of_post(post["texto"])){
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
        post_final= post_publicacion+
        post_titulo+post_autor+
        post_texto+
        post_categoria+
        post_tags+
        post_visitas;
        document.getElementById("post").innerHTML=post_final;
    }
}

function posts_poster(){
    post_final = "";
    Object.keys(posts_collection).forEach(
        function(key){
            if(verify_length_of_post(posts_collection[key]["texto"])){
                console.log("texto publicado");
                post_publicacion = "<h5>"+posts_collection[key].fecha_de_publicacion+"</h5>";
                post_titulo = "<div align = 'center'> <h3>"+posts_collection[key].titulo+"</div></h3>";
                post_autor = "<p>Autor:<b>"+posts_collection[key].autor+"</b></p>";
                post_texto = "<p>"+posts_collection[key].texto+"</p>";
                post_categoria = "<p>CATEGORIA: <b>"+posts_collection[key].categoria+"</b></p>";
                post_tags = "<p><b>Tags:</b><i>";
                posts_collection[key].tags.forEach(tag_element => {
                    post_tags = post_tags + tag_element+"//";
                });
                post_tags = post_tags + "</i></p>";
                post_visitas = "<p><font size = '2'><u>Visitas:</u>"+posts_collection[key].vistas+"</font></p>";
        
                post_final= post_final+
                post_publicacion+
                post_titulo+post_autor+
                post_texto+
                post_categoria+
                post_tags+
                post_visitas;
                
            }
            
        }
    );
    document.getElementById("post").innerHTML=post_final;
}

/**
 * Creates post for posts collections
 * @param {*} id The id of the post
 * @param {*} text the text of the post
 * @param {*} publishing_date publishing date
 * @param {*} tags tags (array)
 * @param {*} views how many views
 * @param {*} category The category
 * @param {*} title title of the post
 * @param {*} author author of the post
 */
function create_new_posts(id,text,publishing_date,tags,views,category,title,author){
    posts_collection[id]={};
    posts_collection[id]["texto"]=text;
    posts_collection[id]["fecha_de_publicacion"]=publishing_date;
    posts_collection[id]["tags"]=tags;
    posts_collection[id]["vistas"]=views;
    posts_collection[id]["categoria"]=category;
    posts_collection[id]["titulo"]=title;
    posts_collection[id]["autor"]=author;
}

function create_new_post(id,text,publishing_date,tags,views,category,title,author){
    post["texto"]=text;
    post["fecha_de_publicacion"]=publishing_date;
    post["tags"]=tags;
    post["vistas"]=views;
    post["categoria"]=category;
    post["titulo"]=title;
    post["autor"]=author;
}



function listar_titulos(){
    //Object.keys(posts_collection).forEach(key=>console.log(posts_collection[key]["titulo"]));
    final_list_of_titles = "<ul>";
    Object.keys(posts_collection).forEach(function(key){
        final_list_of_titles += "<li><a href='post.html?post_id="+key+"'>"+posts_collection[key]["titulo"]+"</a></li>";
    });
    document.getElementById("posts_titles").innerHTML=final_list_of_titles+"</ul>";
}



//Posteo con nueva forma de postear
new_post_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dolor, interdum quis erat sed, rutrum molestie orci. Proin tristique tellus rutrum purus pulvinar sagittis. Mauris et mauris commodo, imperdiet augue vel, efficitur erat. Integer eleifend eleifend augue in pretium. Duis pretium justo posuere erat aliquam ullamcorper. Donec maximus ultricies posuere. Donec quis sem massa. Curabitur laoreet libero magna, in blandit libero tincidunt vitae. <br> Sed velit neque, blandit et vehicula sed, sodales at est. Nullam ut quam id eros tristique vestibulum quis nec mauris. Donec non laoreet ex. Nam est nulla, ultricies vel risus eu, fringilla commodo lacus. Proin consequat efficitur turpis, eget varius urna posuere vel. Aliquam rutrum imperdiet ex, ut vestibulum dolor sodales vitae. Suspendisse potenti. Integer interdum bibendum ullamcorper. Mauris sit amet hendrerit nisl, quis volutpat elit. Fusce tristique, libero sed elementum accumsan, urna urna consectetur turpis, eget vestibulum orci quam ut nisi. Ut blandit aliquet lectus eget tristique.<br>Nullam varius augue in egestas lobortis. Curabitur sollicitudin ligula eu lorem tempus lobortis. Vivamus ac mi a ante ultrices molestie. Cras ut ex ullamcorper, tempus tortor id, fermentum tellus. Ut pellentesque ullamcorper imperdiet. Pellentesque accumsan pulvinar gravida. Aliquam tortor ante, laoreet quis tempus pulvinar, tincidunt nec sapien. Vestibulum purus lectus, hendrerit vehicula mollis a, bibendum et risus.<br>Praesent at nibh at turpis consequat egestas a a libero. Maecenas feugiat feugiat nibh at scelerisque. Nam lacinia sollicitudin elit, ut laoreet orci vulputate eu. Curabitur lorem sem, convallis eget vulputate id, tincidunt non velit. Pellentesque interdum iaculis odio, at maximus ligula accumsan in. Aliquam felis turpis, porta at tincidunt quis, mattis in velit. Cras eget ullamcorper metus. Morbi fringilla gravida elit.<br>Nulla facilisi. Pellentesque porta dapibus laoreet. Donec vel finibus eros, eget venenatis nunc. Nunc molestie ornare arcu, nec posuere mi ultrices ut. Nunc luctus pulvinar leo scelerisque commodo. Mauris id hendrerit tortor, in tincidunt mi. Duis sed justo sit amet ligula sagittis auctor sit amet at odio. Nunc condimentum gravida augue, tempus feugiat ante vehicula consequat. Suspendisse et nibh tempus, vulputate nisl nec, feugiat velit. Mauris porttitor eget ante vel tincidunt. Nunc eget lorem sit amet tortor luctus pulvinar eget ac nisi. Vestibulum vehicula ex in tellus tempor, eu tristique ligula dictum. Mauris venenatis lacus leo, quis porta urna finibus sed.";
new_post_tags = ["lorem", "ipsum", "prueba","gatitos"];
create_new_posts("1",new_post_text,"19/09/2018",new_post_tags,"123","Lorem Ipsum","Lorem Ipsum Post","Pablo Soifer");
//Hardcodeo para probar el single post
create_new_post("1",new_post_text,"19/09/2018",new_post_tags,"123","Lorem Ipsum","Lorem Ipsum Post","Pablo Soifer");
new_post_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dolor, interdum quis erat sed, rutrum molestie orci. Proin tristique tellus rutrum purus pulvinar sagittis. Mauris et mauris commodo, imperdiet augue vel, efficitur erat. Integer eleifend eleifend augue in pretium. Duis pretium justo posuere erat aliquam ullamcorper. Donec maximus ultricies posuere. Donec quis sem massa. Curabitur laoreet libero magna, in blandit libero tincidunt vitae. <br> Sed velit neque, blandit et vehicula sed, sodales at est. Nullam ut quam id eros tristique vestibulum quis nec mauris. Donec non laoreet ex. Nam est nulla, ultricies vel risus eu, fringilla commodo lacus. Proin consequat efficitur turpis, eget varius urna posuere vel. Aliquam rutrum imperdiet ex, ut vestibulum dolor sodales vitae. Suspendisse potenti. Integer interdum bibendum ullamcorper. Mauris sit amet hendrerit nisl, quis volutpat elit. Fusce tristique, libero sed elementum accumsan, urna urna consectetur turpis, eget vestibulum orci quam ut nisi. Ut blandit aliquet lectus eget tristique.<br>Nullam varius augue in egestas lobortis. Curabitur sollicitudin ligula eu lorem tempus lobortis. Vivamus ac mi a ante ultrices molestie. Cras ut ex ullamcorper, tempus tortor id, fermentum tellus. Ut pellentesque ullamcorper imperdiet. Pellentesque accumsan pulvinar gravida. Aliquam tortor ante, laoreet quis tempus pulvinar, tincidunt nec sapien. Vestibulum purus lectus, hendrerit vehicula mollis a, bibendum et risus.<br>Praesent at nibh at turpis consequat egestas a a libero. Maecenas feugiat feugiat nibh at scelerisque. Nam lacinia sollicitudin elit, ut laoreet orci vulputate eu. Curabitur lorem sem, convallis eget vulputate id, tincidunt non velit. Pellentesque interdum iaculis odio, at maximus ligula accumsan in. Aliquam felis turpis, porta at tincidunt quis, mattis in velit. Cras eget ullamcorper metus. Morbi fringilla gravida elit.<br>Nulla facilisi. Pellentesque porta dapibus laoreet. Donec vel finibus eros, eget venenatis nunc. Nunc molestie ornare arcu, nec posuere mi ultrices ut. Nunc luctus pulvinar leo scelerisque commodo. Mauris id hendrerit tortor, in tincidunt mi. Duis sed justo sit amet ligula sagittis auctor sit amet at odio. Nunc condimentum gravida augue, tempus feugiat ante vehicula consequat. Suspendisse et nibh tempus, vulputate nisl nec, feugiat velit. Mauris porttitor eget ante vel tincidunt. Nunc eget lorem sit amet tortor luctus pulvinar eget ac nisi. Vestibulum vehicula ex in tellus tempor, eu tristique ligula dictum. Mauris venenatis lacus leo, quis porta urna finibus sed.";
new_post_tags = ["otro post","probando","una prueba"];
create_new_posts("2",new_post_text,"20/09/2018",new_post_tags,"547","pruebas","Post de Pruebas","Pablo Soifer");




