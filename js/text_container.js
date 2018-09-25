minimo = 1;
maximo = 80000;

var posts_collection = {
    
}

var post = {

}

var comments_collection = {

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

/**
 * Gets the html code with post text
 * @param {*} publication_date 
 * @param {*} title 
 * @param {*} author 
 * @param {*} text 
 * @param {*} category 
 * @param {*} tags 
 * @param {*} visits 
 */
function get_post_HTML(publication_date,title,author,text,category,tags,visits){
    post_publicacion = "<h5>"+publication_date+"</h5>";
    post_titulo = "<div align = 'center'> <h3>"+title+"</div></h3>";
    post_autor = "<p>Autor:<b>"+author+"</b></p>";
    post_texto = "<p>"+text+"</p>";
    post_categoria = "<p>CATEGORIA: <b>"+category+"</b></p>";
    post_tags = "<p><b>Tags:</b><i>";
    tags.forEach(tag_element => {
        post_tags = post_tags + tag_element+"//";
    });
    post_tags = post_tags + "</i></p>";
    post_visitas = "<p><font size = '2'><u>Visitas:</u>"+visits+"</font></p>";
    return post_publicacion+
    post_titulo+post_autor+
    post_texto+
    post_categoria+
    post_tags+
    post_visitas;
}

function post_poster(){
    if(verify_length_of_post(post["texto"])){
        document.getElementById("post").innerHTML=get_post_HTML(post.fecha_de_publicacion,post.titulo,post.autor,post.texto,post.categoria,post.tags,post.visitas);
    }
}

function posts_poster(){
    post_final = "";
    Object.keys(posts_collection).forEach(
        function(key){
            if(verify_length_of_post(posts_collection[key]["texto"])){
                post_final = post_final+
                get_post_HTML(posts_collection[key].fecha_de_publicacion,posts_collection[key].titulo,posts_collection[key].autor,posts_collection[key].texto,posts_collection[key].categoria,posts_collection[key].tags,posts_collection[key].vistas);
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

/**
 * For the comments collection object
 * @param {*} id 
 * @param {*} author 
 * @param {*} text 
 * @param {*} publishing_date 
 * @param {*} post_id 
 */
function create_new_comments(id,author,text,publishing_date,post_id){
    comments_collection[id]={};
    comments_collection[id]["author"]=author;
    comments_collection[id]["text"]=text;
    comments_collection[id]["publishing_date"]=publishing_date;
    comments_collection[id]["post_id"]=post_id;
}

function post_comments_to_HTML(id){

    //console.log(comments_collection)
    final_comments_list = "";
    Object.keys(posts_collection).forEach(function(key){
        if(comments_collection[key]["post_id"]==id){
            console.log(comments_collection[key])
            title = "<p class='comment_title_class'>"+comments_collection[key]["author"]+"   posted on: "+comments_collection[key]["publishing_date"]+"</p>";
            body = "<p class='comment_title_body'>"+comments_collection[key]["text"]+"</p>";
            final_comments_list+=title+body;
        }
    });
    document.getElementById("list_of_comments").innerHTML=final_comments_list;
}

function listar_titulos(){
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

//Creo nuevos comentarios
create_new_comments(1,"Pepe Pepito","Muy bueno loco, muchas gracias","25/09/2018",1);
create_new_comments(2,"Jorge Coquito","Gran Lorem Ipsum","25/09/2018",1);

create_new_comments(3,"Jhon doe","The cat is under the table","25/09/2018",2);
create_new_comments(4,"Natalia Natalia","Perfecto, muchas gracias","25/09/2018",2);


