$(function(){
  var id = getObj('productId');

  $.ajax({
    url:getApi.getdiscountproduct,
    data:{
      productid:id
    },
    success:function(info){
      console.log(info);
      $('.pro_main').html(template('moneyTpl',info))
    }
  })

})