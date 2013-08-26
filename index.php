<html>
<head>
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="neoAjax.js"></script>
    <style type="text/css">
        #loadingMsg {
            text-align: center;
            position: fixed;
            z-index: 9999;
            top: 40%;
            left: 45%;
            height: 100px;
            width: 210px;
            background: #FFF;
        }
        .loadingimg {
            background: url(loading.gif) no-repeat;
            padding: 5px;
            height: 30px;
            width: 30px;
            float: left;
            margin: 10px;
    </style>
</head>
<body>
<fieldset>
    <legend></legend>
    <a href="#" onclick="neoajax('ajax.php?islem=hello',{ });">Alert Hello Word</a>
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
        <a href="#" onclick="neoajax('ajax.php?islem=form',getFormValues('form'));">Sent</a>
    </form>
</fieldset>
<div id="loadingMsg" style="display: none;">
    <div class="loadingimg"></div>
</div>
</body>
</html>
