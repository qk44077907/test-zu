/**
 * Created by tao on 2017/11/2.
 */
//搜索时

var searchCity;
function searchSugword(query) {
    if (query == '') {
        $('.tt-search-wrap #n-history_search').show();
        $('.tt-search-wrap #hot_search').show();
        $('.tt-search-wrap #sugword').hide();
    } else {
        //输入框不为空
        $.ajax({
            type: "POST",
            cache: false,
            url: "/zixun/search_sugword",
            data: {
                query:query,
                areaflag:searchCity
            },
            dataType: 'json',
            success: function(res){
                if($(".tt-search-input").val() != ''){
                    if(window.location.href.indexOf("/zx")>-1||$(".tt-history-cate .brand-a").length>0){
                        var str = '<script>$(function(){TJJ.track({track:"show_m_zx_sousuolianxiangbg"});});</script>';
                    }else{
                        var str = '<script>$(function(){TJJ.track({track:"show_m_index_sousuolianxiangbg"});});</script>';
                    }
                    for(var i in res){
                        var  reg = /<[^>]+>/g;
                        if(reg.test(res[i])){
                          var rx = /<span[^>]*>([\s\S]+?)<\/span>/i;
                           var spanContent = rx.exec(res[i])[1];
                          str += '<a href="'+'/zixun/search_list/'+$.trim($(".tt-search-input").val())+'/?zx_type=6" class="brand-a">'+$.trim(res[i])+'<i class="brand-icon">品牌</i></a>';
                        }else{
                            if(window.location.href.indexOf("/zx")>-1){
                                str += '<a href="'+'/zixun/search_list/'+$.trim(res[i])+'/?zx_type=6" tjjj="click_m_zx_sousuolianxiangdj">'+$.trim(res[i])+'</a>';
                            }else{
                                str += '<a href="'+'/zixun/search_list/'+$.trim(res[i])+'/" tjjj="click_m_index_sousuolianxiangdj">'+$.trim(res[i])+'</a>';
                            }
                        }
                    }
                    $('.tt-search-wrap #n-history_search').hide();
                    $('.tt-search-wrap #hot_search').hide();
                    $('.tt-search-wrap #sugword_list').html(str);
                    $('.tt-search-wrap #sugword').show();
                }else{
                    $('.tt-search-wrap #n-history_search').show();
                    $('.tt-search-wrap #hot_search').show();
                    $('.tt-search-wrap #sugword').hide();
                }
            }
        });
    }
}
function delSearch(){
    $.ajax({
        type: "POST",
        url: "/zixun/del_history_search",
        success: function(res){
            if(res == "ok"){
                $('.tt-search-wrap #history_list').html("");
                $(".tt-search-wrap .n-clear-history").remove();
            }

        }
    });
}
//点击手机上搜索键
function enterEventFn(evt) {
    if (evt.keyCode == 13 && evt.target.id=="keyword") {

        var search_val = $.trim($(".tt-search-wrap .tt-search-input").val());
        if(search_val){
            if(window.location.href.indexOf("/zx")>-1||$(".tt-history-cate .brand-a").length>0){
                TJJ.track({track:"click_m_zx_sousuo_result"});
                window.location.href= "/zixun/search_list/"+search_val+"/?zx_type=6";
            }else{
                TJJ.track({track:"click_m_index_sousuo_result"});
                window.location.href= "/zixun/search_list/"+search_val+"/";
            }

        }

    }
    return false;
}
function searchIndexFn() {
}
function showSearchFn(){
    $(".tt-search-wrap").addClass("cur");
}
function zizhiFn(){
    var msg = '';
    msg += '<div class="jia-zizhi-popmask"></div>';
    msg += '<div class="jia-zizhi-wrap">';
    msg += '<em class="close"></em>';
    msg += '<div class="image-wrap">';
    msg += '<div class="image-box"><img src="//mued3.jia.com/image/mobile/m_sygb/new_header/jia-zizhi.jpg" /></div>';
    msg += '</div>';
    msg += '</div>';
    $('body').append(msg);
    $('.zizhi-icon').live('click',function(){
        $('.jia-zizhi-popmask,.jia-zizhi-wrap').show();
    });
    $('.jia-zizhi-popmask,.jia-zizhi-wrap .close').click(function(){
        $('.jia-zizhi-popmask,.jia-zizhi-wrap').hide();
    });
    wapLoadScript("//mued2.jia.com/js/mobile/pinchzoom.js",function(){
        $('.jia-zizhi-wrap .image-box').each(function () {//双指缩放
            this.pinch = new RTP.PinchZoom($(this), {});
        });
    });
}
$(function(){
    getCityFn(function(city){
       searchCity=city;
    })
});
location.protocol == 'https:' && typeof HOST_TYPE == 'undefined' && (window.HOST_TYPE = 1);
