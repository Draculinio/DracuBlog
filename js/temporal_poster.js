function request_post(){
    var request = new XMLHttpRequest();
    request.open('get','../js/my_post.json')
    request.responseType = 'json';
    request.send();
    var myPost = request.response;
    console.log(myPost);
}
