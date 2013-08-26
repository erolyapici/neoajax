/**
 *
 */

function getFormValues(formId){ return $("#"+formId).serialize();}
function neoAjax__A(str){ alert(str);}
function neoAjax__R(forceGet){ location.reload(forceGet); }
function neoajax(url,data){
    $.ajax({
        type        :'POST',
        async       : true,
        url         : url,
        dataType    : 'JSON',
        data        : data,
        beforeSend  : neoAjax_beforeSend,
        success     : neoAjax_success,
        error       : neoAjax_error,
        complete    : neoAjax_complete,
        statusCode  : {
            404: function() {
                alert("page not found");
            }
        }
    });
}
function neoAjax_success(response) {
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
function neoAjax_beforeSend(xhr){
    $('#loadingMsg').show();
}
function neoAjax_error(xhr, textStatus, errorThrown){
    /**
     * error message
     */
}
function neoAjax_complete(){
    $('#loadingMsg').hide();
}