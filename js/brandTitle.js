$(function(){
  $.ajax({
    url:getApi.getbrandtitle,
    success:function(info){
      console.log(info);
      $('.mm_main ul').html(template('titTpl',info));
    }
  })
})