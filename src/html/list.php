<?php
    include "dbhelper.php";

    $sql = "select * from goods";

    $result = query_sql($sql);
    // var_dump($result);

    $lists = json_encode($result);


    echo "{status: true, hot: $lists}";
?>