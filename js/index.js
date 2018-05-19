$(function () {
  //渲染导航
  $.ajax({
    //封装过了,直接访问首页
    url: getApi.getindexmenu,
    // dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.mm_nav').html(template('navTpl', info));
    }
  })
  

  
  $('.mm_nav').on('click', '.more', function () {
    // console.log(11);
    
    $(".mm_nav a:nth-last-child(-n+4)").toggleClass('show','hide');
  })
  
  //渲染产品
  $.ajax({
    url: getApi.getmoneyctrl,
    success:function(info){
      console.log(info);
      $('.recommend_product ul').html(template('proTpl',info))
    }
  })
  

  
})