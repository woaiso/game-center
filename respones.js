//针对ios视网膜屏幕1px边框的问题（1px hairline）在设置字体大小之前，根据屏幕像素比，更改页面的viewport：

var ua = navigator.userAgent.toLowerCase();
if (/iphone|ipad|ipod/.test(ua)) {
  var sc = 1 / window.devicePixelRatio;
  document.getElementsByName('viewport')[0].content = 'initial-scale=' + sc + ', maximum-scale=' + sc + ', minimum-scale=' + sc + ', user-scalable=no';
}


//自动设置ROOT fontSize
function autoRootFontSize() {
  const pxUnit = 100;     // 在px2rem中预设rem的值 即 1rem = ? px
  const designWid = 750;  // 设计稿宽度
  const winWid = document.body.clientWidth;
  const winHei = document.body.clientHeight;
  const bl = winWid / designWid;
  const html = document.querySelector('html');
  if (html) {
    html.style.fontSize = (bl * pxUnit) + 'px';
  }
}
window.addEventListener('resize', autoRootFontSize);
autoRootFontSize();
