$(function(){
  
  var id=getObj('brandtitleid');
  var tit = getObj('brandTitle');
  arr=tit.split('');
  arr.splice(-4);
  str= arr.join('')
  
  //品牌排行
  $.ajax({
    url:getApi.getbrand,
    data:{
      brandtitleid:id
    },
    success:function(info){
      console.log(info);
      $('.main_one ul').html(template('listTpl',info));
      $('.main_one h3').text(str+'哪个牌子好');
    }
  })
  
  //销量排行
  
  var productid;
  var arr1=[];

  
  $.ajax({
    url:getApi.getbrandproductlist,
    data:{
      brandtitleid:id,
      pagesize:4
    },
    success:function(info){
      // console.log(info);
      $('.main_two ul').html(template('proTpl',info));
      $('.main_two h3').text(str+'产品销量排行');
      $('.main_three h3').text(str+'最新评论');
      //分布渲染
      $('.main_three ul').html(template('comTpl',info));
      
      //等销量排行渲染完,获取到productid再渲染评论
      productid = $('.main_three ul li').data('id');
      render()
      
      info.result.forEach(function(item,index){
        var obj={};
        obj['productImg']=item.productImg;
        obj['productName']=item.productName;
        arr1.push(obj)
      })
      console.log(arr1);
    }
  })
  
  // 评论
  function render(){
    $.ajax({
      url:getApi.getproductcom,
      data:{
        productid:productid
      },
      success:function(info){
        
        arr1.forEach(function(item,index){
          info.result[index]['productImg']=arr1[index].productImg;
          info.result[index]['productName']=arr1[index].productName;
        })
        console.log(info);
        $('.main_three ul').html(template('comconTpl',info));
      }
    })
  
  }

  
  
  
})