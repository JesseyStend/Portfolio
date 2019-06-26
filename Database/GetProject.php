<?php
    $servername = "rdbms.strato.de";
    $username = "U3772978";
    $password = "PortfolioMaster";
    $dbname = "DB3772978";

    $dbc = mysqli_connect($servername,$username,$password,$dbname);
    $result = mysqli_query("SELECT + FROM Portfolio", $dbc);
    $rows_count = mysql_num_rows($result);
 ?>
