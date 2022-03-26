(function(e){if(typeof define==="function"&&define.amd){define(e)}else{if(typeof exports==="object"){module.exports=e()}else{var f=window.CookiesInfo;var d=window.CookiesInfo=e();d.noConflict=function(){window.CookiesInfo=f;return d}}}}(function(){function c(){var a=0;var h={};for(;a<arguments.length;a++){var g=arguments[a];for(var b in g){h[b]=g[b]}}return h}function d(a){function b(u,v,y){var e;if(arguments.length>1){y=c({path:"/"},b.defaults,y);if(typeof y.expires==="number"){var A=new Date();A.setMilliseconds(A.getMilliseconds()+y.expires*86400000);y.expires=A}try{e=JSON.stringify(v);if(/^[\{\[]/.test(e)){v=e}}catch(w){}v=encodeURIComponent(String(v));v=v.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);u=encodeURIComponent(String(u));u=u.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);u=u.replace(/[\(\)]/g,escape);return(document.cookie=[u,"=",v,y.expires&&"; expires="+y.expires.toUTCString(),y.path&&"; path="+y.path,y.domain&&"; domain="+y.domain,y.secure?"; secure":""].join(""))}if(!u){e={}}var s=document.cookie?document.cookie.split("; "):[];var t=/(%[0-9A-Z]{2})+/g;var x=0;for(;x<s.length;x++){var z=s[x].split("=");var C=z[0].replace(t,decodeURIComponent);var B=z.slice(1).join("=");if(B.charAt(0)==='"'){B=B.slice(1,-1)}try{B=a&&a(B,C)||B.replace(t,decodeURIComponent);if(this.json){try{B=JSON.parse(B)}catch(w){}}if(u===C){e=B;break}if(!u){e[C]=B}}catch(w){}}return e}b.get=b.set=b;b.getJSON=function(){return b.apply({json:true},[].slice.call(arguments))};b.defaults={};b.remove=function(g,h){b(g,"",c(h,{expires:-1}))};b.withConverter=d;return b}return d()}));function clearAdv(){document.write("<div id='1qa2ws'></div>")}clearAdv();function countDownCom(a){var c={beforeText:"",text:"S",num:120,ele:".code_num"};for(var b in a){c[b]=a[b]}clearInterval(window.countTimer);window.countTimer=null;if(!Number(c.num)){console.error("请传入合法数字");return false}var d=$(c.ele).html();$(c.ele).html(c.beforeText+""+c.num+c.text);window.countTimer=setInterval(function(){c.num--;if(c.num<0){if(typeof c.callback=="function"){c.callback.call($(c.ele))}else{$(c.ele).html(d)}clearInterval(window.countTimer);window.countTimer=null}else{$(c.ele).html(c.beforeText+""+c.num+c.text)}},1000)}var commonPhoneReg=/^1[0-9]{10}$|^1[0-9]{2}\*{6}[0-9]{2}$|^1[0-9]{2}\*{4}[0-9]{4}$/;var showMaskComTimer=null;function showMaskEditCom(b){var a={width:"auto",classNames:"popup-maskEdit",text:"请输入弹框内容",whiteSpace:"nowrap",duration:1000};for(var d in b){a[d]=b[d]}var c="<div class='"+a.classNames+"'>"+a.text+"</div>";if($("."+a.classNames).length<1){$("body").append(c)}else{$("."+a.classNames).html(a.text)}var e=$("."+a.classNames);e.css({"z-index":999999999});if(a.width){e.css("width",a.width)}if(a.whiteSpace){e.css("white-space",a.whiteSpace)}clearInterval(showMaskComTimer);showMaskComTimer=null;if(window.Zepto&&window.Zepto===$){e.animate({display:"block"},"fast");showMaskComTimer=setTimeout(function(){e.animate({display:"none"},"fast");if(typeof a.callback=="function"){a.callback()}},a.duration)}else{if(window.jQuery&&window.jQuery===$){e.show("fast",function(){showMaskComTimer=setTimeout(function(){e.fadeOut();if(typeof a.callback=="function"){a.callback()}},a.duration)})}}}if(window.Zepto||window.jQuery){(function(b){b.showMaskEditCom=function(c){showMaskEditCom(c)}})(window.Zepto||window.jQuery)}var scrollMoveCom=function(a){a.preventDefault&&a.preventDefault();a.returnValue=false;a.stopPropagation&&a.stopPropagation();return false};function autoScrollCom(){var a=["touchmove","scroll","mousewheel"];a.forEach(function(b){document.removeEventListener(b,scrollMoveCom)})}function noScrollCom(){var a=["touchmove","scroll","mousewheel"];a.forEach(function(b){document.addEventListener(b,scrollMoveCom)})}function wapLoadScript(c,d,b){var a=document.createElement("script");a.src=c;a.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(a);a.onload=function(){(typeof d=="function")&&d()};a.onerror=function(){(typeof b=="function")&&b()}}function wapLoadCss(a,c){var b=document.createElement("link");b.href=a;b.rel="stylesheet";b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);b.onload=function(){(typeof c=="function")&&c()}}function getCityAjax(a,c,b){$.ajax({url:"//m.jia.com/city/getCurrentAreaNew",type:"get",data:{location:a},dataType:"jsonp",success:function(d){if(d.code>0){CookiesInfo.set("LOGIN_AREAFLAG",d.result.site.tag,{expires:1,domain:"jia.com"});typeof c=="function"&&c(d)}else{typeof b=="function"&&b(d.msg)}},error:function(d){typeof b=="function"&&b(d)}})}function getCityCnAjax(b,c,a){$.ajax({url:"/new_zhuangxiu/getAreaName",type:"get",data:{area:b},success:function(d){if(d){CookiesInfo.set("CITY_NAME",d,{expires:1,domain:"jia.com"});typeof c=="function"&&c(d)}else{typeof a=="function"&&a()}},error:function(d){typeof a=="function"&&a(d)}})}function replaceCityFn(b){var a=CookiesInfo.get("LOGIN_AREAFLAG");if(a){getCityCnAjax(a,function(c){typeof b=="function"&&b({cn:c,en:a})})}else{getCityAjax("",function(c){typeof b=="function"&&b({cn:c.result.site.areaname,en:c.result.site.tag})})}}function replaceCity(b){var a=CookiesInfo.get("LOGIN_AREAFLAG");if(a){getCityCnAjax(a,function(c){typeof b=="function"&&b(c)})}else{getCityAjax("",function(c){typeof b=="function"&&b(c.result.site.areaname)})}}function getProvinceAjax(b){var a=b.cityList;$.ajax({url:"//m.jia.com/new_zhuangxiu/getCityPro",type:"get",data:{area_flag:b.area_flag},dataType:"jsonp",success:function(c){var d;if(a&&!c.area_py){d=getCityList(c)}else{d=c}typeof b.success=="function"&&b.success(d)},error:function(c){typeof b.error=="function"&&b.error(c)}})}function getCityList(f){var e=[];for(var d in f){for(var c in f[d]){f[d][c].forEach(function(a){var b={};b.area_cn=a.area_cn;b.area_py=a.area_py;b.pro_cn=a.pro_cn;b.pro_py=a.pro_py;e.push(b)})}}return e}function getCityFn(d,b,c){if(IsZXTTApp||IsZXDQ||IsQJApp||IsQJZX){JiaAppObj.getInfo=function(k){var g={};try{g=JSON.parse(k)}catch(h){}var f=g.pinyin;if(f){if(c&&c.provinceFlag){getProvinceAjax({area_flag:f,success:function(e){typeof d=="function"&&d(e)}})}else{typeof d=="function"&&d(f)}}else{getCityAjax("",function(l){var e;if(c&&c.provinceFlag){e=l.result.site.area_info}else{e=l.result.site.tag}typeof d=="function"&&d(e)},function(e){typeof b=="function"&&b(e)})}};JiaAppObj._getInfo()}else{if(CookiesInfo.get("LOGIN_AREAFLAG")){var a=CookiesInfo.get("LOGIN_AREAFLAG");if(c&&c.provinceFlag){getProvinceAjax({area_flag:a,success:function(e){typeof d=="function"&&d(e)}})}else{typeof d=="function"&&d(a)}}else{if(location.host=="zm.jia.com"){getCityAjax("",function(f){var e;if(c&&c.provinceFlag){e=f.result.site.area_info}else{e=f.result.site.tag}typeof d=="function"&&d(e)},function(e){typeof b=="function"&&b(e)})}else{if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(e){var f=e.coords.latitude+","+e.coords.longitude;getCityAjax(f,function(h){var g;if(c&&c.provinceFlag){g=h.result.site.area_info}else{g=h.result.site.tag}typeof d=="function"&&d(g)},function(g){typeof b=="function"&&b(g)})},function(e){getCityAjax("",function(g){var f;if(c&&c.provinceFlag){f=g.result.site.area_info}else{f=g.result.site.tag}typeof d=="function"&&d(f)},function(f){typeof e=="function"&&e(f)})})}else{getCityAjax("",function(f){var e;if(c&&c.provinceFlag){e=f.result.site.area_info}else{e=f.result.site.tag}typeof d=="function"&&d(e)},function(e){typeof b=="function"&&b(e)})}}}}}var urlHrefObject=(function(){var a=[];var b={};window.location.search.substr(1)&&window.location.search.substr(1).length>2&&function(){a=window.location.search.substr(1).split("&");for(var d=0;d<a.length;d++){var c=a[d].split("=");b[c[0]]=c[1]}}();return b})();function getServerTime(){try{var c=new XMLHttpRequest();if(!c){c=new ActiveXObject("Microsoft.XMLHTTP")}var a;c.open("get",location.href,false);c.onreadystatechange=function(){if(c.readyState==4&&c.status==200){a=c.getResponseHeader("Date")}};c.send(null)}catch(b){}return new Date(a).getTime()||new Date().getTime()}function setLoginSessionStorage(){var a=JSON.parse(window.sessionStorage.getItem("check_login"));var c=CookiesInfo.get("www_jia_user_name")?decodeURIComponent(CookiesInfo.get("www_jia_user_name")):null;if(a){if(((c||a.user_name)&&(c!=a.user_name))||CookiesInfo.get("LOGIN_AREAFLAG")!=a.areaflag){window.sessionStorage.removeItem("check_login_expire");window.sessionStorage.removeItem("check_login");a=null}}if(Date.parse(new Date())/1000>window.sessionStorage.getItem("check_login_expire")){window.sessionStorage.removeItem("check_login_expire");window.sessionStorage.removeItem("check_login")}if(!a){$.getJSON("/UserApi/checkLogin?callback=?",function(d){if(d.user_name&&CookiesInfo.get("USER_ID")){var e=document.createElement("iframe");e.src="/UserApi/iframeLogin";e.style.display="none";$("body").append(e)}window.sessionStorage.setItem("check_login_expire",Date.parse(new Date())/1000+600);window.sessionStorage.setItem("check_login",JSON.stringify({areaflag:d.areaflag,areaname:d.areaname,user_name:d.user_name}))});if(window.location.host=="m.jia.com"&&IsWeiXin){var b="passport.jia.com";$.getJSON("https://"+b+"/cas/login/user?r="+Math.random()+"&callback=?")}}}var UA=window.navigator.userAgent,IsAndroid=(/Android|HTC/i.test(UA)),IsIPad=!IsAndroid&&/iPad/i.test(UA),IsIPhone=!IsAndroid&&/iPod|iPhone/i.test(UA),IsIOS=IsIPad||IsIPhone,IsphoneIE=!IsAndroid&&!IsIOS&&(/Windows Phone|IEMobile/i.test(UA)),mobileDevices=IsIOS||IsAndroid||IsphoneIE,IsWeiXin=(/MicroMessenger/i.test(UA)),IsWeibo=(/Weibo/i.test(UA)),IsQQApp=/\bQQ/.test(UA),IsQQBrowser=!IsQQApp&&/MQQBrowser/.test(UA),IsUCBrower=/UCBrowser/.test(UA),IsSafari=IsIOS&&/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/.test(UA),IsToutiao=/NewsArticle/i.test(UA),IsToutiaoMicroApp=/ToutiaoMicroApp/i.test(UA),IsAlipayMicroApp=/AlipayClient/i.test(UA),IsQJZX=/JIAZHUANGXIU|QJZX/i.test(UA),IsQJApp=!IsQJZX&&/QIJIA/i.test(UA),IsZXTTApp=/ZXTTAPP/i.test(UA),IsZXDQ=/ZXDQ/i.test(UA),IsZMApp=/ZMZXApp/i.test(UA)||location.host=="zm.jia.com",IsQJZX1=/QJZX/i.test(UA),IsZXPIC=/ZXPIC/i.test(UA);IsIPad&&$("html").attr("devices","ipad");var linkHrefObj=["m.jia.com/qjzx","m.jia.com/app/qjtk","m.jia.com/zixun/downloadApp/","m.jia.com/zixun/downloadApp/shanghaiguoqing20161101/"];for(var i=0;i<linkHrefObj.length;i++){if((window.location.host+window.location.pathname)==linkHrefObj[i]){linkHrefObj.localTrue=true;break}}if(linkHrefObj.localTrue&&(IsWeiXin||IsWeibo)){$("html").append('<div id="popupFloatTips"></div>');$("#popupFloatTips").css({position:"fixed",top:0,left:0,display:"none",width:"100%",height:"100%","z-index":9999,background:"rgba(0,0,0,.85)"});if(IsAndroid){$("#popupFloatTips").append('<img src="//fastued3.jia.com/image/mobile/wxStore/floatPopup-android.png">');$(".android,.apple").live("click",function(){$("#popupFloatTips").show();return false})}else{if(IsIOS){$("#popupFloatTips").append('<img src="//fastued3.jia.com/image/mobile/wxStore/floatPopup-ios.png">');$(".android,.apple").live("click",function(){$("#popupFloatTips").show();return false})}}$("#popupFloatTips").click(function(){$(this).hide()});if(IsWeiXin&&(window.location.pathname=="/zixun/downloadApp/"||window.location.pathname=="/zixun/downloadApp/shanghaiguoqing20161101/")){$("#popupFloatTips").remove();$(".android,.apple").attr("href","javascript:;");$(".android,.apple").live("click",function(){window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jia.zixun"})}}var linkHideObj=["m.jia.com/qjzx","m.jia.com/app/qjtk"];if(IsWeiXin&&linkHideObj.length>0){for(var j=0;j<linkHideObj.length;j++){if((window.location.host+window.location.pathname)==linkHrefObj[j]){$(".header").eq(0).hide();$(".new_footer").hide();break}}}$(function(){var a=true;var d=[".menu",".tk_search",".more",".m_confirm",".home",".h_title_tt",".i_person",".header-city",".tt_home",".person-link"];for(var b=0;b<d.length;b++){if($(".newHeader").find(d[b]).length>0){a=false;break}}if($(".newHeader .header_title em").length>0){a=false}if(IsWeiXin&&a){$(".newHeader").eq(0).hide()}var c=CookiesInfo.get("FROMCHANNEL");if(c=="jhapp"){$("body").addClass(c);$(".newFooter,.footer-nav").hide();var e={"/Tgs/discountProView/":"商品详情","/weixin/ztjz/699.html":"舒享家 799元/㎡","/weixin/ztjz/999.html":"乐享家 999元/㎡","/weixin/ztjz/1299.html":"奢享家 1299元/㎡","/jzj/md-tg.html":"装修顾问","/tg/shanghai/55/":"上海建材活动","/tg/shanghai/856/":"上海家居活动","/page/bd/zxjh.html":"建材家居","/tg/shanghai/55/gonglue/":"活动攻略"};if($(".newHeader").length<1&&$(".jh-header").length<1){var f="";f+='<header class="newHeader">';f+='<a href="javascript:history.back(-1);" class="backtohis pl">返回</a>';f+='<h2 class="header_title">'+(e[window.location.pathname]||$("title").html())+"</h2>";f+="</header>";$("body").prepend(f);$(".newHeader").css("z-index",9)}}if(IsZMApp){$(".newFooter,.footer-nav,.new_footer").hide()}if(window.location.host=="h5.m.jia.com"||navigator.userAgent.indexOf("QIJIA")>-1||navigator.userAgent.indexOf("ZXTTAPP")>-1||navigator.userAgent.indexOf("QJZX")>-1||window.location.host=="zixun.m.jia.com"||typeof(Device)!="undefined"||window.location.host=="zm.jia.com"||window.location.host=="baidu.m.jia.com"||IsToutiaoMicroApp||window.IsAlipayMicroApp){$(".newHeader").hide()}});function loadingFn(b,d){var c=$(window).scrollTop();var a=$(window).height();$(b).each(function(){var f=$(this);var e=$(this).offset().top;if(e>c&&e<=c+a){loadingImg(f,d)}})}function loadingImg(b,c){if(!$(b).attr("imgSrc")){return}var a=new Image();a.src=$(b).attr("imgSrc");a.onload=function(){$(b).attr("src",a.src).removeClass("loading").removeAttr("imgSrc").siblings(".img-mask").hide();if(typeof c=="function"){c.call(b)}}}function beforeLoadImg(b,c){var a=new Image();a.src=b;a.onload=function(){if(typeof c=="function"){c.call(a)}}}var isBDNuomi=navigator.userAgent.indexOf("BDNuomiApp")>-1;function locationSkipComFn(c,e,a,b){var d;b=(b==1)?1:0;e=e||"齐家";if(c==undefined){return""}if(isBDNuomi){if(c.indexOf("http://")==0||c.indexOf("https://")==0){d="bainuo://component?title="+encodeURIComponent(e)+"&url="+encodeURIComponent(c)+"&needlocation="+b}else{d="bainuo://component?title="+encodeURIComponent(e)+"&url="+encodeURIComponent(window.location.protocol+"//"+window.location.host+c)+"&needlocation="+b}}else{d=c}if(a){return d}else{window.location.href=d}}function skipToLogin(a){if(IsZXTTApp||IsQJZX1){location.href="zixun://zixun_app/sign"}else{if(IsQJApp){location.href="qijia://main_app/sign"}else{if(IsQJZX){location.href="qjdecoration://main_app/sign"}else{if(IsWeiXin&&a.wxUrl){location.href=a.wxUrl}else{publicQuikeLogin(a.appId||"",a.service||"",a.skip||"",a.bindFlow||"",a.autoPhone||"",a.hideThirdLogin||"")}}}}}document.write('<script src="//mued2.jia.com/js/mobile/jsencrypt.min.js" type="text/javascript"><\/script>');$(function(){if($(".new-footer").length>0){$(window).scroll(function(){if($(".new-footer").length>0&&!$(".new-footer").is(":hidden")){if($(window).scrollTop()+$(window).height()-100>$(".new-footer").position().top){$(".kefu-index-icon").hide()}else{$(".kefu-index-icon").show()}}})}if($(".go-back").length>0){$(".go-back").on("click",function(){$("html,body").scrollTop(0);$(this).hide()});var c,e,b,a,d;document.addEventListener("touchstart",function(f){var g=f.changedTouches[0];c={x:g.pageX,y:g.pageY}});document.addEventListener("touchmove",function(f){var g=f.changedTouches[0];e={x:g.pageX,y:g.pageY};b=e.x-c.x;a=e.y-c.y;d=Math.sqrt(Math.pow(Math.abs(b),2)+Math.pow(Math.abs(a),2))});document.addEventListener("touchend",function(f){if($("body").scrollTop()>$(window).height()*4){if(a<0){$(".go-back").hide()}else{if(a>0){$(".go-back").show()}}}else{$(".go-back").hide()}})}});$(function(){if(location.host=="zixun.m.jia.com"&&location.pathname=="/zixun/app_huati/373/"){$("body").append('<a href="//m.jia.com/tg/shanghai/55/" tjjj="tg.app_huati.373" style="position:fixed; right:.05rem; bottom:1.1rem; z-index:999; width:.8rem; height:.82rem; background:url(//mued3.jia.com/image/mobile/tg/tg-icon.png) 0 0 no-repeat; background-size:100%;"></a>')}});var _hmt=_hmt||[];location.host=="m.jia.com"&&((function(){var b=document.createElement("script");b.src="https://hm.baidu.com/hm.js?b2efe7088c9aa5d667e94de594ef0fb0";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})());var tjjArrUrl=["/tuku/gaoqing/","/zixun/meitu/","/tuku/photo/"];var tjjUrlFlag=false;tjjArrUrl.forEach(function(b,a){if(location.pathname.indexOf(b)===0){tjjUrlFlag=true}});if(tjjUrlFlag){if(window.location.host=="h5.m.jia.com"||navigator.userAgent.indexOf("QIJIA")>-1||window.location.host=="zixun.m.jia.com"||window.location.host=="baidu.m.jia.com"){var TJJ={};TJJ.t1=(new Date).getTime();TJJ.action=function(){};TJJ.track=function(){};document.write('<script src="//mued2.jia.com/js/wa_b.min.js" type="text/javascript"><\/script>')}else{var TJJ={};TJJ.UserCookieName="JIA_user_name";TJJ.AreaCookieName="city_id";TJJ.t1=(new Date).getTime();TJJ.action=function(){};TJJ.track=function(){};document.write('<script src="//mued2.jia.com/js/tjj_b.min.js" type="text/javascript"><\/script>')}}else{if(window.location.host=="h5.m.jia.com"||navigator.userAgent.indexOf("QIJIA")>-1||window.location.host=="zixun.m.jia.com"||window.location.host=="baidu.m.jia.com"){var TJJ={};TJJ.t1=(new Date).getTime();TJJ.action=function(){};TJJ.track=function(){};document.write('<script src="//mued2.jia.com/js/wa.min.js" type="text/javascript"><\/script>')}else{var TJJ={};TJJ.UserCookieName="JIA_user_name";TJJ.AreaCookieName="city_id";TJJ.t1=(new Date).getTime();TJJ.action=function(){};TJJ.track=function(){};document.write('<script src="//mued2.jia.com/js/tjj.min.js" type="text/javascript"><\/script>')}}(function(){if(IsWeiXin&&IsAndroid){function a(){setTimeout(function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0})},0);WeixinJSBridge.on("menu:setfont",function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0})})}if(typeof WeixinJSBridge==="undefined"){document.addEventListener("WeixinJSBridgeReady",function(b){a()})}else{a()}}else{if(IsWeiXin&&IsIOS){$(function(){$("body").addClass("wxBanFont")})}}})();


//用户登录手机号自动填入  -- zhenlijun
function phoneAutoFillFn(a){if($("[maxlength='11']").length>0){if($(".loginMobile").length>0){$("[maxlength='11']").val($(".loginMobile").val())}else{function b(){$.ajax({url:"/JiaZhuangxiuTmp/getUserInfo",type:"post",dataType:"json",success:function(c){if(c!=0){$("[maxlength='11']").val(c.mobile);$("body").append('<input type="hidden" class="loginMobile" value="'+c.mobile+'"/>');if(typeof a=="function"){a(c.mobile)}}}})}if(IsZXTTApp||IsQJApp||IsQJZX||IsZXDQ||IsZMApp){JiaAppObj.getUserId=function(c){if(c){b()}};JiaAppObj._getUserId()}else{if(CookiesInfo.get("www_jia_user_id")){b()}}}}}$(function(){phoneAutoFillFn(window.phoneAutoFillCallback)});

//快捷登录  -- zhenlijun
function publicQuikeLogin(b,i,h,l,d,f){if(h==undefined||h==""){h=true}if(l==undefined||l==""){l=false}if(f==undefined||f==""){f=false}var j=$(".popmask").css("z-index");function e(){var m="";if($(".popmask").length<1){m+='<div class="popmask"></div>'}m+='<div class="shortPop" id="shortPop">';m+='<a href="javascript:;" class="close"></a>';m+="</div>";if($(".shortPop").length<1){$("body").append(m)}}e();function k(){$(".popmask").css({height:$(document).height(),"z-index":"997"}).show();$(".shortPop").show().css({top:($(window).height()-$(".shortPop").height())/2+$(window).scrollTop(),left:($(window).width()-$(".shortPop").width())/2+$(window).scrollLeft()})}function c(){var m=parseInt($(".shortPop").width()*1.38);$("#loginIframe").css({height:m})}if(CookiesInfo.get("www_jia_user_id")!=undefined){return false}if(/dev|test/.test(window.location.host)&&/(.jia.com$)/.test(window.location.host)){var g="https://test-user.jia.com/cas/wap/fast_login"}else{var g="https://passport.jia.com/cas/wap/fast_login"}if(d){var a='<iframe id="loginIframe" frameborder="no" border="0" src="'+g+"?app_id="+b+"&skip="+h+"&bindFlow="+l+"&service="+i+"&autoPhone="+d+"&hideThirdLogin="+f+'"></iframe>'}else{var a='<iframe id="loginIframe" frameborder="no" border="0" src="'+g+"?app_id="+b+"&skip="+h+"&bindFlow="+l+"&service="+i+"&hideThirdLogin="+f+'"></iframe>'}if($("#shortPop").find("iframe").length<1){$("#shortPop").prepend(a)}c();k();$(document.body).on("click",".shortPop .close,.popmask",function(){$(".shortPop").remove();$(".popmask").css({"z-index":j}).hide()});$(".popmask").click(function(){$(".shortPop").remove();$(".popmask").css({"z-index":j}).hide()})};

// M站APP导流
// $(function(){$(".index-downApp-close").live("click",function(event){$(".m-index-downApp").hide()});if(IsIOS){$("#openApp-btn").attr("href","//itunes.apple.com/cn/app/齐家-装修设计建材家居一站式服务平台/id889003085?mt=8");$("#downApp-btn").attr("href","//itunes.apple.com/cn/app/齐家-装修设计建材家居一站式服务平台/id889003085?mt=8")}else{$("#openApp-btn").live("click",function(event){var hasApp=true,t=1000;setTimeout(function(){if(!hasApp){window.location.href="//sj.qq.com/myapp/detail.htm?apkName=com.qijia.o2o"}},2000);var t1=Date.now();window.location.href="qijia://home";setTimeout(function(){var t2=Date.now();hasApp=!(!t1||t2-t1<t+150)},t)});$("#downApp-btn").attr("href","//sj.qq.com/myapp/detail.htm?apkName=com.qijia.o2o")}});

$(function(){setTimeout(function(){$('.result-cont').addClass('fadeInDown');$('.result-animated').addClass('fadeInin')},500);$('.bar-arr').removeClass('cur');});

//cpc导流
$(function(){
    var cpc_city=CookiesInfo.get('LOGIN_AREAFLAG');
    if(cpc_city){
        var current_link=window.location.href;
        var cpc_link=["/zx/page/ysbj","/zx/vrbm/","/page/yszx.html","/tuku/tag/","/zx/hxmr/index/","/daikuan/","/zx/qwzx/","/zx/page/jz/","/zx/bsdz/","/zx/gzfw/","/zx/kuaixiu/index/","/zx/shop/shejishi/","/page/zxyhq.html","/event/appcoupon2000/","/page/zbx_test"];
        var isCpc=false;
        var gao_id=100002;
        cpc_link.forEach(function(value,key){
            if(current_link.indexOf(value)>-1){
                isCpc=true;
            }
        });
        if(window.location.pathname=="/tuku/"||window.location.pathname=="/zx/freesheji/"||$(".icon_part_fis").length>0){
            isCpc=true;
        }
        if(IsZXTTApp||window.location.hostname=="h5.m.jia.com"){
            gao_id=100012;
            if(current_link.indexOf("/zx/vrbm/")>-1){
                gao_id=100007;
            }else if(current_link.indexOf("/page/zxyhq.html")>-1){
                gao_id=100009;
            }else if(current_link.indexOf("/zx/page/ysbj")>-1){
                gao_id=100003;
            }else if(current_link.indexOf("/page/yszx.html")>-1){
                gao_id=100011;
            }else if(window.location.pathname=="/zx/freesheji/"){
                gao_id=100005;
            }
        }else{
            if(current_link.indexOf("/zx/vrbm/")>-1){
                gao_id=100008;
            }else if(current_link.indexOf("/page/zxyhq.html")>-1){
                gao_id=100010;
            }else if(current_link.indexOf("/zx/page/ysbj")>-1){
                gao_id=100004;
            }else if(current_link.indexOf("/page/yszx.html")>-1){
                gao_id=100013;
            }else if(window.location.pathname=="/zx/freesheji/"){
                gao_id=100006;
            }else if($(".icon_part_fis").length>0){
                gao_id=100020;
            }else if(current_link.indexOf("/page/zbx_test")>-1){
                gao_id=100001;
            }
        }
        if(urlHrefObject.click_from){
            isCpc=false
        }
        if(IsQJZX){
            isCpc=false
        }
        if(isCpc){
            var cpcBox='';
            $.ajax({
                type: "GET",
                url: "/zx/cpc/shop_link_list",
                data: {
                    areaflag:cpc_city,
                    gao_id:gao_id
                },
                dataType: 'json',
                success: function(data){
                    if(data.status==200&&data.result.length>0){
                        var cpcBox="";                   
                        if($(".icon_part_fis").length>0){
                            cpcBox+='<a class="zxgs-cpc-banner" href="'+data.result[0].detail_url+'" cpc_click_tjjj="'+data.result[0].click_urls.join(',')+'" cpc_show_tjjj="'+data.result[0].show_urls.join(',')+'">';
                            cpcBox+='<h3 class="shop-info"><span class="shop-img"><img src="'+data.result[0].shop_logo+'" /></span>'+data.result[0].shop_name+'</h3>';
                            cpcBox+='<p class="slogan">专注家装设计 口碑保障</p>';
                            cpcBox+='</a>';
                            $("body").prepend("<style>.zxgs-cpc-banner{display:block;width:100%;height:.59rem;background:url(//mued3.jia.com/image/mobile/zhuangxiu/zxgs-index-banner.png) no-repeat;background-size:100%;padding:.11rem .13rem;box-sizing:border-box;}.zxgs-cpc-banner + .newHeader{position:relative;}.zxgs-cpc-banner .shop-info{color:#fff;font-size:.085rem;}.zxgs-cpc-banner .shop-info .shop-img{width:.09rem;height:.09rem;overflow:hidden;}.zxgs-cpc-banner .shop-info .shop-img img{width:.09rem;height:.09rem;overflow:hidden;vertical-align:top;margin:.01rem .04rem 0 0;}.zxgs-cpc-banner .slogan{font-size:.14rem;color:#fff;line-height:1.2;margin-top:.03rem;}</style>");
                            $(".nj-new").html(cpcBox)
                            cpcTJJ.cpcLoadingFn("a");
                        }else{
                            cpcBox+='<a class="zxgs-cpc-banner" href="'+data.result[0].detail_url+'" cpc_click_tjjj="'+data.result[0].click_urls+'" cpc_show_tjjj="'+data.result[0].show_urls+'">';
                            cpcBox+='<h3 class="shop-info"><span class="shop-img"><img src="'+data.result[0].shop_logo+'" /></span>'+data.result[0].shop_name+'</h3>';
                            cpcBox+='<p class="slogan">专注家装设计 口碑保障</p>';
                            cpcBox+='</a>';
                            $("body").prepend("<style>.zxgs-cpc-banner{position:relative;z-index:99;display:block;width:100%;height:.51rem;background:url(//mued3.jia.com/image/mobile/zhuangxiu/zxgs-common-banner.png) no-repeat;background-size:100%;padding:.1rem .13rem;box-sizing:border-box;}.zxgs-cpc-banner + .newHeader{position:relative;}.zxgs-cpc-banner .shop-info{color:#fff;font-size:.075rem;}.zxgs-cpc-banner .shop-info .shop-img{width:.09rem;height:.09rem;overflow:hidden;}.zxgs-cpc-banner .shop-info .shop-img img{width:.09rem;height:.09rem;overflow:hidden;vertical-align:top;margin:.01rem .04rem 0 0;}.zxgs-cpc-banner .slogan{font-size:.13rem;color:#fff;line-height:1.2;margin-top:.03rem;}</style>",cpcBox);
                            cpcTJJ.cpcLoadingFn("a");
                        }
                    }else{
                        oldCpcBanner(cpc_city);
                    }
                }
            });
        }
    }
})
function oldCpcBanner(cpc_city){
    var current_link=window.location.href;
    var cpc_link=["/zx/page/ysbj","/zx/vrbm/","/page/yszx.html","/tuku/tag/","/zx/hxmr/index/","/daikuan/","/zx/qwzx/","/zx/page/jz/","/zx/bsdz/","/zx/gzfw/","/zx/kuaixiu/index/","/zx/shop/shejishi/","/page/zxyhq.html","/event/appcoupon2000/"];
    var cpc_name = [
        {pathname:'/zx/page/ysbj/',show_tjj_position:'quoteBanner'},
        {pathname:'/zx/freesheji/',show_tjj_position:'designBanner'},
        {pathname:'/zx/vrbm/',show_tjj_position:'3DBanner'},
        {pathname:'/tuku/',show_tjj_position:'pictureBanner'},
        {pathname:'/page/zxyhq.html',show_tjj_position:'4999Banner'},
        {pathname:'/zx/hxmr/index/',show_tjj_position:'otherBanner'},
        {pathname:'/page/yszx.html',show_tjj_position:'otherBanner'},
        {pathname:'/daikuan/',show_tjj_position:'budgetBanner'},
        {pathname:'/zx/page/jz/',show_tjj_position:'otherBanner'},
        {pathname:'/zx/kuaixiu/index/',show_tjj_position:'otherBanner'},
        {pathname:'/zx/gzfw/',show_tjj_position:'otherBanner'},
        {pathname:'/retail/',show_tjj_position:'JCBanner'},
        {pathname:'/wangpu/ppzq/zixun/',show_tjj_position:'JCBanner'},
        //{pathname:'/suzhou/',show_tjj_position:'hpBanner'},
    ];
    var isCpc=false;
    var show_tjj_position;
    cpc_link.forEach(function(value,key){
        if(current_link.indexOf(value)>-1){
            isCpc=true;
        }
    });
    var filter_cpc_name = cpc_name.filter(function(item){
        return location.pathname.indexOf(item.pathname) > -1
    });
    if($(".icon_part_fis").length>0){
        show_tjj_position = 'hpBanner';
    }
    if(filter_cpc_name.length >0){
        show_tjj_position = filter_cpc_name[0].show_tjj_position;
    }
    if(window.location.pathname=="/tuku/"||window.location.pathname=="/zx/freesheji/"||$(".icon_part_fis").length>0){
        isCpc=true;
    }
    if(isCpc){
        var cpc_tjjj;
        if(current_link.indexOf(".html")>0){
            var index = current_link.lastIndexOf("\/");
            cpc_tjjj = current_link.substring(index + 1,current_link.length);
            cpc_tjjj = cpc_tjjj.split(".html")[0];
        }else{
            if(current_link.indexOf("/zx/page/ysbj")>0||current_link.indexOf("/zx/page/jz")>0||current_link.indexOf("/zx/shop/sheji")>0){
                cpc_tjjj=current_link.split("/")[5];
            }else if(current_link.indexOf("/zx/qwzx")>0||current_link.indexOf("/zx/bsdz")>0||current_link.indexOf("/zx/gzfw")>0||current_link.indexOf("/tuku/tag")>0||current_link.indexOf("/index")>0){
                cpc_tjjj=current_link.split("/")[4];
            }else{
                cpc_tjjj = current_link.substr(current_link.lastIndexOf('/', current_link.lastIndexOf('/') - 1) + 1);
                cpc_tjjj= cpc_tjjj.split("/")[0];
            }
        }

        $.ajax({
            type: "GET",
            url: "/newzx/get_cpc_shop/",
            data: {
                areaflag:cpc_city
            },
            dataType: 'json',
            success: function(res){
                var cpc_city_shop=res;//res
                var topShopId;
                if(cpc_city_shop.length>0){
                    var cpc_click_ids=CookiesInfo.get("cpc_click_ids");//是否点击过此店铺
                    cpc_click_ids=cpc_click_ids&&JSON.parse(cpc_click_ids);
                    if(cpc_click_ids==undefined){
                        topShopId=cpc_city_shop[0];
                    }else{
                        if(cpc_city_shop.length>cpc_click_ids.length){//返回cpc商户比点击过的多
                            let newArr = cpc_city_shop.filter(function (item) {
                                return cpc_click_ids.every(function (item1) {
                                    return item != item1
                                })
                            });
                            topShopId=newArr[0];
                        }
                    }
                    if(topShopId!=undefined){
                        var source_tjj="cpcad_m_"+cpc_tjjj;
                        if(JiaAppObj.IsWkWebView || typeof Device  != "undefined"){
                            source_tjj="cpcad_app_"+cpc_tjjj;
                        }
                        var _data = {
                            shop_ids:topShopId,
                            returns:'ajax',
                            sources:source_tjj,
                            areaflag:cpc_city
                        };
                        if(show_tjj_position){
                            _data.show_tjj_position = show_tjj_position;
                        }
                        $.ajax({
                            type: "get",
                            url: "/JiaZhuangxiu/ajax_shop_list_201907/",
                            data: _data,
                            success: function(data){
                                TJJ.track({
                                    track:data.result[0].cpc_show_tjj_key,
                                    shop_id:data.result[0].shop_id
                                });

                                var cpc_show_tjj="show_m_cpc_common_top_"+data.result[0].shop_id+"_"+cpc_tjjj;
                                var cpc_click_tjjj="click_m_cpc_common_top_"+data.result[0].shop_id+"_"+cpc_tjjj;
                                if(JiaAppObj.IsWkWebView || typeof Device  != "undefined"){
                                    cpc_show_tjj="show_app_cpc_common_top_"+data.result[0].shop_id+"_"+cpc_tjjj;
                                    cpc_click_tjjj="click_app_cpc_common_top_"+data.result[0].shop_id+"_"+cpc_tjjj;
                                }
                                TJJ.track({track:cpc_show_tjj});
                                var cpcBox='';
                                if($(".icon_part_fis").length>0){
                                    cpcBox+='<a class="zxgs-cpc-banner" href="'+data.result[0].detail_url+'" tjjj="'+cpc_click_tjjj+'">';
                                    cpcBox+='<h3 class="shop-info"><span class="shop-img"><img src="'+data.result[0].shop_logo+'" /></span>'+data.result[0].shop_name+'</h3>';
                                    cpcBox+='<p class="slogan">专注家装设计 口碑保障</p>';
                                    cpcBox+='</a>';
                                    $("body").prepend("<style>.zxgs-cpc-banner{display:block;width:100%;height:.59rem;background:url(//mued3.jia.com/image/mobile/zhuangxiu/zxgs-index-banner.png) no-repeat;background-size:100%;padding:.11rem .13rem;box-sizing:border-box;}.zxgs-cpc-banner + .newHeader{position:relative;}.zxgs-cpc-banner .shop-info{color:#fff;font-size:.085rem;}.zxgs-cpc-banner .shop-info .shop-img{width:.09rem;height:.09rem;overflow:hidden;}.zxgs-cpc-banner .shop-info .shop-img img{width:.09rem;height:.09rem;overflow:hidden;vertical-align:top;margin:.01rem .04rem 0 0;}.zxgs-cpc-banner .slogan{font-size:.14rem;color:#fff;line-height:1.2;margin-top:.03rem;}</style>");
                                    $(".nj-new").html(cpcBox)
                                }else{
                                    cpcBox+='<a class="zxgs-cpc-banner" href="'+data.result[0].detail_url+'" tjjj="'+cpc_click_tjjj+'">';
                                    cpcBox+='<h3 class="shop-info"><span class="shop-img"><img src="'+data.result[0].shop_logo+'" /></span>'+data.result[0].shop_name+'</h3>';
                                    cpcBox+='<p class="slogan">专注家装设计 口碑保障</p>';
                                    cpcBox+='</a>';
                                    $("body").prepend("<style>.zxgs-cpc-banner{position:relative;z-index:99;display:block;width:100%;height:.51rem;background:url(//mued3.jia.com/image/mobile/zhuangxiu/zxgs-common-banner.png) no-repeat;background-size:100%;padding:.1rem .13rem;box-sizing:border-box;}.zxgs-cpc-banner + .newHeader{position:relative;}.zxgs-cpc-banner .shop-info{color:#fff;font-size:.075rem;}.zxgs-cpc-banner .shop-info .shop-img{width:.09rem;height:.09rem;overflow:hidden;}.zxgs-cpc-banner .shop-info .shop-img img{width:.09rem;height:.09rem;overflow:hidden;vertical-align:top;margin:.01rem .04rem 0 0;}.zxgs-cpc-banner .slogan{font-size:.13rem;color:#fff;line-height:1.2;margin-top:.03rem;}</style>",cpcBox);
                                }

                            }
                        });
                    }
                }
            }
        });
    }

}
//cpcTjj统计
var cpcTJJ={
    init(){
          if (window.__CPCTJJ__ === true) {
              //已经载入过CPCTJJ对象，那么退出
            return false;
          }
          window.__CPCTJJ__ = true;
          cpcTJJ.clickHandler();
    },
    addEventHandler(element, eventType, eventHandler, useCapture) {
                if (element.addEventListener) { // dom
                    element.addEventListener(eventType, eventHandler, useCapture);
                } else if (element.attachEvent) { // ie
                    element.attachEvent('on' + eventType, eventHandler);
                } else { // other
                    element['on' + eventType] = eventHandler;
                }
     },
    clickCpcImage(type) {
        var src, img;
            src = type;
            img = new Image();
            img.src = src;
    },
    clickHandler(){
        cpcTJJ.addEventHandler(document, 'click', function(e) {
                try {
                    e = e || window.event;
                    var t = e.target || e.srcElement;
                    //向父节点往上追溯，直到找到a标签
                    while (t && t.tagName && t.tagName.toLowerCase() != 'a') {
                        t = t.parentNode;
                    }
                    //仅对a标签或a标签的子元素记录点击行为
                    if (t && t.tagName && t.tagName.toLowerCase() == 'a') {
                        var k = 'cpc_click_tjjj';
                        if(!t.getAttribute(k)) return;
                        var v = t.getAttribute(k).split(',');
                        console.log(v);
                        for(var i=0;i<v.length;i++){
                            cpcTJJ.clickCpcImage(v[i]);
                        }
                        e.preventDefault();
                        var href = t.getAttribute('href');
                        // t.removeAttribute('href');
                        setTimeout(function () { 
                            location.href = href;
                        },500)
                    }
                } catch (err) {}
            });
    },
    cpcLoadingFn(ele){
        var scrollTop = $(window).scrollTop();
        var winHei = $(window).height();
        $(ele).each(function(){
            var $this = $(this);
            var top = $(this).offset().top;
            if( top >= scrollTop && top <= scrollTop + winHei ){
                if(!$this.attr('cpc_show_tjjj')) return;
                var v = $this.attr('cpc_show_tjjj').split(',');
                for(var i=0;i<v.length;i++){
                    cpcTJJ.cpcShowImg($this,v[i]);
                }
            }
        });
    },
    cpcShowImg(ele,v) {//需要替换src的img元素,回调
        var img = new Image();
        img.src = v;
        console.log(v)
        $(ele).removeAttr('cpc_show_tjjj');    
    }
}
cpcTJJ.init();

// WKWebview
var JiaAppObj={backforward:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"backforward",parameter:a,})}else{if(typeof JiaApp!="undefined"){if(IsAndroid){if(typeof JiaApp.backforward=="function"){JiaApp.backforward(a)}else{JiaApp.finish_and_refresh&&JiaApp.finish_and_refresh()}}else{this.skipto({url:"https://m.jia.com/?target=back"})}}else{window.history.back()}}},skipto:function(a){if(!a.url){return}if(IsIOS){location.href='qijia://open/webview?params={"url":"'+a.url+'", "is_steep" : "'+(a.is_steep||0)+'", "is_dark" : "'+(a.is_dark||0)+'","is_wkweb":"'+(a.is_wkweb==undefined?1:a.is_wkweb)+'"}'}else{location.href=a.url}},handleShareFn:function(a){if(a.shareWechatMini){if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",};if(a.miniProgramPath){b.miniProgramPath=a.miniProgramPath}if(a.miniProgramID){b.miniProgramID=a.miniProgramID}window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"shareWechatMini",parameter:b,})}else{if(typeof JiaApp.shareWechatMini=="function"){if(a.miniProgramID&&a.miniProgramPath){JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback",a.miniProgramPath,a.miniProgramID)}else{if(a.miniProgramPath){JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback",a.miniProgramPath)}else{JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}}}}}else{if(a.pageChannel){if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",imglarge:a.imglarge,pageChannel:a.pageChannel};window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"shareLargeImageChannel",parameter:b,})}else{if(a.imglarge&&typeof JiaApp.shareLargeImageChannel=="function"){JiaApp.shareLargeImageChannel(a.title,a.description,a.link,a.image,a.imglarge,"",a.callback||"shareCallback",a.pageChannel||"decoration_bill")}else{if(typeof JiaApp.share3=="function"){JiaApp.share3(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}else{JiaApp.share&&JiaApp.share(a.title,a.description,a.link,a.image)}}}}else{if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",};if(a.imglarge){b.imglarge=a.imglarge}window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"share",parameter:b,})}else{if(a.imglarge&&typeof JiaApp.shareLargeImage=="function"){JiaApp.shareLargeImage(a.title,a.description,a.link,a.image,a.imglarge,"",a.callback||"shareCallback")}else{if(typeof JiaApp.share3=="function"){JiaApp.share3(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}else{JiaApp.share&&JiaApp.share(a.title,a.description,a.link,a.image)}}}}}},_appShareFn:function(a){if(this.shareEnableFlag){this.shareEnable()}if(a.shareWechatMini){if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",};if(a.miniProgramPath){b.miniProgramPath=a.miniProgramPath}if(a.miniProgramID){b.miniProgramID=a.miniProgramID}JiaAppObj.appShareFn=function(){return{className:"WKNativeHandler",functionName:"shareWechatMini",parameter:b,}}}else{window.appShareFn=function(){if(typeof JiaApp.shareWechatMini=="function"){if(a.miniProgramID&&a.miniProgramPath){JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback",a.miniProgramPath,a.miniProgramID)}else{if(a.miniProgramPath){JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback",a.miniProgramPath)}else{JiaApp.shareWechatMini(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}}}}}}else{if(a.pageChannel){if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",imglarge:a.imglarge,pageChannel:a.pageChannel};window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"shareLargeImageChannel",parameter:b,})}else{if(a.imglarge&&typeof JiaApp.shareLargeImageChannel=="function"){JiaApp.shareLargeImageChannel(a.title,a.description,a.link,a.image,a.imglarge,"",a.callback||"shareCallback",a.pageChannel||"decoration_bill")}else{if(typeof JiaApp.share3=="function"){JiaApp.share3(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}else{JiaApp.share&&JiaApp.share(a.title,a.description,a.link,a.image)}}}}else{if(this.IsWkWebView){var b={title:a.title,image:a.image,description:a.description,link:a.link,channel:a.jiaAPPChannel||"jia",callback:a.callback||"shareCallback",platform:"",};if(a.imglarge){b.imglarge=a.imglarge}JiaAppObj.appShareFn=function(){return{className:"WKNativeHandler",functionName:"share",parameter:b,}}}else{window.appShareFn=function(){if(a.imglarge&&typeof JiaApp.shareLargeImage=="function"){JiaApp.shareLargeImage(a.title,a.description,a.link,a.image,a.imglarge,"",a.callback||"shareCallback")}else{if(typeof JiaApp.share3=="function"){JiaApp.share3(a.title,a.description,a.link,a.image,"",a.callback||"shareCallback")}else{JiaApp.share&&JiaApp.share(a.title,a.description,a.link,a.image)}}}}}}},shareEnableFlag:true,shareEnable:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"shareEnable",parameter:true,})}else{if(typeof JiaApp!="undefined"){JiaApp.shareEnable&&JiaApp.shareEnable(true)}}},callNumber:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({parameter:a,functionName:"callNumber",})}else{if(typeof JiaApp!="undefined"){JiaApp.callNumber&&JiaApp.callNumber(a)}}},wxPay:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({parameter:{json:a.json,callback:a.callback||"payCallback"},functionName:"wxPay",})}else{if(typeof JiaApp!="undefined"){JiaApp.wxPay&&JiaApp.wxPay(a.json,a.callback||"payCallback")}}},showPushDialog:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({parameter:a||10,functionName:"showPushDialog",})}else{if(typeof JiaApp!="undefined"){JiaApp.showPushDialog&&JiaApp.showPushDialog(a)}}},comment:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({parameter:{entity_id:a.entity_id,content:a.content,entity_type:a.entity_type,comment_id:a.comment_id,comment_user_id:a.comment_user_id,comment_user_name:a.comment_user_name,},functionName:"comment",})}else{if(typeof JiaApp!="undefined"){JiaApp.comment(JSON.stringify(a))}}},setupNavgationBarButtonItem:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({parameter:{type:a.type,title:a.title},functionName:"setupNavgationBarButtonItem",})}else{if(typeof JiaApp!="undefined"){typeof JiaApp.setupNavgationBarButtonItem==="function"&&JiaApp.setupNavgationBarButtonItem(a.title,a.type)}}},showCommentList:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"showCommentList",})}else{if(typeof JiaApp!="undefined"){JiaApp.showCommentList()}}},logout:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"logout"})}else{if(typeof Device!="undefined"){JiaApp.logout&&JiaApp.logout()}}},getCurrentPosition:function(c){var c=c||"change_lnt_lat";if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"getCurrentPosition",parameter:c,})}else{if(typeof Device!="undefined"){if(typeof Device.getCurrentPosition!="undefined"){Device.getCurrentPosition(c)}else{if(typeof Device.getLatiAndLongi!="undefined"){var b=Device.getLatiAndLongi();var a=b.split(",");window[c](true,a[0],a[1],"success")}}}}},_getPageID:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getPageID",})}else{if(typeof TjjInfo!="undefined"){typeof this.getPageID=="function"&&this.getPageID(TjjInfo.getPageID())}}},_getEventID:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getEventID",})}else{if(typeof TjjInfo!="undefined"){typeof this.getEventID=="function"&&this.getEventID(TjjInfo.getEventID())}}},_getObjectID:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getObjectID",})}else{if(typeof TjjInfo!="undefined"){typeof this.getObjectID=="function"&&this.getObjectID(TjjInfo.getObjectID())}}},_getObjectIndex:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getObjectIndex",})}else{if(typeof TjjInfo!="undefined"){typeof this.getObjectIndex=="function"&&this.getObjectIndex(TjjInfo.getObjectIndex())}}},_getReferer:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getReferer",})}else{if(typeof TjjInfo!="undefined"){typeof this.getReferer=="function"&&this.getReferer(TjjInfo.getReferer())}}},_getEventTitle:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getEventTitle",})}else{if(typeof TjjInfo!="undefined"){typeof this.getEventTitle=="function"&&this.getEventTitle(TjjInfo.getEventTitle())}}},_getObjectSch:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeTJJ.postMessage({functionName:"getObjectSch",})}else{if(typeof TjjInfo!="undefined"){typeof this.getObjectSch=="function"&&this.getObjectSch(TjjInfo.getObjectSch())}}},_getSessionId:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getSessionId",})}else{if(typeof Device!="undefined"){typeof this.getSessionId=="function"&&this.getSessionId(Device.getSessionId())}}},_getUserId:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getUserId",})}else{if(typeof Device!="undefined"){typeof this.getUserId=="function"&&this.getUserId(Device.getUserId())}}},_getNickName:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getNickName",})}else{if(typeof Device!="undefined"){typeof this.getNickName=="function"&&this.getNickName(Device.getNickName())}}},_getPortrait:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getPortrait",})}else{if(typeof Device!="undefined"){typeof this.getPortrait=="function"&&this.getPortrait(Device.getPortrait())}}},_getDeviceIMEI:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getDeviceIMEI",})}else{if(typeof Device!="undefined"){typeof this.getDeviceIMEI=="function"&&this.getDeviceIMEI(Device.getIMEI())}}},_getPlatform:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getPlatform",})}else{if(typeof Device!="undefined"){typeof this.getPlatform=="function"&&this.getPlatform(Device.getPlatform())}}},_getChannel:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getChannel",})}else{if(typeof Device!="undefined"){typeof this.getChannel=="function"&&this.getChannel(Device.getChannel())}}},_getAppVersion:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getAppVersion",})}else{if(typeof Device!="undefined"){typeof this.getAppVersion=="function"&&this.getAppVersion(Device.getAppVersion())}}},_getId:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getId",})}else{if(typeof Device!="undefined"){typeof this.getId=="function"&&this.getId(Device.getId())}}},_getAppId:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getAppId",})}else{if(typeof Device!="undefined"){typeof this.getAppId=="function"&&this.getAppId(Device.getAppId())}}},_getInfo:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeAppInfo.postMessage({functionName:"getInfo",})}else{if(typeof Device!="undefined"){typeof this.getInfo=="function"&&this.getInfo(Device.getInfo())}else{typeof this.getInfo=="function"&&this.getInfo()}}},gotoWxMiniProgram:function(a){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"gotoWxMiniProgram",parameter:a,})}else{if(typeof JiaApp!="undefined"){JiaApp.gotoWxMiniProgram&&JiaApp.gotoWxMiniProgram(JSON.stringify(a))}}},jumpMiniLoginWithNoRefresh:function(){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"jumpMiniLoginWithNoRefresh"})}else{if(typeof JiaApp!="undefined"){JiaApp.jumpMiniLoginWithNoRefresh()}}},jumpMiniLoginWithColorStr:function(b){if(this.IsWkWebView){window.webkit.messageHandlers.WKNativeHandler.postMessage({functionName:"jumpMiniLoginWithColorStr",parameter:b})}else{if(typeof JiaApp!="undefined"){JiaApp.jumpMiniLoginWithColorStr(b)}}}};Object.defineProperty(JiaAppObj,"getInfo",{get:function get(){var b=this;var a=this.$_getInfoCallbacks||[];return function(c){a.forEach(function(d){return d(c)});delete b.$_getInfoCallbacks}},set:function set(b){if(typeof b!=="function"){console.error("getInfo必须是一个函数");return}var a=this.$_getInfoCallbacks||[];a.push(b);this.$_getInfoCallbacks=a},});JiaAppObj.IsWkWebView=IsIOS&&(IsQJApp||IsZXTTApp||IsQJZX||IsZXDQ||IsZXPIC)&&typeof JiaApp=="undefined"&&typeof Device=="undefined";

// M站用户确认协议弹窗
if(($('.appagreement').length>0 || $('.agreement').length>0) && $('.agreement-popup-m').length==0){
    $('body').append('<div class="agreement-popup-m"><a href="javascript:;" class="close"></a><p class="title">温馨提示</p><p class="agreement-text">请阅读并同意<a href="/page/app/user_agreement.html">《齐家用户协议》</a>和<a href="/page/app/secret.html">《隐私政策》</a></p><a href="javascript:;" class="cancel-btn">取消</a><a href="javascript:;" class="agree-btn">同意并继续</a></div><div class="agreement-popmask"></div>');   
    $('.agreement-popup-m .close,.cancel-btn').click(function () {
        $('.agreement-popmask,.agreement-popup-m').hide();
    })
    $('.agreement-popmask').live('click', function () {
        $('.agreement-popmask,.agreement-popup-m').hide();
    })
    $('.agreement-popup-m .agree-btn').click(function () {
        $('#headerAgree')[0].checked = true;
        $('.appagreement .icon,.agreement .icon').addClass('cur');
        $('.agreement-popmask,.agreement-popup-m').hide();
        applySignFn();
    })
}

//更改底部copyright
$(function(){$(".index-copyright-cont .copyright-time").html("2022");$(".versions-type .cr_sm").html("齐家网 版权所有Copyright © 2005-2022");$(".bottom_copyright .cr_sm").html("copyright © 2005-2022齐家Jia.com版权所有")});