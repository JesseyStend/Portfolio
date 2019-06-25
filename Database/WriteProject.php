<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>adwd</title>
    <h1>adad</h1>
  </head>
  <body>
    <?php
    $servername = "rdbms.strato.de";
    $username = "U3772978";
    $password = "PortfolioMaster";
    $dbname = "DB3772978";



        function print_var_name($var) {
          foreach($GLOBALS as $var_name => $value) {
              if ($value === $var) {
                  return $var_name;
              }
          }

          return false;
    }

    $errors = array();

    $projectname = $_POST['Name'];
    $Subtitle = $_POST['Subtitle'];
    $Disctiptie = $_POST['Disctiptie'];
    $Geleerd = $_POST['Geleerd'];
    $Tools = $_POST['Tools'];
    $Other = $_POST['Other'];
    $Trailer = $_POST['Trailer'];
    $ProjectLink = $_POST['Project'];
    $GithubLink = $_POST['Github'];
    $ImagesEnGifs = "";

    $objects = array( $projectname, $Subtitle, $Disctiptie, $Geleerd, $Tools, $Other, $Trailer, $ProjectLink, $GithubLink);

    for ($i=0; $i < Count($objects); $i++) {
      if (is_null($objects[$i])) {
        array_push($errors, print_var_name($objects[$i]) . "is null");
      }
    }

      // Count # of uploaded files in array
      $total = count($_FILES['upload']['name']);
      // Loop through each file

      if (count($errors) <= 0) {
        for( $i=0 ; $i < $total ; $i++ ) {

          //Get the temp file path
          $tmpFilePath = $_FILES['upload']['tmp_name'][$i];

          //Make sure we have a file path
          if ($tmpFilePath != ""){
            //Setup our new file path
            $pathForFile = "../img/" . $projectname . "/";
            $newFilePath = $pathForFile . $_FILES['upload']['name'][$i];

            if (!file_exists($pathForFile)) {
              mkdir($pathForFile, 0777, true);
            }

            //Upload the file into the temp dir
            if(move_uploaded_file($tmpFilePath, $newFilePath)) {
              if ($i == 0) {
                $ImagesEnGifs = $_FILES['upload']['name'][$i];
              } else {
                $ImagesEnGifs = $ImagesEnGifs . "," . $_FILES['upload']['name'][$i];
              }

            }
          }
        }

        array_push($objects, $ImagesEnGifs);
        $dbc = mysqli_connect($servername,$username,$password,$dbname);

        if (!$dbc) {
          die("Connection failed: " . mysqli_connect_error());
        }

        echo "Connection succes";

        $query = "INSERT INTO Portfolio (Naam, Subtitle, ProjectBeschrijving, WatHebIkGeleerd, Tools, Overig, Github, Project, Videos, Images)
        VALUES ('$projectname', '$Subtitle', '$Disctiptie', '$Geleerd', '$Tools', '$Other', '$GithubLink', '$ProjectLink', '$Trailer', '$ImagesEnGifs')";

        if (mysqli_query($dbc,$query)) {
            echo "Succes uploading";
        } else {
            echo "Error: " . $query . "<br>" . $dbc->error;
        }

        mysqli_close($dbc);

      } else {
        for ($i=0; $i < count($errors); $i++) {
          echo $errors[$i] . " <br>";
        }
      }


     ?>
  </body>
</html>
