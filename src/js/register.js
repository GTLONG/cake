document.addEventListener("DOMContentLoaded",function(){
    var verifyCode = new GVerify("span_yzm");
    document.getElementById("register_btn").onclick = function(){
        var res = verifyCode.validate(document.getElementById("img_btn").value);
        if(!res){
            document.querySelector(".li_imgyzm").style.borderColor = "red";
            return false;
        }


        var Huser = document.querySelector('#Huser').value;
        if(!Huser.match(/^1[3-9]\d{9}$/)){
            document.querySelector(".li_phone").style.borderColor = "red";
            return false;
        }

        var Hname = document.querySelector('#Hname').value;
        if(!/^[\u2E80-\u9FFF]+$/.test(Hname)){
            document.querySelector(".li_username").style.borderColor = "red";
            return false;
        }

        var Hpsd = document.querySelector('#Hpsd').value;
        if(!/^[^\s]{6,20}$/i.test(Hpsd)){
            document.querySelector(".li_psd").style.borderColor = "red";
            return false;
        }

        var params = {
            username: Hname,
            psd: Hpsd,
            phone: Huser
        }
        console.log(params);
        $.ajax({
            api: 'html/register.php',
            method: 'post',
            params,
            success: function(res){
                console.log(res);
            }
        })
    }
})
