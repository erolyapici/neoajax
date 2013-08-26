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
    sleep(10);
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