const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "submit" )( window );

$(document).ready(function(){
    console.log("insdde home.js")
    $('#delete').on('click', function(){
    var item = new Array();
      if($('input:checkbox:checked').length>0){
        $('input:checkbox:checked').each(function(){
          item.push($(this).attr('id'));
        });
        sendResponse(item);
      }
   });
    function sendResponse(item) {
      $.ajax({
        type:'post',
        url:"/delete-tasks",
        data:{item:item},
        success:function(data){
          location.reload();
        }
      });
    }
  });