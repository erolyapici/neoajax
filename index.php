<?php
/**
 * Created by JetBrains PhpStorm.
 * User: eyapici
 * Date: 23.08.2013
 * Time: 11:41
 * To change this template use File | Settings | File Templates.
 */
$islem = isset($_GET['islem']) ? $_GET['islem'] : '';
require_once 'neoAjax.php';
if($islem == 'hello'){
    $neoAjax = new neoAjax();
    $neoAjax->alert("Hello Word");
    $neoAjax->html('#helloword','Hello Word');
    $neoAjax->run();
}elseif($islem == 'form'){
    $neoAjax = new neoAjax();
    $name       = $neoAjax->getParam('name');
    $password   = $neoAjax->getParam('password');
    $text       = $neoAjax->getParam('text');
    $checkbox   = $neoAjax->getParam('checkbox');
    $radio      = $neoAjax->getParam('radio');

    $neoAjax->html('#nameValue',$neoAjax->strip($name));
    $neoAjax->html('#passwordValue',$neoAjax->strip($password));
    $neoAjax->html('#textValue',$neoAjax->strip($text));
    $neoAjax->html('#checkboxValue',$neoAjax->strip($checkbox));
    $neoAjax->html('#radioValue',$neoAjax->strip($radio));
    $neoAjax->run();
}
?>
<html>
<head>
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="neoAjax.js"></script>
</head>
<body>
<fieldset>
    <legend></legend>
    <a href="#" onclick="neoajax('index.php?islem=hello',{ });">Alert Hello Word</a>
    <div id="helloword">

    </div>
</fieldset>
<fieldset>
    <legend>Form</legend>
    <form id="form">
        <input type="text" name="name" id="name"><span id="nameValue"></span>
        <br/>
        <input type="text" name="password" id="password"><span id="passwordValue"></span>
        <br/>
        <textarea id="text" name="text">

        </textarea><span id="textValue"></span>
        <br/>
        <input type="checkbox" id="checkbox" name="checkbox" value="Active"><span id="checkboxValue"></span>
        <br/>
        <input type="radio" id="radio" name="radio" value="Yes">
        <input type="radio" id="radio" name="radio" value="No"><span id="radioValue"></span>
        <br/>
        <a href="#" onclick="neoajax('index.php?islem=form',getFormValues('form'));">Sent</a>
    </form>
</fieldset>

</body>
</html>
