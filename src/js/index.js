document.addEventListener("DOMContentLoaded",function(){
    $('#left_menu_ul li:nth-child(1)').hover(function(){
        $('#left_menu_ul li:nth-child(1) div').css("display","block");
    },function(){
        $('#left_menu_ul li:nth-child(1) div').css("display","none");
    })
    $('#left_menu_ul li:nth-child(2)').hover(function(){
        $('#left_menu_ul li:nth-child(2) div').css("display","block");
    },function(){
        $('#left_menu_ul li:nth-child(2) div').css("display","none");
    })
    $('#left_menu_ul li:nth-child(3)').hover(function(){
        $('#left_menu_ul li:nth-child(3) div').css("display","block");
    },function(){
        $('#left_menu_ul li:nth-child(3) div').css("display","none");
    })
    $('#left_menu_ul li:nth-child(4)').hover(function(){
        $('#left_menu_ul li:nth-child(4) div').css("display","block");
    },function(){
        $('#left_menu_ul li:nth-child(4) div').css("display","none");
    })


    $("#carousel_1").FtCarousel();
    
    $("#carousel_2").FtCarousel({
        index: 1,
        auto: false
    });

    $("#carousel_3").FtCarousel({
        index: 0,
        auto: true,
        time: 3000,
        indicators: false,
        buttons: true
    });



    $.ajax({
        type: "POST",
        url: "../html/index.php",
        success: function(data){
            var data = window.eval('('+ data +')');
            console.log(data);
                generateTable(data.hot,document.querySelector('#cma'));
                generateTable(data.birthday,document.querySelector('#cmb'));
                generateTable(data.toast,document.querySelector('#cmc'));

        }
    })

    function generateTable(data,ele){
        var lis = '';
        for(var i = 0; i < data.length; i++){
            if(i == 0){
                lis += `
                    <li class="first">
                        <span></span>
                        <div class="kuang">
                            <div class="fpro">
                                <div class="hotimgdiv">
                                    <a href="./detail.html?id=${data[i].id}">
                                        <img src="${data[i].imgurl}" width="290" alt="">
                                    </a>
                                </div>
                                <div class="hottext">
                                    <h2 class="proname">${data[i].bianhao}</h2>
                                    <div class="miaoshu">${data[i].timber}</div>
                                    <div class="proprice">
                                        <span>￥${data[i].price}</span>
                                        <a href="">立刻抢购</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    `
            }else{
                lis +=`
                    <li>
                        <span></span>
                        <div class="kuang r">
                            <div class="colork">
                                <div class="pro">
                                    <a href="./detail.html?id=${data[i].id}">
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
        }
        ele.innerHTML = lis;
    }

})