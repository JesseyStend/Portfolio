<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
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

        $database = array();
        $row_count = $result->num_rows;

        if ($row_count > 0) {
          while ($row = $result->fetch_assoc()) {
            $tempArr = explode(',', $row["Images"]);
            $row["Images"] = $tempArr;
            array_push($database, $row);
          }
        }

        $myJSON = json_encode($database);

        mysqli_close($dbc);
     ?>
  </body>
</html>
