var blog_config = {
    "color_fondo" : "green",
    "titulo" : "Dracux Blog",
    "subtitulo" : "Blog for #100Days Of Code Project"
}

/**
 * Puts the title into the site
 */
function set_title(){
    document.getElementById("title").innerHTML="<h1>"+blog_config.titulo+"</h1>";
}

function set_subtitle(){
    document.getElementById("subtitle").innerHTML="<h3>"+blog_config.subtitulo+"</h3>";
}

/**
 * Gets Title and subtitle
 */
function get_complete_title(){
    document.getElementById("complete_title").innerHTML="<h1>"+blog_config.titulo+"</h1>"+"<h3>"+blog_config.subtitulo+"</h3>";
}