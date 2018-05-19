//封装ip地址,更改
function Api() {
  /* 自己本地IP加上项目端口号 */
  this.base = 'http://192.168.43.154:9999';
  
  // 一.首页
  /*首页接口地址管理*/
  this.getindexmenu = this.base + '/api/getindexmenu';
  
  /* 省钱控接口地址管理 */
  // 获取折扣商品的列表信息   传参：pageid 不传默认返回第一页数据
  this.getmoneyctrl = this.base + '/api/getmoneyctrl';
  // 获取省钱控商品详情信息     传参：productid
  this.getmoneyctrlproduct = this.base + '/api/getmoneyctrlproduct';

 // 二.分类页
 //  分页标题
  this.getcategorytitle = this.base +'/api/getcategorytitle';
  this.getcategory = this.base +'/api/getcategory';
  this.getcategorybyid = this.base +'/api/getcategorybyid';
  //商品列表
  this.getproductlist = this.base +'/api/getproductlist';
  // 商品详情
  this.getproduct = this.base +'/api/getproduct';
  //商品评论
  this.getproductcom = this.base +'/api/getproductcom';
  
  //折扣列表
  this.getinlanddiscount = this.base +'/api/getinlanddiscount';
  
  //折扣详情
  this.getdiscountproduct = this.base +'/api/getdiscountproduct';
  
  //三.白菜价
  this.getbaicaijiatitle = this.base +'/api/getbaicaijiatitle';
  
  //商品列表
  this.getbaicaijiaproduct = this.base +'/api/getbaicaijiaproduct';
  
  //优惠劵
  this.getcoupon = this.base +'/api/getcoupon';
  
  //优惠劵列表
  this.getcouponproduct = this.base +'/api/getcouponproduct';
  
  //凑单
  //京东下拉数据
  this.getgsshop = this.base +'/api/getgsshop';
  
  //华北下拉数据
  this.getgsshoparea = this.base +'/api/getgsshoparea';
  
  //列表数据
  this.getgsproduct = this.base +'/api/getgsproduct';
  
  //商场导航
  this.getsitenav = this.base +'/api/getsitenav';
  
}
/* 将api接口暴露到全局 */
window.getApi = new Api();
