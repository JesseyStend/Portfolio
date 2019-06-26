<?php
    $servername = "rdbms.strato.de";
    $username = "U3772978";
    $password = "PortfolioMaster";
    $dbname = "DB3772978";

    $dbc = mysqli_connect($servername,$username,$password,$dbname);

    if (!$dbc) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT id, Naam, Subtitle, ProjectBeschrijving, WatHebIkGeleerd, Tools, Overig, Github, Project, Videos, Images FROM Portfolio";
    $result = mysqli_query($dbc,$sql);

    $row_count = $result->num_rows;
    $database = array();

    if ($row_count > 0) {
      while ($row = $result->fetch_assoc()) {
        //array_push($database, $row)
      }
    }

    mysqli_close($dbc);
 ?>
