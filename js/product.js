$(function(){
  
  function getObj(name){
    
    var  str = location.search;
    str= decodeURI(str);
    str=str.slice(1);
    var arr = str.split('&');
    var obj = {};
    arr.forEach(function(item,index){
      // console.log(item);
      arr1=item.split('=');
      obj[arr1[0]]=arr1[1];
      // console.log(obj);
    })
    return obj[name];
  }
  
  
  //商品详情
  $.ajax({
    url:getApi.getproduct,
    data:{
      productid:getObj('productId'),
    },
    success:function(info){
      // console.log(info);
      $('.main_pro').html(template('proTpl',info))
    }
  })
  
//  评论
  $.ajax({
    url:getApi.getproductcom,
    data:{
      productid:getObj('productId')
    },
    success:function(info){
      // console.log(info);
      $('.comment_content ul').html(template('comTpl',info))
    }
  })
  
  //  导航
  console.log(getObj('productName'));
  var tit=getObj('productName');
  titArr=tit.split(' ');
  console.log(titArr[0]);
  var title = titArr[0];
  $.ajax({
    url:getApi.getcategorybyid,
    data:{
      categoryid:getObj('categoryId')
    },
    success:function(info){
      console.log(info);
      info['title']=title;
      $('.main_nav').html(template('titTpl',info));
      
    }
  })
})