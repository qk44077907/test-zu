//获取数据
function nextPageAjax() {
  loadNextFun.b = true;
  var pageNum = loadNextFun.page;//第几页，会加完一页+1;
  aj(pageNum);
}

function aj(page) {
  var label = $(".anli-tab-style.cur").text();
  $.ajax({
    url: "/anli/list",
    type: 'post',
    data: {
      style: window.curStyle,
      page: page
    },
    dataType: 'json',
    success: function (res) {
      if(res.data){
        let str = ''
        res.data.forEach(function (obj){
          let {
            area,
            designer_img,
            designer_name,
            index_pic,
            model,
            name,
            price,
            style
          } = obj;
          str += `        <li class="anli-img-item"><a href="//m.jia.com/zuimei/anli/detail-45193/" class="img-item-a">
          <div class="pic image-box">
            <div class="img-mask" style="display: none;"></div>
            <img class=""
                 src="${index_pic}">
          </div>
          <p class="d-title">${name}</p>
          <div class="info">
            <div class="photo"><img
              src="${designer_img}">
            </div>
            <div class="personal-info"><p class="style">${designer_name}</p>
              <p class="info-content">${style}</p></div>
          </div>
        </a></li>`
        })
        let html = $('.anli-img-ul').html()
        html += str
        $('.anli-img-ul').html(html)

      }


      $('.loadmore,.loading-common').hide();
      loadNextFun.b = false;
    },
    error: function () {
      showMaskEditCom({text: '网络异常', duration: 1500});
      $('.loadmore,.loading-common').hide();
      loadNextFun.b = false;
    }
  });
}

$(function () {
/*  if ($(".loading-common").length == 0) {
    $("body").append('<div class="loading-common"></div>');
  }
  $(".loading-common").show();*/

  $(".anli-tab-style").click(function () {

  })
  $('.swiper-wrapper li').click(function () {
    $(".loading-common").show();
    loadNextFun.page = 0;
    aj(loadNextFun.page);
    window.curStyle = $(this).text()
    $(this).addClass('swiper-slide-active').addClass('on').siblings().removeClass('swiper-slide-active').removeClass('on')
  })
});
