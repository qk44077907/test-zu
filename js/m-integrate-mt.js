//loading下一页加载
var loadNextFun = {
    type: 0,
    page: 1,
    b: false,
    scroll: function(domName, ajaxFun){
        this.loadAddData(domName, ajaxFun);
    },
    loadAddData: function(dever, fun){
        var scrollTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var bodyHeight = $("body").height();
        if (scrollTop + winHeight >= bodyHeight) {
            //ajax读取数据
            if(!this.b){
                this.start(dever, fun, this.type);
            }
        }
    },
    start: function(dever, fun, type){
        var total_page = dever.eq(type).attr("total_page");
            if (this.page < total_page) {
                $('.loadmore').show();
                this.page++;
                fun();
            }else{
                loadNextFun.b = false;
            }
        }
};
$(function(){
  if(!IsZXTTApp&&!IsQJApp){
      $('body').append('<div id="m_zxbj_mfsj" data-type="sj"></div>');
      //wapLoadScript('//mued2.jia.com/js/mobile/mAsk/m_toutiao_ask_zxbj.js');
      setTimeout(function(){
          if($("#uname").val() == "zmRiji"){
              $(".apply-button a").attr("tjjj","click_m_riji_list_tijiaobutton");
          }else{
              $(".apply-button a").attr("tjjj","click_m_anli_list_tijiaobutton");
          }
      },1000);
  }
    loadingFn($(".loading"));
    $(window).scroll(function(){
        loadingFn($(".loading"));
    });
    $(".js-redpacket").click(function(){
        $(".hb-down-pop").show();
    });
    $(".hb-down-pop .hb-close").click(function(e){
        e.stopPropagation();
        $(".hb-down-pop").hide();
    });
    if($("#diary-recommend-swiper").length>0) {
        var diarySwiper = new Swiper("#diary-recommend-swiper", {
            slidesPerView: "auto"
        });
    }
    //加载下一页
    if($('.load-next-list').length > 0){
        $(window).scroll(function(){
            loadNextFun.scroll($(".load-next-list"), function(){
                nextPageAjax();
            });
        });
    }
    //下载最美
    var downloadUrl = "//a.app.qq.com/o/simple.jsp?pkgname=com.suryani.jiagallery&g_f=991653";
    $(".xm-download-top,.hb-form-box").live("click", function() {
        setTimeout(function() {
            window.location.href = downloadUrl
        }, 1000);
    });
    $(".zm-download-pop .close-btn").live("click", function() {
        $(".zm-download-pop,.event-overlay").hide();
    });
});