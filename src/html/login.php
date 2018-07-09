<?php
    // session_start();

    include "dbhelper.php";
    $phone = !isset($_POST["phone"]) ? "" : $_POST["phone"];
    $psd = !isset($_POST["psd"]) ? "" : $_POST["psd"];

    $sql = "select * from users where phone = '$phone' and psd = '$psd'";
    $result = query_sql($sql);
    if(count($result) > 0){
        // $_SESSION['user'] = $phone;
        echo "{status: true}";
    }else{
        echo "{status: false, message: '登录失败'}";
    }
?>