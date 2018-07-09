document.addEventListener("DOMContentLoaded",function(){
    var params = {id: location.search.search(/\d/)};

    $.ajax({
        api: 'html/detail.php',
        params,
        method: 'post',
        success: function(res){
            console.log(res);
            var r = window.eval('('+ res +')');
            generateTable(data.hot,document.querySelector('#cmc'));
            // $('div.zxoom-t').xZoom({
            //     width:400,
            //     height:400
            // })
            
        }
    })
})