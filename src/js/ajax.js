var $ = {};

$.baseUrl = 'localhost:80/src/';

$.filterUrl = function(url){
    // if(url.startsWith('http')){
    //     return url;
    // }
    return $.baseUrl + url;
}

$.ajax = function(options){
    let {api, method = 'get', params = {}, success} = options;

    // document.getElementById('mask').style.display = 'block';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        console.log(xhr.readyState,xhr.status);
        if(xhr.readyState == 4 && xhr.status == 200){
            // document.getElementById('mask').style.display = 'none';
            success(xhr.responseText);
            console.log(xhr.responseText);
        }
    }
    api = $.filterUrl(api);
    let _params = [];
    for(var key in params){
        _params.push(`${key}=${params[key]}`);
    }

    if(method.toLowerCase() == 'get'){
        api += '?' + _params.join('&');
        xhr.open(method,api);
        xhr.send(null);
    }else if(method.toLowerCase() == 'post'){
        xhr.open(method,api);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(_params.join('&'));
    }
}