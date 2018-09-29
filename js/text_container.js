//import * as size_of_the_post from 'post_sizer.js';

class post_configuration{
    constructor(){
        this.min_chars_x_post = 1;
        this.max_chars_x_post = 80000;
    }
    get min_chars(){
        return this.min_chars_x_post;
    }

    set min_chars(minimum){
        this.min_chars_x_post = minimum;
    }

    get max_chars(){
        return this.max_chars_x_post;
    }

    set max_chars(maximum){
        this.max_chars_x_post = maximum;
    }
}

class authors{
    constructor(id,name,picture,username,password){
        this.id=id;
        this.name=name;
        this.picture=picture;
        this.username=username;
        this.password=password;
    }
    get author_id(){
        return this.id;
    }

    set author_id(id){
        this.id=id;
    }

    get author_name(){
        return this.name;
    }

    set author_name(name){
        this.name=name;
    }

    get author_picture(){
        return this.picture;
    }

    set author_picture(picture){
        this.picture=picture;
    }

    get author_username(){
        return this.username;
    }

    set author_username(username){
        this.username=username;
    }

    get author_password(){
        return this.password;
    }

    set author_password(password){
        this.password=password;
    }
}

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
    min_chars_x_post=nuevo_minimo;
}
function modify_maximum(nuevo_maximo){
    max_chars_x_post=nuevo_maximo;
}


/**
 * Verifies that the text is between minimum and maximum variable
 * @param {*} text The text that will be verified (generally posts text)
 */
function verify_length_of_post(text){
    const post_size = new post_configuration();
    if(text.length<post_size.min_chars){
        console.log("I can't publish a post with less than  "+min_chars_x_post+" characters");
        return false;
    }
    if(text.length>post_size.max_chars){
        console.log("I can't publish a post more less than "+max_chars_x_post+" characters");
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
 * @param {*} truncate "True or false for text truncate"
 * @param {*} image "The post main image"
 */
function get_post_HTML(publication_date,title,author_id,text,category,tags,visits,truncate,image){
    post_publish_date = "<h5 class='date_format'>"+publication_date+"</h5>";
    post_title = "<div align = 'center'> <h3>"+title+"</h3></div>";
    post_title_image = "";
    if(image!=""){
        post_title_image = "<div align='center'><img src = 'images/"+image+"' class='main_image'></div>";
    }
    //El author es unico ahora, pero luego tendra que buscarse por ID.
    post_author = "<p>Author: <b>"+author_pablo.author_name+"</b><img src='images/"+author_pablo.author_picture+"' class='author_pic'></p>";
    if(truncate){
        if(text.length>300){
            text = text.substring(0,299);
            text+="..."
        }
    }
    post_text = "<div class='post_border'><p>"+text+"</p></div>";    
    post_cathegory = "<p>CATEGORIA: <b>"+category+"</b></p>";
    post_tags = "<p><b>Tags:</b><i>";
    tags.forEach(tag_element => {
        post_tags = post_tags + tag_element+"//";
    });
    post_tags = post_tags + "</i></p>";
    post_visits = "<p><font size = '2'><u>Visitas:</u>"+visits+"</font></p>";
    return post_publish_date+
    post_title+
    post_title_image+
    post_author+
    post_text+
    post_cathegory+
    post_tags+
    post_visits;
}

function post_poster(){
    if(verify_length_of_post(post["text"])){
        image = ""
        if(post.hasOwnProperty("image")){
            image = post["image"];
        }
        document.getElementById("post").innerHTML=get_post_HTML(post.publishing_date,post.title,post.author,post.text,post.cathegory,post.tags,post.visitas,false,image);
    }
}

function posts_poster(){
    post_final = "";
    Object.keys(posts_collection).forEach(
        function(key){
            if(verify_length_of_post(posts_collection[key]["text"])){
                image = ""
                if(posts_collection[key].hasOwnProperty("image")){
                    image = post["image"];
                }
                post_final = post_final+
                get_post_HTML(posts_collection[key].publishing_date,posts_collection[key].title,posts_collection[key].author,posts_collection[key].text,posts_collection[key].cathegory,posts_collection[key].tags,posts_collection[key].views,true,image)+
                "<br><a href ='post.html?id="+key+"'>Go to Post</a>";
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

//TODO: REFACTORIZAR!!!!!!!! SON IGUALESSSSSSSSSSSSSS
function create_new_posts(id,text,publishing_date,tags,views,category,title,author,image){
    posts_collection[id]={};
    posts_collection[id]["text"]=text;
    posts_collection[id]["publishing_date"]=publishing_date;
    posts_collection[id]["tags"]=tags;
    posts_collection[id]["views"]=views;
    posts_collection[id]["cathegory"]=category;
    posts_collection[id]["title"]=title;
    posts_collection[id]["author"]=author;
    if(image!=""){
        posts_collection[id]["image"]=image;
    }
    console.log(posts_collection)
}

function create_new_post(id,text,publishing_date,tags,views,category,title,author,image){
    post["text"]=text;
    post["publishing_date"]=publishing_date;
    post["tags"]=tags;
    post["views"]=views;
    post["cathegory"]=category;
    post["title"]=title;
    post["author"]=author;
    if(image!=""){
        post["image"]=image;
    }
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
        final_list_of_titles += "<li><a href='post.html?post_id="+key+"'>"+posts_collection[key]["title"]+"</a></li>";
    });
    document.getElementById("posts_titles").innerHTML=final_list_of_titles+"</ul>";
}

function author_creator(id,name,image,user,password){
    authors[id]={};
    authors[id]["name"]=name;
    authors[id]["image"]=image;
    authors[id]["user"]=user;
    authors[id]["password"]=password;
}


//Probar maximo y minimo
const max_and_min_test = new post_configuration();
max_and_min_test.max_chars = 100000;
max_and_min_test.min_chars = 0;
//Creo nuevo author
const author_pablo = new authors(1,"Pablo Soifer","avatar.jpg","Draculinio","123456");
//Posteo con nueva forma de postear
new_post_text = "<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dolor, interdum quis erat sed, rutrum molestie orci. Proin tristique tellus rutrum purus pulvinar sagittis. Mauris et mauris commodo, imperdiet augue vel, efficitur erat. Integer eleifend eleifend augue in pretium. Duis pretium justo posuere erat aliquam ullamcorper. Donec maximus ultricies posuere. Donec quis sem massa. Curabitur laoreet libero magna, in blandit libero tincidunt vitae. <br> Sed velit neque, blandit et vehicula sed, sodales at est. Nullam ut quam id eros tristique vestibulum quis nec mauris. Donec non laoreet ex. Nam est nulla, ultricies vel risus eu, fringilla commodo lacus. Proin consequat efficitur turpis, eget varius urna posuere vel. Aliquam rutrum imperdiet ex, ut vestibulum dolor sodales vitae. Suspendisse potenti. Integer interdum bibendum ullamcorper. Mauris sit amet hendrerit nisl, quis volutpat elit. Fusce tristique, libero sed elementum accumsan, urna urna consectetur turpis, eget vestibulum orci quam ut nisi. Ut blandit aliquet lectus eget tristique.<br>Nullam varius augue in egestas lobortis. Curabitur sollicitudin ligula eu lorem tempus lobortis. Vivamus ac mi a ante ultrices molestie. Cras ut ex ullamcorper, tempus tortor id, fermentum tellus. Ut pellentesque ullamcorper imperdiet. Pellentesque accumsan pulvinar gravida. Aliquam tortor ante, laoreet quis tempus pulvinar, tincidunt nec sapien. Vestibulum purus lectus, hendrerit vehicula mollis a, bibendum et risus.<br>Praesent at nibh at turpis consequat egestas a a libero. Maecenas feugiat feugiat nibh at scelerisque. Nam lacinia sollicitudin elit, ut laoreet orci vulputate eu. Curabitur lorem sem, convallis eget vulputate id, tincidunt non velit. Pellentesque interdum iaculis odio, at maximus ligula accumsan in. Aliquam felis turpis, porta at tincidunt quis, mattis in velit. Cras eget ullamcorper metus. Morbi fringilla gravida elit.<br>Nulla facilisi. Pellentesque porta dapibus laoreet. Donec vel finibus eros, eget venenatis nunc. Nunc molestie ornare arcu, nec posuere mi ultrices ut. Nunc luctus pulvinar leo scelerisque commodo. Mauris id hendrerit tortor, in tincidunt mi. Duis sed justo sit amet ligula sagittis auctor sit amet at odio. Nunc condimentum gravida augue, tempus feugiat ante vehicula consequat. Suspendisse et nibh tempus, vulputate nisl nec, feugiat velit. Mauris porttitor eget ante vel tincidunt. Nunc eget lorem sit amet tortor luctus pulvinar eget ac nisi. Vestibulum vehicula ex in tellus tempor, eu tristique ligula dictum. Mauris venenatis lacus leo, quis porta urna finibus sed.<div align='center'><img src='images/auto-union.png' width='100' height='100'></div>";
new_post_tags = ["lorem", "ipsum", "prueba","gatitos"];
create_new_posts("1",new_post_text,"19/09/2018",new_post_tags,"123","Lorem Ipsum","Lorem Ipsum Post",1,"lorem_ipsum.jpg");
//Hardcodeo para probar el single post
create_new_post("1",new_post_text,"19/09/2018",new_post_tags,"123","Lorem Ipsum","Lorem Ipsum Post",1,"lorem_ipsum.jpg");
new_post_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dolor, interdum quis erat sed, rutrum molestie orci. Proin tristique tellus rutrum purus pulvinar sagittis. Mauris et mauris commodo, imperdiet augue vel, efficitur erat. Integer eleifend eleifend augue in pretium. Duis pretium justo posuere erat aliquam ullamcorper. Donec maximus ultricies posuere. Donec quis sem massa. Curabitur laoreet libero magna, in blandit libero tincidunt vitae. <br> Sed velit neque, blandit et vehicula sed, sodales at est. Nullam ut quam id eros tristique vestibulum quis nec mauris. Donec non laoreet ex. Nam est nulla, ultricies vel risus eu, fringilla commodo lacus. Proin consequat efficitur turpis, eget varius urna posuere vel. Aliquam rutrum imperdiet ex, ut vestibulum dolor sodales vitae. Suspendisse potenti. Integer interdum bibendum ullamcorper. Mauris sit amet hendrerit nisl, quis volutpat elit. Fusce tristique, libero sed elementum accumsan, urna urna consectetur turpis, eget vestibulum orci quam ut nisi. Ut blandit aliquet lectus eget tristique.<br>Nullam varius augue in egestas lobortis. Curabitur sollicitudin ligula eu lorem tempus lobortis. Vivamus ac mi a ante ultrices molestie. Cras ut ex ullamcorper, tempus tortor id, fermentum tellus. Ut pellentesque ullamcorper imperdiet. Pellentesque accumsan pulvinar gravida. Aliquam tortor ante, laoreet quis tempus pulvinar, tincidunt nec sapien. Vestibulum purus lectus, hendrerit vehicula mollis a, bibendum et risus.<br>Praesent at nibh at turpis consequat egestas a a libero. Maecenas feugiat feugiat nibh at scelerisque. Nam lacinia sollicitudin elit, ut laoreet orci vulputate eu. Curabitur lorem sem, convallis eget vulputate id, tincidunt non velit. Pellentesque interdum iaculis odio, at maximus ligula accumsan in. Aliquam felis turpis, porta at tincidunt quis, mattis in velit. Cras eget ullamcorper metus. Morbi fringilla gravida elit.<br>Nulla facilisi. Pellentesque porta dapibus laoreet. Donec vel finibus eros, eget venenatis nunc. Nunc molestie ornare arcu, nec posuere mi ultrices ut. Nunc luctus pulvinar leo scelerisque commodo. Mauris id hendrerit tortor, in tincidunt mi. Duis sed justo sit amet ligula sagittis auctor sit amet at odio. Nunc condimentum gravida augue, tempus feugiat ante vehicula consequat. Suspendisse et nibh tempus, vulputate nisl nec, feugiat velit. Mauris porttitor eget ante vel tincidunt. Nunc eget lorem sit amet tortor luctus pulvinar eget ac nisi. Vestibulum vehicula ex in tellus tempor, eu tristique ligula dictum. Mauris venenatis lacus leo, quis porta urna finibus sed.";
new_post_tags = ["otro post","probando","una prueba"];
create_new_posts("2",new_post_text,"20/09/2018",new_post_tags,"547","pruebas","Post de Pruebas",1,"");

//Creo nuevos comentarios
create_new_comments(1,"Pepe Pepito","Muy bueno loco, muchas gracias","25/09/2018",1);
create_new_comments(2,"Jorge Coquito","Gran Lorem Ipsum","25/09/2018",1);

create_new_comments(3,"Jhon doe","The cat is under the table","25/09/2018",2);
create_new_comments(4,"Natalia Natalia","Perfecto, muchas gracias","25/09/2018",2);

