$(function(){
  //大标题
  $.ajax({
    url:getApi.getcategorytitle,
    success:function(info){
      // console.log(info);
      $('.cate_main ul').html(template('cateTpl',info));
    }
  })
  
  //隐藏的盒子
  $('.cate_main ul').on('click','li span',function(){
    var titId = $(this).parent().data('id');
    // console.log(titId);
    $.ajax({
      url:getApi.getcategory,
      data:{
        titleid:titId
      },
      success:function(info){
        console.log(info);
        $('.cate_main ul li div').html(template('tableTpl',info))
      }
    })
    
    $(this).parent().children('div').toggle().parent().siblings().children('div').hide();
  
    
 
  })
 
//  子标题
  $('.cate_main ul').on('click',' li div a',function(){
    
    var sonId = $(this).data('id');
    console.log(sonId);
    location.href='productlist.html?categoryid='+sonId;
  })
  
 
  
})