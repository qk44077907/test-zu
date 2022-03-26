$.fn.lazyload=function(){var elements=this;elements.each(function(index,dom){var self=$(dom);self.one("appear",function(){if(undefined!=self.attr("imgSrc")&&self.is("img")){self.attr("src",self.attr("imgSrc")).removeAttr("imgSrc").show()}});if(isContain(self)&&undefined!=self.attr("imgSrc")){self.trigger("appear")}});$(window).on("scroll",function(){elements.each(function(index,dom){var self=$(dom);if(isContain(self)&&undefined!=self.attr("imgSrc")){self.trigger("appear")}})})};var isContain=function(element){var fold=false;if(element.is("img")&&undefined!=element.attr("height")){fold=element.offset().top+parseInt(element.attr("height"))>$(window).scrollTop()&&element.offset().top+parseInt(element.attr("height"))<=$(window).scrollTop()+$(window).height()}return fold||element.offset().top>$(window).scrollTop()&&element.offset().top<=$(window).scrollTop()+$(window).height()};

$(function(){
    $('img.loading').lazyload();
});
function loadingFnTJJ(b) {
    var c = $(window).scrollTop();
    var a = $(window).height();
    var w = $(window).width();
    $(b).each(function() {
        var f = $(this);
        var e = $(this).offset().top;
        var g = $(this).offset().left;
        if(!$(this).is(":hidden")){
            if ((e > c && e <= c + a) && (g>0 && g<w)) {
                exposureTJJ(f)
            }
        }
    })
}
function exposureTJJ(that){
    if(that.attr('once')==1){
        return;
    }
    TJJ.expose({position:that.attr('bg_tjjj')});
    that.attr('once',1)
}
function _imgload() {
    $(".waterfall img").imagesLoaded(function() {
        $(".waterfall").masonry({
            itemSelector: ".list-item"
        })
    })
}
var loadFlag = false,page=2;
var tagId = $('#tagId').val() || '';
var tags = $("input[name='tags']").val() || '';
var list_from = $('#list_from').val();
$(function() {
    if (window.location.host == "h5.m.jia.com" || navigator.userAgent.indexOf("QIJIA") > -1 || window.location.host == "zixun.m.jia.com" || typeof (Device) != "undefined" || window.location.host == "zm.jia.com" || window.location.host == "baidu.m.jia.com") {
        $(".tuku-header").hide()
    }
    // var _referrer = document.referrer;
    // if( _referrer.indexOf('/tuku/gaoqing/')>-1 || _referrer.indexOf('/tuku/photo/')>-1){
    //     $(".back-icon").attr("href","/tuku/");
    // }else{
    //     $(".back-icon").attr("href",'javascript:history.back(-1);');
    // }
    $('.ask-zxbj-up,.headline-box').remove();
    //wapLoadScript("//mued2.jia.com/js/mobile/mAsk/m_toutiao_ask_zxbj.js");
    wapLoadScript("//mued2.jia.com/js/mobile/total_station/m_tuku_footer-1.js");
    $(window).scroll(function() {
      //  loadingFn($(".loading"))
        $(".tuku-list-cont").masonry().masonry("reload");
    });
    _imgload();
    loadingFnTJJ($('.bgTJJ'))
    loadingFnTJJ($('.bgTjj'))
    $(window).on("scroll", function() {
        loadingFnTJJ($('.bgTJJ'))
        loadingFnTJJ($('.bgTjj'))
    });
    $('.nav-item').live('click', function(event) {
        var i = $(this).index();
        $('.nav-item').removeClass('cur');
        $(this).addClass('cur');
        $('.select-item').hide();
        $('.select-item').eq(i).show();
        loadingFnTJJ($('.bgTJJ'))
        if(i!=0){
            var screen_swiper = new Swiper(".select_swiper"+i, {
                slidesPerView: "auto",
                slideClass: "select-btn",
                onSlideChangeEnd:function(slideswiper){
                    loadingFnTJJ($('.bgTJJ'))
                }
            })
        }
        if(i==0&&urlHrefObject.key==undefined){
            // $('.select-btn').removeClass('cur')
            // $('.pop-select-btn').removeClass('cur')
            // $('#key_search').val('');
            // $('#key').val('');
            // page = 1;
            // if(list_from == 'gongzhuang'){
            //     getGzList('select');
            // }else{
            //     getList('','select');
            // }
            window.location.href="/tuku/";
        }
    });
    if(urlHrefObject.type){
        $('.nav-item').eq(urlHrefObject.type).trigger("click");
    }
    if(window.location.href.indexOf('/gongzhuang/') > -1){
        $('.nav-item').eq(5).trigger("click");
    }
    $('.select-btn').live('click', function(event) {
        $(this).parent().find('.select-btn').removeClass('cur');
        $(this).addClass('cur');
    });
    var nav_top = $(".tuku-nav").offset().top;
    $(window).on("scroll", function() {
        var win_top = $(this).scrollTop();
        if (win_top > nav_top) {
            $(".tuku-nav").addClass("fixed")
        } else {
            $(".tuku-nav").removeClass("fixed")
        }
    });
    var articleFooterObj = {
        scrollTop : {
            body: 0,
            documentElement: 0,
            offset: 0
        }
    };
    $('.header-screen-btn').live('click',function(){
        document.documentElement.classList.add('no-scroll');
        $('.popup-select').addClass('show');
        $('.popmask').show();
    })
    $('.popmask').live('click',function(event) {
        document.documentElement.classList.remove('no-scroll');
        $('.popup-select').removeClass('show');
        $('.popmask').hide();
    });
    $('.pop-select-btn').live('click',function(){
        if($(this).hasClass('cur')){
            $(this).removeClass('cur');
        }else{
            $(this).addClass('cur').siblings().removeClass('cur');
        }
    })
    $('.reset-btn').live('click',function(){
        $('.pop-select-btn').removeClass('cur');
    })
    $('.result-item').live('click',function(){
        $(this).remove();
        var del_key = $(this).find('p').text();
        if(list_from=='gongzhuang'){
            var self_url = window.location.href;
            var list_sum = $('#key').val().split(',').length;
            var list_str = 'list'+list_sum;
            var del_id = '';
            $('.select-btn').each(function(index, el) {
                if($(this).text() == del_key){
                    del_id = $(this).attr('data-key');
                }
            });
            var now_url = self_url.replace(list_str,'list'+(list_sum-1));
            if(list_sum>1){
                now_url = now_url.replace('-'+del_id,'');
                console.log(del_id)
            }else{
                now_url = '/tuku/gongzhuang/'
            }
            location.href =now_url;
        }else{
            var url_key=$('#key').val().split(',');
            var a =1,srt_url='';
            for(var i=0; i< url_key.length;i++){
                if(url_key[i] == del_key){
                    url_key.splice(i, 1);
                }
            }
            for(var i=0; i< url_key.length;i++){
                if(list[i]!=''){
                    if(a ==1){
                        srt_url = url_key[i]
                    }else{
                        srt_url += ','+url_key[i];
                    }
                    a++;
                }
            }
            if(url_key.length==0){
                location.href = '/tuku/';
            }else{
                location.href = '/tuku/search?key='+srt_url;
            }
        }
    })
    var hidden_key = $('#key_search').val() || '';
    var all_key='';
    $('.select-btn').each(function(index, el) {
       all_key+=$(this).text();
    });
    if(hidden_key){
        $('.select-btn,.nav-item').removeClass('cur');
        $('.select-btn').each(function(){
            if(hidden_key.indexOf($(this).text())>-1){
                $(this).addClass('cur');
                $(this).parents('.select-item').show();
                var index = $(this).index();
                var i = $(this).parents('.select-item').index();
                $('.nav-item').eq(i).addClass('cur');
                var screen_swiper = new Swiper(".select_swiper"+i, {
                    slidesPerView: "auto",
                    slideClass: "select-btn"
                })
                screen_swiper.slideTo(index, 0 ,false);
            }
        })
        if(all_key.indexOf(hidden_key)==-1){
            $('.pop-select-result').html('').append('<div class="swiper-wrapper"><div class="result-item" href="javascript:;"><p>'+hidden_key+'</p><a class="close-item"></a></div></div>');
            $('.pop-select-result').show();
        }
    }else{
        $('.select-btn').each(function(){
            if($(this).text()=='全部'){
                $(this).addClass('cur');
            }
        })
    }
    $(window).on("scroll", function() {
        if (loadFlag) {
            return
        }
        var b = $(window).scrollTop()+120;
        var a = $(window).height();
        var c = $("body").height();
        var down_key = $('#key_search').val() ||  $('#key').val() || '';
        if (b + a >= c) {
            if(list_from == 'gongzhuang'){
                getGzList();
            }else{
                getList(down_key);
            }
        }
    })
    var search_key= $('#key').val();
    var list= search_key.split(',')
    if(search_key!='undefined' && search_key!='' && $('#key').val() != $('#key_search').val()){
        var str='<div class="swiper-wrapper">';
        for(var i=0; i< list.length;i++){
            if(list[i]!=''){
                str+='<div class="result-item" href="javascript:;"><p>'+list[i]+'</p><a class="close-item"></a></div>';
            }
        }
        str+='</div>'
        $('.pop-select-result').html('').append(str);
        $('.pop-select-result').show();
        var select_swiper = new Swiper(".pop-select-result", {
            slidesPerView: "auto",
            slideClass: "result-item"
        })

    }
    for(var i=0; i< list.length;i++){
        $('.pop-select-btn').each(function(index, el) {
            if(list[i].indexOf($(this).text()) != -1){
                $(this).addClass('cur')
            }
        });
    }
    //直播
    if($('.tuku-list-cont').length > 0) {
        $.ajax({
            type: "get",
            url: "/zhibo/get_zhibo_api/",
            data: {
                zhibo_tv: "no"
            },
            success: function(msg) {
                console.log(msg.data.id);
                if (msg.data != "" && msg.data.id != undefined) {
                    $.ajax({
                        type: "get",
                        url: "/zhibo/statistics_get",
                        data: {
                            entity_type: 35,
                            entity_id: msg.data.id,
                            type:5
                        },
                        success: function(result) {
                            var look_num=0;
                            if(msg.data.count_method=="A"&&msg.data.random_num){
                                look_num=result.result.count*msg.data.random_num
                            }else if(msg.data.count_method=="B"&&msg.data.random_num){
                                look_num=result.result.count*msg.data.random_num+parseInt((msg.data.end_time - msg.data.start_time)/60)*197
                            }
                            var tk_zb_box='';
                            var data=msg.data;
                            tk_zb_box+='<li class="list-item"><a href="/zhibo/live/id/'+data.id+'?list_from=tuku_list" tjjj="click_m_tuku_index_live_'+data.id+'" class="bgTjj" once="0" bg_tjjj="show_m_tuku_index_live_'+data.id+'">';
                            tk_zb_box+='<div class="cover-img">';
                            tk_zb_box+='<img class="loading" src="//mued3.jia.com/image/mobile/tuku/loading_logo.png" imgSrc="'+data.cover+'" />';
                            tk_zb_box+='<div class="label zhibo">';
                            tk_zb_box+='<span class="live-status-box"><i class="icon"></i>直播中</span>';
                            if(look_num!=0){
                              tk_zb_box+='<span class="look-num">'+look_num+'观看</span>'; 
                            }
                            tk_zb_box+='</div>';
                            tk_zb_box+='</div>';
                            tk_zb_box+='<div class="list-info">';
                            tk_zb_box+='<p class="list-title">'+data.title+'</p>';
                            tk_zb_box+='<div class="author">';
                            tk_zb_box+='<div class="author-head">';
                            tk_zb_box+='<img class="loading" src="//mued3.jia.com/image/mobile/tuku/loading_logo.png" imgSrc="'+data.company_logo+'" />';
                            tk_zb_box+='</div>';
                            tk_zb_box+='<p class="author-name">'+data.company+'</p>';
                            tk_zb_box+='</div>';
                            tk_zb_box+='</div></a></li>';
                            $(".tuku-list-cont").prepend(tk_zb_box);
                            loadingFnTJJ($('.bgTJJ'))
                            $(".waterfall").masonry().masonry("reload");
                        // loadingFn($(".loading"));
                            $('img.loading').lazyload()
                        }
                    });
                }
            }
        })  
    }
    //搜索
    if (document.addEventListener) {
        //如果是Firefox
        document.addEventListener("keypress", enterEventFn, true);
    } else {
        //如果是IE
        document.attachEvent("onkeypress", enterEventFn);
    }
    $('.share-icon').click(function(event) {
        $('.tuku-search-wrap').addClass('cur')
        $('#tuku_keyword').focus();
    });
    $('.search-close').click(function(event) {
        $('.tuku-search-wrap').removeClass('cur')
    });
    var cpLock = false;
        $(".tuku-search-input").each(function () {
        var $this = $(this);
        $this.on({
            compositionstart:function(){
                cpLock = true;
            },
            compositionend:function(){
                cpLock = false;
                $(this).siblings('.clearbtn').show();
            },
            'input propertychange': function(){
                   if (!cpLock) {
                        if ($(this).val() != "") {
                            $(this).siblings('.clearbtn').show();
                        } else {
                            $(this).siblings('.clearbtn').hide();
                        }
                   }
            }
        });
    });
    //点击删除键
    $(".clearbtn").click(function (){
        $(this).siblings('.tuku-search-input').val("");
        $(this).hide();
        $(".tuku-search-input").focus();
    });
    $('.tuku-search-btn').live('click', function(event) {
        var search_val = $.trim($(".tuku-search-input").val());
            if (search_val) {
                location.href='/tuku/search?key='+search_val;
            }else{
                showMaskEditCom({
                    text:'请输入搜索内容',
                    duration:2000
                });
            }
    });
    //点击键盘搜索事件
    function enterEventFn(evt) {
        if (evt.keyCode == 13 && evt.target.id=="tuku_keyword") {
            var search_val = $.trim($("#tuku_keyword").val());
            if (search_val) {
                location.href='/tuku/search?key='+search_val;
            }
        }
        return false;
    }
    $('.confirm-btn').live('click', function(event) {
        var key='',i=1;
        $('.popup-cont .pop-select-btn').each(function(index, el) {
            if($(this).hasClass('cur')){
                if(i==1){
                    key =$(this).text();
                }else{
                    key +=','+$(this).text();
                }
                i++;
            }
        });
        if (key) {
            location.href='/tuku/search?key='+key;
            document.documentElement.classList.remove('no-scroll');
            $('.popup-select').removeClass('show');
            $('.popmask').hide();
        }else{
            document.documentElement.classList.remove('no-scroll');
            $('.popup-select').removeClass('show');
            $('.popmask').hide();
        }
    });
})
function getList(key,source){
    if (loadFlag) {
        return
    }
    $(".loadmore").show()
    loadFlag = true;
    $.ajax({
        type: "get",
        url: "/new_tu/ajax_list201909/",
        data: {
            page:page,
            key:key
        },
        success: function(data) {
            $(".loadmore").hide()
            var zwCase=data['wap_anli.design_case'];
            var jiaCase=data['aabb.v9_picture_page'];
            var videoCase=data['aabb.v9_news'];
            // var zxCase=data['decoration.shop_case'];
            var vrCase=data['aabb.v9_design'];
            var str='';
            var tjj_i = 11;
            for(var i=0;i<videoCase.length && i<1;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/video/"+videoCase[i].id+".html?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_video_"+videoCase[i].id+"' tjjj='click_m_tuku_index_video_"+videoCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+videoCase[i].thumb+"\">";
                str += "            <div class=\"lable video\"><\/div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+videoCase[i].title+"<\/p>";
                str += "            <div class=\"author\">";
                str += "                <div class=\"author-head\"><img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+videoCase[i].small_face_url+"\"><\/div>";
                if(videoCase[i].account_name && videoCase[i].account_name!=undefined){
                str += "                <p class=\"author-name\">"+videoCase[i].account_name+"<\/p>";
                }
                str += "            <\/div>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=0;i<jiaCase.length && i<2;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/photo/picid-"+jiaCase[i].id+".html?source=xgtdd&from="+$("#list_from").val()+"&tagId="+tagId+"\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_picture_"+jiaCase[i].id+"' tjjj='click_m_tuku_index_picture_"+jiaCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+jiaCase[i].img_url+"\">";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+jiaCase[i].title+"<\/p>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=0;i<zwCase.length&& i<1;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"\/zuimei\/anli\/detail-"+zwCase[i].id+"/?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_zuimeianli_"+zwCase[i].id+"' tjjj='click_m_tuku_index_zuimeianli_"+zwCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].cover_image_url+"\">";
                str += "            <div class=\"lable wholeHouse\">整屋<\/div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+zwCase[i].title+"<\/p>";
                if(zwCase[i].decorate_style && zwCase[i].house_type){
                    str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+" <em>|</em> "+zwCase[i].house_type+"<\/p>";
                }else if(zwCase[i].decorate_style){
                    str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+"<\/p>";
                }else if(zwCase[i].house_type){
                    str += "            <p class=\"list-tab\">"+zwCase[i].house_type+"<\/p>";
                }
                str += "            <div class=\"author\">";
                str += "                <div class=\"author-head\"><img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].small_face_url+"\"><\/div>";
                str += "                <p class=\"author-name\">"+zwCase[i].designer_name+"<\/p>";
                str += "            <\/div>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=2;i<jiaCase.length && i<4;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/photo/picid-"+jiaCase[i].id+".html?source=xgtdd&from="+$("#list_from").val()+"&tagId="+tagId+"\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_picture_"+jiaCase[i].id+"' tjjj='click_m_tuku_index_picture_"+jiaCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+jiaCase[i].img_url+"\">";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+jiaCase[i].title+"<\/p>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=1;i<zwCase.length&& i<2;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"\/zuimei\/anli\/detail-"+zwCase[i].id+"/?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_zuimeianli_"+zwCase[i].id+"' tjjj='click_m_tuku_index_zuimeianli_"+zwCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].cover_image_url+"\">";
                str += "            <div class=\"lable wholeHouse\">整屋<\/div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+zwCase[i].title+"<\/p>";
                if(zwCase[i].decorate_style && zwCase[i].house_type){
                    str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+" <em>|</em> "+zwCase[i].house_type+"<\/p>";
                }else if(zwCase[i].decorate_style){
                    str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+"<\/p>";
                }else if(zwCase[i].house_type){
                    str += "            <p class=\"list-tab\">"+zwCase[i].house_type+"<\/p>";
                }
                str += "            <div class=\"author\">";
                str += "                <div class=\"author-head\"><img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].small_face_url+"\"><\/div>";
                str += "                <p class=\"author-name\">"+zwCase[i].designer_name+"<\/p>";
                str += "            <\/div>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=1;i<videoCase.length && i<2;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/video/"+videoCase[i].id+".html?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_video_"+videoCase[i].id+"' tjjj='click_m_tuku_index_video_"+videoCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+videoCase[i].thumb+"\">";
                str += "            <div class=\"lable video\"><\/div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+videoCase[i].title+"<\/p>";
                str += "            <div class=\"author\">";
                str += "                <div class=\"author-head\"><img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+videoCase[i].small_face_url+"\"><\/div>";
                if(videoCase[i].account_name && videoCase[i].account_name!=undefined){
                str += "                <p class=\"author-name\">"+videoCase[i].account_name+"<\/p>";
                }
                str += "            <\/div>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            for(var i=4;i<jiaCase.length && i<5;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/photo/picid-"+jiaCase[i].id+".html?source=xgtdd&from="+$("#list_from").val()+"&tagId="+tagId+"\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_picture_"+jiaCase[i].id+"' tjjj='click_m_tuku_index_picture_"+jiaCase[i].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+jiaCase[i].img_url+"\">";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+jiaCase[i].title+"<\/p>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            var sj=Math.round(Math.random());
            if(sj==0 && vrCase.length>0){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a href=\"/tuku/3d/design/"+vrCase[0].id+"/?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_vr_"+vrCase[0].id+"' tjjj='click_m_tuku_index_vr_"+vrCase[0].id+"'>";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+vrCase[0].thumb+"\">";
                str += "            <div class=\"lable vr\">VR</div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+vrCase[0].title+"<\/p>";
                if(vrCase[0].genre && vrCase[0].layout){
                    str += "            <p class=\"list-tab\">"+vrCase[0].genre+" <em>|</em> "+vrCase[0].layout+"<\/p>";
                }else if(vrCase[0].genre){
                    str += "            <p class=\"list-tab\">"+vrCase[0].genre+"<\/p>";
                }else if(vrCase[0].layout){
                    str += "            <p class=\"list-tab\">"+vrCase[0].layout+"<\/p>";
                }
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }else if(zwCase.length>2){
                for(var i=2;i<zwCase.length && i<3;i++){
                    str += "<li class=\"list-item masonry-brick\">";
                    str += "    <a href=\"\/zuimei\/anli\/detail-"+zwCase[i].id+"/?source=xgtdd\" class='bgTJJ' once='0' bg_tjjj='show_m_tuku_index_zuimeianli_"+zwCase[i].id+"' tjjj='click_m_tuku_index_zuimeianli_"+zwCase[i].id+"'>";
                    str += "        <div class=\"cover-img\">";
                    str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].cover_image_url+"\">";
                    str += "            <div class=\"lable wholeHouse\">整屋<\/div>";
                    str += "        <\/div>";
                    str += "        <div class=\"list-info\">";
                    str += "            <p class=\"list-title\">"+zwCase[i].title+"<\/p>";
                    if(zwCase[i].decorate_style && zwCase[i].house_type){
                        str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+" <em>|</em> "+zwCase[i].house_type+"<\/p>";
                    }else if(zwCase[i].decorate_style){
                        str += "            <p class=\"list-tab\">"+zwCase[i].decorate_style+"<\/p>";
                    }else if(zwCase[i].house_type){
                        str += "            <p class=\"list-tab\">"+zwCase[i].house_type+"<\/p>";
                    }
                    str += "            <div class=\"author\">";
                    str += "                <div class=\"author-head\"><img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+zwCase[i].small_face_url+"\"><\/div>";
                    str += "                <p class=\"author-name\">"+zwCase[i].designer_name+"<\/p>";
                    str += "            <\/div>";
                    str += "        <\/div>";
                    str += "    <\/a>";
                    str += "<\/li>";
                }
            }
            if(source=='select'){
                $('.tuku-list-cont').html('').append(str);
            }else{
                $('.tuku-list-cont').append(str);
                TJJ.track({track: 'show_m_tuku_index_loading'});
            }
            //_imgload()
            loadingFnTJJ($('.bgTJJ'))
            $(".waterfall").masonry().masonry("reload");
           // loadingFn($(".loading"));
            $('img.loading').lazyload();
            setTimeout(function(){
                $(".tuku-list-cont").masonry().masonry("reload");
            },1200)
            var _link = window.location.href.replace(window.location.search,'') +'?page='+page;
            var state = {title: $('title').text(), url: _link};
            window.history.replaceState(state, $('title').text(), _link);
            if (typeof TJJ.browse != 'undefined') {
                TJJ.browse();
            }
            page++;
        },
        complete: function() {
            loadFlag = false;
            $(".loadmore").hide()
        }
    })
}
function getGzList(source){
    if (loadFlag) {
        return
    }
    $(".loadmore").show()
    loadFlag = true;
    $.ajax({
        type: "get",
        url: "/new_tu/getgzpic/",
        dataType:'json',
        data: {
            page:page,
            tags:tags
        },
        success: function(data) {
            $(".loadmore").hide()
            var str='';
            for(var i=0;i<data.length;i++){
                str += "<li class=\"list-item masonry-brick\">";
                str += "    <a class=\"bgTjj\" bg_tjjj=\"show_m_tuku_gongzhuang_tag_"+data[i].id+"\" tjjj=\"click_m_tuku_gongzhuang_tag_"+data[i].id+"\" href=\"/tuku/gaoqing/"+data[i].id+".html?source=xgtdd&from="+$("#list_from").val()+"&tagId="+tags+"\">";
                str += "        <div class=\"cover-img\">";
                str += "            <img class=\"loading\" src=\"//mued3.jia.com/image/mobile/tuku/loading_logo.png\" imgsrc=\""+data[i].thumb+"\">";
                str += "            <div class=\"lable tu\">"+data[i].img_num+"图<\/div>";
                str += "        <\/div>";
                str += "        <div class=\"list-info\">";
                str += "            <p class=\"list-title\">"+data[i].title+"<\/p>";
                str += "        <\/div>";
                str += "    <\/a>";
                str += "<\/li>";
            }
            if(source=='select'){
                $('.tuku-list-cont').html('').append(str);
            }else{
                $('.tuku-list-cont').append(str);
            }
            //_imgload()
            $(".waterfall").masonry().masonry("reload");
           // loadingFn($(".loading"));
            $('img.loading').lazyload();
            setTimeout(function(){
                $(".tuku-list-cont").masonry().masonry("reload");
            },1200)
            var _link = window.location.href.replace(window.location.search,'') +'?page='+page;
            var state = {title: $('title').text(), url: _link};
            window.history.pushState(state, $('title').text(), _link);
            if (typeof TJJ.browse != 'undefined') {
                TJJ.browse();
            }
            page++;
        },
        complete: function() {
            loadFlag = false;
            $(".loadmore").hide()
        }
    })
}

function randomNumber(demp){//数字滚动
    var num = 0,len = 0,ge = '',shi = '',bai = '',qian = '',wan = '',shiwan = '';
    setInterval(function(){
        num = Math.ceil(Math.random()*190000)+10000;
        len = num.toString().length;
        ge = num.toString().substring(len-1);
        shi = num.toString().substring(len-2,len-1);
        bai = num.toString().substring(len-3,len-2);
        qian = num.toString().substring(len-4,len-3);
        if (len >= 5) {
            wan = num.toString().substring(len-5,len-4);
            shiwan = '';
        }
        if (len == 6) {
            shiwan = 1;
        }
        demp.removeClass();
        demp.eq(0).addClass('ge num'+ge);
        demp.eq(1).addClass('shi num'+shi);
        demp.eq(2).addClass('bai num'+bai);
        demp.eq(3).addClass('qian num'+qian);
        demp.eq(4).addClass('wan num'+wan);
        demp.eq(5).addClass('shiwan num'+shiwan);
    },300);
}
function commonPop(domp){
    $(".popmask").show().height($("body").height());
    domp.show().css("top",($(window).height()-domp.height())/2+$(window).scrollTop());
}
function OpenYusuan(){
    var userName = 'm报价用户';
    var mobile = $('#mobile_zx_v2').val();
    var area = $('#zx_square_v2').val();
    var ws = $("#zx_level_s").val();
    var kt = $("#zx_level_t").val();
    var wsj = $("#zx_level_w").val();
    var cf = '1';
    var city_code=$('.input-city').attr('city_code');
    var _city_name = $('body').data('city-name') || '上海';
    var _city = $('body').data('city') || 'shanghai';
    var _city_py_name = $('body').data('city-py-name') || '上海';
    var _city_py = $('body').data('city-py') || 'shanghai';
    var tjjid = CookiesInfo.get('TJJID2');
    if(_city == 'other'){
        _city = 'shanghai';
        _city_name = '上海';
        _city_py = 'shanghai';
        _city_py_name = '上海';
    }
    var path = window.location.pathname;
    var source='m-tuku-index-baojia';
    if(path.indexOf("/tuku/photo/")>-1){
        source="m-tuku-xiangqing-baojia";
    }else if(path.indexOf("/tuku/gaoqing/")>-1){
        source="m-tuku-xiangqing-baojia";
    }else if(path.indexOf("/tuku/tags/")>-1){
        source="m-tuku-tag-baojia";
    }
    var seo_data_str = {
        "scene_type":"图库",
        "web_title":"图库-SEO",
        "service_type": "装修预约"
    }
    var yusuanPostD = {
        areaname:_city_name,
        pro:_city_py_name,
        area: area,
        areaflag: _city,
        fj_num: parseInt(ws)||"2",
        kt_num: parseInt(kt)||"1",
        wsj_num:parseInt(wsj)||"1",
        cfj_num: 1,
        yt_num: 1
    };
    var applyData = {
        username: userName,
        mobile: mobile,
        TJJID2: tjjid,
        delay_push: 1,
        self_url: document.URL,
        source: source,
        city:_city,
        inversion_point: "免费报价",
        banbao: '',
        all: '',
        crm_desc: JSON.stringify(seo_data_str)
    };
    if(city_code){
        applyData.city_code=city_code;
        yusuanPostD.city_code=city_code;
    }
    if(area < 35){
        zxbmFun(applyData, yusuanPostD, area);
    } else if(area > 180){
        zxbmFun(applyData, yusuanPostD, area);
    } else{
        $.ajax({
            url: '/JiaZhuangxiu/qOpenYusuan/',
            type: 'get',
            dataType: 'json',
            data: {
                areaname:_city_name,
                pro:_city_py_name,
                area: yusuanPostD.area,
                areaflag: yusuanPostD.areaflag,
                fj_num: yusuanPostD.fj_num,
                kt_num: yusuanPostD.kt_num,
                wsj_num: yusuanPostD.wsj_num,
                cfj_num: yusuanPostD.cfj_num,
                yt_num: yusuanPostD.yt_num
            },
            jsonp: 'callback',
            success: function (msg) {
                applyData.banbao = msg.info.total_price;
                applyData.all = msg.info.total_price;
                applyData.area = area;
                zxbmFun(applyData, yusuanPostD,yusuanPostD.area);
            }
        });
    }
}

function zxbmFun(applyData, detailData, area){
    $.ajax({
        type: 'get',
        url: '/new_zhuangxiu/AjaxSaveNewShopApplyNoCodeJsonp',
        data: applyData,
        dataType: 'jsonp',
        success: function (e) {
            if(e.status == 200){
                document.cookie='us_flag=true;path=/;expires='+new Date(new Date().getTime()+3600*1000*0.5).toGMTString();
                CookiesInfo.set("us_pop","true",{expires:0.5});
                $(".popmask,.footer-tc-box,.loading-common,.ask-zxbj-loading").hide();
                if(window.location.host=="m.zhuangxiubaike.cn"){
                    location.href = "//m.jia.com/newzx/yusuan_success/?qj_from=tu&type=app&succpage=1812&yusuanRequest=" + encodeURI(JSON.stringify(detailData));
                }else{
                    location.href = "/newzx/yusuan_success/?qj_from=tu&type=app&succpage=1812&yusuanRequest=" + encodeURI(JSON.stringify(detailData));
                }
            }else{
                $('.popmask,.footer-tc-box,.ask-zxbj-loading,.loading-common').hide();
                showMaskEditCom({text: e.info, duration: 1500});
            }
        },
        error: function () {
            $('.popmask,.footer-tc-box,.ask-zxbj-loading,.loading-common').hide();
            showMaskEditCom({text: "网络异常", duration: 1500});
        }
    });
}
function isPositiveNum(s) {//是否为正整数
    var re = /^[0-9]*[1-9][0-9]*$/;
    return re.test(s);
}
$(function(){
    var _city,_city_name,_city_py,_city_py_name;
    getCityFn(function(data){
        _city=data.area_py;
        _city_name = data.area_cn;
        _city_py=data.city_py;
        _city_py_name = data.city_cn;
        $('body').data({'city-py': _city_py, 'city-py-name':_city_py_name, 'city': _city, 'city-name': _city_name});
    },'',{
        provinceFlag:true//是否获取省份，不需要省份可以不传
    });
    // randomNumber($('.bom-screen-nexine span'));
    // randomNumber($('.screen-nexine span'));
    // $('.ask-zxbj-up .calculate-btn').live('click', function(event) {
    //     commonPop($("#ttZx"));
    // });
    // $('.close,.popmask').live('click', function(event) {
    //     $("#ttZx,.popmask").hide()
    // });
    // $('.banner-close').live('click', function(event) {
    //     $('.ask-zxbj-up').hide();
    // });
    // $('#ys_button_v2').live('click',function(){
    //     var area = $("#zx_square_v2").val();//面积
    //     var mobile = $('#mobile_zx_v2').val();
    //     if (!isPositiveNum(area)) {
    //         showMaskEditCom({
    //             text: "请输入正确的面积"
    //         });
    //         return false;
    //     }else if(mobile == ""){
    //         showMaskEditCom({
    //             text: "请输入您的电话"
    //         });
    //         return false;
    //     } else if (!commonPhoneReg.test(mobile)) {
    //         showMaskEditCom({
    //             text: "请输入正确的手机号"
    //         });
    //         return false;
    //     } else {
    //         $('.loading-common').show();
    //         OpenYusuan();
    //     }
    // });
})