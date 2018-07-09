document.addEventListener("DOMContentLoaded",function(){
    $.ajax({
        type: "POST",
        url: "../html/list.php",
        success: function(data){
            var data = window.eval('('+ data +')');
            console.log(data);
                generateTable(data.hot,document.querySelector('#cmc'));
        }
    })

    function generateTable(data,ele){
        var lis = '';
        for(var i = 0; i < data.length; i++){
                lis +=`
                    <li class="hot_xp">
                        <div class="kuang r">
                            <div class="colork">
                                <div class="pro">
                                    <a href="">
                                        <img src="${data[i].imgurl}" width="290" alt="">
                                    </a>
                                    <div class="proname">
                                        <p>${data[i].bianhao}</p>
                                        <span class="red">${data[i].timber}</span>
                                    </div>
                                    <div class="proprice">￥${data[i].price}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    `
        }
        ele.innerHTML = lis;
    }
})