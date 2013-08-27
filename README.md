neoajax
=======

NeoAjax

NeoAjax is open source PHP library for ajax Application. Using neoAjax, you can use all jquery functions on PHP. 

Example

Backend (PHP)
<?php

$neoAjax = new neoAjax();
$neoAjax->alert("Hello Word");
$neoAjax->html('#helloword','Hello Word');
sleep(10);
$neoAjax->run();

?>

Frontend
HTML
  < a href="#" onclick="neoajax('ajax.php?islem=hello',{ });">Alert Hello Word</a >
  <div id="helloword">
  </div>
