/**
 * www.to8to.com/yezhu/zxbj.php
 * www.to8to.com/yezhu/zxbjBD.php
 * www.to8to.com/yezhu/zxbj-cszy.php
 * 共用
 */
// 新逻辑
(function(jq, window) {
    var repeatFlag = false
    var formParentNode = jq('.calc-container-wrapper')
    var wegitFlag = false
    var username = getCookie('to8to_username');
    var urlObj = parseQuery();
    var resultModalObj = null
    // 记录上一次发标的值
    var preZbFormData = {
        city: undefined,
        phone: undefined,
        square: undefined
    }
    // 旧逻辑 -- start
    if (username) {
        jq('.zxbj_read_box').hide();
    }
    if (jq('#windbox').val() == 'boxhref') {
        wegitFlag = true;
    }
    // 旧逻辑 -- end
    init()
    function init() {
        initJumpPage()
        initProvinceSelect()
        changeNum(200)
        initEvent()
        initPtag()
    }

    // zxbj-cszy.php 导航栏超链接携带参数
    function initJumpPage() {
        var navItems = jq('.toolbar_header').find('.nav-item:not(.nav-item-logo)')
        var search = window.location.search
        if (navItems.length > 0 && search) {
            navItems.each(function(_,item) {
                var tmpHref = jq(item).attr('href')
                var tempSearch = search
                var tempSearch = tempSearch = tmpHref.indexOf('?') > -1 ? tempSearch.replace('?', '&') : tempSearch
                jq(item).attr('href', tmpHref + tempSearch)
            })
        }
    }

    function initProvinceSelect() {
        ProvincesSelect.initialize({
            targetDom:".calc-container-wrapper #city",
            parentDom:".calc-container-wrapper #city-box",
            needDefault:true,
            callback:function() {
                formParentNode.find('#city').siblings('.error-tips').addClass('hidden')
                try {
                    T8TTracker.send('webWidgetClick',{
                        widget_uid: 'select_location',
                        widget_title: jq('#city').val()
                    })
                } catch (error) {
                }
            }
        })
    }

    function initPtag() {
        if(typeof urlObj == 'object' && urlObj.ptag && urlObj.ptag != '') {
            jq("#myPtag").val(urlObj.ptag);
        }
        if (typeof urlObj == 'object' && urlObj.to8to_from && urlObj.to8to_from != '') {
            switch(urlObj.to8to_from) {
                case '11_1_3':
                    jq("#myPtag").val('1_22_11_1264');
                    break;
                case '58tongcheng1':
                    jq("#myPtag").val('1_22_11_1265');
                    break;
                case '58tongcheng5':
                    jq("#myPtag").val('1_22_11_1266');
                    break;
                case '11_1_2':
                    jq("#myPtag").val('1_22_11_1267');
                    break;
                case '11_1_1':
                    jq("#myPtag").val('1_22_11_1268');
                    break;
                case '58tongcheng3':
                    jq("#myPtag").val('1_22_11_1269');
                    break;
                case '58tongcheng6':
                    jq("#myPtag").val('1_22_11_1270');
                    break;
                case '58tongcheng2':
                    jq("#myPtag").val('1_22_11_1271');
                    break;
                case '58tongcheng7':
                    jq("#myPtag").val('1_22_11_1272');
                    break;
                case '58tongcheng':
                    jq("#myPtag").val('1_22_11_1273');
                    break;
                default:
                    break;
            }
        };
    }

    /*
    * 产生固定范围的随机数
    */
    function rangeRandom(minnum, maxnum) {
        return Math.floor(minnum + Math.random() * (maxnum - minnum + 1));
    }
    /*
    * time 更改间歇时间
    */
    function initEvent() {
        formParentNode.on('blur','#new_phone',function() {
            var val = jq(this).val()
            if (val && val.length === 11) {
                jq(this).siblings('.error-tips').addClass('hidden')
                try {
                    T8TTracker.send('webWidgetClick', {
                        widget_uid: 'input_phone_num',
                        widget_title: RSAUtilszb.encryptfun(val + ',' + (Math.ceil(Math.random() * 10)) + ',' + Math.random())
                    })
                } catch (error) {

                }
            }
        })

        formParentNode.on('click', '.ico-clause', function() {
            jq(this).toggleClass('clause-active');
        })

        formParentNode.on('blur', '#area', function() {
            if (jq(this).val()) {
                jq(this).siblings('.error-tips').addClass('hidden')
            }
        })

        formParentNode.on('click','#js_submit_btn', function () {
            var ptag = formParentNode.find('input[name="ptag"]').val()
            // 百度统计函数
            if (typeof _hmt == "object") {
                _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }
            if (repeatFlag) return

            var cityInputNode = formParentNode.find('#city'),
                phoneInputNode = formParentNode.find('#new_phone'),
                cityInfo = cityInputNode.val().split(' '),
                phoneVal = phoneInputNode.val(),
                city = cityInfo[1],
                square = formParentNode.find('#area').val();
            // 如果发标前一次的值一样，直接展示原来的弹框，否则走发标
            if (preZbFormData.city && preZbFormData.phone && preZbFormData.square) {
                if (preZbFormData.city === city && preZbFormData.phone === phoneVal && preZbFormData.square === square) {
                    resultModalObj && resultModalObj.show(true)
                    return
                }
            }
            if (!checkZbForm(cityInfo, phoneVal, square)) return

            if (!formParentNode.find('.ico-clause').hasClass('clause-active')) {
                showPrivacyConfirm(true, {
                    okCb: function() {
                        formParentNode.find('.ico-clause').addClass('clause-active')
                        handleSubmit()
                    }
                })
            } else {
                handleSubmit()
            }
        })
    }

    function handleSubmit() {
        repeatFlag = true
        // 以前的旧逻辑 -- start
        var curPtag = ''
        if(typeof urlObj == 'object' && urlObj.ptag && urlObj.ptag != '') {
            curPtag = urlObj.ptag
        }
        if (!username && !wegitFlag) {
            if (jq('#myPtag').val() == "1_4_7_1") {
                jq('#myPtag').val(curPtag || '1_4_2_3');
                (typeof clickStream !== 'undefined') && clickStream.getCvParams("1_4_2_3");
            }
        } else {
            jq('#myPtag').val(curPtag || '1_4_7_1');
        }
        (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_4_19_423');
        // 以前的旧逻辑 -- end

        var ajaxUrl =  'https://to8tozb.to8to.com/zb/zb.php'
        submitZbAjax(ajaxUrl, handleZbSuccessed)
    }

    function handleZbSuccessed(res, rsadata) {
        try {
            T8TTracker.send('submit', {})
        } catch (error) {
        }
        if (res.status !== 1 && res.status !== 5) {
            repeatFlag = false
            return alert('服务器异常,请稍后重试')
        }
        if (res && res.data) {
                var incWechatCode = formParentNode.find('#js_submit_btn').data('inc_wechat_code')
                var fromPage = formParentNode.find('#js_submit_btn').data('curr_page')
                jq.ajax({
                    type: "POST",
                    url: '//apigw.to8to.com/cgi/mps/get/qrcode',
                    dataType: "json",
                    data: JSON.stringify({
                        cityId: res.data.cityId,
                        secretPhoneNumber: encodeURIComponent(RSAUtilszb.encryptfun(formParentNode.find('#new_phone').val()+','+(Math.ceil(Math.random()*10))+','+Math.random())),
                        incWechatCode: incWechatCode,
                        isDynamic: 1,
                        scene: 2,
                        dataSource: 8
                    }),
                    success: function(qres) {
                        resultModalObj = new ResultModal({
                            resData: res.data,
                            wxImg: qres.result.qrcode,
                            incWechatCode: incWechatCode,
                            templateNum: fromPage === 'zxbj-cszy' ? 1 : 2
                        })
                        resultModalObj.show(true)
                    },
                    error: function(res){}
                })
        }
        repeatFlag = false
    }

    function submitZbAjax(ajaxUrl,cb) {
        // 获取当前ptag
        var ptag = formParentNode.find('input[name="ptag"]').val(),
            cityInfo = formParentNode.find('#city').val(),
            cityArr = cityInfo.split(' '),
            phone = formParentNode.find('#new_phone').val(),
            square = formParentNode.find('#area').val(),
            uuid = CreateGuid(),
            enc = jq.md5(uuid + phone),
            rsadata = encodeURIComponent(RSAUtilszb.encryptfun(phone + ',' + (Math.ceil(Math.random() * 10)) + ',' + Math.random())),
            notSendMobileMsg = jq('#not_send_mobile_msg').val() === '0' ? 0 : 1
            sendData = {
                modeltype: 13,
                apply_type: 31,
                method:'baojiaZb',
                shen: cityArr[0] || '',
                city: cityArr[1] || '',
                town: cityArr[2] || '',
                ptag: ptag,
                square: square,
                not_send_mobile_msg: notSendMobileMsg,
                rsadata: rsadata,
                phoneurlencode: 1,
                rsastatus: 1,
                uuid: uuid,
                enc : enc,
                pro_sourceid: '101',
                pro_s_sourceid: '101',
                from_type: 1,
                to8to_from: urlObj.to8to_from || '',
                subpage: encodeURIComponent(window.location.href)
            };

            jq.ajax({
                type: "GET",
                url: ajaxUrl,
                dataType: "jsonp",
                data: sendData,
                success: function (ret) {
                    // 发标后记录值
                    preZbFormData.city = cityArr[1]
                    preZbFormData.phone = phone
                    preZbFormData.square = square
                    repeotReport(phone, cityArr[1])
                    if(cb) { cb(ret, rsadata) }
                },
                error: function() {
                    setTimeout(function() {
                        repeatFlag = false
                    }, 1000)
                },
                complete: function() {
                    showPrivacyConfirm(false)
                }
            });
    }

    function repeotReport(phone,city) {
        // 今日头条上报部分
        if (window.toutiaoReport && typeof toutiaoReport === 'function') {
            try {
                toutiaoReport(phone, city)
            } catch (e) {
            }
        }

        // 快手上报部分
        if (window.kuaishouReport && typeof kuaishouReport === 'function') {
            try {
                kuaishouReport()
            } catch (e) {
            }
        }

        // 凤凰上报部分
        if (window.fengHuangReport && typeof fengHuangReport === 'function') {
            try {
                fengHuangReport()
            } catch (e) {
            }
        }

        // 搜狐上报
        if (window.souhuReport && typeof souhuReport === 'function') {
            try {
                souhuReport(phone);
            } catch (e) {
            }
        }

        // UC上报
        if (window.ucReport && typeof ucReport === 'function') {
            try {
                ucReport();
            } catch (e) {
            }
        }

        // 兴吾通上报
        if (window.xingwtReport && typeof xingwtReport === 'function') {
            try {
                xingwtReport(phone);
            } catch (e) {
            }
        }

        // 豆盟上报部分
        if (window.doumengReport && typeof doumengReport === 'function') {
            try {
                doumengReport();
            } catch (e) {
            }
        }

        // 广点通上报
        if (window.widePointReport && typeof widePointReport === 'function') {
            try {
                widePointReport()
            } catch (e) {
            }
        }

        // 百度信息流非API上报
        if (window.baiduReport && typeof baiduReport === 'function') {
            try {
                baiduReport()
            } catch (e) {
            }
        }


        // 百度信息流API上报
        if (window.baiduApiReport && typeof baiduApiReport === 'function') {
            try {
                baiduApiReport(phone)
            } catch (e) {
            }
        }

        // 百度搜索API上报
        if (window.baiduSearchReport && typeof baiduSearchReport === 'function') {
            try {
                baiduSearchReport()
            } catch (e) {
            }
        }

        /*搜狗搜索API上报*/
        if (window.sogouReport && typeof sogouReport === 'function') {
            try {
                sogouReport();
            } catch (e) {
            }
        }

        /*shenmaAPI上报*/
        if (window.shenmaReport && typeof shenmaReport === 'function') {
            try {
                shenmaReport();
            } catch (e) {
            }
        }

        /*360API上报*/
        if (window.soReport && typeof soReport === 'function') {
            try {
                soReport(phone);
            } catch (e) {
            }
        }

        /*xmobAPI上报*/
        if (window.xmobReport && typeof xmobReport === 'function') {
            try {
                xmobReport(phone);
            } catch (e) {
            }
        }

        // sina 扶翼 API上报
        if (window.sinaFuyiReport && typeof sinaFuyiReport === 'function') {
            try {
                sinaFuyiReport(phone);
            } catch (e) {
            }
        }

        if (window.channelReport && typeof channelReport === 'function' && city) {
            // channelReport()
            if (typeof setCookie === 'function') {
                setCookie('already_fabiao', city, 1296000000)
            }
        }
    }

    function CreateGuid () {
        for (var a = "", c = 1; 32 >= c; c++) {
            var b = Math.floor(16 * Math.random()).toString(16),
                a = a + b;
            if (8 == c || 12 == c || 16 == c || 20 == c) a += ""
        }
        return  a += Math.ceil(1E6 * Math.random());
    }

    function checkZbForm(cityInfo, phoneVal, square) {
        var cityInputNode = formParentNode.find('#city'),
            phoneInputNode = formParentNode.find('#new_phone'),
            squareInputNode = formParentNode.find('#area'),
            telRegexp = /^(1[3456789])[\d]{9}$/

        if (!(cityInfo.length > 1)) {
            cityInputNode.siblings('.error-tips').removeClass('hidden')
            return false
        }
        if (!square) {
            squareInputNode.siblings('.error-tips').text('请输入您的房屋面积㎡').removeClass('hidden')
            return false
        }

        if ((square < 5 && square >= 0) || (square > 999)) {
            squareInputNode.siblings('.error-tips').text('房屋面积必须在5-999范围').removeClass('hidden')
            return false;
        }

        if (!phoneVal) {
            phoneInputNode.siblings('.error-tips').text('您还未填手机号码').removeClass('hidden')
            return false
        }

        if (!telRegexp.test(phoneVal)) {
            phoneInputNode.siblings('.error-tips').text('请填写正确的手机号码').removeClass('hidden')
            return false
        }

        return true
    }

    // 参数

  function parseQuery(url) {
        var url = url || location.href;
        var query = url ? (url.split('?')[1] || '') : location.search;
        var queryList = query.substr(0).split('&');
        var parseRes = {};
        var flag = '#';

        if (queryList.length > 0) {
            for (var i = 0; i < queryList.length; i++) {
                var kv = queryList[i].split('=');
                parseRes[kv[0]] = decodeURIComponent(kv[1]).split('#')[0];
            }
        }
        return parseRes;
    }
    function showPrivacyConfirm(isShow, config) {
        var defaultConfig = {
            btnBackcolor: '#00C97C',
            btnColor: '#fff',
            okCb: undefined,
            cancelCb: undefined
        }
        config = jq.extend(defaultConfig, config)
        if (isShow) {
            var html = '<div class="privacy-confirm">' +
                '<div class="privacy-confirm-mask">' +
                '</div>' +
                '<div class="privacy-content">' +
                    '<p>' +
                        '请同意并接受<a class="agree-link" target="_blank" href="https://www.to8to.com/about/noticedetail.html?id=27">《隐私政策》</a><a class="agree-link" target="_blank" href="https://www.to8to.com/about/noticedetail.html?id=26">《服务条款》</a>' +
                    '</p>' +
                    '<div class="footer-wrapper">' +
                        '<a href="javascript:;" class="js-dis-agree">不同意</a>' +
                        '<a href="javascript:;" class="js-agree">同意</a>' +
                    '</div>' +
                '</div>' +
            '</div>'
            jq(html).appendTo(".calc-container-wrapper");

            var $privacyDom = jq('.calc-container-wrapper .privacy-confirm')

            // 点击同意
            $privacyDom.on('click', '.js-agree', function () {
                if (config.okCb) {
                    config.okCb()
                }
            })

            // 点击不同意
            $privacyDom.on('click', '.js-dis-agree', function () {
                if (config.cancelCb) {
                    config.cancelCb()
                }
                $privacyDom.remove()
            })
        } else {
            jq('.calc-container-wrapper .privacy-confirm').remove()
        }
    }

    function ResultModal(opts) {
        this.resData = opts.resData;
        this.templateNum = opts.templateNum || 2
        this.priceInfo = this.resData.priceInfo || {}
        this.incWechatCode = opts.incWechatCode || 'PSBJ033'
        this.wxImg = opts.wxImg
        this.initView()
        this.initEvent()
    }

    ResultModal.prototype = {
        initView: function() {
            jq('.bp-rs-layer').remove()
            var money = this.priceInfo['2']
            var mainPrice = this.formatMoney(money.totalPrice - money.otherPrice - money.manualPrice);
            var data = {
                mainPrice: mainPrice,
                money: money,
                wxImg: this.wxImg
            }
            var tmp = '<div class="bp-rs-layer">' +
                        '<div class="bp-rs-mask"></div>' +
                            this.getModalTemplate(this.templateNum, data)
                        '</div>';
            jq('body').append(tmp)
        },
        getModalTemplate(tmpNum, data) {
            var tmp = ''
            if (tmpNum === 1) {
                tmp = '<div class="bp-rs-body">' +
                            '<i class="bpr-close"></i>' +
                            '<div class="bp-rs-content clearfix">' +
                                '<div class="bp-rs-content-left">' +
                                    '<img class="bprscl-spokesman" src="https://img.to8to.com/to8to_img/zxbj/zxbj_pc/result-bg.png?20220310" alt="代言人">' +
                                    '<div class="bprscl-result-wrapper">' +
                                        '<h2 class="bprscl-rw-title">您的装修预算<em>'+ data.money.totalPrice +'</em>元</h2>' +
                                        '<div class="bprscl-rw-detail">' +
                                            this.genDetailPrice(data.money) +
                                        '</div>' +
                                    '</div>'+
                                '</div>' +
                                '<div class="bp-rs-content-right">' +
                                    '<h2 class="bprscr-title">报价看不懂？</h2>' +
                                    '<p class="bprscr-sub-title">免费领《102项本地报价清单手册》</p>' +
                                    '<div class="bprscr-ewm">' +
                                        '<img src="' + data.wxImg +'" alt="加微二维码">' +
                                    '</div>' +
                                    '<div class="bprscr-desc">扫一扫加顾问微信领取</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            } else if (tmpNum === 2) {
                tmp = '<div class="bp-rs-body">' +
                            '<i class="bpr-close"></i>' +
                            '<div class="bpr-left">' +
                                '<div class="bpr-header"><span class="bpr-big">免费在线报价</h4><span class="bpr-small">仅需<em>3秒</em>轻松获取报价明细</span></div>' +
                                '<div class="bpl-c">' +
                                    '<p>您的装修预算<span>'+ data.money.totalPrice +'</span>元</p>' +
                                    '<div class="bpl-cd"><span>人工/辅材：'+ this.formatMoney(data.money.manualPrice) +'万</span><span class="mid">主材：'+ data.mainPrice +'万</span><span>其他：'+ this.formatMoney(data.money.otherPrice) +'万</span></div>' +
                                '</div>' +
                                '<p class="bpr-tips">因选择的材料品牌、施工工艺及实际工程量不同，报价会有差异， 具体报价还以设计师上门实地量房后计算的报价为准。</p>' +
                            '</div>' +
                            '<div class="bpr-right">' +
                                '<h2>担心价格混乱？</h2>' +
                                '<div class="bpr-right-tips">' +
                                    '<p>微信扫码,领取本地人工费用指导手册</p>' +
                                '</div>' +
                                '<img class="ewm-code" src="'+ data.wxImg +'" alt="ewm">' +
                            '</div>' +
                        '</div>'
            }
            return tmp
        },
        genDetailPrice(money) {
            money = money || {}
            var detailMoney = money.detail || []
            var html = ''
            for (var i = 0; i <detailMoney.length; i++) {
                var priceListDom = '<div class="bprscl-rwdd-item">' +
                                        '<h3 class="bprscl-rwd-title">'+ detailMoney[i].title +'：<em><span>' + this.formatMoney(detailMoney[i].price) + '万</span> <i class="i-down"></i> </em> </h3>' +
                                        '<div class="bprscl-rwd-list hidden">' +
                                            this.getDetailPriceItemList(detailMoney[i].list) +
                                        '</div>' +
                                    '</div>'
                html += priceListDom
            }
            return html
        },
        getDetailPriceItemList(list) {
            list = list || []
            var priceItemList = ''
            for (var j = 0; j < list.length; j++) {
                priceItemList += '<p class="bprscl-rwdl-item"><span>' + list[j].title + '</span><span class="bprscl-rwdl-item-price">' + list[j].price + '元</span></p>'
            }
            return priceItemList
        },
        show: function(isShow) {
            if (isShow) {
                setTimeout(function() {
                    jq('.bp-rs-layer').addClass('active')
                }, 200)
            } else {
                jq('.bp-rs-layer').removeClass('active')
            }
        },
        initEvent: function() {
            var _self = this
            jq('.bp-rs-layer').on('click', '.bpr-close', function() {
                if (_self.templateNum === 1) {
                    jq('.bp-rs-body .bpr-content,.bpr-cotent-spokesman').removeClass('hidden')
                    jq('.bp-rs-body .bpr-detail-price').addClass('hidden')
                }
                _self.show(false)
            })
            jq('.bp-rs-layer').on('click', '.js-show-detail', function() {
                jq('.bp-rs-body .bpr-content,.bpr-cotent-spokesman').addClass('hidden')
                jq('.bp-rs-body .bpr-detail-price').removeClass('hidden')
            })
            jq('.bp-rs-layer').on('click', '.bprscl-rwd-title', function() {
                jq(this).siblings('.bprscl-rwd-list').toggleClass('hidden')
                jq(this).find('.i-down').toggleClass('active')
            })
        },
        // 格式化金额
        formatMoney: function(money) {
            var result = Math.floor((money / 10000) * 10) / 10
            return this.avg(result)
        },
        // 保留一位小数
        avg: function(num) {
            var result = String(num)
            result = result.indexOf('.') !== -1 ? result : (result + '.0')
            return result
        }
    }


})(jQuery, window)
function changeNum(time) {
  var clf,
    rgf,
    sjf,
    zjf,
    zbj;
  var number_time = setInterval(function() {
    clf = rangeRandom(10000, 99999);
    rgf = rangeRandom(10000, 99999);
    sjf = rangeRandom(1000, 10000);
    zjf = rangeRandom(500, 5000);
    zbj = clf + rgf + sjf + zjf;
    jq('.js-flow-num').text(zbj);
    jq('.materialPay em').text(clf);
    jq('.artificialPay em').text(rgf);
    jq('.designPay em').text(sjf);
    jq('.qualityPay em').text(zjf);
  }, time);
}
