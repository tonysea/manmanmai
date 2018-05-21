$(function () {
  var shopId;
  var areaId;
  
  //京东
  $.ajax({
    url: getApi.getgsshop,
    success: function (info) {
      console.log(info);
      $(".downJd").html(template('jdTpl', info));
    }
  })
  
  //京东点击
  $('.jd').click(function () {
    $(".downJd").slideToggle();
    $(this).find('p').toggleClass('rotate');
    $('.downHuabei').hide();
    $('.downAll').hide();
  })
  
  
  $('.downJd').on('click', 'li', function () {
    $(this).children('img').show().parent().siblings().children('img').hide();
    $(this).parent().hide();
    $('.jd').find('p').toggleClass('rotate');
    $('.jd span').text($(this).text());
    //获取产品所需的shopId
    shopId=$(this).data('shopid');
    render();
  })
 

//  华北
  $.ajax({
    url: getApi.getgsshoparea,
    success: function (info) {
      console.log(info);
      $(".downHuabei").html(template('hbTpl', info));
    }
  })
//  华北点击
  $('.huabei').click(function () {
    $(".downHuabei").slideToggle();
    $(this).find('p').toggleClass('rotate');
    $('.downJd').hide();
    $('.downAll').hide();
  })
  
  $('.downHuabei').on('click', 'li', function () {
    $(this).children('img').show().parent().siblings().children('img').hide();
    $(this).parent().hide();
    $('.huabei').find('p').toggleClass('rotate');
    
    var str=$(this).data('name')
   str= str.substr(0,2);
    $('.huabei span').text(str);
    //获取产品所需的areaId
    areaId=$(this).data('areaid');
    console.log(areaId);
    render();
  })
  
  
  //全部点击
  $('.all').click(function () {
    $(".downAll").slideToggle();
    $(this).find('p').toggleClass('rotate');
    $('.downJd').hide();
    $('.downHuabei').hide();
  })
  
  
  
 //根据店铺的id和地区的id来产品渲染,需要两者共同获取到
  render();
  function render(){
    $.ajax({
      url:getApi.getgsproduct,
      data:{
        //默认渲染第一个类别的
        shopid:shopId||0,
        areaid:areaId||0
      },
      success:function(info){
        console.log(info);
        $('.main_pro ul').html(template('listTpl',info))
      }
    })
  }
  $('.main_pro ul').on('click','li',function(){
    location.href='gsproduct.html';
  })
  
  
 
})