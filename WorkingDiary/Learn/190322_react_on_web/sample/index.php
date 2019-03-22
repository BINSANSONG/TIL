<?php
  $test = array(
    "a"=>10,
    "b"=>"test",
    "c"=>true
  );
  $test = json_encode($test);
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>sample page</title>
</head>

<body>
    <h1>Hello PHP!</h1>
    <div> <?php echo "PHP으로 표시한 텍스트입니다."; ?> </div>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script>const data = '<?php echo $test;?>';</script>
  <script src="like_button.js"></script>
</body>

</html> 