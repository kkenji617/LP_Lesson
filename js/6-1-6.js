$(function() {
  let tabs = $(".curriculum_tab li");
  $(".curriculum_tab li").on("click", function() {
    $(".curriculum_tab li.active").removeClass("active");
    $(this).addClass("active");
    $(".curriculum_content").removeClass("active").eq(tabs.index(this)).addClass("active");
  })
});

$(function() {
  let tabs = $(".course_tab li");
  $(".course_tab li").on("click", function() {
    $(".course_tab li.active").removeClass("active");
    $(this).addClass("active");
    $(".price_content").removeClass("active").eq(tabs.index(this)).addClass("active");
  })

  let MySlider = $('.slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。tureで自動。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示

  responsive: [
    {
    breakpoint: 1201,//モニターの横幅が960px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 770,//モニターの横幅が768px以下の見せ方
    settings: {
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
 ]
  });
});

$(function() {
  let ham = $('#js-hamburger');
  let nav = $('#js-nav');
  let link = $(".nav-items__item a");
  // const menu = $(".header__nav");
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  });

  link.on('click', function () { //ナビメニューのリンクをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  });  

  // menu.on('mouseleave', function () { //ナビメニューからカーソルが外れたら
    // ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    // nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  // });
});


  




