$('#content-frame').on('load',function(){
    $('iframe').contents().find("head")
    .append($("<style type='text/css'>#vault-page .item-info .info-text,#vault-page li{height:50px!important;overflow:hidden!important}#vault-page li{margin:1px!important;padding:0!important;border:1px solid #666!important}#vault-page .item-info{height:50px!important}#vault-page .item{height:50px!important;padding-top:10px!important}#vault-page .bonus_item_img{background:0 0!important;height:50px!important;margin:0!important;width:50px!important}#vault-page .bonus_item_img div{overflow:unset!important;margin:5px!important}#vault-page .bonus_item_img div img{height:40px!important;width:40px!important;position:relative!important}#vault-page .item.standard>label{display:none!important}</style>"));


    

    ApplySort();
});


// accending sort
function asc_sort(a, b){
       return ($(b).children('.item-info').children('.info-text').children('p').text()) < ($(a).children('.item-info').children('.info-text').children('p').text()) ? 1 : -1;    
   }

   // decending sort
   function dec_sort(a, b){
       return ($(b).children('.item-info').children('.info-text').children('p').text()) > ($(a).children('.item-info').children('.info-text').children('p').text()) ? 1 : -1;    
   }

function ApplySort(){
    $('iframe').contents().find('body').off("DOMNodeInserted");
 
    $('#content-frame').contents().find('.active').find('.item-info').parent().parent().addClass('SortMe')
    var result = $('#content-frame').contents().find('.active').find('.SortMe').find('li').sort(function asc_sort(a, b){
        return ($(b).children('.item-info').children('.info-text').children('p').text()) < ($(a).children('.item-info').children('.info-text').children('p').text()) ? 1 : -1;    
    })
    $('#content-frame').contents().find('.SortMe').empty()
    $('#content-frame').contents().find('.SortMe').append(result)
    $('#content-frame').contents().find('.active').find('.allocatedItems').parent().hide()

    $('iframe').contents().find('body').on("DOMNodeInserted", function() {
        ApplySort();
     });

}

