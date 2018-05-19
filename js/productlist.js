$(function(){
  
   var str = location.search;
   var arr = str.split('=');
   var id = arr[1];
  console.log(id);
//  导航
  $.ajax({
    url:getApi.getcategorybyid,
    data:{
      categoryid:id
    },
    success:function(info){
      console.log(info);
      $('.main_nav').html(template('titTpl',info));
      
    }
  })
  
//  产品列表
  var currentpage=1;
  var pages;
  render();
  function render(){
    console.log(111);
    $.ajax({
      url:getApi.getproductlist,
      data:{
        categoryid:id,
        pageid:currentpage
      },
      success:function(info){
        var pagesize=info.pagesize;
        var totalCount=info.totalCount
        pages=Math.ceil(totalCount/pagesize);
        info.pages=pages;
        console.log(info);
        $('.cate_main ul').html(template('listTpl',info));
        $('.main_btn select').html(template('catePagTpl',info))
        $('select').val(currentpage);
      }
    })
  }
  
//  点击跳转

 $('.main_btn ').on('change','select',function(){
   var optVal = $(this).val();
   console.log(optVal);
   currentpage=optVal;
   render();
 })
  
  $('.next').click(function(){
    // console.log(11);
    currentpage++;
    if(currentpage > pages){
      currentpage = pages;
      return;
    }
    render();
  })
  
  $('.pre').click(function(){
    // console.log(11);
    currentpage--;
    if(currentpage<0){
      currentpage=0;
      return;
    }
    render();
  })
  

 
})