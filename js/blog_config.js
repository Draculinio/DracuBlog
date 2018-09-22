var blog_config = {
    "color_fondo" : "green",
    "titulo" : "Dracux Blog"
}

/**
 * Puts the title into the site
 */
function set_title(){
    console.log(blog_config["titulo"]);
    document.getElementById("title").innerHTML="<h1>"+blog_config.titulo+"</h1>";
}