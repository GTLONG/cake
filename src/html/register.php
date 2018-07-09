<?php
    include 'dbhelper.php';
    $username = !isset($_POST["username"]) ? "" : $_POST["username"];
    $psd = !isset($_POST["psd"]) ? "" : $_POST["psd"];
    $phone = !isset($_POST["phone"]) ? "" : $_POST["phone"];

    var_dump($username,$psd,$phone);
    $sql = "select * from users where username = '$username'";
    $result = query_sql($sql);
    if(count($result) > 0){
        echo "{status: false, message: '用户名已注册'}";
    }else{
        $sql = "insert into users(username,psd,phone) values('$username','$psd','$phone')";
        $result = exec_sql($sql);
        if($result){
            echo "{status:true,data: $result}";
        }else{
            echo "status: false, message: '注册失败'}";
        }
    }
?>