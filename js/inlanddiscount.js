$(function () {
  
  console.log(11);
  $.ajax({
    url:getApi.getinlanddiscount,
    success:function(info){
      console.log(info);
      $('.main_pro ul').html(template('proTpl',info));
    }
  })
  
  
  $('.main_pro ul').on('click','li',function(){
    var id = $(this).data('id');
    location.href='inlandproduct.html?productId='+id;
  })
  
  
})