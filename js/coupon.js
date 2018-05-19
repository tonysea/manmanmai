$(function(){
  $.ajax({
    url:getApi.getcoupon,
    success:function(info){
      console.log(info);
      $('.mm_main ul').html(template('yhTpl',info))
      
    }
  })
})