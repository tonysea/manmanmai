$(function () {
  
 
  var liW = 0;
  //标题
  $.ajax({
    url:getApi.getbaicaijiatitle,
    // dataType:'json',
    success:function(info){
      // console.log(info);
      $('#wrapper ul').html(template('titTpl',info));

      $('#wrapper ul li').each(function () {
        liW += $(this).outerWidth(true );
      })
      $('#wrapper ul').width(liW);
      //让第一个li下的a默认有边框
      $('#wrapper ul li').eq(0).find('a').addClass('active');
    }
  })
  
//  点击切换下边框
  var titId;
  $('#wrapper ul').on('click','li',function(){
    $(this).find('a').addClass('active').parent().siblings().children('a').removeClass('active');
    
    //获取id
   titId = $(this).data('id');
   render();
  })
  
  render();
  function render(){
    $.ajax({
      url:getApi.getbaicaijiaproduct,
      data:{
        titleid:titId||0
      },
      success:function(info){
        console.log(info);
        $('.main_pro ul').html(template('listTpl',info));
      }
    })
  
  }

  
//回到顶部
  
  $(window).scroll(function(){
  
  })
  
$('.back').click(function(){
  console.log(1);
  $('html,body').animate({'scrollTop':0},500);
})
  
})

window.addEventListener("load", function() {
  new IScroll("#wrapper", {
    // 表示是否启用 横向滚动
    scrollX: true,
    // 表示是否启用 纵向滚动
    scrollY: false
  });

})
