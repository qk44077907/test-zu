/**
 * Created by tao on 2018/2/2.
 */
var host = window.location.href;
var _city = CookiesInfo.get("ZXAPPLY_IP");
var city_py, area_cn, city_cn;
var fuJian = ["fuzhou", "quanzhou", "zhangzhou", "nanping", "sanming", "longyan", "putian", "ningde", "xiamen", "luoyuan"];
var userId = CookiesInfo.get('www_jia_user_id');
JiaAppObj.getInfo = function (a) {
  var deviceInfo = {};
  try {
    deviceInfo = JSON.parse(a);
    userId = deviceInfo.userId

  } catch (e) {
  }
  ;
}
JiaAppObj._getInfo();
if (_city == undefined || _city == null) {
  getCityFn(function (a) {
    _city = a.area_py;
    area_cn = a.area_cn;
    city_py = a.city_cn;
    city_cn = a.city_py;
  }, "", {
    provinceFlag: true
  })
} else {
  $.ajax({
    type: "post",
    url: "/zixun/cityOfFenZhan/",
    dataType: "json",
    success: function (a) {
      if ($.inArray(_city, a) > -1) {
        _city = CookiesInfo.get("ZXAPPLY_IP");
        $.ajax({
          type: "get",
          url: "/new_zhuangxiu/getCityPro",
          data: {
            area_flag: _city
          },
          dataType: "jsonp",
          success: function (b) {
            city_py = b.city_cn;
            area_cn = b.area_cn;
            city_cn = b.city_py
          }
        })
      } else {
        getCityFn(function (b) {
          _city = b.area_py;
          area_cn = b.area_cn;
          city_py = b.city_cn;
          city_cn = b.city_py;
        }, "", {
          provinceFlag: true
        })
      }
    }
  })
}
var articleFooterObj = {
  scrollTop: {
    body: 0,
    documentElement: 0,
    offset: 0
  },
  arr: [
    {
      'title': '0元户型设计',
      'tit': '专业设计师1对1服务 3份设计方案PK',
      'btn': '申请免费设计服务',
      'class': 'sheji'
    },
    {
      'title': '10秒获取装修报价',
      'tit': '给你专业、公正、透明的装修报价',
      'btn': '免费获取报价明细',
      'class': 'baojia'
    },
    {
      'title': '装修专享贷 0元拎包入住',
      'tit': '0利息 0手续费 无抵押 仅限100户',
      'btn': '月利率0.26%起限时申请',
      'class': 'mxd'
    },
    {
      'title': '全景VR设计',
      'tit': '根据户型 定制720 全景家装方案',
      'btn': '限时免费设计定制',
      'class': 'qjdz'
    }
  ],
  nowType: '',
  checkRadio(ele, context) {
    if (ele.checked) {
      $(ele).parents(context).find(".icon").removeClass("cur");
      $(ele).siblings(".icon").addClass("cur");
    } else {
      $(ele).siblings(".icon").removeClass("cur");
    }
  },
  applySignFn() {
    $(this.nowType + ' .footer-btn').click();
    $('.phone-agreement')[0].checked = false;
    $('.phone-agreement')[1].checked = false;
    $('.phone-agreement')[2].checked = false;
    $('.phone-agreement')[3].checked = false;
    $('.appagreement .icon,.agreement .icon').removeClass('cur');
  },
  createHtml: function (zb_url) {
    var str = '';
    str += '<aside class="fixed-footer">';
    str += '<div class="fixed-footer-box" id="j-get-mobile">';
    str += '<a class="item" href="javascript:;" tjjj="click_m_tuku_list_tonglan_sj">';
    str += '<i class="icon pos1"></i>';
    str += '<p class="txt">免费设计</p>';
    str += '</a>';
    str += '<a class="item" href="javascript:;" tjjj="click_m_tuku_list_tonglan_bj">';
    str += '<i class="icon pos2"></i>';
    str += '<p class="txt">智能报价</p>';
    str += '</a>';
    // str += '<a class="hb-wrap footer_xrhb" href="javascript:;" tjjj="click_m_tuku_list_tonglan_hb">';
    // str += '</a>';

    if (!(window.location.href.indexOf('zixun/jxwd') > -1)) {
      str += '<a class="item" href="javascript:;" tjjj="click_m_tuku_list_tonglan_dk">';
      str += '<i class="icon pos3"></i>';
      str += '<p class="txt">装修分期</p>';
      str += '</a>';
    }
    str += '<a class="item" href="javascript:;" tjjj="click_m_tuku_list_tonglan_vr">';
    str += '<i class="icon pos4"></i>';
    str += '<p class="txt">全景定制</p>';
    str += '</a>';
    str += '</div>';
    str += '</aside>';

    str += '<div class="fixed-footer-pop">';

    str += '<div class="fixed-footer-pop-box baojia">';
    str += '<div class="topimg"></div>';
    str += '<em class="close"></em>';
    str += '<div class="pop-box">';
    str += '<dl class="form-dl form-area">';
    str += '<dt class="form-dt">房屋面积</dt>';
    str += '<dd class="form-dd area">';
    str += '<input type="tel" class="form-input area" placeholder="80" maxlength="6" />';
    str += '<em>m&sup2;</em>';
    str += '</dd>';
    str += '</dl>';
    str += '<dl class="form-dl">';
    str += '<dt class="form-dt">联系方式</dt>';
    str += '<dd class="form-dd">';
    str += '<input type="tel" class="form-input phone" placeholder="请输入您的手机号" maxlength="11" />';
    str += '</dd>';
    str += '</dl>';
    str += `<dl class="form-dl"><dt class="form-dt">姓名</dt><dd class="form-dd"><input type="text" class="form-input name" placeholder="请输入您的姓名" maxlength="11"></dd></dl>`
    str += '<div class="appagreement"><i class="icon"></i><input type="checkbox" id="headerAgree2" class="phone-agreement" name="header-agree"><label for="headerAgree2">我已阅读并同意</label><a href="/page/app/user_agreement.html">《齐家用户协议》</a><label for="headerAgree2">和</label><a href="/page/app/secret.html">《隐私政策》</a></div>';
    str += '<div class="btn-box">';
    str += '<a class="footer-btn submit-phone">免费获取报价明细</a>';
    str += '</div>';
    str += '</div>';
    str += '</div>';

    str += '</div>';
    $('body').append(str);
    TJJ.track({track: 'show_m_tuku_list_tonglan_sj'});
    TJJ.track({track: 'show_m_tuku_list_tonglan_bj'});
    TJJ.track({track: 'show_m_tuku_list_tonglan_hb'});
    TJJ.track({track: 'show_m_tuku_list_tonglan_dk'});
    TJJ.track({track: 'show_m_tuku_list_tonglan_vr'});
    articleFooterObj.clickHandle();
    // 回写登录用户的手机号
    window.phoneAutoFillFn(function (mobile) {
      $(".fixed-footer-pop-box .phone").val(mobile);
      $('.input-inter-mobile').val('');
    });
    // 获取手机号-天翼
    wapLoadScript('//mued2.jia.com/js/common/ty-get-mobile.js', function () {
      window.loadGetMobileFromTy();
    })
    var that = this;
    $(".phone-agreement").click(function () {
      that.checkRadio(this, ".appagreement");
    });
  },
  changeHtml: function (obj) {
    $('.fixed-footer-pop').find('.btn-box .footer-btn').html(obj.btn).parents('.fixed-footer-pop-box').attr('class', 'fixed-footer-pop-box ' + obj['class']).find('.title').html(obj.title).siblings('.tit').html('<span>' + obj.tit + '</span>');
    $('.fixed-footer').attr('class', 'fixed-footer ' + obj['class']);
  },
  clickHandle: function () {
    if (window.location.href.indexOf('zixun/jxwd') > -1) {
      articleFooterObj.arr = [
        {
          'title': '0元户型设计',
          'tit': '专业设计师1对1服务 3份设计方案PK',
          'btn': '申请免费设计服务',
          'class': 'sheji'
        },
        {
          'title': '10秒获取装修报价',
          'tit': '给你专业、公正、透明的装修报价',
          'btn': '免费获取报价明细',
          'class': 'baojia'
        },
        {
          'title': '全景VR设计',
          'tit': '根据户型 定制720 全景家装方案',
          'btn': '限时免费设计定制',
          'class': 'qjdz'
        }
      ]
    }
    $('.fixed-footer .item').click(function () {
      var index = $('.fixed-footer .item').index(this);
      window.message_type = $(this).text()
      // if(index==2){
      //     $('.form-name').show();
      //     $('.form-area').hide();
      // }else{
      //     $('.form-area').show();
      //     $('.form-name').hide();
      // }
      // articleFooterObj.changeHtml(articleFooterObj.arr[index]);
      var $tjj = $(this).attr('tjjj').split('click_')[1];
      $('.fixed-footer-pop-box').eq(index).find('.footer-btn').attr('_tjj', $tjj)
      if ($(this).hasClass('cur')) {
        articleFooterObj.hidepopmask();
        $(this).removeClass('cur');
        $('.fixed-footer-pop-box.baojia').removeClass('show');
        $('.fixed-footer').attr('class', 'fixed-footer');
      } else {
        if ($('.fixed-footer .item').hasClass('cur')) {
          $(this).addClass('cur').siblings().removeClass('cur');
          $('.fixed-footer-pop-box.baojia').removeClass('show');
          setTimeout(function () {
            $('.fixed-footer-pop-box.baojia').addClass('show')
          }, 10)
        } else {
          articleFooterObj.showpopmask();
          $(this).addClass('cur').siblings().removeClass('cur');
          $('.fixed-footer-pop-box.baojia').addClass('show')

        }

      }
    });
    $('.fixed-footer-pop .close,.fixed-footer .hb-wrap,.popmask').click(function () {
      if ($('.fixed-footer-pop-box').hasClass('show')) {
        articleFooterObj.hidepopmask();
      }
      $('.fixed-footer').attr('class', 'fixed-footer');
      $('.fixed-footer .item').removeClass('cur');
      $('.fixed-footer-pop,.fixed-footer-pop-box').removeClass('show');
      CookiesInfo.set("footerautoshow", "1", {"expires": .08, domain: "jia.com"});
    });
  },
  showpopmask: function () {
    if ($('.popmask').length == 0) {
      $('body').append('<div class="popmask"></div>');
    }
    //if( id != '461523'){
    articleFooterObj.scrollTop.body = document.body.scrollTop;
    articleFooterObj.scrollTop.documentElement = document.documentElement.scrollTop;
    articleFooterObj.scrollTop.offset = window.pageYOffset;
    document.documentElement.classList.add('no-scroll');
    $('.popmask').removeAttr('style').show();
    /*}else{
        $(".popmask").height($("body").height()).show();
    }*/
  },
  hidepopmask: function hidepopmask() {
    //if( id != '461523'){
    document.documentElement.classList.remove('no-scroll');
    if (typeof (document.body.scrollTo) === 'function') {
      document.body.scrollTo(0, articleFooterObj.scrollTop.body);
    }
    if (typeof (document.documentElement.scrollTo) === 'function') {
      document.documentElement.scrollTo(0, articleFooterObj.scrollTop.documentElement);
    }
    window.scrollTo(0, articleFooterObj.scrollTop.offset);
    //}
    $('.popmask').hide();
  },
  daikuanAjax: function () {

    /*username:测试
    mobile:13200000000
    city:city_py+area_cn
    house_areaflag:上海闸北
    areaflag_name:上海闸北
    source:免息贷M站
    inversion_point:免息贷M站
    tjjid2:2-1ojaduy79fdi2pay-1517559631736---1517559631736-1517559631736-1517561517292-1517561523694-11
    selfUrl://m.jia.com/daikuan/*/

  }
}


var autoFlag = false;

$(function () {
  articleFooterObj.createHtml('/qjzx/?Channel=m_xiangqing');
  // $.ajax({
  //     type: "get",
  //     url: "/zhibo/get_zhibo_api/",
  //     data: {
  //         zhibo_tv: "no"
  //     },
  //     success: function(msg) {
  //         console.log(msg.data.id);
  //         if (msg.data != "" && msg.data.id != undefined) {
  //             $('body').append('<div style="z-index: 98;bottom: 2rem;width: .4rem;height: .4rem;" class="online-service"><a tjjj="click_m_zixun_article_zbdl" href="/zhibo/live/'+msg.data.id+'?list_from=article"><img src="//tgi12.jia.com/127/518/27518754.png"></a><a style="position:absolute;width:.15rem;height:.15rem;background:url(//mued3.jia.com/image/mobile/toutiao/t-close.png) no-repeat;background-size:100%;right:-.12rem;top:-.1rem;cursor:pointer;" class="t-close" href="javascript:;"></a></div>')
  //         }else{
  //             $('body').append('<div style="z-index: 98;bottom: 2rem;width: .4rem;height: .4rem;" class="online-service"><a tjjj="click_m_zixun_article_zbdl" href="/zhibo/zhibo_list/?source=wzxqyzb"><img src="//tgi12.jia.com/127/518/27518754.png"></a><a style="position:absolute;width:.15rem;height:.15rem;background:url(//mued3.jia.com/image/mobile/toutiao/t-close.png) no-repeat;background-size:100%;right:-.12rem;top:-.1rem;cursor:pointer;" class="t-close" href="javascript:;"></a></div>')
  //         }
  //         TJJ.track({track:'show_m_zixun_article_zbdl'});
  //         $(".online-service .t-close").live("click",function(){
  //             $(".online-service").hide();
  //         })
  //     }
  // })
  $('body').append('<div class="agreement-popup-m" style="z-index:9998"><a href="javascript:;" class="close"></a><p class="title">温馨提示</p><p class="agreement-text">请阅读并同意<a href="/page/app/user_agreement.html">《齐家用户协议》</a>和<a href="/page/app/secret.html">《隐私政策》</a></p><a href="javascript:;" class="cancel-btn">取消</a><a href="javascript:;" class="agree-btn">同意并继续</a></div><div class="agreement-popmask" style="z-index:9997"></div>');
  $('.agreement-popup-m .close,.cancel-btn').click(function () {
    $('.agreement-popmask,.agreement-popup-m').hide();
  })
  $('.agreement-popmask').live('click', function () {
    $('.agreement-popmask,.agreement-popup-m').hide();
  })
  $('.agreement-popup-m .agree-btn').click(function () {
    $('.phone-agreement')[0].checked = true;
    $('.phone-agreement')[1].checked = true;
    $('.phone-agreement')[2].checked = true;
    $('.phone-agreement')[3].checked = true;
    $('.appagreement .icon,.agreement .icon').addClass('cur');
    $('.agreement-popmask,.agreement-popup-m').hide();
    articleFooterObj.applySignFn();
  })

  $('.submit-phone').click(function(){
    var _agreement = $("#headerAgree2")[0].checked;
    var mobile = $.trim($('.form-input.phone').val());
    var area = $.trim($('.form-input.area').val()) || '80';
    debugger
    if (mobile == "") {
      showMaskEditCom({
        text: "请输入您的手机号"
      })
    } else if (!commonPhoneReg.test(mobile)) {
      showMaskEditCom({
        text: "请输入正确的手机号"
      })
    } else if (_agreement != true) {
      $('.agreement-popup-m,.agreement-popmask').show();
      return false;
    } else {
      $(".loading-common").show();
      /*$.ajax({
        type: "get",
        url: "/new_zhuangxiu/AjaxSaveNewShopApplyNoCode",
        data: data,
        dataType: "json",
        success: function (data) {
          $(".loading-common").hide();
          if (data.status == 200) {
            //博若森报名成功不跳转
            if ($.inArray(_city, fuJian) > -1) {
              showMaskEditCom({
                text: "报名成功"
              });
            } else {
              location.href = url || '//m.jia.com/zixun/wanshanxinxi?type=app';
            }
          } else {
            showMaskEditCom({
              text: data.info
            });
            $(".loading-common").hide();
          }
        },
        complete: function () {
          $(".loading-common").hide();
        },
        error: function () {
          $(".loading-common").hide();
          showMaskEditCom({
            text: "系统繁忙，请稍后再试！"
          })
        }
      });*/
      $.ajax({
        url: "/anli/message",
        type: 'post',
        data: {
          message_type: window.message_type,
          area,
          phone: mobile,
          username: $('.form-input.name').val(),
        },
        dataType: 'json',
        success: function (msg) {
          $(".loading-common").hide();
          showMaskEditCom({
            text: "报名成功"
          });
        },
        error: function () {
          showMaskEditCom({text: '网络异常', duration: 1500});
          $('.loadmore,.loading-common').hide();
        }
      });
    }

  })
  function autoScrollFn() {
    if (CookiesInfo.get("footerautoshow") || autoFlag) {
      return false;
    }
    var scrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var eleTop = 0;
    if ($('.common-menu').length > 0) {
      eleTop = $('.common-menu').offset().top;
    } else if ($('.wx-banner').length > 0) {
      eleTop = $('.wx-banner').offset().top;
    }
    if (scrollTop >= eleTop - winHeight / 2) {
      autoFlag = true;
      //$('.fixed-footer .item').eq(1).trigger('click');
      !window.triggerXrhb && $('.fixed-footer .footer_xrhb').trigger('click');
    }
  }

  if (!/^\/zixun\/jxwd/.test(window.location.pathname)) {/*!(/baiduboxapp/i.test(UA)) &&*/
    /*autoScrollFn();
    $(window).on('scroll',autoScrollFn);*/
  }
});
