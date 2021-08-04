$(document).ready(function(){

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  $('.slideup').each(function(){

    console.log(this);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook:0.8
    })
    .setClassToggle(this,'show')
    .addTo(controller);

  });

  $(function() {
    var nav = $(".nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.addClass("shadow");
        } else {
            nav.removeClass("shadow");
        }
    });
  });


});
