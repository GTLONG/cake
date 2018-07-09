<?php
    include "dbhelper.php";

    $hot_cake = "select * from goods where fenlei='hot'";
    $birthday_cake = "select * from goods where fenlei='birthday'";
    $toast_cake = "select * from goods where fenlei='toast'";

    $result = query_sql($hot_cake);
    $result1 = query_sql($birthday_cake);
    $result2 = query_sql($toast_cake);
    // var_dump($result);

    $lists = json_encode($result);
    $lists1 = json_encode($result1);
    $lists2 = json_encode($result2);


    echo "{status: true, hot: $lists, birthday: $lists1,toast:$lists2}";
?>