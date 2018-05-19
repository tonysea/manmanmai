$(function(){
  
  var id = getObj('couponId');
  
  var tit =getObj('couponTitle');

  tit=tit+'优惠劵';
  
  $('.header_title').text(tit);
  $.ajax({
    url:getApi.getcouponproduct,
    data:{
      couponid:id
    },
    success:function(info){
      console.log(info);
      $('.mm_main ul').html(template('listTpl',info))
    }
  })
})