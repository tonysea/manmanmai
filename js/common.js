// function common(){
  //  回到顶部
  this.back=$('.go_top').click(function(){
    console.log(2);
    $('html,body').animate({'scrollTop':0},500);
  })

//
// }
// window.common=new common();

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
