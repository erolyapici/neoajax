/**
 *
 */

function getFormValues(formId){ return $("#"+formId).serialize();}
function neoAjax__A(str){ alert(str);}
function neoAjax__R(forceGet){ location.reload(forceGet); }
function neoajax(url,data){
    console.log(data);
    $.ajax({
        type:'POST',
        url:url,
        dataType :'JSON',
        data:data,
        success:ajax_success
    });
    function ajax_success(response) {
        console.log(response);
        if(response != ""){
            if(response.s != undefined && response.s != ""){
                eval(response.s);
            }
            if(response.r != undefined && response.r != ""){
                neoAjax__R(response.r);
            }
            if(response.a != undefined && response.a != ""){
                a = response.a;
                if( Object.prototype.toString.call( a ) === '[object Array]' ) {
                    $.each(a,function(index,value){
                        neoAjax__A(value);
                    });
                }else{
                    neoAjax__A(a);
                }

            }
        }
    }
}


function ajaxStart(form_id , url){
    url = BASE_URL + cleanUrl(url);

    //$('form#' + form_id).hide();
    $("#neo_error").html("");
    $('#loading').remove();
    $('#success').remove();
    //Yükleniyor uyarısı veriliyor
    //$('form#' + form_id).before('<div class="notification loading" id="loading"> </div>');
    //  CKEDITOR.instances.features.updateElement();

    $.ajax({
        type:'POST',
        url:url,
        dataType :'JSON',
        data:$('#' + form_id).serialize(),
        success:ajax_success,
        error:function(x,e){
            if(x.status==0){
                alert('You are offline!!\n Please Check Your Network.');
            }else if(x.status==404){
                alert('Requested URL not found.');
            }else if(x.status==500){
                alert('Internel Server Error.');
            }else if(e=='parsererror'){
                alert('Error.\nParsing JSON Request failed.');
            }else if(e=='timeout'){
                alert('Request Time out.');
            }else {
                alert('Unknow Error.\n'+x.responseText);
            }

        }
    });

    function ajax_success(response) {

        if(response.error === true){
            $("#neo_error").html('<div class="notification note-error"><a href="#" class="close" title="Close notification">close</a><p><strong>Hata Oluştu:</strong>'+response.msg+'</div>');
            return false;
        } else {
            window.location.href = BASE_URL + response.redirect;
        }

    }
}
function cleanUrl(url){
    return url.substr(0,1) == '/' ? url.substr(1) : url;
}


function getExtraFielts(e){

    $.ajax({
        type:'POST',
        url :BASE_URL + 'admin/products/ajaxgetsExtraFields',
        dataType:'JSON',
        data:$(e).serialize(),
        success:function(response){
            $('#exstra_alan_yeri').html(response.sonuc);
        }
    });
}
function saveSort(){
    $.ajax({
        type:'POST',
        url :BASE_URL + 'admin/products/ajaxSaveSorts',
        dataType:'JSON',
        data:$('.sort').serialize(),
        success:function(response){
            if(response.sonuc===true)
                $('.sort').css('border-color','green');
            else
                $('.sort').css('border-color','red');
        }
    });
}
function getIlceler(e,ilce_id){
    il_id = $(e).val();
    $('#'+ilce_id).html('<option value="0" title="İlçe Seçiniz">İlçe Seçiniz</option>');
    $.ajax({
        type:'POST',
        url :BASE_URL + 'admin/main/ajaxilceleriGetir',
        dataType:'JSON',
        data:'il_id='+il_id,
        success:function( json ) {
            $.each(json, function(key, value) {
                $('#'+ilce_id).append('<option value="'+key+'" title="'+value+'">'+value+'</option>');
            });

        }
    });
}
function seoKontrol(e,update_id){
    seo = $(e).val();

    $.ajax({
        type:'POST',
        url :BASE_URL + 'admin/products/seoKontrol',
        dataType:'JSON',
        data:'seo='+seo+'&id='+update_id,
        success:function( response ) {
        }
    });
}
var g = null;

$(function(){
    $("div.image_box a.remove").live('click', function(){
        $(this).parent().parent().remove();
    });

    $("a#add_image_box").click(add_image_box);
});

function add_image(element) {

    g = element

    CKFinder.popup(BASE_URL+'/assets/ckfinder/', 800, 600, function(url) {
        url =cleanUrl(url);

        $("input", $(g).parent()).val(url);
        url = url.replace('uploads','uploads/_thumbs');
        $(g).attr("src", BASE_URL+url);

    });

    // It can also be done in a single line, calling the "static"
    // Popup( basePath, width, height, selectFunction ) function:
    // CKFinder.Popup( '../../', null, null, SetFileField ) ;
    //
    // The "Popup" function can also accept an object as the only argument.
    // CKFinder.Popup( { BasePath : '../../', selectActionFunction : SetFileField } ) ;
}

function add_image_box() {
    image_box = $("div#clone").html();

    $("div#images_area").append(image_box);
}
var imagePiece = 0;
function newImage(start){
    if(imagePiece == 0){
        imagePiece = start;
    }
    image_box = $("#clone").html();
    image_box = image_box.replace('|idyeri|',imagePiece);
    image_box = image_box.replace('|idyeri|',imagePiece);
    image_box = image_box.replace('|idyeri|',imagePiece);
    imagePiece++;
    $("div#images_area").append(image_box);
}

function add_main_image(id){
    CKFinder.popup('/ckfinder/', null, null, function(url) {
        $(id).attr('value',url);
    });

}