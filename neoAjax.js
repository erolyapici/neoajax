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
