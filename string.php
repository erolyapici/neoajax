<?php
/**
 * Created by JetBrains PhpStorm.
 * User: eyapici
 * Date: 08.10.2013
 * Time: 14:29
 * To change this template use File | Settings | File Templates.
 */
set_time_limit(99999999999);
require_once 'simple_html_dom.php';
// Create a DOM object; You must do this for each way
$parser = new simple_html_dom();

// Load HTML from an URL
$parser->load_file('http://www.php.net/manual/en/ref.strings.php');

$lis = $parser->find("ul[class=chunklist chunklist_reference] li a");

$sira = 1;
$class= "<?php
class String{
";
foreach($lis AS $val){
    $ad = $val->plaintext;
    $link = "http://www.php.net/manual/en/".$val->href;

    $parser2 = new simple_html_dom();
    $parser2->load_file($link);

    $fonksyion_syntax_ss = $parser2->find("div[id=function.$ad] div[class=methodsynopsis dc-description]",0);
        $fonksiyon_syntax = $fonksiyon_aciklama = "";
    if(is_object($fonksyion_syntax_ss)){
        $fonksiyon_aciklama = $fonksyion_syntax_ss->plaintext;
        $fonksiyon_syntax = str_replace("string ","",$parser2->find("div[id=function.$ad] div[class=methodsynopsis dc-description]",0)->plaintext);
        $fonksiyon_syntax = str_replace(" ","",$fonksiyon_syntax);
    }

/*
    $parameters = $parser2->find("div[id=function.$ad] div[id=refsect1-function.$ad-parameters] dl dt");
    $parameter_text = "";
    $i = 1;
    foreach($parameters AS $parameter){

    }*/
    $parser2_sonuc = $parser2->find("div[id=function.$ad] div[id=refsect1-function.$ad-returnvalues]",0);
    $return_values = "";
    if(!empty($parser2_sonuc)){
        $return_values = str_replace(" Return Values       ","string ",$parser2->find("div[id=function.$ad] div[id=refsect1-function.$ad-returnvalues]",0)->plaintext);
    }

    $class.="
    /**
    * $fonksiyon_aciklama
    *
    * @return $return_values
    */
    static function $fonksiyon_syntax{
        return $fonksiyon_syntax;
    }
    ";

}
$class."
}";
echo $class;
die;
