'use strict';

$(function(){

// ローディング同日2回目から表示させない
//同じ日付で2回目以降ならローディング画面非表示の設定

let loading_item = $.cookie('accessdate'); 
let myD = new Date();//日付データを取得
let myYear = String(myD.getFullYear());//年
let myMonth = String(myD.getMonth() + 1);//月
let myDate = String(myD.getDate());//日
    
//cookieデータとアクセスした日付を比較
  //アクセスした日と今の日時が違う=表示
  if (loading_item != myYear + myMonth + myDate) {
    // ローでイング画面表示&プログレスバーを発動
    $("#loading").css("display", "block");
    $("#progress_text").css("transition",'2.5s')
    $("#progress_text").width("100%")

    setTimeout(function () {
      $("#loading_logo").fadeIn(1000, function () {
          setTimeout(function () {
            $("#loading_logo").fadeOut(1000);
          }, 1000);//1000ミリ秒（1秒）後に処理を実行

          setTimeout(function () {
              $("#loading").fadeOut(1000, function () {
                let myD = new Date();
                let myYear = String(myD.getFullYear());
                let myMonth = String(myD.getMonth() + 1);
                let myDate = String(myD.getDate());
                $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
              });
          }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
      });
    }, 1000);//1000ミリ秒（1秒）後に処理を実行

//同日2回目のアクセスは非表示
}else {
    $("#loading").css("display", "none");
} 






// STORY　各話のフェードインアウト
// タブにtabSwitch関数を付与する
const tabs = document.getElementsByClassName('arasuji_each');
for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch, false);
}

// タブをクリックすると実行する関数
function tabSwitch(){
  // タブのclassの値を変更
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');
  // コンテンツのclassの値を変更
  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('story_each')[index].classList.add('is-show');
};

// Slick Galleryで使用
$('.slider_thumb').slick({
  arrows:false,
  asNavFor:'.thumb',
});
$('.thumb').slick({
  asNavFor:'.slider_thumb',
  focusOnSelect: true,
  slidesToShow:4,
  slidesToScroll:1
}); 



// SNS追従ボタン scroll_effect  
$(window).scroll(function () {
  let scrollAnimationElm = document.querySelectorAll('.sns_scroll_up');
  let scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      let triggerMargin = 500;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
})

// TOPへ戻るボタン scroll_effect
let topBtn=$('#scroll_top');
topBtn.hide();
  
$(window).scroll(function(){
  if($(this).scrollTop()>500){
    topBtn.fadeIn();
  }else{
    topBtn.fadeOut();
  }
});



})/* /jQuery */
