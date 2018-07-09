document.addEventListener("DOMContentLoaded",function(){
    var verifyCode = new GVerify("span_yzm");
    document.querySelector(".login_btn").onclick = function(){
        // var res = verifyCode.validate(document.getElementById("Huser").value);
        // if(!res){
        //     document.querySelector(".li_imgyzm").style.borderColor = "red";
        //     return false;
        // }


        var params = {
            phone: document.getElementById('Huser').value,
            psd: document.getElementById('Hpsd').value
        }
        $.ajax({
            api: 'html/login.php',
            params,
            method: 'post',
            success: function(res){
                console.log(res);
                var r = window.eval('('+ res +')');
                if(r.status){
                    window.location.href = 'index.html';
                }
            }
        })

    }
})