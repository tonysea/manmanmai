$(function(){
  var str=location.search;
  console.log(str);
   var arr = str.split('=');
   var id=arr[1];
  console.log(id);
  
  $.ajax({
    url:getApi.getmoneyctrlproduct,
    data:{
      productid : id
    },
    success:function(info){
      console.log(info)
      
      $('.pro_main').html(template('moneyTpl',info));
    }
  })
})