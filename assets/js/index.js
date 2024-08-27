/****************************************************
 * 首页
 ***************************************************/
/**
 * 聚焦栏和视频栏，首次加载时及页面大小调整时，更改样式
 */
$(window).on("load resize", function () {
  // B站外链的高度设为宽度的0.7倍
  if ($("#bilibiliIframe").length) {
    $("#bilibiliIframe").css({
      height: $("#bilibiliIframe").width() * 0.7,
    });
  }
});
