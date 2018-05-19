$(function () {
  
  var currentpage = 0;
  
  render();
  
  function render() {
    
    $.ajax({
      url: getApi.getmoneyctrl,
      data:{
        pageid:currentpage
      },
      success: function (info) {
        console.log(info);
        //渲染产品
        $('.main_pro ul').html(template('proTpl', info));
        
        // 切换页数
        var pages = Math.ceil(info.totalCount / info.pagesize);
        // console.log(pages);
        for (var i = 0; i < pages; i++) {
          $('.main_btn select').append('<option value='+ i +'>' + (i + 1) + '/' + pages + '</option>');
        }
  
        $('.main_btn select').val(currentpage)
      }
    })
  }
  
  $('.main_btn select').on('change',function(){
    var value=$(this).val();
    console.log(value);
    currentpage=value;
    render();
  })
  
  $('.pre').click(function(){
   
    if(currentpage<0){
      currentpage=0;
      return;
    }
    currentpage--;
    render();
  })
  
  $('.next').click(function(){
    
    if(currentpage >15){
      currentpage = 15;
      return;
    }
    currentpage++;
    render();
  })
  
})